import { profile } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="relative px-[6%] py-8 md:px-[8%]">
      <div
        className="mx-auto mb-6 h-px max-w-6xl"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.4), rgba(236,72,153,0.4), transparent)",
        }}
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-ink-faint">built with react, tailwind &amp; framer motion</p>
      </div>
    </footer>
  );
}
