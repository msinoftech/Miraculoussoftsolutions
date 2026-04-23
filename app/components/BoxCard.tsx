import { ReactNode } from "react";

type BoxCardItem = {
  icon: string;
  title: ReactNode;
  body: ReactNode;
};

type BoxCardProps = {
  items: BoxCardItem[];
  label: ReactNode;
  title: ReactNode;
  description: ReactNode;
  sectionClassName?: string;
  containerClassName?: string;
  headerClassName?: string;
  gridClassName?: string;
  cardClassName?: string;
  cardIndexClassName?: string;
  iconWrapClassName?: string;
  itemTitleClassName?: string;
  itemBodyClassName?: string;
};

export default function BoxCard({
  items,
  label,
  title,
  description,
  sectionClassName = "bg-white py-14 sm:py-20",
  containerClassName = "mx-auto w-full max-w-7xl px-4",
  headerClassName = "mb-12 text-center",
  gridClassName = "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
  cardClassName = "group relative min-h-[255px] overflow-hidden rounded-[14px] border border-white/10 bg-white p-6 shadow-sm transition hover:-translate-y-1",
  cardIndexClassName = "pointer-events-none absolute right-4 top-2 font-bebas-neue text-6xl leading-none text-zinc-200",
  iconWrapClassName = "mb-4 text-3xl w-12 h-12 flex items-center justify-center rounded-lg border border-[var(--off-2)] bg-[var(--off)]",
  itemTitleClassName = "font-bebas-neue text-[24px] uppercase leading-[1.2] tracking-[0.02em] mb-2",
  itemBodyClassName = "mt-4 text-[14px] leading-[1.7] text-zinc-500",
}: BoxCardProps) {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className={headerClassName}>
          <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
            <span className="h-[2px] w-7 bg-red-600" />
            {label}
          </div>
          <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">
            {title}
          </h2>
          <p className="text-[15px] leading-8 text-zinc-500">{description}</p>
        </div>

        <div className={gridClassName}>
          {items.map((item, index) => (
            <div key={`${index}-${String(item.title)}`} className={cardClassName}>
              <div className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#3B82F6,#E02020)] transition-transform duration-[280ms] ease-[ease] group-hover:scale-x-100" />
              <div className={cardIndexClassName}>{String(index + 1).padStart(2, "0")}</div>
              <div className={iconWrapClassName}>
                <span dangerouslySetInnerHTML={{ __html: item.icon }} />
              </div>
              <div className={itemTitleClassName}>{item.title}</div>
              <div className={itemBodyClassName}>{item.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}