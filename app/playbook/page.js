"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { playbookEntries } from "@/data/playbook";
import {
  BookOpen,
  Filter,
  ArrowRight,
  BrainCircuit,
  Activity,
  Box,
} from "lucide-react";
import Link from "next/link";

export default function PlaybookPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? playbookEntries
      : playbookEntries.filter((e) => e.category === filter);

  return (
    <main className="min-h-screen bg-[#fafafa] pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Engineering <span className="text-blue-600">Ledger</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            A technical journal documenting complex problems, architectural
            trade-offs, and the solutions that actually worked.
          </p>
        </header>

        {/* <div className="flex flex-wrap gap-3 mb-12 border-b border-slate-200 pb-8">
          {["All", "Architecture", "Performance", "Problem Solving", "DX"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat
                    ? "bg-slate-900 text-white shadow-lg"
                    : "bg-white text-slate-500 border border-slate-200 hover:border-slate-400"
                }`}
              >
                {cat}
              </button>
            ),
          )}
        </div> */}

        <div className="grid gap-8">
          {filtered.map((entry) => (
            <motion.div
              key={entry.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/5 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* <div className="md:w-1/4">
                  <span className="text-xs font-black text-blue-600 uppercase tracking-widest block mb-2">
                    {entry.category}
                  </span>
                  <div className="text-slate-400 text-sm font-mono mb-4">
                    {entry.date}
                  </div>
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold border ${
                      entry.level === "Expert"
                        ? "border-purple-200 bg-purple-50 text-purple-600"
                        : "border-blue-100 bg-blue-50 text-blue-600"
                    }`}
                  >
                    <Activity className="w-3 h-3" /> {entry.level}
                  </div>
                </div> */}

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {entry.title}
                  </h2>

                  <div className="space-y-6">
                    <section>
                      <h4 className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-tighter flex items-center gap-1">
                        <Box className="w-3 h-3" /> The Context
                      </h4>
                      <p className="text-slate-600 text-sm line-clamp-2 italic">
                        &quot;{entry.context}&quot;
                      </p>
                    </section>

                    <section className="grid md:grid-cols-2 gap-6 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                      <div>
                        <h4 className="text-[10px] font-black text-red-500 uppercase mb-2 flex items-center gap-1">
                          <BrainCircuit className="w-3 h-3" /> The Challenge
                        </h4>
                        <p className="text-slate-900 text-sm font-medium leading-relaxed">
                          {entry.problem}
                        </p>
                      </div>
                      <div className="border-l border-slate-200 pl-6">
                        <h4 className="text-[10px] font-black text-emerald-500 uppercase mb-2 flex items-center gap-1">
                          <BookOpen className="w-3 h-3" /> The Play
                        </h4>
                        <p className="text-slate-900 text-sm font-medium leading-relaxed">
                          {entry.solution}
                        </p>
                      </div>
                    </section>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex gap-2">
                      {entry.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                    {/* <button className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      Read Full Analysis <ArrowRight className="w-4 h-4" />
                    </button> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
