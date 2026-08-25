/**
 * Fixed backdrop of three large, blurred gradient blobs that slowly
 * drift and breathe behind the glass panels — the "aurora" the
 * whole theme is named after. Pure CSS animation (see blobDrift in
 * index.css) so it's cheap and respects prefers-reduced-motion.
 */
export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-bg" aria-hidden="true">
      <div
        className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full opacity-40 blur-[110px]"
        style={{
          background: "radial-gradient(circle, #8b5cf6, transparent 70%)",
          animation: "blobDrift 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full opacity-35 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #ec4899, transparent 70%)",
          animation: "blobDrift 26s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute -bottom-52 left-1/4 h-[500px] w-[500px] rounded-full opacity-30 blur-[110px]"
        style={{
          background: "radial-gradient(circle, #22d3ee, transparent 70%)",
          animation: "blobDrift 30s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, transparent, #1a1533 85%)" }}
      />
    </div>
  );
}
