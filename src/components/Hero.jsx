import { motion } from "framer-motion";
import { HiArrowRight, HiOutlineBadgeCheck } from "react-icons/hi";
import { brand } from "../data/site";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-ink-950">
      <div className="absolute inset-0">
        <img
          src="/images/hero-construction.jpg"
          alt="Construction site"
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/40 to-transparent" />
      </div>

      <div className="container-page relative z-10 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-brand-300">
            <HiOutlineBadgeCheck className="text-base" />
            LICENSED &middot; INSURED &middot; ENGINEER-LED
          </div>

          <h1 className="font-display text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl">
            Building <span className="text-brand-400">Tomorrow,</span>
            <br />
            Today.
          </h1>

          <p className="mt-6 max-w-lg text-lg text-ink-100/80">
            Premium construction, interiors and architectural design —
            delivered with engineering precision by {brand.name}.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-500/30 transition-all hover:bg-brand-600 hover:pr-6"
            >
              Start Your Project
              <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container-page flex flex-wrap items-center justify-between gap-x-10 gap-y-3 py-5 text-white/85">
          <p className="font-display text-base italic">
            "Every structure begins with a promise — we build ours to last."
          </p>
          <p className="text-sm font-medium tracking-wide">
            {brand.founderTitle}
          </p>
        </div>
      </div>
    </section>
  );
}
