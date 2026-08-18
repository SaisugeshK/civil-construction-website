import { HiArrowRight } from "react-icons/hi";
import { brand } from "../data/site";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-brand-500 px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-brand-600/40" />

          <div className="relative">
            <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
              Have a plot? Let's design and build
              <br className="hidden sm:block" /> the home you've imagined.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm text-white/85 sm:text-base">
              Talk to our team directly — get a free consultation on
              construction, interiors or plan approval.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-600 shadow-lg transition-transform hover:scale-105"
              >
                Call {brand.phone}
                <HiArrowRight />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
