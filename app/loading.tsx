export default function Loading() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-neutral-300 border-t-neutral-900"></div>
        <p className="text-neutral-600">Loading...</p>
      </div>
    </div>
  );
}
