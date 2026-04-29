import { ReactNode } from "react";

type ProcessStep = {
  num: string;
  title: ReactNode;
  body: ReactNode;
};

type ProcessProps = {
  steps: ProcessStep[];
  label: ReactNode;
  title: ReactNode;
  description: ReactNode;
  sectionClassName?: string;
  containerClassName?: string;
  stepsWrapperClassName?: string;
  stepClassName?: string;
  numberClassName?: string;
  stepTitleClassName?: string;
  stepBodyClassName?: string;
};

export default function Process({
  steps,
  label,
  title,
  description,
  sectionClassName = "bg-zinc-950 py-14 sm:py-20",
  containerClassName = "mx-auto w-full max-w-7xl px-4",
  stepsWrapperClassName = "border-t border-white/10",
  stepClassName = "group relative grid grid-cols-[76px_1fr] gap-6 border-b border-[rgba(255,255,255,0.05)] py-[42px] transition duration-200 hover:translate-x-1 lg:grid-cols-[88px_minmax(180px,300px)_1fr] lg:gap-9",
  numberClassName = "relative z-[1] grid h-[84px] w-[84px] place-items-center rounded-xl border-2 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.01)] text-[56px] leading-none text-[rgba(255,255,255,0.1)] transition duration-300 group-hover:border-[rgba(224,32,32,0.55)] group-hover:text-[#E02020] font-bebas-neue",
  stepTitleClassName = "font-bebas-neue text-white text-[32px] uppercase leading-[1.2] tracking-widest flex items-center gap-4",
  stepBodyClassName = "max-w-3xl text-[15px] leading-7 text-white/60",
}: ProcessProps) {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className="mb-12 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
            <span className="h-[2px] w-7 bg-red-600" />
            {label}
          </div>
          <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">{title}</h2>
          <p className="mt-6 text-[15px] leading-8 text-white/45">{description}</p>
        </div>

        <div className={stepsWrapperClassName}>
          {steps.map((step, index) => (
            <div key={`${step.num}-${index}`} className={stepClassName}>
                <div className="absolute inset-0 w-0 bg-[linear-gradient(90deg,rgba(224,32,32,0.06),rgba(26,86,219,0.04),transparent_75%)] transition-all duration-300 group-hover:w-full" />
                <div className={numberClassName}>{step.num}</div>
                <div className={stepTitleClassName}>{step.title}</div>
                <div className={stepBodyClassName}>{step.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}