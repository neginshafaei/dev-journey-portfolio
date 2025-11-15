'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide uppercase mb-4 inline-block">
          Frontend Engineer
        </span>
        
        <h1 className="text-5xl leading-[93px] md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Scalable</span> <br />
          Web Experiences.
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Hi, I'm <strong className="text-slate-900">Negin Shafaei</strong>. 
          I specialize in building high-performance applications with 
          <span className="font-mono text-blue-600 mx-1">Next.js</span>, 
          optimizing <span className="font-mono text-blue-600 mx-1">Developer Experience (DX)</span>, 
          and leading engineering teams.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <Link href="https://github.com/negin-shafaei" target="_blank" className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
            <Github className="w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/negin-shafaei/" target="_blank" className="p-2 text-slate-500 hover:text-blue-700 transition-colors">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="mailto:3rdoperson@gmail.com" className="p-2 text-slate-500 hover:text-red-600 transition-colors">
            <Mail className="w-6 h-6" />
          </Link>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </section>
  );
};