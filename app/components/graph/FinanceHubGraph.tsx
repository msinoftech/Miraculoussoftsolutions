"use client";

type FinanceCard = {
  icon: string;
  label: string;
  value: string;
};

type TransactionFlowItem = {
  label: string;
  width: number;
};

type FinanceHubGraphProps = {
  floatingCards: FinanceCard[];
  transactionFlow: TransactionFlowItem[];
};

export default function FinanceHubGraph({
  floatingCards,
  transactionFlow,
}: FinanceHubGraphProps) {
  return (
    <div className="relative hidden lg:block">
      <div className="relative overflow-hidden shadow-2xl shadow-black/40 backdrop-blur-2xl">
        <div className="rounded-2xl bg-white/5 p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-white">Finance Command Center</p>
              <div className="text-xl font-bold text-white">Real-Time Intelligence</div>
            </div>
            <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300">Live</div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {floatingCards.map((card) => (
              <div key={card.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <span dangerouslySetInnerHTML={{ __html: card.icon }} />
                <p className="mt-1 text-xl font-bold text-white">{card.value}</p>
                <p className="mt-1 text-sm text-white">{card.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-white/70">Transaction Flow</p>
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
              </span>
            </div>

            <div className="space-y-4">
              {transactionFlow.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex justify-between text-xs text-white/45">
                    <span>{item.label}</span>
                    <span>{item.width}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/8">
                    <div style={{ width: `${item.width}%` }} className="h-full rounded-full bg-gradient-to-r from-red-500 to-blue-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/15 to-white/[0.03] p-5">
              <p className="text-xs text-white">Monthly Volume</p>
              <p className="mt-2 text-xl font-bold text-white">$42.7M</p>
              <p className="mt-2 text-xs text-emerald-300">+21.6% growth</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-red-500/15 to-white/[0.03] p-5">
              <p className="text-xs text-white">Automation Queue</p>
              <p className="mt-2 text-xl font-bold text-white">8,420</p>
              <p className="mt-2 text-xs text-blue-300">Tasks processed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
