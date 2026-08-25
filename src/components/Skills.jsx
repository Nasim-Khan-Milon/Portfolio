import { skillGroups } from "../data/siteData";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative px-[6%] py-28 md:px-[8%]">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-3">What I work with</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Technical <span className="aurora-text">skills</span>
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06}>
              <div className="glass overflow-hidden p-5">
                <h3 className="mb-4 px-1 font-mono text-xs tracking-wide text-fuchsia uppercase">
                  {group.label}
                </h3>
                <MarqueeRow items={group.skills} reverse={i % 2 === 1} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({ items, reverse }) {
  // Duplicate the list so the CSS translateX(-50%) loop is seamless.
  const doubled = [...items, ...items];

  return (
    <div className="marquee-row overflow-hidden">
      <div
        className={`flex w-max gap-3 ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
      >
        {doubled.map((skill, i) => (
          <span key={`${skill}-${i}`} className="tag shrink-0">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
