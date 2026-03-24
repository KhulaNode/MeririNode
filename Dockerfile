# ─────────────────────────────────────────────
# Stage 1 – deps
# Install production + dev dependencies
# ─────────────────────────────────────────────
FROM node:22-alpine AS deps

WORKDIR /app

# Install libc compat for native modules on Alpine
RUN apk add --no-cache libc6-compat

COPY package*.json ./
RUN npm ci

# ─────────────────────────────────────────────
# Stage 2 – builder
# Build the Next.js app with standalone output
# ─────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build-time public env vars (injected by docker-compose / CI)
ARG NEXT_PUBLIC_YOCO_PUBLIC_KEY
ENV NEXT_PUBLIC_YOCO_PUBLIC_KEY=$NEXT_PUBLIC_YOCO_PUBLIC_KEY

RUN npm run build

# ─────────────────────────────────────────────
# Stage 3 – runner
# Minimal production image (~200 MB vs ~1 GB)
# ─────────────────────────────────────────────
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Copy only what Next.js standalone output needs
COPY --from=builder /app/public          ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static     ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
