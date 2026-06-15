import Link from "next/link";
import { ReactNode } from "react";
import Subheading from "./ui/Subheading";

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
  headerClassName = "mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end",
  titleClassName = "text-[58px] text-zinc-900 uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]",
  gridClassName = "grid border-2 border-zinc-950 md:grid-cols-2 xl:grid-cols-3",
  cardClassName = "group border-[var(--border)] p-8 transition duration-300 hover:bg-zinc-950",
  indexClassName = "mb-6 text-xs font-bold uppercase tracking-[0.1em] text-zinc-600 transition group-hover:text-white/35",
  iconWrapClassName = "mb-6 flex h-11 w-11 items-center justify-center rounded-[10px] border border-[var(--border)] bg-[var(--off)] transition group-hover:border-red-600 group-hover:bg-red-600",
  cardTitleClassName = "mb-3 text-[18px] font-extrabold tracking-[-0.02em] text-zinc-950 transition group-hover:text-white",
  cardDescriptionClassName = "transition group-hover:text-white/70",
  arrowClassName = "text-2xl text-[var(--border)] transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-red-600",
  showArrow = true,
}: CardProps) {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className={headerClassName}>
          <div>
            <Subheading variant="default">{label}</Subheading>
            <h2 className={titleClassName}>{title}</h2>
          </div>
          <p>{description}</p>
        </div>
        <div className={gridClassName}>
          {items.map((item, index) => {
            const total = items.length;
            const xlCols = 3;
            const mdCols = 2;
            const xlRow = Math.floor(index / xlCols);
            const mdRow = Math.floor(index / mdCols);
            const xlCol = index % xlCols;
            const mdCol = index % mdCols;
            const xlTotalRows = Math.ceil(total / xlCols);
            const mdTotalRows = Math.ceil(total / mdCols);
            const borderClasses = [
              mdCol !== mdCols - 1 && index !== total - 1 && "md:border-r",
              mdRow < mdTotalRows - 1 && "md:border-b sm:border-b border-b",
              xlCol !== xlCols - 1 && index !== total - 1 && "lg:border-r",
              xlRow < xlTotalRows - 1 && "lg:border-b sm:border-b border-b",
            ]
              .filter(Boolean)
              .join(" ");
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