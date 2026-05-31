"use client";
import { motion } from "framer-motion";
import { BrainCircuit, ArrowRight, terminal, Zap, ChevronRight } from "lucide-react";
import Link from "next/link";

const featuredLogs = [
  {
    category: "Performance",
    title: "Optimizing 100k+ Row Data Grids",
    snippet: "React's reconciliation was choking on live WebSocket updates. Here's how I offloaded diffing to Web Workers...",
  },
  {
    category: "Architecture",
    title: "Migrating Legacy Vue to Next.js 15",
    snippet: "Implementing a Strangler Fig pattern to migrate a massive platform without downtime...",
  }
];

export const PlaybookTeaser = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <div className="md:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <BrainCircuit className="w-4 h-4" /> Engineering Lab
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Beyond the <br /> 
              <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">User Interface.</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              I don't just build components; I solve architectural bottlenecks. 
              Discover my technical logs on performance, security, and scalable systems.
            </p>
            <Link 
              href="/playbook" 
              className="group inline-flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-blue-500/10"
            >
              Explore Full Playbook
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="md:w-2/3 w-full space-y-4">
            {featuredLogs.map((log, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/[0.08] transition-colors cursor-pointer group relative"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-tighter mb-2 block">
                      Case Study: {log.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {log.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                      {log.snippet}
                    </p>
                  </div>
                  <div className="shrink-0 p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
                
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 group-hover:h-1/2 bg-blue-500 transition-all duration-300" />
              </motion.div>
            ))}
            
            <div className="pt-4 flex items-center gap-4 text-slate-600 font-mono text-xs italic">
              <Zap className="w-3 h-3" />
              <span>more technical deep-dives archived in the ledger...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};