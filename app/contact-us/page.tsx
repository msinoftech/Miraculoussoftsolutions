import Getintouch from "../components/Getintouch";
import { contactInfo } from "../lib/config";
import Subheading from "../components/ui/Subheading";
import DefaultButton from "../components/ui/Button/defaultButton";
import OutlineButton from "../components/ui/Button/outlineButton";

const workflow = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We understand your business goals, users, and technical needs in detail.",
  },
  {
    step: "02",
    title: "Solution Blueprint",
    description: "You get a clear roadmap with scope, timelines, and practical execution milestones.",
  },
  {
    step: "03",
    title: "Build & Launch",
    description: "Our team builds, tests, and ships a scalable product experience with ongoing support.",
  },
];

export default function ContactUsPage() {
  const cleanedPhone = contactInfo.phone.replace(/[^+\d]/g, "");

  const contactWays = [
    {
      label: "WhatsApp",
      value: "Quick Project Chat",
      href: `https://wa.me/${cleanedPhone.replace(/^\+/, "")}`,
      icon: `<svg width="50px" height="50px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0"></path> <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"></path> <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse"> <stop stop-color="#5BD066"></stop> <stop offset="1" stop-color="#27B43E"></stop> </linearGradient> </defs> </g></svg>`,
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-b from-white via-zinc-50 to-zinc-100 py-14 sm:py-20">  
        <div className="grid-bg absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4">
          <Subheading variant="default">Contact Us</Subheading>
          <h1 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-zinc-950 sm:text-[72px] lg:text-[88px]">Let&apos;s Build Your <span className="text-red-600"> Next Digital Product</span></h1>
          <p>From SaaS platforms to enterprise automation, we design and engineer reliable digital products that move your business forward.</p>
          <p><i>Based in {contactInfo.address}, we collaborate with clients across India and globally.</i></p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/75 shadow-[0_20px_50px_rgba(15,23,42,0.07)] backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px]">
              <div className="flex flex-col justify-center gap-5 border-b border-zinc-200/70 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-red-600">Get Started</p>
                  <p className="mt-1 max-w-xl text-lg font-semibold leading-snug text-zinc-950">
                    Explore our services or reach out directly — we typically respond within one business day.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <DefaultButton href="/services">EXPLORE SERVICES</DefaultButton>
                  <OutlineButton href={`mailto:${contactInfo.email}`}>EMAIL OUR TEAM</OutlineButton>
                </div>
              </div>

              {contactWays.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full flex flex-col justify-between gap-5 overflow-hidden bg-gradient-to-br from-emerald-50/90 via-white to-zinc-50/50 p-6 sm:p-8 transition duration-300 hover:from-emerald-50"
                >
                  <span className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl transition duration-300 group-hover:scale-110" />

                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center">
                      <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-bold uppercase tracking-wide text-zinc-950">{item.label}</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                          Online
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-zinc-600">{item.value}</p>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between gap-3 border-t border-emerald-200/60 pt-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Avg. reply within 24 hours</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-sm transition group-hover:bg-emerald-700">
                      Start Chat
                      <span className="transition group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Getintouch />      

      <section className="bg-zinc-950 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8">
              <Subheading variant="light">How We Work</Subheading>
              <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">Simple, Transparent Process</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {workflow.map((item) => (
              <article key={item.step} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-2">
                <div className="text-sm font-bold uppercase leading-tight tracking-wide text-red-500">{item.step}</div>
                <div className="text-[24px] font-bold leading-[1.2] tracking-wide text-white">{item.title}</div>
                <p className="text-white/70">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
