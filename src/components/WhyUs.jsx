import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import { whyUs } from "../data/site";

export default function WhyUs() {
  return (
    <section className="py-28">
      <div className="container-page grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-500">
            Why Choose Us
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink-900 sm:text-5xl">
            Built on engineering discipline and honest craft.
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {whyUs.map((item) => (
              <div key={item.title} className="flex gap-4">
                <HiCheckCircle className="mt-1 shrink-0 text-2xl text-brand-500" />
                <div>
                  <h3 className="font-semibold text-ink-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="space-y-4">
            <img
              src="/images/building-glass.jpg"
              alt="Modern building facade"
              className="h-64 w-full rounded-2xl object-cover"
            />
            <img
              src="/images/team-meeting.jpg"
              alt="Project planning session"
              className="h-40 w-full rounded-2xl object-cover"
            />
          </div>
          <div className="mt-10 space-y-4">
            <img
              src="/images/worker2.jpg"
              alt="Site engineer inspecting work"
              className="h-40 w-full rounded-2xl object-cover"
            />
            <img
              src="/images/hero-modern-house.jpg"
              alt="Completed modern residence"
              className="h-64 w-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
