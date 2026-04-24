import Link from "next/link";
import { ReactNode } from "react";

export type CardItem = {
  number?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  icon?: string;
  iconNode?: ReactNode;
  href?: string;
};

type CardProps = {
  items: CardItem[];
  label: ReactNode;
  title: ReactNode;
  description: ReactNode;
  sectionClassName?: string;
  containerClassName?: string;
  headerClassName?: string;
  labelClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  gridClassName?: string;
  cardClassName?: string;
  indexClassName?: string;
  iconWrapClassName?: string;
  cardTitleClassName?: string;
  cardDescriptionClassName?: string;
  arrowClassName?: string;
  showArrow?: boolean;
};

export default function Card({
  items,
  label,
  title,
  description,
  sectionClassName = "bg-white py-14 sm:py-20",
  containerClassName = "mx-auto max-w-7xl px-4",
  headerClassName = "mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end",
  labelClassName = "mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500",
  titleClassName = "font-hero text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]",
  descriptionClassName = "max-w-xl text-[15px] leading-8 text-zinc-500",
  gridClassName = "grid border-2 border-zinc-950 md:grid-cols-2 xl:grid-cols-3",
  cardClassName = "group border-[var(--border)] p-8 transition duration-300 hover:bg-zinc-950",
  indexClassName = "mb-6 text-[11px] font-bold uppercase tracking-[0.1em] text-zinc-500 transition group-hover:text-white/35",
  iconWrapClassName = "mb-6 flex h-11 w-11 items-center justify-center rounded-[10px] border border-[var(--border)] bg-[var(--off)] transition group-hover:border-red-600 group-hover:bg-red-600",
  cardTitleClassName = "mb-3 text-[18px] font-extrabold tracking-[-0.02em] text-zinc-950 transition group-hover:text-white",
  cardDescriptionClassName = "mb-6 text-[13px] leading-7 text-zinc-500 transition group-hover:text-white/55",
  arrowClassName = "text-2xl text-[var(--border)] transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-red-600",
  showArrow = true,
}: CardProps) {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className={headerClassName}>
          <div>
            <div className={labelClassName}>
              <span className="h-[2px] w-7 bg-red-600" />
              {label}
            </div>
            <h2 className={titleClassName}>{title}</h2>
          </div>
          <p className={descriptionClassName}>{description}</p>
        </div>
        <div className={gridClassName}>
          {items.map((item, index) => {
            const borderClasses = `${index % 3 !== 2 ? "xl:border-r" : ""} ${index < 3 ? "md:border-b xl:border-b" : ""} ${index % 2 !== 1 ? "md:border-r xl:border-r" : ""} ${index < 4 ? "md:border-b xl:border-b" : ""}`;
            const content = (
              <>
                {item.number ? <div className={indexClassName}>{item.number}</div> : null}
                {(item.icon || item.iconNode) && (
                  <div className={iconWrapClassName}>
                    {item.iconNode ? <>{item.iconNode}</> : <span dangerouslySetInnerHTML={{ __html: item.icon || "" }} />}
                  </div>
                )}
                <div className={cardTitleClassName}>{item.title}</div>
                <p className={cardDescriptionClassName}>{item.description}</p>
                {showArrow && item.href ? <div className={arrowClassName}>↗</div> : null}
              </>
            );

            if (item.href) {
              return (
                <Link key={`${index}-${String(item.title)}`} href={item.href} className={`${cardClassName} ${borderClasses} block`} aria-label={`Open ${String(item.title)}`}>{content}</Link>
              );
            }

            return (
              <div key={`${index}-${String(item.title)}`} className={`${cardClassName} ${borderClasses}`}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}