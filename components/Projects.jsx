"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Lock, FileText, ShieldAlert, X } from "lucide-react";
import Link from "next/link";
import { ImageSlider } from "./Imageslider";

const projects = [
  {
    title: "High-Frequency Data Grid",
    type: "Personal Engineering Project",
    status: "live",
    images: ["/images/performance.webp"],
    desc: "A proof-of-concept for handling 100k+ live data rows without UI blocking.",
    fullDesc:
      "Built with Next.js 15, Web Workers, and React 19 features to demonstrate high-performance virtualization. The goal was to maintain 60fps while processing high-frequency WebSocket updates on the client side without freezing the main thread.",
    tags: ["Next.js 15", "Web Workers", "Virtualization", "Performance"],
    link: "https://neginshafaei.github.io/performance-grid-demo/",
  },
  {
    title: "Immigo Migration Platform",
    type: "Saba System (Startup Product)",
    status: "live",
    images: [
      "/images/immigo-blog.webp",
      "/images/immigo-dash.webp",
      "/images/immigo-home.webp",
      "/images/immigo-landing.webp",
      "/images/immigo-admin.webp",
    ],
    desc: "A platform connecting immigrants with lawyers. Led the migration from Legacy Vue to Next.js.",
    fullDesc:
      "As the Front-End Team Lead at Immigo, I architected the migration of this massive platform from a legacy Vue 2 codebase to a modern Next.js ecosystem. Immigo operates as a separate startup entity under Saba System. We focused heavily on SEO optimization, performance scores (Core Web Vitals), and creating a scalable Micro-frontend architecture.",
    tags: ["Next.js", "Docker", "Micro-frontend", "SEO", "Migration"],
    link: "https://immigo.org",
  },
  {
    title: "SIEM Mavara Security Core",
    type: "Saba System Sadra (Enterprise)",
    status: "offline",
    images: ["/images/sss-logo.jpg"],
    desc: "Core development for a SIEM (Security Information and Event Management) system used for threat detection.",
    fullDesc:
      "This project involved upgrading and maintaining the core modules of 'Mavara', a strictly internal SIEM product used for monitoring enterprise security events. Due to the critical nature of the infrastructure and security protocols, the source code is completely isolated and cannot be shared publicly (Strict NDA). The work involved optimizing heavy data pipelines and legacy code refactoring.",
    tags: ["React", "Cybersecurity", "Big Data", "Legacy Upgrade"],
    note: "Classified / Security NDA",
  },
  {
    title: "Fintech Trading Dashboard",
    type: "Samfintech",
    status: "offline",
    images: ["/images/samfintech-logo.jpg"],
    desc: "Real-time trading interface with complex charting and WebSocket data streams.",
    fullDesc:
      "Developed a professional trading terminal for B2B clients. Features include real-time candlestick charts, order book visualization, and sub-millisecond data updates via WebSockets. The challenge was to manage state for thousands of ticks per second efficiently.",
    tags: ["React", "WebSockets", "Redux", "Data Viz"],
    note: "Internal B2B Product",
  },
  {
    title: "Ajor Nik E-commerce",
    type: "Ajor Nik (Contract)",
    status: "offline",
    images: ["/images/ajor-cart.webp", "/images/ajor-inquiry.webp"],
    desc: "A dedicated e-commerce platform for construction materials with a custom admin dashboard.",
    fullDesc:
      "Developed a performant B2C e-commerce application using Next.js, achieving high SEO rankings for construction keywords. Integrated Firebase Cloud Messaging (FCM) for real-time order status updates and cart abandonment recovery. The project also included a custom-built admin panel for managing complex inventory and tracking orders.",
    tags: ["Next.js", "Firebase", "Push Notification", "E-commerce"],
    note: "Internal B2B Product",
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          The Lab & Case Studies
        </h2>
        <p className="text-slate-600 mb-12">
          A mix of live engineering demos, startups, and enterprise security
          projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              layoutId={`card-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <ImageSlider
                images={project.images}
                altTitle={project.title}
                className="h-48 w-full border-b border-slate-100"
                overlayStatus={
                  <span
                    className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm backdrop-blur-md border ${
                      project.status === "live"
                        ? "bg-green-500/90 text-white border-green-400"
                        : "bg-slate-800/90 text-white border-slate-700"
                    }`}
                  >
                    {project.status === "live" ? "Live Demo" : "NDA / Offline"}
                  </span>
                }
              />

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 mb-3 font-mono">
                  {project.type}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.desc}
                </p>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 mb-6 w-fit hover:underline"
                >
                  <FileText className="w-3 h-3" /> Read Details
                </button>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] text-slate-400 px-1 py-1">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-3 bg-slate-50 border-t border-slate-100">
                {project.status === "live" ? (
                  <Link
                    href={project.link || "#"}
                    target="_blank"
                    className="flex items-center justify-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors py-1"
                  >
                    View Live Project <ExternalLink className="w-3 h-3" />
                  </Link>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500 py-1">
                    {project.note?.includes("Security") ? (
                      <ShieldAlert className="w-3 h-3 text-amber-600" />
                    ) : (
                      <Lock className="w-3 h-3" />
                    )}
                    <span>{project.note}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              <div className="relative w-full shrink-0">
                <ImageSlider
                  images={selectedProject.images}
                  altTitle={selectedProject.title}
                  className="h-64 sm:h-80 w-full"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto custom-scrollbar">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.status === "offline" && (
                    <div className="flex w-fit items-center gap-1 text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-xs font-bold border border-amber-100">
                      <ShieldAlert className="w-3 h-3" /> NDA Protected
                    </div>
                  )}
                </div>

                <p className="text-sm text-slate-500 mb-6 font-mono border-b border-slate-100 pb-4">
                  {selectedProject.type}
                </p>

                <div className="prose prose-slate prose-sm max-w-none mb-8">
                  <p className="text-slate-700 leading-7 text-base">
                    {selectedProject.fullDesc || selectedProject.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-md border border-blue-100 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between items-center">
                  {selectedProject.status === "live" ? (
                    <Link
                      href={selectedProject.link || "#"}
                      target="_blank"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-bold transition-colors flex items-center gap-2"
                    >
                      Launch Project <ExternalLink className="w-4 h-4" />
                    </Link>
                  ) : (
                    <div className="flex items-center gap-3 text-slate-500 text-sm">
                      <div className="bg-slate-200 p-2 rounded-full">
                        <Lock className="w-4 h-4" />
                      </div>
                      <span className="font-medium">
                        Source code is not available due to NDA (
                        {selectedProject.note})
                      </span>
                    </div>
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
