import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view so the navbar
 * can highlight the matching link, mirroring the original
 * vanilla-JS scroll-spy behaviour.
 */
export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const onScroll = () => {
      let current = active;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.id;
        }
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds]);

  return active;
}
