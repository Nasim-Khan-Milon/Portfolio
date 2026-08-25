import { useEffect, useState } from "react";

/**
 * A thin progress bar tracking how far through the page the reader is.
 * This is the page's signature device: the whole site reads like a
 * build log / spec sheet, and this is its progress indicator — a
 * functional echo of a CI run or a document's read-progress, not a
 * decorative flourish.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[60] h-[2px] w-full bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #8b5cf6, #ec4899, #22d3ee)",
        }}
      />
    </div>
  );
}
