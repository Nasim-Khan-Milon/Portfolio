import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Users, Terminal } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

const images = import.meta.glob("../assets/*.png", {
  eager: true,
  import: "default",
});

function resolveImage(name) {
  if (!name) return null;
  const match = Object.entries(images).find(([path]) => path.endsWith(name));
  return match ? match[1] : null;
}

export default function ProjectCard({ project }) {
  const img = resolveImage(project.image);
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), springConfig);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="glass glow-ring flex h-full flex-col overflow-hidden"
    >
      <div className="relative h-48 w-full overflow-hidden border-b border-line bg-bg-2">
        {img ? (
          <img src={img} alt={project.title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Terminal size={30} className="text-ink-faint" />
          </div>
        )}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(26,21,51,0.9), transparent 60%)" }}
        />
        <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-bg/80 px-2.5 py-1 font-mono text-[11px] text-ink-muted backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-ok" />
          {project.group ? "team project" : "solo project"}
        </span>
        {project.group && (
          <span className="absolute top-3 right-3 rounded-full bg-bg/80 p-1.5 text-ink-muted backdrop-blur">
            <Users size={13} />
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6" style={{ transform: "translateZ(20px)" }}>
        <h3 className="font-display mb-2 text-[17px] font-semibold">{project.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-ink-muted">{project.description}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-4 border-t border-line pt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-ink transition hover:text-fuchsia"
          >
            <GithubIcon size={14} /> Source
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-ink transition hover:text-fuchsia"
            >
              <ExternalLink size={14} /> Live demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
