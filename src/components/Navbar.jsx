import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/siteData";
import useActiveSection from "../hooks/useActiveSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  return (
    <>
      <header className="fixed top-4 left-1/2 z-50 w-[94%] max-w-4xl -translate-x-1/2 sm:top-6">
        <div className="glass flex items-center justify-between gap-2 px-4 py-2.5 sm:px-5">
          <a href="#home" className="font-display shrink-0 text-lg font-bold">
            <span className="aurora-text">{profile.name.split(" ")[0]}</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "linear-gradient(100deg, rgba(139,92,246,0.35), rgba(236,72,153,0.35))",
                        border: "1px solid var(--color-line-strong)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? "text-ink" : ""}`}>
                    {link.label}
                  </span>
                </a>
              );
            })}
          </nav>

          <a
            href={profile.cvUrl}
            download
            className="btn-primary hidden shrink-0 rounded-full px-5 py-2 text-sm font-medium md:inline-block"
          >
            Resume
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="text-ink md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass fixed top-[4.7rem] left-1/2 z-50 w-[94%] max-w-4xl -translate-x-1/2 p-3 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    active === link.href.slice(1)
                      ? "bg-white/10 text-ink"
                      : "text-ink-muted hover:bg-white/5 hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.cvUrl}
                download
                onClick={() => setOpen(false)}
                className="btn-primary mt-1 rounded-xl px-4 py-3 text-center text-sm font-medium"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
