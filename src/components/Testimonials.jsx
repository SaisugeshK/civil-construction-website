import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import { testimonials } from "../data/site";

export default function Testimonials() {
  return (
    <section className="bg-ink-950 py-28">
      <div className="container-page">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-400">
            Client Voices
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
            Trusted by families and businesses alike.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="flex gap-1 text-brand-400">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <HiStar key={idx} />
                ))}
              </div>
              <p className="mt-5 font-display text-lg leading-relaxed text-ink-100/90">
                "{t.quote}"
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-ink-100/50">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
