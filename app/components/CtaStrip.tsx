import { ReactNode } from "react";
import Link from "next/link";

type CtaStripProps = {
  title: ReactNode;
  description: ReactNode;
  buttonText: ReactNode;
  buttonHref: string;
  sectionClassName?: string;
  containerClassName?: string;
  gridClassName?: string;
  titleWrapClassName?: string;
  titleClassName?: string;
  contentWrapClassName?: string;
  descriptionClassName?: string;
  buttonClassName?: string;
};

export default function CtaStrip({
  title,
  description,
  buttonText,
  buttonHref,
  sectionClassName = "bg-red-700 py-14 sm:py-20",
  containerClassName = "mx-auto w-full max-w-7xl px-4",
  gridClassName = "grid grid-cols-1 sm:grid-cols-2 gap-8",
  titleWrapClassName = "relative",
  titleClassName = "font-bebas-neue text-5xl uppercase leading-none tracking-[0.02em] text-white md:text-7xl",
  contentWrapClassName = "relative",
  descriptionClassName = "mb-6 text-base leading-8 text-white/90",
  buttonClassName = "rounded-[4px] bg-white px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-zinc-950 transition hover:bg-zinc-100",
}: CtaStripProps) {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className={gridClassName}>
          <div className={titleWrapClassName}>
            <h2 className={titleClassName}>{title}</h2>
          </div>

          <div className={contentWrapClassName}>
            <p className={descriptionClassName}>{description}</p>
            <Link href={buttonHref} className={buttonClassName}>
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}