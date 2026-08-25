import { summary, profile, projects } from "../data/siteData";
import { GithubIcon, LinkedinIcon, CodeforcesIcon } from "./BrandIcons";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

const stats = [
  { label: "Problems solved", value: 300, suffix: "+", accent: "violet" },
  { label: "Max CF rating", value: 1247, suffix: "", accent: "fuchsia" },
  { label: "Projects shipped", value: projects.length, suffix: "", accent: "cyan" },
  { label: "CGPA", value: null, display: "3.70", suffix: "/4.00", accent: "amber" },
];

const accentColor = {
  violet: "#a78bfa",
  fuchsia: "#f472b6",
  cyan: "#22d3ee",
  amber: "#fbbf24",
};

export default function About() {
  return (
    <section id="about" className="relative px-[6%] py-28 md:px-[8%]">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-3">About me</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Turning problems into <span className="aurora-text">shipped software</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr] md:items-start">
          <Reveal delay={0.1}>
            <p className="text-[15px] leading-relaxed text-ink-muted">{summary}</p>

            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: GithubIcon, href: profile.github, label: "GitHub" },
                { Icon: LinkedinIcon, href: profile.linkedin, label: "LinkedIn" },
                { Icon: CodeforcesIcon, href: profile.codeforces, label: "Codeforces" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass glow-ring flex h-11 w-11 items-center justify-center text-ink-muted transition hover:-translate-y-1 hover:text-ink"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.15 + i * 0.08}>
                <div className="glass glow-ring h-full p-5">
                  <div
                    className="font-display text-3xl font-bold"
                    style={{ color: accentColor[s.accent] }}
                  >
                    {s.display ?? <CountUp value={s.value} />}
                    {s.suffix}
                  </div>
                  <div className="mt-1.5 text-xs text-ink-faint">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
