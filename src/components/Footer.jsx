import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { Wordmark } from "./Logo";
import { brand, nav, services } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 pt-20">
      <div className="container-page">
        <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Wordmark variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-100/60">
              Premium construction, interiors and architectural design,
              led by an engineer-first team you can trust.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-100/60 transition-colors hover:text-brand-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.title} className="text-sm text-ink-100/60">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-ink-100/60">
                <HiOutlinePhone className="mt-0.5 shrink-0 text-brand-400" />
                <a href={brand.phoneHref} className="hover:text-brand-400">
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-100/60">
                <HiOutlineMail className="mt-0.5 shrink-0 text-brand-400" />
                <a href={`mailto:${brand.email}`} className="hover:text-brand-400">
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-100/60">
                <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-brand-400" />
                {brand.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-ink-100/40 sm:flex-row">
          <p>&copy; {year} {brand.name}. All rights reserved.</p>
          <p>{brand.website}</p>
        </div>
      </div>
    </footer>
  );
}
