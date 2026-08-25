import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { ArrowDown } from "lucide-react";
import { profile } from "../data/siteData";
import profileImg from "../assets/profile.jpeg";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: profile.typingStrings,
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1300,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col-reverse items-center justify-center gap-16 px-[6%] pt-40 pb-24 md:flex-row md:justify-between md:px-[8%] md:pt-0 md:pb-0"
    >
      <div className="max-w-xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow glass mb-6 inline-flex items-center gap-2 px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ok" />
          Available for internship &amp; full-time roles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[2.6rem] leading-[1.08] font-bold sm:text-6xl"
        >
          Hi, I&apos;m{" "}
          <span className="aurora-text">{profile.name}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-4 flex min-h-8 items-center gap-2 text-xl font-medium text-ink-muted sm:text-2xl"
        >
          <span ref={typedRef} className="aurora-text" />
          <span className="h-6 w-[2px] animate-pulse bg-fuchsia" aria-hidden="true" />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.46 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a href="#projects" className="btn-primary rounded-full px-7 py-3 font-medium">
            View my work
          </a>
          <a
            href="#contact"
            className="glass rounded-full px-7 py-3 font-medium text-ink transition hover:border-line-strong"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative shrink-0"
      >
        <div
          className="absolute -inset-3 rounded-full opacity-90"
          style={{
            background:
              "conic-gradient(from 0deg, #8b5cf6, #ec4899, #22d3ee, #8b5cf6)",
            animation: "spinSlow 10s linear infinite",
          }}
        />
        <div className="relative rounded-full bg-bg p-1.5">
          <img
            src={profileImg}
            alt={profile.name}
            className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72"
          />
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="glass absolute -bottom-4 -left-8 flex items-center gap-2.5 px-4 py-2.5"
        >
          <span className="font-display text-lg font-bold aurora-text">300+</span>
          <span className="text-xs leading-tight text-ink-muted">
            CF problems
            <br />
            solved
          </span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="glass absolute -top-2 -right-10 hidden items-center gap-2 px-3.5 py-2 sm:flex"
        >
          <span className="font-mono text-xs text-cyan">CGPA 3.70</span>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-ink-faint transition hover:text-ink md:flex"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[11px]">scroll</span>
        <ArrowDown size={14} />
      </motion.a>
    </section>
  );
}
