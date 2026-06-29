"use client";

import React, { useEffect, useRef } from "react";

/* ─────────────────────────── types ─────────────────────────── */
interface NeuralNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  glow: number;   // 0-1 current glow
  glowDir: number; // +1 / -1
  glowSpd: number;
  type: "cpu" | "node"; // cpu nodes are bigger/static ish
}

interface BinaryDrop {
  x: number;
  y: number;
  vy: number;
  chars: string[];
  len: number;       // trail length
  opacity: number;
  charTimer: number;
  charInterval: number;
}

interface CircuitSegment {
  x1: number; y1: number;
  x2: number; y2: number;
  // animated pulse along the trace
  pulseT: number;   // 0-1 along segment
  pulseSpd: number;
  active: boolean;
}

/* ─────────────────────────── component ─────────────────────────── */
const TechBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let W = 0, H = 0;
    let nodes: NeuralNode[] = [];
    let drops: BinaryDrop[] = [];
    let circuits: CircuitSegment[] = [];
    let frame = 0;

    const CODE_CHARS = "01";
    const NODE_COUNT = 55;
    const DROP_COUNT = 90;
    const MAX_LINK_DIST = 180;
    const CIRCUIT_COUNT = 22;

    /* ── init ─────────────────────────────────────────────────── */
    function init() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;

      // Neural nodes
      nodes = Array.from({ length: NODE_COUNT }, (_, i) => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: i < 6 ? 5 + Math.random() * 3 : 2 + Math.random() * 2,
        glow: Math.random(),
        glowDir: Math.random() > 0.5 ? 1 : -1,
        glowSpd: 0.008 + Math.random() * 0.015,
        type: i < 6 ? "cpu" : "node",
      }));

      // Binary / code rain drops
      drops = Array.from({ length: DROP_COUNT }, () => {
        const len = 8 + Math.floor(Math.random() * 14);
        return {
          x: Math.random() * W,
          y: Math.random() * H - H,
          vy: 0.6 + Math.random() * 1.2,
          chars: Array.from({ length: len }, () =>
            CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]
          ),
          len,
          opacity: 0.08 + Math.random() * 0.18,
          charTimer: 0,
          charInterval: 6 + Math.floor(Math.random() * 10),
        };
      });

      // Circuit board segments (Manhattan-style L-shaped traces)
      circuits = [];
      for (let i = 0; i < CIRCUIT_COUNT; i++) {
        const x1 = Math.random() * W;
        const y1 = Math.random() * H;
        const horiz = Math.random() > 0.5;
        const len = 60 + Math.random() * 180;
        const x2 = horiz ? x1 + (Math.random() > 0.5 ? len : -len) : x1;
        const y2 = horiz ? y1 : y1 + (Math.random() > 0.5 ? len : -len);
        circuits.push({
          x1, y1, x2, y2,
          pulseT: Math.random(),
          pulseSpd: 0.003 + Math.random() * 0.006,
          active: Math.random() > 0.3,
        });
      }
    }

    /* ── helpers ─────────────────────────────────────────────── */
    function randBit() {
      return Math.random() > 0.5 ? "1" : "0";
    }

    /* ── draw ─────────────────────────────────────────────────── */
    function draw() {
      frame++;
      ctx.clearRect(0, 0, W, H);

      // ── 2. Circuit board traces ────────────────────────────────
      for (const seg of circuits) {
        if (!seg.active) continue;
        // static trace line
        ctx.beginPath();
        ctx.moveTo(seg.x1, seg.y1);
        ctx.lineTo(seg.x2, seg.y2);
        ctx.strokeStyle = "rgba(0, 220, 160, 0.08)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }


      // ── 3. Neural network links ────────────────────────────────
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > MAX_LINK_DIST) continue;

          const alpha = (1 - dist / MAX_LINK_DIST) * 0.22;
          const grad = ctx.createLinearGradient(
            nodes[i].x, nodes[i].y,
            nodes[j].x, nodes[j].y
          );
          grad.addColorStop(0, `rgba(120, 80, 255, ${alpha})`);
          grad.addColorStop(0.5, `rgba(0, 200, 255, ${alpha * 1.3})`);
          grad.addColorStop(1, `rgba(120, 80, 255, ${alpha})`);
          ctx.beginPath();
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.7;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }


      // ── 4. Neural nodes ───────────────────────────────────────
      for (const n of nodes) {
        // move
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;

        // pulse glow
        n.glow += n.glowDir * n.glowSpd;
        if (n.glow >= 1) { n.glow = 1; n.glowDir = -1; }
        if (n.glow <= 0) { n.glow = 0; n.glowDir = 1; }

        const glowR = n.r + n.glow * 8;
        const isCpu = n.type === "cpu";

        // outer aura only — no solid circle or square
        const aura = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR * (isCpu ? 4 : 3));
        aura.addColorStop(0, `rgba(${isCpu ? "0,220,160" : "140,80,255"}, ${0.35 * n.glow})`);
        aura.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.arc(n.x, n.y, glowR * (isCpu ? 4 : 3), 0, Math.PI * 2);
        ctx.fillStyle = aura;
        ctx.fill();
      }


      // ── 5. Binary / code rain ─────────────────────────────────
      ctx.font = "13px monospace";
      for (const d of drops) {
        d.y += d.vy;
        d.charTimer++;
        if (d.charTimer >= d.charInterval) {
          d.charTimer = 0;
          // randomly mutate one char
          const idx = Math.floor(Math.random() * d.chars.length);
          d.chars[idx] = randBit();
        }
        if (d.y > H + d.len * 15) {
          d.y = -d.len * 15;
          d.x = Math.random() * W;
        }

        for (let k = 0; k < d.chars.length; k++) {
          const cy = d.y - k * 15;
          if (cy < -15 || cy > H + 15) continue;
          // Leading char brighter + green, trail fades to blue-purple
          const isLead = k === 0;
          const fade = 1 - k / d.chars.length;
          if (isLead) {
            ctx.fillStyle = `rgba(180, 255, 200, ${d.opacity * 3.5})`;
          } else {
            ctx.fillStyle = `rgba(80, 160, 255, ${d.opacity * fade})`;
          }
          ctx.fillText(d.chars[k], d.x, cy);
        }
      }

      // ── 6. Horizontal scanning line ───────────────────────────
      const scanY = ((frame * 0.5) % H);
      const sg = ctx.createLinearGradient(0, scanY - 60, 0, scanY + 60);
      sg.addColorStop(0, "rgba(0, 200, 255, 0)");
      sg.addColorStop(0.5, "rgba(0, 200, 255, 0.03)");
      sg.addColorStop(1, "rgba(0, 200, 255, 0)");
      ctx.fillStyle = sg;
      ctx.fillRect(0, scanY - 60, W, 120);

      // ── 7. Subtle vignette ─────────────────────────────────────
      const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.25, W / 2, H / 2, H * 0.85);
      vig.addColorStop(0, "rgba(0,0,0,0)");
      vig.addColorStop(1, "rgba(4, 4, 30, 0.55)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);

      raf = requestAnimationFrame(draw);
    }

    /* ── resize & start ──────────────────────────────────────── */
    init();
    draw();

    const ro = new ResizeObserver(() => { init(); });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
};

export default TechBackground;
