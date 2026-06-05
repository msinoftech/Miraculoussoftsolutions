import Link from "next/link";
import Subheading from "./ui/Subheading";

const industries = [
    { 
      name: "Healthcare",
      href: "/industries/healthcare",
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-heart-pulse text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1324:22-1324:100" data-source-name="Icon"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>'
    },
    { 
      name: "Logistics",
      href: "/industries/logistics",
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-truck text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1324:22-1324:100" data-source-name="Icon"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>',
    },
    { 
      name: "Retail",
      href: "/industries/retail",
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-shopping-bag text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1324:22-1324:100" data-source-name="Icon"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>',
    },
    { 
      name: "Education",
      href: "/industries/education",
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-graduation-cap text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1324:22-1324:100" data-source-name="Icon"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>',
    },
    { 
      name: "Finance",
      href: "/industries/finance",
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-landmark text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1324:22-1324:100" data-source-name="Icon"><path d="M10 18v-7"></path><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>',
    },
    { 
      name: "Real Estate",
      href: "/industries/real-estate",
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-building2 lucide-building-2 text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1324:22-1324:100" data-source-name="Icon"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>',
    },
    { 
      name: "Professional",
      href: "/industries/professional-industries",
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-briefcase text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1324:22-1324:100" data-source-name="Icon"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>',
    },
    { 
      name: "Enterprise",
      href: "/industries/enterprise",
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-factory text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1324:22-1324:100" data-source-name="Icon"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg>',
    },
  ];

export default function IndustriesList() {
  return (
    <section id="industries" className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <Subheading variant="default">Industries</Subheading>
            <h2 className="text-[58px] text-zinc-900 uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">Where We <span className="text-red-600">Operate.</span></h2>
          </div>

          <div className="grid overflow-hidden rounded-xl border-2 border-zinc-950 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8">
            {industries.map((industry, index) => {
              return (
                <div key={industry.name} className={`group relative overflow-hidden px-4 py-8 text-center transition ${index !== industries.length - 1 ? "border-r border-[var(--border)]" : ""}`}>
                  <Link href={industry.href}>
                    <div className="absolute inset-0 translate-y-full bg-red-600 transition duration-300 group-hover:translate-y-0" />
                    <div className="relative z-10 space-y-3">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-white transition group-hover:border-white/25 group-hover:bg-white/10">
                        <span dangerouslySetInnerHTML={{ __html: industry.icon }} />
                      </div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.08em] transition group-hover:text-white">{industry.name}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  );
}