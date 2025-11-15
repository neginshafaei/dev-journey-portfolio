"use client";

import { useEffect, useState } from "react";
import { useReportWebVitals } from "next/web-vitals";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Zap, Server, ChevronUp, ChevronDown } from "lucide-react";

export const PerformanceMetrics = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState({
    lcp: 0,
    cls: 0,
    fps: 60,
  });

  const [fpsHistory, setFpsHistory] = useState(new Array(20).fill(60));

  useReportWebVitals((metric) => {
    switch (metric.name) {
      case "LCP":
        setMetrics((prev) => ({ ...prev, lcp: metric.value }));
        break;
      case "CLS":
        setMetrics((prev) => ({ ...prev, cls: metric.value }));
        break;
    }
  });

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationFrameId;

    const calculateFps = () => {
      const now = performance.now();
      frameCount++;

      if (now - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (now - lastTime));

        setFpsHistory((prev) => {
          const newHistory = [...prev.slice(1), fps];
          return newHistory;
        });

        setMetrics((prev) => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = now;
      }

      animationFrameId = requestAnimationFrame(calculateFps);
    };

    animationFrameId = requestAnimationFrame(calculateFps);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const getStatusColor = (value, type) => {
    if (type === "fps")
      return value > 50 ? "text-emerald-500" : "text-amber-500";
    if (type === "lcp")
      return value < 2500 ? "text-emerald-500" : "text-amber-500";
    if (type === "cls")
      return value < 0.1 ? "text-emerald-500" : "text-amber-500";
    return "text-slate-400";
  };

  const getCoordinates = (index, fps) => {
    const x = (index / (fpsHistory.length - 1)) * 100;

    const maxGraphFps = 70;
    const normalizedFps = Math.min(fps, maxGraphFps);

    const y = 95 - (normalizedFps / maxGraphFps) * 90;

    return { x, y };
  };

  const polylinePoints = fpsHistory
    .map((fps, i) => {
      const { x, y } = getCoordinates(i, fps);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed bottom-4 left-4 z-50 flex flex-col bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen ? "w-72" : "w-auto"
      }`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 p-3 cursor-pointer hover:bg-slate-50/50 transition-colors select-none"
      >
        <div className="relative flex items-center justify-center w-8 h-8 bg-blue-50 text-blue-600 rounded-full shrink-0">
          <Activity className="w-4 h-4" />
          <span className="absolute top-0 right-0 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white"></span>
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            {isOpen ? "System Status" : "Live Metrics"}
          </span>
          <span
            className={`text-xs font-mono font-bold ${getStatusColor(
              metrics.fps,
              "fps"
            )}`}
          >
            {metrics.fps} FPS {isOpen ? "" : " • Click to Expand"}
          </span>
        </div>

        <div className="ml-auto text-slate-400">
          {isOpen ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronUp className="w-4 h-4" />
          )}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-slate-100"
          >
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 flex flex-col">
                  <span className="text-[9px] text-slate-400 font-bold uppercase flex items-center gap-1">
                    <Zap className="w-3 h-3" /> LCP
                  </span>
                  <span
                    className={`text-sm font-mono font-bold mt-1 ${
                      metrics.lcp
                        ? getStatusColor(metrics.lcp, "lcp")
                        : "text-slate-300"
                    }`}
                  >
                    {metrics.lcp ? `${(metrics.lcp / 1000).toFixed(2)}s` : "--"}
                  </span>
                </div>

                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 flex flex-col">
                  <span className="text-[9px] text-slate-400 font-bold uppercase flex items-center gap-1">
                    <Server className="w-3 h-3" /> CLS
                  </span>
                  <span
                    className={`text-sm font-mono font-bold mt-1 ${getStatusColor(
                      metrics.cls,
                      "cls"
                    )}`}
                  >
                    {metrics.cls.toFixed(3)}
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-slate-100 p-2 shadow-inner">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[9px] text-slate-400 font-mono">
                    Real-time Load
                  </span>
                  <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1.5 rounded">
                    Live
                  </span>
                </div>

                <div className="h-16 w-full relative">
                  <svg
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#3b82f6"
                          stopOpacity="0.2"
                        />
                        <stop
                          offset="100%"
                          stopColor="#3b82f6"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <polygon
                      fill="url(#gradient)"
                      points={`0,100 ${polylinePoints} 100,100`}
                    />

                    <polyline
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                      points={polylinePoints}
                    />
                  </svg>
                </div>
              </div>

              <div className="text-[9px] text-center text-slate-400">
                Performance Monitor v1.2
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
