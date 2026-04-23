"use client";

type MarqueeProps = {
  items: string[];
  sectionClassName?: string;
  trackClassName?: string;
  itemClassName?: string;
  iconClassName?: string;
  icon?: string;
  duplicateCount?: number;
};

export default function Marquee({
  items,
  sectionClassName = "overflow-hidden border-y border-white/10 bg-red-600",
  trackClassName = "marquee-track flex",
  itemClassName = "font-bebas-neue text-[18px] uppercase leading-[1.2] tracking-[0.08em] flex shrink-0 items-center gap-3 px-9 py-4 text-white transition",
  iconClassName = "text-white/60",
  icon = "✦",
  duplicateCount = 2,
}: MarqueeProps) {
  const loopItems = Array.from({ length: duplicateCount }, () => items).flat();

  return (
    <section className={sectionClassName}>
      <div className={trackClassName}>
        {loopItems.map((item, index) => (
            <div key={`${item}-${index}`} className={itemClassName}>
                <span className={iconClassName}>{icon}</span>
                {item}
            </div>
        ))}
      </div>
    </section>
  );
}
