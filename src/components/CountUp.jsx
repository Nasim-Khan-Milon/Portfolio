import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Animates a numeric value counting up from 0 once it scrolls into
 * view. `value` should be the numeric portion; `suffix`/`prefix` are
 * rendered as static text around it (e.g. suffix="+").
 */
export default function CountUp({ value, duration = 1400, suffix = "", prefix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    let frame;

    const tick = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
