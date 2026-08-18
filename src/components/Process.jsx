import { motion } from "framer-motion";
import { process } from "../data/site";

export default function Process() {
  return (
    <section id="process" className="bg-brand-50 py-28">
      <div className="container-page">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-500">
            Our Process
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink-900 sm:text-5xl">
            From blueprint to handover, step by step.
          </h2>
        </div>

        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-brand-200 lg:block" />
          {process.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-brand-50 bg-brand-500 font-display text-xl text-white shadow-lg shadow-brand-500/30">
                {item.step}
              </div>
              <h3 className="mt-5 font-display text-xl text-ink-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
