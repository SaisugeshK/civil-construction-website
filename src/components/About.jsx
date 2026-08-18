import { motion } from "framer-motion";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { brand } from "../data/site";

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="container-page grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <img
              src="/images/worker.jpg"
              alt="Site engineer"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 w-56 rounded-2xl border border-ink-100 bg-white p-5 shadow-xl sm:-right-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-2xl text-brand-500">
                <HiOutlineOfficeBuilding />
              </div>
              <div>
                <p className="font-display text-2xl leading-none text-ink-900">12+</p>
                <p className="text-xs text-ink-400">Years Building Trust</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-500">
            About {brand.short}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink-900 sm:text-5xl">
            Engineering-led construction you can trust.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-600">
            {brand.name} is a civil engineering and construction firm led by
            our {brand.founderTitle.toLowerCase()}, {brand.founderBlurb}. We
            deliver premium residential and commercial builds, curated
            interiors, and full architectural services — from the first
            sketch to the final handover.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-600">
            Our philosophy is simple: honest engineering, transparent
            communication, and craftsmanship that stands the test of time.
            Every project we take on carries our name — so we build it as if
            it were our own home.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-ink-100 pt-8">
            <div>
              <p className="font-display text-3xl text-brand-600">B.E.</p>
              <p className="mt-1 text-sm text-ink-400">
                Qualified Civil Engineering Leadership
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-brand-600">100%</p>
              <p className="mt-1 text-sm text-ink-400">
                In-house Design to Handover Process
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
