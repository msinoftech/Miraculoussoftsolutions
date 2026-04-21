import Contactform from "./Contactform";

export default function Getintouch() {
  return (
    <section className="bg-[#e9e9e9] py-16 px-4">
      <div className="max-w-7xl mx-auto bg-[#0b0b0d] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="p-10 flex flex-col justify-center">
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white/30">Start a Conversation</div>
            <h2 className="text-[28px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">
              Let’s Build
              <br />
              Something <span className="text-red-600">Great.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/45">Whether you are shaping a new SaaS product, modernising an internal platform, or scaling enterprise operations, we help turn complex ideas into strong, usable systems.</p>
        </div>

        {/* RIGHT FORM */}
        <div className="relative p-10 border-t lg:border-t-0 lg:border-l border-gray-800">
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-b from-red-500/20 to-transparent blur-2xl"></div>
          <div className="text-white text-2xl font-bold flex items-center gap-2 mb-2">GET IN TOUCH</div>
          <p className="text-gray-400 mb-8">Tell us about your project and we’ll get back to you shortly.</p>
          <Contactform />
        </div>
      </div>
    </section>
  );
}
