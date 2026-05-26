import Link from "next/link";
import { ReactNode } from "react";

const BASE_BUTTON_CLASS = "group w-fit flex items-center justify-between gap-2 rounded-[4px] border border-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-zinc-950 transition";

const DEFAULT_BG_CLASS = "bg-transparent hover:bg-zinc-950 hover:text-white";

export type OutlineButtonProps = {
  href: string;
  children: ReactNode;
  bgClassName?: string;
  buttonClassName?: string;
  buttonClasses?: string;
  iconClassName?: string;
  showIcon?: boolean;
};

export default function OutlineButton({
  href,
  children,
  bgClassName,
  buttonClassName,
  buttonClasses,
  iconClassName = "lucide lucide-arrow-right shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1",
  showIcon = true,
}: OutlineButtonProps) {
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
