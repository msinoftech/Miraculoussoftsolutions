import { ReactNode } from "react";
import Subheading from "./ui/Subheading";

type DevelopmentStep = {
  num: string;
  title: ReactNode;
  body: ReactNode;
  tag?: ReactNode;
};

type DevelopmentProcessProps = {
  steps: DevelopmentStep[];
  label: ReactNode;
  title: ReactNode;
  description: ReactNode;
  sectionClassName?: string;
  containerClassName?: string;
  headerClassName?: string;
  cardClassName?: string;
  rowClassName?: string;
  numberClassName?: string;
  titleClassName?: string;
  bodyClassName?: string;
  rowDividerClassName?: string;
  showStepBadge?: boolean;
  badgeClassName?: string;
};

export default function DevelopmentProcess({
  steps,
  label,
  title,
  description,
  sectionClassName = "bg-[var(--off)] py-14 sm:py-20",
  containerClassName = "mx-auto max-w-7xl px-4",
  headerClassName = "mb-14 space-y-2",
  cardClassName = "overflow-hidden rounded-xl border-2 border-zinc-950",
  rowClassName = "group grid items-center gap-5 px-6 py-7 transition hover:bg-zinc-950 lg:grid-cols-[80px_1fr_1fr_auto] lg:px-10",
  numberClassName = "font-bebas-neue text-[50px] uppercase leading-none tracking-[0.02em] text-zinc-600 opacity-40 transition group-hover:text-red-600 group-hover:opacity-100",
  titleClassName = "text-[18px] font-bold tracking-[-0.02em] text-zinc-950 transition group-hover:text-white/90",
  bodyClassName = "transition group-hover:text-white/70",
  rowDividerClassName = "border-b border-zinc-200",
  showStepBadge = true,
  badgeClassName = "w-fit rounded-full border border-[var(--border)] bg-[var(--off-2)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] transition group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white",
}: DevelopmentProcessProps) {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className={headerClassName}>
          <Subheading variant="default">{label}</Subheading>
          <h2 className="text-[58px] text-zinc-900 uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">{title}</h2>
          <p>{description}</p>
        </div>

        <div className={cardClassName}>
          {steps.map((step, index) => (
            <div key={`${String(step.title)}-${index}`} className={`${rowClassName} ${index !== steps.length - 1 ? rowDividerClassName : ""}`}>
              <div className={numberClassName}>{step.num}</div>
              <div className={titleClassName}>{step.title}</div>
              <p className={bodyClassName}>{step.body}</p>
              {showStepBadge && step.tag ? (
                <div className={badgeClassName}>{step.tag}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}