import React from "react";

const nodeBase = "relative flex h-14 w-fit items-center justify-center rounded-md text-center text-sm font-semibold px-4 py-2";

function Node({
  children,
  className,
  delayClass = "",
}: {
  children: React.ReactNode;
  className: string;
  delayClass?: string;
}) {
  return (
    <div className={`${nodeBase} ${className} ${delayClass} animate-[fadeInUp_.7s_ease-out_both]`}>
      <span className="relative z-10 leading-tight">{children}</span>
    </div>
  );
}

function StaticLine({
  className,
  rotate = 0,
  active = false,
}: {
  className: string;
  rotate?: number;
  active?: boolean;
}) {
  return (
    <div className={`absolute origin-left overflow-hidden rounded-full ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
      <div className={`absolute inset-0 rounded-full ${active ? "bg-red-600" : "bg-gray-400"}`} />
      <div className={`absolute top-1/2 h-2.5 w-16 -translate-y-1/2 rounded-full ${ active ? "bg-white" : "bg-white" } blur-[1px] animate-[flow_2.6s_linear_infinite]`}/>
    </div>
  );
}

function SoftGlow({ className }: { className: string }) {
  return <div className={`absolute rounded-full blur-3xl ${className}`} />;
}

export default function ProfessionalProcessAnimation() {
  return (
    <section className="relative overflow-hidden rounded-[28px] mt-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,59,45,0.09),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(27,82,255,0.09),transparent_40%)]" />
      
      <div className="relative mb-5 flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">Delivery Model Preview</div>
          <div className="mt-1 text-[24px] font-extrabold tracking-[-0.02em] text-zinc-950">Idea to Launch Framework</div>
          <p className="mt-1 max-w-xl text-[13px] leading-6 text-zinc-500">A visual flow of how we move from strategy to execution with predictable delivery.</p>
        </div>
      </div>

      <div className="relative">
        <div className="relative mx-auto h-[390px] animate-[fadeIn_.8s_ease-out_both] sm:h-[430px] lg:h-[470px] lg:rounded-[30px]">
          <SoftGlow className="left-[40%] top-[34%] h-36 w-36 bg-red-600/30" />
          <SoftGlow className="right-[18%] top-[34%] h-40 w-40 bg-indigo-600/30" />
          <SoftGlow className="left-[39%] top-[10%] h-28 w-28 bg-black/30" />

          <div className="absolute inset-0 animate-[floatSoft_7s_ease-in-out_infinite]">
            <StaticLine className="left-[19.6%] top-[50%] h-[2px] w-[30%]" active />
            <StaticLine className="left-[19.6%] top-[50%] h-[2px] w-[30%]" rotate={-34} />
            <StaticLine className="left-[19.6%] top-[50%] h-[2px] w-[30%]" rotate={34} />

            <StaticLine className="left-[57%] top-[50%] h-[2px] w-[13%]" active />
            <StaticLine className="left-[57%] top-[26%] h-[2px] w-[30%]" rotate={30} />
            <StaticLine className="left-[57%] top-[68.5%] h-[2px] w-[30%]" rotate={-30} />
          </div>

          <div className="absolute left-[6%] top-[44%] sm:left-[8%] lg:left-[10%] w-fit">
            <Node delayClass="[animation-delay:.1s]" className="bg-white text-black border-black/10 border">CLIENT</Node>
          </div>

          <div className="absolute left-[36.5%] top-[10%] sm:left-[38.5%] lg:left-[40%]">
            <div className="animate-[floatDown_6s_ease-in-out_infinite]">
              <Node delayClass="[animation-delay:.25s]" className="bg-black text-white border-black/10 border">STRATEGY</Node>
            </div>
          </div>

          <div className="absolute left-[36.5%] top-[44%] sm:left-[38.5%] lg:left-[40%]">
            <div className="relative animate-[pulseFloat_3.2s_ease-in-out_infinite]">
              <div className="absolute inset-[-14px] rounded-[30px] border border-[#ef3b2d]/18" />
              <div className="absolute inset-[-26px] rounded-[36px] border border-[#ef3b2d]/10" />
              <Node delayClass="[animation-delay:.4s]" className="bg-red-600 text-white">PRODUCT</Node>
            </div>
          </div>

          <div className="absolute left-[36.5%] top-[74%] sm:left-[38.5%] lg:left-[40%]">
            <div className="animate-[floatSoft_6.5s_ease-in-out_infinite]">
              <Node delayClass="[animation-delay:.55s]" className="bg-zinc-200 text-black border-gray-200 border">DELIVERY</Node>
            </div>
          </div>

          <div className="absolute left-[68.5%] top-[44%] sm:left-[70%] lg:left-[72%]">
            <div className="relative animate-[floatSoft_4.2s_ease-in-out_infinite]">
              <div className="absolute inset-[-18px] rounded-[32px] bg-[#1b52ff]/10 blur-2xl" />
              <Node delayClass="[animation-delay:.7s]" className="bg-indigo-600 text-white">
                <span className="block leading-[1.15]">
                  LAUNCH
                  <br />
                  &amp; SCALE
                </span>
              </Node>
            </div>
          </div>

          <div className="absolute left-[44.7%] top-[27%] text-[9px] font-semibold uppercase tracking-[0.22em] text-black/25 sm:left-[45.1%] sm:text-[10px] lg:left-[45.6%] lg:text-[11px] lg:tracking-[0.28em]">plan</div>
          <div className="absolute left-[44.5%] top-[61%] text-[9px] font-semibold uppercase tracking-[0.22em] text-[#ef3b2d]/60 sm:left-[44.9%] sm:text-[10px] lg:left-[45.3%] lg:text-[11px] lg:tracking-[0.28em]">build</div>
          <div className="absolute left-[44.2%] top-[91%] -translate-y-full text-[9px] font-semibold uppercase tracking-[0.22em] text-black/25 sm:left-[44.7%] sm:text-[10px] lg:left-[45.1%] lg:text-[11px] lg:tracking-[0.28em]">execute</div>

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[var(--border)] bg-white/85 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-zinc-500 backdrop-blur sm:text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
            Discovery
            <span className="h-1.5 w-1.5 rounded-full bg-[#ef3b2d]" />
            Build
            <span className="h-1.5 w-1.5 rounded-full bg-[#1b52ff]" />
            Launch
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(14px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes flow {
          0% { transform: translate(-30%, -50%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translate(135%, -50%); opacity: 0; }
        }
        @keyframes floatSoft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes floatDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        @keyframes pulseFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-3px) scale(1.018); }
        }
      `}</style>
    </section>
  );
}
