import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/site";
import { asset } from "../lib/asset";

const filters = ["All", "Residential Construction", "Premium Villa", "Architectural Design", "Interiors"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-28">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-500">
              Our Work
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight text-ink-900 sm:text-5xl">
              A portfolio built on precision.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-colors ${
                  active === f
                    ? "border-brand-500 bg-brand-500 text-white"
                    : "border-ink-100 text-ink-600 hover:border-brand-300"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <img
                  src={asset(project.image)}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-300">
                    {project.category}
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-white">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
