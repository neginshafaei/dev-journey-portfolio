"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldAlert, Lock, Briefcase, Code2 } from "lucide-react";
import Link from "next/link";
import { ImageSlider } from "./Imageslider";
import { projects, ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const filtered = projects.filter(p => activeTab === "all" || p.category === activeTab);

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">The Lab & Case Studies</h2>
            <p className="text-slate-600">Engineering demos and professional enterprise projects.</p>
          </div>
          {/* Tab Switcher */}
          <div className="flex p-1 bg-slate-200/50 rounded-xl border border-slate-200 w-fit">
             {[ {id:"all", label:"All"}, {id:"work", label:"Work", icon: Briefcase}, {id:"personal", label:"Labs", icon: Code2} ].map((t) => (
              <button key={t.id} onClick={() => setActiveTab(t.id)} className={`relative px-4 py-2 text-xs font-bold transition-colors ${activeTab === t.id ? "text-blue-600" : "text-slate-500"}`}>
                <span className="relative z-10 flex items-start gap-2">{t.icon && <t.icon className="w-3.5 h-3.5"/>} {t.label}</span>
                {activeTab === t.id && <motion.div layoutId="activeTab" className="absolute inset-0 bg-white rounded-lg shadow-sm" transition={{ type: "spring", duration: 0.5 }} />}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} onOpen={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[85vh]">
              <div className="relative w-full shrink-0">
                <ImageSlider images={selectedProject.images} altTitle={selectedProject.title} className="h-64 sm:h-80 w-full" />
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm"><X className="w-5 h-5" /></button>
              </div>
              <div className="p-6 overflow-y-auto custom-scrollbar">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">{selectedProject.title}</h3>
                  {selectedProject.status === "offline" && <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-xs font-bold border border-amber-100"><ShieldAlert className="w-3 h-3" /> NDA</div>}
                </div>
                <p className="text-sm text-slate-500 mb-6 font-mono border-b border-slate-100 pb-4">{selectedProject.type}</p>
                <p className="text-slate-700 leading-7 mb-8">{selectedProject.fullDesc || selectedProject.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">{selectedProject.tags.map((tag) => (<span key={tag} className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-md border border-blue-100 font-medium">{tag}</span>))}</div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between items-center">
                  {selectedProject.status === "live" ? (
                    <Link href={selectedProject.link || "#"} target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-bold flex items-center gap-2">Launch Project <ExternalLink className="w-4 h-4" /></Link>
                  ) : (
                    <div className="flex items-center gap-3 text-slate-500 text-sm"><Lock className="w-4 h-4" /><span className="font-medium">NDA Restricted ({selectedProject.note})</span></div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};