import { useEffect, useState } from "react";
import { Wordmark } from "./Logo";
import { nav, brand } from "../data/site";
import { HiMenu, HiX, HiPhone } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-sand-50/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container-page flex items-center justify-between">
        <a href="#home" onClick={() => setOpen(false)}>
          <Wordmark variant={scrolled || open ? "dark" : "light"} />
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-500 ${
                  scrolled ? "text-ink-800" : "text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={brand.phoneHref}
            className={`flex items-center gap-2 text-sm font-medium ${
              scrolled ? "text-ink-800" : "text-white"
            }`}
          >
            <HiPhone className="text-brand-500" />
            {brand.phone}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-colors hover:bg-brand-600"
          >
            Get a Quote
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden text-2xl ${scrolled || open ? "text-ink-900" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden mt-4 border-t border-ink-100 bg-sand-50">
          <ul className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-base font-medium text-ink-800"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-brand-500 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
