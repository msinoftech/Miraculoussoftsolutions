import Link from "next/link";
import { ReactNode } from "react";

const BASE_BUTTON_CLASS =
  "group w-fit flex items-center justify-between gap-2 rounded-[4px] px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition";

const DEFAULT_BG_CLASS = "bg-zinc-950 hover:bg-red-600";

export type DefaultButtonProps = {
  href: string;
  children: ReactNode;
  /** Change only background — other styles stay default */
  bgClassName?: string;
  /** Full class override (replaces default base + bg) */
  buttonClassName?: string;
  /** @deprecated Use `buttonClassName` or `bgClassName` */
  buttonClasses?: string;
  iconClassName?: string;
  showIcon?: boolean;
};

export default function DefaultButton({
  href,
  children,
  bgClassName,
  buttonClassName,
  iconClassName = "lucide lucide-arrow-right shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1",
  showIcon = true,
}: DefaultButtonProps) {
  return (
    <Link href={href} className={`${BASE_BUTTON_CLASS} ${buttonClassName ?? ""} ${bgClassName ?? DEFAULT_BG_CLASS}`}>
      {children}
      {showIcon && (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClassName}
          aria-hidden
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      )}
    </Link>
  );
}
