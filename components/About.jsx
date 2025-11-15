'use client';

import { motion } from 'framer-motion';
import { Cpu, Users, Zap, Layers } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Beyond Just Coding</h2>
          <div className="text-slate-600 space-y-4 text-lg leading-relaxed">
            <p>
              With over <span className="font-semibold text-slate-900">5 years of experience</span>, my journey has evolved from crafting pixel-perfect UIs to orchestrating complex frontend architectures.
            </p>
            <p>
              Currently, as a <span className="font-semibold text-slate-900">Team Lead at Immigo</span>, I don't just write code; I build environments where code quality thrives. My focus has shifted towards 
              <span className="font-semibold text-blue-600"> Developer Experience (DX)</span>—standardizing workflows with Docker and CI/CD so my team can focus on shipping features, not fixing configs.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <FeatureCard 
            icon={<Zap className="w-6 h-6 text-yellow-500" />}
            title="Performance Obsessed"
            desc="Optimized landing page LCP by 60% through advanced caching and code-splitting strategies."
          />
          <FeatureCard 
            icon={<Users className="w-6 h-6 text-blue-500" />}
            title="Technical Leadership"
            desc="Mentoring juniors, conducting rigorous code reviews, and fostering a culture of ownership."
          />
          <FeatureCard 
            icon={<Layers className="w-6 h-6 text-purple-500" />}
            title="Architecture First"
            desc="Successfully decoupled monolithic frontends (Vue/Laravel) into modern, scalable Next.js applications."
          />
          <FeatureCard 
            icon={<Cpu className="w-6 h-6 text-green-500" />}
            title="DevOps Integration"
            desc="Bridging the gap between frontend and ops using Docker, DevContainers, and automated pipelines."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors"
  >
    <div className="mb-4 p-3 bg-white rounded-lg w-fit shadow-sm">{icon}</div>
    <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-600">{desc}</p>
  </motion.div>
);