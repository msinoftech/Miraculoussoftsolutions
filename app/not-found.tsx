import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-[var(--off)] py-14 sm:py-20">
      <div className="grid-bg absolute inset-0 opacity-35" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[0_24px_70px_rgba(12,12,12,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="border-b border-[var(--border)] p-8 sm:p-12 lg:border-b-0 lg:border-r">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-600 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-red-600">
                <span className="h-[5px] w-[5px] rounded-full bg-red-600" />
                Error 404
              </div>

              <h1 className="mt-6 font-hero text-[64px] uppercase leading-[0.9] tracking-[0.02em] text-zinc-950 sm:text-[90px] lg:text-[120px]">
                Page
                <br />
                Not <span className="text-red-600">Found.</span>
              </h1>

              <p>The page you are looking for does not exist or may have been moved. Let’s get you back to the right section.</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-[4px] border border-zinc-950 bg-zinc-950 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition hover:border-red-600 hover:bg-red-600"
                >
                  Go to Homepage
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center rounded-[4px] border border-zinc-950 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-zinc-950 transition hover:bg-zinc-950 hover:text-white"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-between bg-zinc-950 p-8 text-white sm:p-12">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/40">
                  Need Assistance?
                </div>
                <h2 className="mt-4 font-hero text-[46px] uppercase leading-[0.92] tracking-[0.02em] sm:text-[58px]">
                  We Can Help You Navigate.
                </h2>
                <p className="mt-5 text-[14px] leading-7 text-white/60">
                  If this happened from an outdated link, contact our team and we will
                  guide you to the correct page.
                </p>
              </div>

              <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                  Quick Link
                </div>
                <Link
                  href="/#contact"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-red-600 px-4 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-red-700"
                >
                  Contact Miraculous Soft
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
