import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineCheckCircle, HiOutlineClock } from "react-icons/hi";
import { brand } from "../data/site";

const initialForm = { name: "", phone: "", service: "Premium Constructions", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Enquiry — ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(initialForm);
  };

  const info = [
    { icon: HiOutlinePhone, label: "Call Us", value: brand.phone, href: brand.phoneHref },
    { icon: HiOutlineMail, label: "Email Us", value: brand.email, href: `mailto:${brand.email}` },
    { icon: HiOutlineLocationMarker, label: "Visit Us", value: brand.address },
  ];

  return (
    <section id="contact" className="py-28">
      <div className="container-page">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-500">
            Get In Touch
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink-900 sm:text-5xl">
            Let's talk about your next project.
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {info.map((item) => {
              const Tag = item.href ? "a" : "div";
              return (
                <Tag
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-6 transition-colors hover:border-brand-300"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-xl text-brand-500">
                    <item.icon />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wider text-ink-400">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm font-medium text-ink-900">
                      {item.value}
                    </span>
                  </span>
                </Tag>
              );
            })}

            <div className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-xl text-brand-500">
                <HiOutlineClock />
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-wider text-ink-400">
                  Business Hours
                </span>
                <span className="mt-1 block text-sm font-medium text-ink-900">
                  Mon &ndash; Sat: 9:00 AM &ndash; 6:00 PM
                </span>
              </span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-3xl border border-ink-100 bg-white p-8 shadow-sm sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium text-ink-800">Full Name</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-ink-100 bg-sand-50 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium text-ink-800">Phone Number</label>
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="w-full rounded-xl border border-ink-100 bg-sand-50 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-ink-800">Service Needed</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-ink-100 bg-sand-50 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400"
                >
                  <option>Premium Constructions</option>
                  <option>Interiors</option>
                  <option>Architectural Design</option>
                  <option>2D / 3D Plan Approval</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-ink-800">Message</label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your plot, timeline and requirements..."
                  className="w-full resize-none rounded-xl border border-ink-100 bg-sand-50 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-brand-500 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 sm:w-auto sm:px-10"
            >
              Send Enquiry
            </button>

            {sent && (
              <p className="mt-4 flex items-center gap-2 text-sm font-medium text-brand-600">
                <HiOutlineCheckCircle className="text-lg" />
                Opening your email app to send the enquiry to {brand.short}...
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
