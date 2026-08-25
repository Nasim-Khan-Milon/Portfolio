import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education, additionalInfo } from "../data/siteData";
import Reveal from "./Reveal";

const RADIUS = 42;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function Education() {
  const ringRef = useRef(null);
  const inView = useInView(ringRef, { once: true, amount: 0.6 });
  const pct = education.cgpaValue / education.cgpaMax;

  return (
    <section id="education" className="relative px-[6%] py-28 md:px-[8%]">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="eyebrow mb-3">Academic background</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            <span className="aurora-text">Education</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass glow-ring mt-12 flex flex-col items-center gap-8 p-8 sm:flex-row sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-violet">
                <GraduationCap size={22} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{education.degree}</h3>
                <p className="mt-1 text-sm text-ink-muted">{education.institute}</p>
                <p className="mt-1 font-mono text-xs text-ink-faint">{education.duration}</p>
              </div>
            </div>

            <div ref={ringRef} className="relative shrink-0">
              <svg width="110" height="110" viewBox="0 0 110 110" className="-rotate-90">
                <circle
                  cx="55"
                  cy="55"
                  r={RADIUS}
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="55"
                  cy="55"
                  r={RADIUS}
                  fill="none"
                  stroke="url(#cgpaGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  initial={{ strokeDashoffset: CIRCUMFERENCE }}
                  animate={{
                    strokeDashoffset: inView ? CIRCUMFERENCE * (1 - pct) : CIRCUMFERENCE,
                  }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                />
                <defs>
                  <linearGradient id="cgpaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-xl font-bold aurora-text">
                  {education.cgpaValue.toFixed(2)}
                </span>
                <span className="font-mono text-[10px] text-ink-faint">
                  / {education.cgpaMax.toFixed(2)} CGPA
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal delay={0.15}>
            <div className="glass glow-ring h-full p-6">
              <h4 className="mb-3 font-mono text-xs tracking-wide text-fuchsia uppercase">
                Languages
              </h4>
              <p className="text-sm text-ink-muted">{additionalInfo.languages.join(" · ")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="glass glow-ring h-full p-6">
              <h4 className="mb-3 font-mono text-xs tracking-wide text-fuchsia uppercase">
                Interests
              </h4>
              <p className="text-sm text-ink-muted">{additionalInfo.interests.join(" · ")}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
