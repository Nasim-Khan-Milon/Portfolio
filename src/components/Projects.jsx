import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/siteData";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const filters = [
  { id: "all", label: "All" },
  { id: "solo", label: "Solo" },
  { id: "team", label: "Team" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const visible = useMemo(() => {
    if (filter === "all") return projects;
    if (filter === "team") return projects.filter((p) => p.group);
    return projects.filter((p) => !p.group);
  }, [filter]);

  return (
    <section id="projects" className="relative px-[6%] py-28 md:px-[8%]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-3">My work</p>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Featured <span className="aurora-text">projects</span>
              </h2>
            </div>

            <div className="glass flex gap-1 p-1">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors"
                >
                  {filter === f.id && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "linear-gradient(100deg, rgba(139,92,246,0.4), rgba(236,72,153,0.4))",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={`relative z-10 ${filter === f.id ? "text-ink" : ""}`}>
                    {f.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
