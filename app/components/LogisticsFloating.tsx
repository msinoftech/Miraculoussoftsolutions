"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-10">
      <div className="relative w-full max-w-5xl h-[500px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden">

        {/* SVG */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 500"
        >
          <defs>
            {/* Animated Gradient */}
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee">
                <animate
                  attributeName="offset"
                  values="-1;1"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#38bdf8">
                <animate
                  attributeName="offset"
                  values="0;2"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#0ea5e9">
                <animate
                  attributeName="offset"
                  values="1;3"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            {/* Glow */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Glow Path */}
          <path
            d="M100 400 Q300 100 600 300 T900 200"
            stroke="url(#flowGradient)"
            strokeWidth="8"
            fill="transparent"
            filter="url(#glow)"
            className="neon-path"
          />

          {/* Main Path */}
          <path
            id="routePath"
            d="M100 400 Q300 100 600 300 T900 200"
            stroke="url(#flowGradient)"
            strokeWidth="3"
            fill="transparent"
            className="neon-path"
          />

          {/* Moving Light */}
          <circle r="6" fill="#22d3ee">
            <animateMotion dur="5s" repeatCount="indefinite">
              <mpath href="#routePath" />
            </animateMotion>
          </circle>
        </svg>

        {/* Nodes */}
        {[
          { x: "12%", y: "70%", label: "Hub", icon: "🏭" },
          { x: "29%", y: "40%", label: "Fleet", icon: "🚚" },
          { x: "54%", y: "61%", label: "Route", icon: "🛣️" },
          { x: "75%", y: "28%", label: "WMS", icon: "📦" },
          { x: "88%", y: "68%", label: "Delivered", icon: "📬" },
        ].map((node, i) => (
          <div
            key={i}
            className="absolute flex flex-col items-center node"
            style={{
              left: node.x,
              top: node.y,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            <div className="absolute w-14 h-14 rounded-full bg-cyan-400/20 pulse" />

            <div className="relative z-10 bg-slate-800 border border-cyan-400 text-cyan-400 p-3 rounded-full shadow-lg text-lg">
              {node.icon}
            </div>

            <span className="mt-2 text-sm text-white">
              {node.label}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}