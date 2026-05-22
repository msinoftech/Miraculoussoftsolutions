import Contactform from "./Contactform";
import { contactInfo } from "@/app/lib/config";

export default function Getintouch() {
  return (
    <section className="relative overflow-hidden bg-zinc-100 py-16 px-4 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_100%,rgba(220,38,38,0.06)_0%,transparent_50%)]" aria-hidden />

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 shadow-[0_32px_80px_rgba(15,23,42,0.2)]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <div className="grid-bg absolute inset-0 opacity-[0.08]" aria-hidden />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_50%,rgba(220,38,38,0.15)_0%,transparent_55%)]" aria-hidden />

            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />
                Project Intake Form
              </div>
              <h2 className="font-bebas-neue text-[56px] uppercase leading-[0.9] tracking-wide text-white sm:text-[80px]">
                Tell Us
                <br />
                <span className="text-red-600">Everything.</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-8 text-zinc-400">
                Whether you are shaping a new SaaS product, modernising a platform, or scaling operations — share context and we will respond with clear next steps.
              </p>

              <div className="mt-8 space-y-3 border-t border-white/10 pt-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500">Or email directly</p>
                <a href={`mailto:${contactInfo.email}`} className="block text-lg font-semibold text-white transition hover:text-red-400">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          <div className="relative border-t border-white/10 bg-[#0a0a0c] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-b from-red-600/15 to-transparent blur-3xl" aria-hidden />
            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">Secure intake</p>
              <div className="mt-1 text-xl font-extrabold text-white">Send Your Brief</div>
              <p className="mt-2 mb-8 text-sm text-zinc-500">Fields marked required help us respond faster.</p>
              <Contactform />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
