"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const isChunkLoadError =
    error.message?.includes("Loading chunk") ||
    error.message?.includes("ChunkLoadError");

  if (isChunkLoadError) {
    return (
      <html lang="en">
        <body>
          <div className="min-h-screen flex items-center justify-center bg-[#faf8f4]">
            <div className="text-center p-8">
              <h2 className="text-xl font-semibold mb-4">
                A new version is available
              </h2>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-neutral-900 text-white rounded hover:bg-neutral-700"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-[#faf8f4]">
          <div className="text-center p-8">
            <h2 className="text-xl font-semibold mb-4">Something went wrong</h2>
            <button
              onClick={() => reset()}
              className="px-4 py-2 bg-neutral-900 text-white rounded hover:bg-neutral-700"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}