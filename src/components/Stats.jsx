import { stats } from "../data/site";
import Counter from "./Counter";

export default function Stats() {
  return (
    <section className="relative -mt-14 z-20">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink-100 shadow-2xl shadow-ink-900/10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-white px-4 py-8 text-center"
            >
              <span className="font-display text-4xl font-semibold text-brand-600 sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-ink-400 sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
