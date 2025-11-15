"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Moon, Sun, Coffee, Briefcase } from "lucide-react";

export const AvailabilityWidget = () => {
  const [mounted, setMounted] = useState(false);
  const [timeData, setTimeData] = useState({
    time: "00:00",
    ampm: "AM",
    status: "Loading...",
    icon: Sun,
    color: "bg-slate-400",
  });

  useEffect(() => {
    setMounted(true);

    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Tehran",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };

      const formatter = new Intl.DateTimeFormat("en-US", options);
      const timeString = formatter.format(now);

      const [rawTime, ampm] = timeString.split(" ");

      const hour24 = parseInt(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Tehran",
          hour: "numeric",
          hour12: false,
        }).format(now)
      );

      let statusConfig = { text: "Online", icon: Sun, color: "bg-emerald-500" };

      if (hour24 >= 8 && hour24 < 18) {
        statusConfig = {
          text: "Focus Mode / Coding",
          icon: Sun,
          color: "bg-emerald-500",
        };
      } else if (hour24 >= 18 && hour24 < 23) {
        statusConfig = {
          text: "Decompressing",
          icon: Coffee,
          color: "bg-amber-500",
        };
      } else {
        statusConfig = {
          text: "Recharging (Sleep)",
          icon: Moon,
          color: "bg-indigo-500",
        };
      }

      setTimeData({
        time: rawTime,
        ampm: ampm,
        status: statusConfig.text,
        icon: statusConfig.icon,
        color: statusConfig.color,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); 

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const StatusIcon = timeData.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }} 
      className="fixed bottom-4 right-4 z-50 hidden md:flex flex-col gap-2"
    >
      <div className="bg-white/90 backdrop-blur-md border border-slate-200/60 p-3 rounded-xl shadow-lg flex items-center gap-3">
        <div className="relative flex items-center justify-center w-8 h-8 bg-blue-50 text-blue-600 rounded-full">
          <Briefcase className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500 border border-white"></span>
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
            Status
          </span>
          <span className="text-xs font-bold text-slate-800">Open to Work</span>
        </div>
      </div>

      {/* بخش 2: ساعت و موقعیت مکانی */}
      <div className="bg-slate-900/90 backdrop-blur-md text-white p-4 rounded-xl shadow-xl flex items-center gap-4 min-w-[200px]">
        {/* آیکون وضعیت (ماه/خورشید) */}
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/10 shrink-0`}
        >
          <StatusIcon className="w-5 h-5 text-slate-200" />
        </div>

        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-mono font-bold tracking-tight">
              {timeData.time}
            </span>
            <span className="text-[10px] font-bold text-slate-400">
              {timeData.ampm}
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-0.5">
            <Globe className="w-3 h-3 text-slate-500" />
            <span className="text-[10px] font-medium text-slate-300">
              Tehran, Iran
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-1.5">
            <div
              className={`w-1.5 h-1.5 rounded-full ${timeData.color} shadow-[0_0_8px_rgba(255,255,255,0.3)]`}
            />
            <span className="text-[10px] text-slate-400 font-medium">
              {timeData.status}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
