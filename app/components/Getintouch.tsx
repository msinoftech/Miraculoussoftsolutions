import Contactform from "./Contactform";
import { contactInfo } from "@/app/lib/config";
import Subheading from "./ui/Subheading";


export default function Getintouch() {
  return (
    <section className="relative overflow-hidden py-16 px-4 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_100%,rgba(220,38,38,0.06)_0%,transparent_50%)]" aria-hidden />

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-zinc-950 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <div className="relative">
              <Subheading variant="light">Project Intake Form</Subheading>
              <h2 className="font-bebas-neue text-[56px] uppercase leading-[0.9] tracking-wide text-white sm:text-[80px]">Tell Us <span className="text-red-600">Everything.</span></h2>
              <p className="mt-3 text-white/70">
                Whether you are shaping a new SaaS product, modernising a platform, or scaling operations — share context and we will respond with clear next steps.
              </p>

              <div className="space-y-1 pt-6">
                <a href={`mailto:${contactInfo.email}`} className="group flex items-start gap-3 rounded-lg border p-2 transition border-white/10 bg-white/[0.04]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-red-500 transition group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white"><svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </span>
                  <span className="min-w-0 pt-0.5">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-white/70">Email</span>
                    <span className="mt-0.5 block text-[13px] leading-snug text-white/70 transition group-hover:text-white">{contactInfo.email}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative border-t border-white/10 bg-[#0a0a0c] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-b from-red-600/15 to-transparent blur-3xl" aria-hidden />
            <div className="relative mb-4">
              <Subheading variant="light">Secure intake</Subheading>
              <div className="text-[20px] font-bold text-white">Send Your Brief</div>
              <p className="text-white/70">Fields marked required help us respond faster.</p>
            </div>
            <Contactform />
          </div>
        </div>
      </div>
    </section>
  );
}
