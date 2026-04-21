"use client";
import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

type NodeDef = {
  id: string;
  label: string;
  x: number; // normalized 0..1
  y: number; // normalized 0..1
  radius: number;
  color: string;
  ring?: boolean;
  critical?: boolean;
};

type RouteDef = {
  id: string;
  from: string;
  to: string;
  color: string;
};

type Particle = {
  routeId: string;
  t: number;
  speed: number;
  color: string;
  size: number;
};

export default function CommandCenterTopology() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let time = 0;

    const pointer = {
      x: -9999,
      y: -9999,
      active: false,
    };

    const nodes: NodeDef[] = [
      { id: "edgeA", label: "Ingress", x: 0.12, y: 0.24, radius: 11, color: "#ff6b57", critical: true },
      { id: "edgeB", label: "Events", x: 0.12, y: 0.72, radius: 11, color: "#ff925c" },

      { id: "api", label: "API Gateway", x: 0.30, y: 0.18, radius: 10, color: "#7c8cff" },
      { id: "auth", label: "Auth", x: 0.30, y: 0.40, radius: 10, color: "#63d7ff", ring: true },
      { id: "queue", label: "Queue", x: 0.30, y: 0.68, radius: 10, color: "#36d6c8" },

      { id: "orchestrator", label: "Control Plane", x: 0.50, y: 0.43, radius: 16, color: "#ffffff", ring: true, critical: true },

      { id: "search", label: "Search", x: 0.68, y: 0.16, radius: 10, color: "#55a2ff" },
      { id: "cache", label: "Cache", x: 0.68, y: 0.39, radius: 10, color: "#38bdf8", ring: true },
      { id: "workers", label: "Workers", x: 0.68, y: 0.67, radius: 10, color: "#2f7cf6" },

      { id: "output", label: "Delivery", x: 0.86, y: 0.24, radius: 11, color: "#3b82f6", critical: true },
      { id: "insights", label: "Insights", x: 0.86, y: 0.72, radius: 11, color: "#22c55e" },
    ];

    const routes: RouteDef[] = [
      { id: "r1", from: "edgeA", to: "api", color: "#ff6b57" },
      { id: "r2", from: "edgeA", to: "auth", color: "#ff6b57" },
      { id: "r3", from: "edgeB", to: "auth", color: "#ff925c" },
      { id: "r4", from: "edgeB", to: "queue", color: "#ff925c" },

      { id: "r5", from: "api", to: "orchestrator", color: "#8aa0ff" },
      { id: "r6", from: "auth", to: "orchestrator", color: "#63d7ff" },
      { id: "r7", from: "queue", to: "orchestrator", color: "#36d6c8" },

      { id: "r8", from: "orchestrator", to: "search", color: "#60a5fa" },
      { id: "r9", from: "orchestrator", to: "cache", color: "#38bdf8" },
      { id: "r10", from: "orchestrator", to: "workers", color: "#2563eb" },

      { id: "r11", from: "search", to: "output", color: "#60a5fa" },
      { id: "r12", from: "cache", to: "output", color: "#38bdf8" },
      { id: "r13", from: "workers", to: "insights", color: "#2563eb" },
      { id: "r14", from: "cache", to: "insights", color: "#22c55e" },
    ];

    const particles: Particle[] = [
      { routeId: "r1", t: 0.12, speed: 0.0031, color: "#ff6b57", size: 2.3 },
      { routeId: "r2", t: 0.58, speed: 0.0025, color: "#ff6b57", size: 2.4 },
      { routeId: "r4", t: 0.34, speed: 0.0027, color: "#ff925c", size: 2.6 },

      { routeId: "r5", t: 0.18, speed: 0.003, color: "#8aa0ff", size: 2.4 },
      { routeId: "r6", t: 0.47, speed: 0.0034, color: "#63d7ff", size: 2.7 },
      { routeId: "r7", t: 0.76, speed: 0.0028, color: "#36d6c8", size: 2.5 },

      { routeId: "r8", t: 0.28, speed: 0.0032, color: "#60a5fa", size: 2.8 },
      { routeId: "r9", t: 0.62, speed: 0.0033, color: "#38bdf8", size: 2.8 },
      { routeId: "r10", t: 0.16, speed: 0.0029, color: "#2563eb", size: 2.9 },

      { routeId: "r11", t: 0.49, speed: 0.0025, color: "#60a5fa", size: 2.4 },
      { routeId: "r12", t: 0.22, speed: 0.0028, color: "#38bdf8", size: 2.4 },
      { routeId: "r13", t: 0.72, speed: 0.0029, color: "#2563eb", size: 2.5 },
      { routeId: "r14", t: 0.35, speed: 0.0026, color: "#22c55e", size: 2.5 },
    ];

    const getNodePoint = (id: string): Point => {
      const node = nodes.find((n) => n.id === id)!;
      return {
        x: node.x * width,
        y: node.y * height,
      };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      width = parent.clientWidth;
      height = parent.clientHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const roundRect = (x: number, y: number, w: number, h: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    };

    const drawBackground = () => {
      const bg = ctx.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0, "#02050d");
      bg.addColorStop(0.55, "#050a14");
      bg.addColorStop(1, "#020611");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      for (let x = 0; x < width; x += 36) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(95,120,160,0.07)";
        ctx.lineWidth = 1;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += 36) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(95,120,160,0.07)";
        ctx.lineWidth = 1;
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const leftGlow = ctx.createRadialGradient(width * 0.18, height * 0.25, 0, width * 0.18, height * 0.25, width * 0.26);
      leftGlow.addColorStop(0, "rgba(255,90,90,0.08)");
      leftGlow.addColorStop(1, "rgba(255,90,90,0)");
      ctx.fillStyle = leftGlow;
      ctx.fillRect(0, 0, width, height);

      const centerGlow = ctx.createRadialGradient(width * 0.52, height * 0.42, 0, width * 0.52, height * 0.42, width * 0.22);
      centerGlow.addColorStop(0, "rgba(59,130,246,0.10)");
      centerGlow.addColorStop(1, "rgba(59,130,246,0)");
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);

      const rightGlow = ctx.createRadialGradient(width * 0.82, height * 0.68, 0, width * 0.82, height * 0.68, width * 0.28);
      rightGlow.addColorStop(0, "rgba(34,197,94,0.08)");
      rightGlow.addColorStop(1, "rgba(34,197,94,0)");
      ctx.fillStyle = rightGlow;
      ctx.fillRect(0, 0, width, height);
    };

    const drawFrame = () => {
      roundRect(18, 18, width - 36, height - 36, 28);
      ctx.fillStyle = "rgba(5,10,18,0.78)";
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.08)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      roundRect(34, 34, width - 68, height - 68, 22);
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.stroke();
    };

    const drawHeader = () => {
      ctx.fillStyle = "rgba(255,255,255,0.92)";
      ctx.font = "600 14px Inter, Arial, sans-serif";
      ctx.fillText("Realtime Command Center", 48, 58);

      ctx.fillStyle = "rgba(148,163,184,0.88)";
      ctx.font = "500 11px Inter, Arial, sans-serif";
      ctx.fillText("Topology · Routing · Orchestration · State", 48, 76);

      const lights = ["#22c55e", "#3b82f6", "#f59e0b"];
      lights.forEach((color, i) => {
        const x = width - 88 + i * 16;
        const y = 57;
        ctx.beginPath();
        ctx.arc(x, y, 4.3, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    const drawZonePanels = () => {
      const zones = [
        { x: width * 0.05, y: height * 0.14, w: width * 0.18, h: height * 0.68, label: "Ingress Layer" },
        { x: width * 0.24, y: height * 0.10, w: width * 0.16, h: height * 0.72, label: "Service Mesh" },
        { x: width * 0.42, y: height * 0.18, w: width * 0.16, h: height * 0.48, label: "Control Plane" },
        { x: width * 0.60, y: height * 0.10, w: width * 0.16, h: height * 0.72, label: "Runtime Layer" },
        { x: width * 0.77, y: height * 0.14, w: width * 0.16, h: height * 0.68, label: "Delivery Layer" },
      ];

      zones.forEach((z) => {
        const hovered =
          pointer.x >= z.x &&
          pointer.x <= z.x + z.w &&
          pointer.y >= z.y &&
          pointer.y <= z.y + z.h;

        roundRect(z.x, z.y, z.w, z.h, 18);
        ctx.fillStyle = hovered ? "rgba(59,130,246,0.045)" : "rgba(255,255,255,0.015)";
        ctx.fill();
        ctx.strokeStyle = hovered ? "rgba(96,165,250,0.22)" : "rgba(255,255,255,0.04)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = hovered ? "rgba(255,255,255,0.94)" : "rgba(148,163,184,0.72)";
        ctx.font = "500 11px Inter, Arial, sans-serif";
        ctx.fillText(z.label, z.x + 14, z.y + 18);
      });
    };

    const getRoutePoints = (route: RouteDef): Point[] => {
      const from = getNodePoint(route.from);
      const to = getNodePoint(route.to);
      const dx = to.x - from.x;
      const midX = lerp(from.x, to.x, 0.5);

      return [
        from,
        { x: midX - dx * 0.06, y: from.y },
        { x: midX + dx * 0.06, y: to.y },
        to,
      ];
    };

    const drawCurvedRoute = (pts: Point[], color: string, active = false) => {
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      ctx.bezierCurveTo(pts[1].x, pts[1].y, pts[2].x, pts[2].y, pts[3].x, pts[3].y);

      ctx.strokeStyle = active ? color.replace(")", ", 0.45)").replace("rgb", "rgba") : "rgba(120,140,180,0.16)";
      ctx.lineWidth = active ? 2.5 : 1.6;
      ctx.stroke();
    };

    const drawRoutes = () => {
      routes.forEach((route, i) => {
        const pts = getRoutePoints(route);
        drawCurvedRoute(pts, route.color, false);

        const pulse = (Math.sin(time * 0.002 + i * 0.9) + 1) * 0.5;
        if (pulse > 0.68) {
          ctx.beginPath();
          ctx.moveTo(pts[0].x, pts[0].y);
          ctx.bezierCurveTo(pts[1].x, pts[1].y, pts[2].x, pts[2].y, pts[3].x, pts[3].y);
          ctx.strokeStyle = `${route.color}33`;
          ctx.lineWidth = 4.5;
          ctx.stroke();
        }
      });
    };

    const cubicBezier = (p0: Point, p1: Point, p2: Point, p3: Point, t: number): Point => {
      const mt = 1 - t;
      const x =
        mt * mt * mt * p0.x +
        3 * mt * mt * t * p1.x +
        3 * mt * t * t * p2.x +
        t * t * t * p3.x;

      const y =
        mt * mt * mt * p0.y +
        3 * mt * mt * t * p1.y +
        3 * mt * t * t * p2.y +
        t * t * t * p3.y;

      return { x, y };
    };

    const drawParticles = () => {
      particles.forEach((p, index) => {
        const route = routes.find((r) => r.id === p.routeId)!;
        const pts = getRoutePoints(route);

        p.t += p.speed;
        if (p.t > 1) p.t = 0;

        const pos = cubicBezier(pts[0], pts[1], pts[2], pts[3], p.t);

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, p.size * 3.2, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, p.size * 3.2);
        glow.addColorStop(0, `${p.color}66`);
        glow.addColorStop(1, `${p.color}00`);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 14 + (index % 3) * 2;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    const drawNode = (node: NodeDef) => {
      const p = getNodePoint(node.id);
      const dx = pointer.x - p.x;
      const dy = pointer.y - p.y;
      const dist = Math.hypot(dx, dy);
      const hover = dist < node.radius + 22;
      const pulse = 1 + Math.sin(time * 0.003 + node.x * 10) * 0.05;
      const radius = node.radius * pulse * (hover ? 1.12 : 1);

      if (hover) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 3.6, 0, Math.PI * 2);
        const hoverGlow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 3.6);
        hoverGlow.addColorStop(0, `${node.color}30`);
        hoverGlow.addColorStop(1, `${node.color}00`);
        ctx.fillStyle = hoverGlow;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, radius * (node.critical ? 2.1 : 1.8), 0, Math.PI * 2);
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * (node.critical ? 2.1 : 1.8));
      g.addColorStop(0, `${node.color}30`);
      g.addColorStop(1, `${node.color}00`);
      ctx.fillStyle = g;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.shadowColor = node.color;
      ctx.shadowBlur = node.critical ? 24 : 18;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(2, radius * 0.3), 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.95)";
      ctx.fill();

      ctx.fillStyle = hover ? "rgba(255,255,255,0.96)" : "rgba(226,232,240,0.88)";
      ctx.font = hover ? "600 12px Inter, Arial, sans-serif" : "500 12px Inter, Arial, sans-serif";
      ctx.fillText(node.label, p.x - 22, p.y + 28);
    };

    const drawRotatingRings = () => {
      nodes
        .filter((n) => n.ring)
        .forEach((node, index) => {
          const p = getNodePoint(node.id);
          const baseR = node.radius + 10;
          const a1 = time * 0.0012 + index;
          const a2 = -time * 0.0009 - index * 0.6;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(a1);
          ctx.beginPath();
          ctx.arc(0, 0, baseR, 0.2, 1.55);
          ctx.strokeStyle = `${node.color}88`;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(0, 0, baseR + 5, 2.5, 3.6);
          ctx.strokeStyle = `${node.color}44`;
          ctx.lineWidth = 1.1;
          ctx.stroke();
          ctx.restore();

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(a2);
          ctx.beginPath();
          ctx.arc(0, 0, baseR + 9, 4.2, 5.05);
          ctx.strokeStyle = `${node.color}55`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
          ctx.restore();
        });
    };

    const drawCoreField = () => {
      const core = nodes.find((n) => n.id === "orchestrator")!;
      const p = getNodePoint(core.id);

      for (let i = 0; i < 3; i++) {
        const r = 26 + i * 12 + Math.sin(time * 0.002 + i) * 1.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.strokeStyle = i === 0 ? "rgba(255,255,255,0.18)" : "rgba(96,165,250,0.10)";
        ctx.lineWidth = i === 0 ? 1.2 : 1;
        ctx.stroke();
      }

      const rotatingMarkers = 4;
      for (let i = 0; i < rotatingMarkers; i++) {
        const angle = time * 0.0015 + (Math.PI * 2 * i) / rotatingMarkers;
        const r = 38;
        const x = p.x + Math.cos(angle) * r;
        const y = p.y + Math.sin(angle) * r;

        ctx.beginPath();
        ctx.arc(x, y, 2.3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(147,197,253,0.95)";
        ctx.shadowColor = "#93c5fd";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const drawScanSweep = () => {
      const y = 100 + ((time * 0.05) % (height - 180));
      const gradient = ctx.createLinearGradient(0, y - 18, 0, y + 18);
      gradient.addColorStop(0, "rgba(59,130,246,0)");
      gradient.addColorStop(0.5, "rgba(59,130,246,0.10)");
      gradient.addColorStop(1, "rgba(59,130,246,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(34, y - 18, width - 68, 36);
    };

    const drawHudCards = () => {
      const cards = [
        { x: width * 0.06, y: height * 0.83, w: 154, label: "Latency", value: "42ms", dot: "#22c55e" },
        { x: width * 0.31, y: height * 0.83, w: 164, label: "Routes Active", value: "14", dot: "#3b82f6" },
        { x: width * 0.60, y: height * 0.83, w: 176, label: "System Health", value: "Stable", dot: "#22c55e" },
      ];

      cards.forEach((card) => {
        roundRect(card.x, card.y, card.w, 46, 14);
        ctx.fillStyle = "rgba(15,23,42,0.72)";
        ctx.fill();
        ctx.strokeStyle = "rgba(148,163,184,0.12)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(card.x + 16, card.y + 23, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = card.dot;
        ctx.shadowColor = card.dot;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.fillStyle = "rgba(148,163,184,0.9)";
        ctx.font = "500 11px Inter, Arial, sans-serif";
        ctx.fillText(card.label, card.x + 28, card.y + 18);

        ctx.fillStyle = "rgba(255,255,255,0.94)";
        ctx.font = "600 13px Inter, Arial, sans-serif";
        ctx.fillText(card.value, card.x + 28, card.y + 34);
      });
    };

    const drawPointerResponse = () => {
      if (!pointer.active) return;

      ctx.beginPath();
      ctx.arc(pointer.x, pointer.y, 18 + Math.sin(time * 0.01) * 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(96,165,250,0.14)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(pointer.x, pointer.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(147,197,253,0.9)";
      ctx.fill();
    };

    const render = () => {
      time += 16;

      ctx.clearRect(0, 0, width, height);

      drawBackground();
      drawFrame();
      drawHeader();
      drawZonePanels();
      drawScanSweep();
      drawRoutes();
      drawParticles();
      drawCoreField();
      drawRotatingRings();
      nodes.forEach(drawNode);
      drawHudCards();
      //drawPointerResponse();

      raf = requestAnimationFrame(render);
    };

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };

    const handleLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    render();

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-[30px] border border-white/10 bg-[#020611] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,107,87,0.08),transparent_24%),radial-gradient(circle_at_52%_40%,rgba(59,130,246,0.10),transparent_26%),radial-gradient(circle_at_82%_72%,rgba(34,197,94,0.08),transparent_26%)]" />
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}