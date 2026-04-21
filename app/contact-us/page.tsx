import Link from "next/link";
import Getintouch from "../components/Getintouch";
import { contactInfo } from "../lib/config";

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
      label: "Email Us",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      icon: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 491.52 491.52" xml:space="preserve" width="50px" height="50px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect y="85.914" style="fill:#F6C358;" width="491.52" height="319.693"></rect> <polygon style="fill:#FCD462;" points="245.76,217.258 491.52,405.604 0,405.604 "></polygon> <polygon style="fill:#DC8744;" points="245.76,291.673 0,85.916 491.52,85.916 "></polygon> <polygon style="fill:#FCD462;" points="245.76,274.261 0,85.916 491.52,85.916 "></polygon> </g></svg>`,
    },
    {
      label: "Call Direct",
      value: `+91 ${contactInfo.phone}`,
      href: `tel:${cleanedPhone}`,
      icon: `<svg width="50px" height="50px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M834.133333 149.333333h-78.933333C473.6 153.6 151.466667 514.133333 149.333333 755.2v78.933333c0 21.333333 17.066667 40.533333 40.533334 40.533334l160-2.133334c21.333333 0 40.533333-19.2 40.533333-40.533333l4.266667-174.933333-100.266667-85.333334c0-55.466667 224-279.466667 281.6-281.6l91.733333 100.266667 168.533334-4.266667c21.333333 0 40.533333-19.2 40.533333-40.533333L874.666667 189.866667c0-23.466667-17.066667-40.533333-40.533334-40.533334z" fill="#009688"></path></g></svg>`,
    },
    {
      label: "WhatsApp",
      value: "Quick Project Chat",
      href: `https://wa.me/${cleanedPhone.replace(/^\+/, "")}`,
      icon: `<svg width="50px" height="50px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0"></path> <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"></path> <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse"> <stop stop-color="#5BD066"></stop> <stop offset="1" stop-color="#27B43E"></stop> </linearGradient> </defs> </g></svg>`,
    },
  ];

  return (
    <div className="bg-[var(--bg)] text-zinc-900">
      <section className="border-b border-zinc-200 bg-gradient-to-b from-white via-zinc-50 to-zinc-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Contact Us</p>
          <h1 className="mt-3 max-w-4xl text-4xl uppercase leading-[0.95] text-zinc-950 sm:text-6xl lg:text-7xl">
            Let&apos;s Build Your
            <span className="text-red-600"> Next Digital Product</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600">
            From SaaS platforms to enterprise automation, we design and engineer reliable digital products
            that move your business forward.
          </p>
          <p className="mt-3 text-sm font-bold leading-6 text-zinc-500"><i>Based in {contactInfo.address}, we collaborate with clients across India and globally.</i></p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/#services" className="inline-flex h-11 items-center justify-center bg-zinc-950 px-6 text-sm font-semibold tracking-[0.06em] text-white transition hover:bg-red-600">
              EXPLORE SERVICES
            </Link>
            <a href={`mailto:${contactInfo.email}`} className="inline-flex h-11 items-center justify-center border border-zinc-300 bg-white px-6 text-sm font-semibold tracking-[0.06em] text-zinc-900 transition hover:border-zinc-900">
              EMAIL OUR TEAM
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-zinc-100 via-zinc-50 to-zinc-100 py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-3">
          {contactWays.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("https://") ? "_blank" : undefined}
              rel={item.href.startsWith("https://") ? "noopener noreferrer" : undefined}
              className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/55 p-6 shadow-[0_8px_28px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:bg-white/65 hover:shadow-[0_14px_34px_rgba(15,23,42,0.12)]"
            >
              <span className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-400/20 blur-2xl transition duration-300 group-hover:scale-110`} />
              <div className="relative">
                <div className="mb-5 flex items-start justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/60 bg-white/70 text-xl">
                    <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">Priority</span>
                </div>

                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-600">{item.label}</p>
                <p className="mt-2 text-xl font-semibold leading-tight text-zinc-950">{item.value}</p>

                <div className="mt-6 flex items-center justify-between border-t border-zinc-300/60 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.13em] text-zinc-500">Fast Response</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-zinc-950 px-3 py-1 text-xs font-semibold text-white transition group-hover:bg-red-600">
                    Connect
                    <span className="transition group-hover:translate-x-0.5">→</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">How We Work</p>
              <h2 className="mt-2 text-3xl uppercase text-white sm:text-5xl">Simple, Transparent Process</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {workflow.map((item) => (
              <article key={item.step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs font-bold tracking-[0.16em] text-red-500">{item.step}</p>
                <h3 className="mt-2 text-2xl uppercase text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Getintouch />
    </div>
  );
}
