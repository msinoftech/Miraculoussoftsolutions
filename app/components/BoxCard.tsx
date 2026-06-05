import { ReactNode } from "react";
import Subheading from "./ui/Subheading";

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
  itemTitleClassName = "text-[18px] font-bold tracking-[-0.02em] text-zinc-900 transition leading-[1.2] mb-2",
}: BoxCardProps) {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className={headerClassName}>
          {label && (
            <Subheading variant="default">{label}</Subheading>
          )}

          {title && (
            <h2 className="text-[58px] uppercase text-zinc-900 leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">{title}</h2>
          )}

          {description && (
            <p>{description}</p>
          )}
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
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}