import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { achievements } from "../data/siteData";
import Reveal from "./Reveal";

export default function Achievements() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="achievements" className="relative px-[6%] py-28 md:px-[8%]">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="eyebrow mb-3">Recognition</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Achievements &amp; <span className="aurora-text">activities</span>
          </h2>
        </Reveal>

        <div ref={containerRef} className="relative mt-16 pl-10 sm:pl-0">
          {/* Track line */}
          <div className="absolute top-0 bottom-0 left-3 w-[2px] bg-line sm:left-1/2 sm:-translate-x-1/2" />
          {/* Filled line, grows with scroll */}
          <motion.div
            className="absolute top-0 left-3 w-[2px] sm:left-1/2 sm:-translate-x-1/2"
            style={{
              height: lineHeight,
              background: "linear-gradient(180deg, #8b5cf6, #ec4899, #22d3ee)",
            }}
          />

          <div className="flex flex-col gap-10 sm:gap-14">
            {achievements.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={item.title}
                  className={`relative sm:flex sm:items-center ${
                    isLeft ? "sm:justify-start" : "sm:justify-end"
                  }`}
                >
                  <span className="absolute top-1.5 -left-10 h-3.5 w-3.5 rounded-full border-2 border-violet bg-bg sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2" />

                  <Reveal
                    delay={0.1}
                    className="glass glow-ring w-full p-6 sm:w-[calc(50%-2.5rem)]"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="rounded-full border border-ok/30 bg-ok/10 px-2.5 py-1 font-mono text-[11px] font-medium text-ok">
                        AC
                      </span>
                      {item.stat && (
                        <span className="font-mono text-sm text-fuchsia">
                          {item.stat}
                          <span className="ml-1.5 text-xs text-ink-faint">{item.statLabel}</span>
                        </span>
                      )}
                    </div>
                    <h3 className="font-display mt-3 text-base font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
