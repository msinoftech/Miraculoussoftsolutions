import { ReactNode } from "react";

const variantStyles = {
  default: "mb-5 inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-zinc-800",
  light: "mb-5 inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white",
} as const;

type SubheadingVariant = keyof typeof variantStyles;

type SubheadingProps = {
  children: ReactNode;
  variant?: SubheadingVariant;
  className?: string;
  accentClassName?: string;
};

export default function Subheading({
  children,
  variant = "default",
  className,
  accentClassName = "h-[2px] w-7 shrink-0 bg-red-600",
}: SubheadingProps) {
  const rootClassName = className ?? variantStyles[variant];

  return (
    <div className={rootClassName}>
      <span className={accentClassName} aria-hidden="true" />
      {children}
    </div>
  );
}
