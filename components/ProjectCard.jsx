import { FileText, ShieldAlert, Lock, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ImageSlider } from "./Imageslider";

export const projects = [
  {
    title: "High-Frequency Data Grid",
    category: "personal",
    type: "Personal Engineering Project",
    status: "live",
    images: ["/images/performance.webp"],
    desc: "A proof-of-concept for handling 100k+ live data rows without UI blocking.",
    fullDesc: "Built with Next.js 15, Web Workers, and React 19 features to demonstrate high-performance virtualization. The goal was to maintain 60fps while processing high-frequency WebSocket updates on the client side without freezing the main thread.",
    tags: ["Next.js 15", "Web Workers", "Virtualization", "Performance"],
    link: "https://neginshafaei.github.io/performance-grid-demo/",
  },
  {
    title: "Immigo Migration Platform",
    category: "work",
    type: "Saba System (Startup Product)",
    status: "live",
    images: ["/images/immigo-blog.webp", "/images/immigo-dash.webp", "/images/immigo-home.webp", "/images/immigo-landing.webp", "/images/immigo-admin.webp"],
    desc: "A platform connecting immigrants with lawyers. Led the migration from Legacy Vue to Next.js.",
    fullDesc: "Immigo operates as a separate startup entity under Saba System. We focused heavily on SEO optimization, performance scores (Core Web Vitals), and creating a scalable Micro-frontend architecture.",
    tags: ["Next.js", "Docker", "Micro-frontend", "SEO", "Migration"],
    link: "https://immigo.org",
  },
  {
    title: "SIEM Mavara Security Core",
    category: "work",
    type: "Saba System Sadra (Enterprise)",
    status: "offline",
    images: ["/images/sss-logo.jpg"],
    desc: "Core development for a SIEM (Security Information and Event Management) system used for threat detection.",
    fullDesc: "This project involved upgrading and maintaining the core modules of 'Mavara', a strictly internal SIEM product used for monitoring enterprise security events. Due to the critical nature of the infrastructure and security protocols, the source code is completely isolated and cannot be shared publicly (Strict NDA).",
    tags: ["React", "Cybersecurity", "Big Data", "Legacy Upgrade"],
    note: "Classified / Security NDA",
  },
  {
    title: "Fintech Trading Dashboard",
    category: "work",
    type: "Samfintech",
    status: "offline",
    images: ["/images/samfintech-logo.jpg"],
    desc: "Real-time trading interface with complex charting and WebSocket data streams.",
    fullDesc: "Developed a professional trading terminal for B2B clients. Features include real-time candlestick charts, order book visualization, and sub-millisecond data updates via WebSockets.",
    tags: ["React", "WebSockets", "Redux", "Data Viz"],
    note: "Internal B2B Product",
  },
  {
    title: "Ajor Nik E-commerce",
    category: "work",
    type: "Ajor Nik (Contract)",
    status: "offline",
    images: ["/images/ajor-cart.webp", "/images/ajor-inquiry.webp"],
    desc: "A dedicated e-commerce platform for construction materials with a custom admin dashboard.",
    fullDesc: "Developed a performant B2C e-commerce application using Next.js, achieving high SEO rankings for construction keywords. Integrated Firebase Cloud Messaging (FCM) for real-time order status updates.",
    tags: ["Next.js", "Firebase", "Push Notification", "E-commerce"],
    note: "Internal B2B Product",
  },
  {
    title: "German Railway Navigator",
    category: "personal",
    type: "Technical Assignment (PANTOhealth)",
    status: "live",
    images: ["/images/station-io.webp"], 
    desc: "Interactive map visualization for German train stations with real-time filtering and 'Fly-To' animations.",
    fullDesc:
      "A high-performance mapping application built with React 19 and Leaflet.js. It features centralized state management via Zustand, a robust 'Data Guard' system for coordinate normalization, and smooth UI interactions. The project includes a comprehensive unit testing suite using Vitest and React Testing Library to ensure reliable filtering logic.",
    tags: ["React 19", "Leaflet.js", "Zustand", "Vitest", "Tailwind"],
    link: "https://station-io.vercel.app/",
  },
];

export const ProjectCard = ({ project, onOpen }) => (
  <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
    <ImageSlider images={project.images} altTitle={project.title} className="h-48 w-full border-b border-slate-100" overlayStatus={
      <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm backdrop-blur-md border ${project.status === "live" ? "bg-green-500/90 text-white border-green-400" : "bg-slate-800/90 text-white border-slate-700"}`}>
        {project.status === "live" ? "Live Demo" : "NDA / Offline"}
      </span>
    } />
    <div className="p-5 flex-1 flex flex-col">
      <h3 className="text-lg font-bold text-slate-900 mb-1">{project.title}</h3>
      <p className="text-xs text-slate-500 mb-3 font-mono">{project.type}</p>
      <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">{project.desc}</p>
      <button onClick={() => onOpen(project)} className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 mb-6 w-fit hover:underline"><FileText className="w-3 h-3" /> Read Details</button>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">{tag}</span>
        ))}
      </div>
    </div>
    <div className="p-3 bg-slate-50 border-t border-slate-100">
      {project.status === "live" ? (
        <Link href={project.link || "#"} target="_blank" className="flex items-center justify-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 py-1">View Live Project <ExternalLink className="w-3 h-3" /></Link>
      ) : (
        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 py-1">
          {project.note?.includes("Security") ? <ShieldAlert className="w-3 h-3 text-amber-600" /> : <Lock className="w-3 h-3" />}
          <span>{project.note}</span>
        </div>
      )}
    </div>
  </motion.div>
);