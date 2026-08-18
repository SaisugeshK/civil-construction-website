import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { services } from "../data/site";
import { asset } from "../lib/asset";

export default function Services() {
  return (
    <section id="services" className="bg-ink-950 py-28">
      <div className="container-page">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-400">
              What We Do
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight text-white sm:text-5xl">
              Comprehensive services for every stage of your build.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-100/60">
            From the first architectural sketch to the final handover, our
            team manages every discipline under one roof.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={asset(service.image)}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
              </div>
              <div className="relative -mt-10 rounded-2xl bg-ink-900 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-display text-3xl text-brand-400">
                    0{i + 1}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white transition-colors group-hover:bg-brand-500">
                    <HiArrowUpRight />
                  </span>
                </div>
                <h3 className="font-display text-xl text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-100/60">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
