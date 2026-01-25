import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-pinkDark focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-700",
    secondary:
      "bg-accent-pink text-neutral-900 hover:bg-accent-pinkDark active:bg-accent-pinkDark",
    outline:
      "border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white",
    ghost: "text-neutral-900 hover:bg-neutral-100 active:bg-neutral-200",
  };

  const sizes = {
    sm: "text-sm px-4 py-2 min-h-[36px]",
    md: "text-base px-6 py-3 min-h-[44px]", // Touch-friendly
    lg: "text-lg px-8 py-4 min-h-[48px]",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
