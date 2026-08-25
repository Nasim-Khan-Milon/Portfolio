import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { MapPin, Mail, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/siteData";
import Reveal from "./Reveal";

// These come from EmailJS (https://emailjs.com) — replace with your own
// service/template/public key, or wire this form up to any backend you like.
const EMAILJS_SERVICE_ID = "service_2rp3p2i";
const EMAILJS_TEMPLATE_ID = "template_wjx11d9";
const EMAILJS_PUBLIC_KEY = "GA3xh4uy8kJQt7DSw";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus({ state: "success", message: "Message sent successfully." });
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus({
          state: "error",
          message: "Failed to send — please email me directly instead.",
        });
      });
  };

  return (
    <section id="contact" className="relative px-[6%] py-28 md:px-[8%]">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-3">Let&apos;s talk</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Let&apos;s build something <span className="aurora-text">great</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-muted">
            Open to internship and full-time opportunities — reach out and
            I&apos;ll usually reply within a day.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="glass glow-ring flex h-full flex-col gap-5 p-7">
              <ContactRow icon={<MapPin size={16} />} text={profile.location} />
              <ContactRow
                icon={<Mail size={16} />}
                text={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactRow
                icon={<Phone size={16} />}
                text={profile.phone}
                href={`tel:${profile.phone.replace(/-/g, "")}`}
              />
              <div className="mt-2 flex gap-3 border-t border-line pt-5">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-xs font-medium text-ink transition hover:border-transparent hover:bg-white/10"
                >
                  <GithubIcon size={14} /> GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-xs font-medium text-ink transition hover:border-transparent hover:bg-white/10"
                >
                  <LinkedinIcon size={14} /> LinkedIn
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass glow-ring flex h-full flex-col gap-4 p-7"
            >
              <FloatingInput name="from_name" label="Your name" type="text" />
              <FloatingInput name="from_email" label="Email" type="email" />
              <FloatingTextarea name="message" label="Message" />

              <motion.button
                type="submit"
                disabled={status.state === "sending"}
                whileTap={{ scale: 0.97 }}
                className="btn-primary mt-1 flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status.state === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending…
                  </>
                ) : status.state === "success" ? (
                  <>
                    <CheckCircle2 size={16} /> Sent
                  </>
                ) : (
                  "Send message"
                )}
              </motion.button>

              <AnimatePresence>
                {status.message && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`font-mono text-xs ${
                      status.state === "success" ? "text-ok" : "text-err"
                    }`}
                    role="status"
                  >
                    {status.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, text, href }) {
  const content = (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-violet">
        {icon}
      </span>
      <span className="text-sm text-ink-muted">{text}</span>
    </div>
  );

  return href ? (
    <a href={href} className="transition hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  );
}

function FloatingInput({ name, label, type }) {
  return (
    <div className="group relative">
      <input
        type={type}
        name={name}
        placeholder=" "
        required
        className="peer w-full rounded-xl border border-line-strong bg-white/5 px-4 pt-5 pb-2 text-sm text-ink outline-none transition focus:border-violet"
      />
      <label className="pointer-events-none absolute top-3.5 left-4 text-sm text-ink-faint transition-all peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-violet peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:text-[10px]">
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({ name, label }) {
  return (
    <div className="group relative">
      <textarea
        name={name}
        placeholder=" "
        required
        rows={4}
        className="peer w-full resize-none rounded-xl border border-line-strong bg-white/5 px-4 pt-5 pb-2 text-sm text-ink outline-none transition focus:border-violet"
      />
      <label className="pointer-events-none absolute top-3.5 left-4 text-sm text-ink-faint transition-all peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-violet peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:text-[10px]">
        {label}
      </label>
    </div>
  );
}
