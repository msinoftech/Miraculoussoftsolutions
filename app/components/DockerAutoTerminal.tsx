"use client";
import { useEffect, useState } from "react";

export default function DockerAutoTerminal() {
  const tabs = ["dockerfile", "commands", "logs"];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);

  const content = {
    dockerfile: [
      "FROM node:18",
      "WORKDIR /app",
      "COPY package*.json ./",
      "RUN npm install",
      "COPY . .",
      "EXPOSE 3000",
      'CMD ["node", "server.js"]',
    ],
    commands: [
      "$ docker build -t my-app .",
      "$ docker run -p 3000:3000 my-app",
    ],
    logs: [
      "✔ Building Docker image...",
      "✔ Installing dependencies...",
      "✔ Image built successfully",
      "✔ Container started on port 3000",
      "Server running at http://localhost:3000",
    ],
  };

  const activeTab = tabs[activeTabIndex];

  // Typing animation
  useEffect(() => {
    setDisplayedLines([]);

    let lineIndex = 0;
    let charIndex = 0;

    const typing = setInterval(() => {
      const currentLine = content[activeTab as keyof typeof content][lineIndex];

      if (!currentLine) {
        clearInterval(typing);

        // Switch tab after delay
        setTimeout(() => {
          setActiveTabIndex((prev) => (prev + 1) % tabs.length);
        }, 1200);

        return;
      }

      setDisplayedLines((prev) => {
        const newLines = [...prev];
        if (!newLines[lineIndex]) newLines[lineIndex] = "" as unknown as never;
        newLines[lineIndex] = currentLine.slice(0, charIndex + 1) as unknown as never;
        return newLines;
      });

      charIndex++;

      if (charIndex === currentLine.length) {
        lineIndex++;
        charIndex = 0;
      }
    }, 18);

    return () => clearInterval(typing);
  }, [activeTabIndex]);

  return (
    <div className="rounded-2xl w-full border border-white/10 bg-zinc-950 shadow-[0_20px_80px_rgba(0,0,0,0.7)] overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900 px-4 py-2">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-white/60">Docker Live Terminal</span>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10 bg-zinc-950">
        {tabs.map((tab, i) => (
          <div key={tab} className={`px-4 py-2 text-xs font-semibold transition ${ activeTabIndex === i ? "text-cyan-400 border-b-2 border-cyan-400" : "text-white/40" }`}>
            {tab === "dockerfile"
              ? "Dockerfile"
              : tab === "commands"
              ? "Commands"
              : "Logs"}
          </div>
        ))}
      </div>

      {/* Terminal Body */}
      <div className="p-4 font-mono text-xs md:text-sm leading-6 text-white/80 min-h-[200px]">
        {displayedLines.map((line, index) => (
          <div key={index}>
            {(line as string).startsWith("$") ? (
              <span className="text-green-400">{line as string}</span>
            ) : (line as string).includes("✔") ? (
              <span className="text-emerald-400">{line as string}</span>
            ) : (
              <span>{line as string}</span>
            )}
          </div>
        ))}

        {/* Cursor */}
        <div className="flex items-center mt-1">
          <span className="text-green-400">$</span>
          <span className="ml-1 h-3 w-[6px] bg-green-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}