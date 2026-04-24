"use client";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import DevelopmentProcess from "@/app/components/DevelopmentProcess";

const features = [
  {
    number: "",
    title: "Brand Identity Systems",
    description: "Build a strong visual and messaging foundation with logo direction, voice guidelines, and consistent brand assets for every channel.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers-icon lucide-layers"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>`,
  },
  {
    number: "",
    title: "Digital Marketing Strategy",
    description: "Create channel-specific growth plans for search, social, paid campaigns, and content with clear goals, timelines, and KPI targets.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-fork-icon lucide-git-fork"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/></svg>`,
    
  },
  {
    number: "",
    title: "Social Media Growth",
    description: "Increase audience trust and engagement through platform-native content calendars, community management, and campaign execution.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
  },
  {
    number: "",
    title: "Content & Creative Production",
    description: "Deliver high-converting creative assets, campaign visuals, and brand-led copy built to perform across digital touchpoints.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot-icon lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
  },
  {
    number: "",
    title: "SEO & Organic Visibility",
    description: "Improve rankings and discoverability through technical SEO, on-page optimization, content structure, and search intent mapping.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-icon lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  },
  {
    number: "",
    title: "Performance Analytics & CRO",
    description: "Track full-funnel performance, optimize conversion paths, and scale campaigns with data-backed experiments and reporting.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole-icon lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>`,
  },
];

const steps = [
  {
    num: "01",
    title: "Brand & Market Discovery",
    body: "We audit your brand presence, audience segments, competitors, and channel opportunities to define a clear digital growth direction.",
    tag: "Research",
  },
  {
    num: "02",
    title: "Positioning & Strategy Blueprint",
    body: "We craft your positioning, messaging pillars, campaign priorities, and channel mix so every activity supports one growth roadmap.",
    tag: "Strategy",
  },
  {
    num: "03",
    title: "Creative & Content Production",
    body: "Our team produces branded visuals, content assets, ad creatives, and communication templates designed for consistency and performance.",
    tag: "Creative",
  },
  {
    num: "04",
    title: "Campaign Launch & Activation",
    body: "We deploy campaigns across SEO, social, paid ads, and email with precise audience targeting, tracking setup, and conversion flows.",
    tag: "Execution",
  },
  {
    num: "05",
    title: "Optimization & Scale",
    body: "Using live performance data, we iterate creatives, improve conversion rates, and scale winning campaigns to maximize long-term ROI.",
    tag: "Growth",
  },
];

const benefits = [
  {
    no: "01",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
    title: "Stronger Brand Recall",
    body: "We shape distinct brand systems and messaging that help your business stay memorable across social, search, ads, and customer touchpoints.",
  },
  {
    no: "02",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
    title: "Higher Quality Leads",
    body: "Our campaign strategy focuses on intent-based targeting and optimized funnels, bringing in better-fit leads that are more likely to convert.",
  },
  {
    no: "03",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2-icon lucide-settings-2"><path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>`,
    title: "Consistent Multi-Channel Execution",
    body: "From SEO and content to paid ads and social media, we execute with one unified strategy so your brand voice stays consistent everywhere.",
  },
  {
    no: "04",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake-icon lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>`,
    title: "Data-Backed Growth Partnership",
    body: "You get transparent reporting, continuous optimization, and a team focused on measurable growth outcomes, not vanity metrics.",
  },
];

const marqueeItems = [
  "Branding and Digital Growth",
  "Digital Marketing",
  "Social Media Management",
  "Content Creation",
  "SEO Optimization",
  "Paid Advertising",
  "Email Marketing",
  "Analytics and Reporting",
  "Social Media Management",
  "Content Creation",
  "SEO Optimization",
  "Paid Advertising",
  "Email Marketing",
  "Analytics and Reporting",
];

const metrics = [
  ["100+", "Digital Marketing Campaigns"],
  ["99%", "Social Media Management"],
  ["MVP", "Content Creation"],
  ["Scale", "SEO Optimization"],
];

const pills = [
  "SEO Strategy",
  "Paid Ads",
  "Social Growth",
  "Content Marketing",
  "Lead Funnels",
  "Conversion CRO",
  "Email Campaigns",
  "Performance Analytics",
];

const chartHeights = ["h-[40%]", "h-[52%]", "h-[60%]", "h-[74%]", "h-[84%]", "h-[92%]"];

export default function BrandingAndDigitalGrowthServicesPage() {
    return (
    <>
    {/* HERO */}
    <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />
        <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-10 px-4 lg:grid-cols-[1fr_390px] z-10">
          {/* Left Column */}
          <div className="space-y-5">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />Branding and Digital Growth Services
            </div>
            <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
              <span className="block">BRANDING</span>
              <span className="text-red-600">DIGITAL</span>
              <span className="hero-outline outline-black">GROWTH</span>
            </h1>
            <p className="max-w-xl text-[15px] leading-8 text-zinc-500">We design and develop modern mobile apps with{" "} <strong> scalable architecture, premium dashboards, subscription billing, role-based access, and growth-ready systems </strong>{" "} that are built to launch fast and scale with confidence.</p>

            <div className="flex flex-wrap items-center gap-4">
                <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                        Start Your Project
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
                <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                        View Portfolio
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {metrics.map(([n, l]) => (
                <div key={l}>
                  <div className="font-bebas-neue text-3xl leading-none text-zinc-950">{n}</div>
                  <div className="text-sm font-semibold text-zinc-950">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative mx-auto aspect-square w-full max-w-[320px] xl:ml-auto xl:mr-0 xl:max-w-[450px]">
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
            <div className="absolute inset-[42px] rounded-full border border-red-500/25 hero-ring-2" />
            <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />

            <div className="absolute inset-[88px] rounded-full border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(145deg,rgba(18,26,58,0.98),rgba(9,12,25,0.98))] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_38px_rgba(0,0,0,0.35)] md:inset-[116px]">
              <div className="relative h-full w-full">
                <div className="absolute left-1/2 top-1/2 h-[190px] w-[108px] -translate-x-[62%] -translate-y-1/2 rounded-[24px] border border-white/15 bg-[linear-gradient(180deg,#0f172a,#020617)] p-[4px] shadow-[0_24px_44px_rgba(0,0,0,0.55)] md:h-[322px] md:w-[205px] md:rounded-[30px]">
                  <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-[linear-gradient(160deg,#111827,#1e293b,#312e81)] p-2 md:rounded-[25px] md:p-3">
                    <div className="absolute left-1/2 top-1.5 h-1 w-8 -translate-x-1/2 rounded-full bg-white/35 md:top-2 md:w-10" />
                    <div className="mb-2 mt-3 rounded-lg border border-white/10 bg-white/[0.07] p-1.5 md:mb-3 md:p-2">
                      <div className="mb-1 h-2 w-16 rounded-full bg-white/20 md:w-24" />
                      <div className="h-6 rounded-md bg-gradient-to-r from-blue-500/90 via-violet-500/90 to-red-500/85 md:h-8 flex items-center">
                        <div className="text-[8px] font-bold uppercase tracking-[0.08em] text-blue-100 md:px-3 md:text-[10px]">
                          Social Growth
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 rounded-lg border border-white/10 bg-white/[0.06] p-1.5 md:mb-3 md:p-2">
                      <div className="mb-1.5 text-[8px] font-bold uppercase tracking-[0.08em] text-blue-200 md:text-[10px]">Growth Apps</div>
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1877F2] text-[9px] font-bold text-white md:h-6 md:w-6 md:text-[10px]">f</span>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E1306C] text-[8px] font-bold text-white md:h-6 md:w-6 md:text-[9px]">ig</span>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF0000] text-[8px] font-bold text-white md:h-6 md:w-6 md:text-[9px]">yt</span>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0A66C2] text-[8px] font-bold text-white md:h-6 md:w-6 md:text-[9px]">in</span>
                      </div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/[0.06] p-1.5 md:p-2">
                      <div className="mb-2 flex items-end gap-1 md:gap-1.5">
                        <span className="h-4 flex-1 rounded-sm bg-blue-400/50 md:h-6" />
                        <span className="h-6 flex-1 rounded-sm bg-blue-400/70 md:h-8" />
                        <span className="h-8 flex-1 rounded-sm bg-violet-400/75 md:h-11" />
                        <span className="h-10 flex-1 rounded-sm bg-red-400/80 md:h-14" />
                      </div>
                      <div className="text-[8px] font-semibold uppercase tracking-[0.08em] text-white/70 md:text-[10px]">Campaign Momentum</div>
                    </div>
                    <div className="mt-2">
                    <div className="rounded-full border border-red-300/25 bg-red-500/15 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.08em] text-red-100 md:px-3 md:text-[10px]">
                      Ads + SEO
                    </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-[40%] -bottom-[50%] text-[24px] drop-shadow-[0_6px_10px_rgba(0,0,0,0.45)] md:text-[64px]">🚀</div>
              </div>
            </div>

            <div className="absolute right-8 top-[54px] flex animate-bounce items-center gap-2 whitespace-nowrap rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,30,0.84)] px-4 py-3 text-[12px] font-bold text-[#3B82F6] shadow-[0_10px_24px_rgba(0,0,0,0.2)] [animation-duration:4.5s]">📱 Social Media Growth</div>
            <div className="absolute bottom-[76px] left-0 flex animate-bounce items-center gap-2 whitespace-nowrap rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,30,0.84)] px-4 py-3 text-[12px] font-bold text-[#E02020] shadow-[0_10px_24px_rgba(0,0,0,0.2)] [animation-duration:4.5s] [animation-delay:1.4s]">💰 Paid Ads 5X ROI</div>
            <div className="absolute bottom-[150px] left-2 flex animate-bounce items-center gap-2 whitespace-nowrap rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,30,0.84)] px-4 py-3 text-[12px] font-bold text-emerald-500 shadow-[0_10px_24px_rgba(0,0,0,0.2)] [animation-duration:4.5s] [animation-delay:0.8s]">📊 SEO Ranking Boost</div>
          </div>
        </div>
    </section>

    {/* Marquee Section */}
    <Marquee items={marqueeItems} />

    {/* OVERVIEW */}
    <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
        <div className="relative mx-auto w-full max-w-7xl px-4">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
                
                <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01)),linear-gradient(135deg,rgba(26,86,219,0.10),rgba(224,32,32,0.10))] p-6">
                    <div className="grid h-full min-h-[368px] grid-rows-[auto_1fr] gap-6 rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(10,10,10,0.78)] p-6">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex gap-2">
                            <span className="h-[9px] w-[9px] rounded-full bg-red-600" />
                            <span className="h-[9px] w-[9px] rounded-full bg-blue-500" />
                            <span className="h-[9px] w-[9px] rounded-full bg-zinc-500" />
                        </div>
                        <div className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-200">Live Marketing Dashboard</div>
                    </div>

                    <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-[1.2fr_0.8fr]">
                        <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                            <div>
                                <div className="mb-4 flex items-center justify-between gap-3">
                                    <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-zinc-500">Campaign Reach</div>
                                    <div className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase text-blue-200">+37.2%</div>
                                </div>
                                <div className="font-bebas-neue text-4xl leading-none text-white">2.6M</div>
                            </div>

                            <div className="flex h-[170px] items-end gap-[10px]">
                                {chartHeights.map((height, index) => (
                                <div key={index} className={`flex-1 rounded-t-[10px] bg-gradient-to-b from-blue-500 to-red-600 opacity-90 ${height}`}/>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Lead Conversion</div>
                                <div className="font-bebas-neue text-4xl leading-none text-white">8.9%</div>
                                <div className="text-[12px] font-bold text-green-500">Above benchmark</div>
                            </div>

                            <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Cost Per Lead</div>
                                <div className="font-bebas-neue text-4xl leading-none text-white">$14</div>
                                <div className="text-[12px] font-bold text-green-500">-21% optimized</div>
                            </div>

                            <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">ROAS</div>
                                <div className="font-bebas-neue text-4xl leading-none text-white">4.7x</div>
                                <div className="text-[12px] font-bold text-green-500">Profitable scale</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                
                <div className="relative space-y-4">
                    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                        <span className="h-[2px] w-7 bg-red-600" />
                        Why Digital Growth With Us
                    </div>
                    <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">DIGITAL MARKETING BUILT FOR <span className="text-red-600">REAL RESULTS</span></h2>

                    <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">We combine strategy, creative direction, and performance execution to deliver <strong className="text-white"> measurable visibility, qualified leads, and stronger digital positioning</strong>.</p>
                    <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">From SEO and paid media to social content and conversion funnels, every channel is aligned to <strong className="text-white"> one growth roadmap focused on ROI</strong>, not disconnected activities.</p>
                    <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">You get a partner that continuously tests, improves, and scales campaigns so your brand keeps winning attention, trust, and revenue over time.</p>

                    <div className="mt-7 flex flex-wrap gap-[10px]">
                    {pills.map((item) => (
                        <span key={item} className="rounded-full border border-[rgba(59,130,246,0.32)] bg-[rgba(26,86,219,0.08)] px-4 py-2 text-[12px] font-bold uppercase tracking-[1px] text-[#3B82F6]">{item}</span>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    {/* CORE CAPABILITIES */}
    <Card
      label="What We Build"
      title={
        <>
          Digital Growth <br />
          <span className="text-red-600">Strategy and Execution</span>
        </>
      }
      description="From MVP platforms to mature enterprise portals, we create SaaS systems engineered for usability, speed, flexibility, and scale."
      items={features}
    />
    
    {/* Digital Growth Process */}
    <DevelopmentProcess
      steps={steps}
      label="Digital Growth Process"
      title={
        <>
          IDEA TO <span className="text-red-600">SCALABLE DIGITAL GROWTH</span>
        </>
      }
      description="We turn digital growth concepts into high-performance digital growth through structured discovery, smart architecture, premium UX, and launch-ready engineering."
    />
    
    {/* BUSINESS BENEFITS */}
    <BoxCard
          items={benefits}
          label="Why Choose Us"
          title={
            <>
              A Strong Fit for
              <br />
              <span className="text-red-600">Digital Founders, Teams</span> 
              <br />
              and Growing Brands
            </>
          }
          description="We build with business clarity, engineering depth, and premium execution so your digital growth feels credible from the first interaction to long-term scale."
          headerClassName="mb-12 text-left"
    />

    {/* CTA STRIP */}
    <CtaStrip
      title={
        <>
          READY TO GROW
          <br />
          YOUR <span className="text-black">DIGITAL GROWTH?</span>
        </>
      }
      description="Let's design a digital growth strategy that is premium on the surface, strong in the backend, and ready for growth."
      buttonText="Get a Free Quote →"
      buttonHref="/"
    />

    </>
    );
}