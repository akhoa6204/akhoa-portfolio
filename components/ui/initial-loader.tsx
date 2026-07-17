"use client";

import { useEffect, useState } from "react";

export function InitialLoader() {
  const [progress, setProgress] = useState(1);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const startedAt = performance.now();
    const minimumDuration = 1000;

    const timer = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;

      const timedProgress = Math.min(
        100,
        Math.floor((elapsed / minimumDuration) * 100),
      );

      setProgress((current) => {
        const step = current < 70 ? 3 : current < 92 ? 2 : 1;

        return Math.min(100, Math.max(current + step, timedProgress));
      });
    }, 20);

    const finishTimer = window.setTimeout(() => {
      setProgress(100);

      window.setTimeout(() => {
        setVisible(false);
      }, 180);
    }, minimumDuration);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(finishTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-black text-white transition-opacity duration-150 ${
        progress === 100 ? "opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-label={`Loading portfolio ${progress}%`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-white/5" />
      </div>

      <div className="relative flex w-full max-w-md flex-col items-center px-6">
        <p className="mb-6 text-[10px] uppercase tracking-[0.42em] text-white/40">
          Phan Nguyễn Anh Khoa
        </p>

        <div className="flex items-end">
          <span className="text-[clamp(5rem,18vw,10rem)] font-semibold leading-none tracking-[-0.09em] tabular-nums">
            {String(progress).padStart(2, "0")}
          </span>

          <span className="mb-3 ml-3 text-xl font-light text-white/40">%</span>
        </div>

        <div className="mt-8 h-px w-full overflow-hidden bg-white/15">
          <div
            className="h-full bg-white transition-[width] duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 flex w-full items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/35">
          <span>Loading portfolio</span>
          <span>Firebase</span>
        </div>
      </div>
    </div>
  );
}
