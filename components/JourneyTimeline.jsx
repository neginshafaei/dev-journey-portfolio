"use client";

import { motion } from "framer-motion";
import { Briefcase, Terminal, GraduationCap, TrendingUp } from "lucide-react";

const experiences = [
  {
    year: "2020 - Present",
    company: "Saba System (Immigo)",
    role: "Senior Frontend & Team Lead",
    description:
      "Leading the frontend team for a migration services platform. Successfully decoupled a monolithic Vue/Laravel app, migrated legacy code to Vue 3, and standardized the dev environment using Docker. Achieved 60% better LCP on landing pages.",
    tech: ["Next.js", "TypeScript", "Docker", "Vue 3", "Team Leadership"],
    icon: <Terminal className="w-5 h-5" />,
    color: "bg-blue-100 text-blue-600 border-blue-600",
  },
  {
    year: "2019 - 2020",
    company: "Samfintech",
    role: "Frontend Developer",
    description:
      "Developed a high-frequency trading dashboard. Implemented real-time data visualization using WebSockets for stock prices and refactored legacy React components to improve maintainability.",
    tech: ["React", "Redux", "WebSockets", "Data Visualization"],
    icon: <TrendingUp className="w-5 h-5" />,
    color: "bg-green-100 text-green-600 border-green-600",
  },
  {
    year: "2019 (6 Months)",
    company: "Ajor Nik",
    role: "Frontend Developer (Contract)",
    description:
      "Built a dedicated B2C e-commerce platform for construction materials using Next.js for SEO. Integrated Firebase for push notifications and cart abandonment recovery.",
    tech: ["Next.js", "Firebase", "SEO", "E-commerce"],
    icon: <Briefcase className="w-5 h-5" />,
    color: "bg-purple-100 text-purple-600 border-purple-600",
  },
  {
    year: "2015 - 2019",
    company: "University of Guilan / Self-Study",
    role: "The Pivot: Chemical Eng. to Tech",
    description:
      "Graduated in Chemical Engineering but found passion in code. Completed Harvard CS50 and Khan Academy courses, mastering algorithms and building a strong foundation in Computer Science.",
    tech: ["CS50", "Algorithms", "JavaScript", "Problem Solving"],
    icon: <GraduationCap className="w-5 h-5" />,
    color: "bg-amber-100 text-amber-600 border-amber-600",
  },
];

export const JourneyTimeline = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-slate-800">
          Dev Journey & Evolution
        </h2>
        <p className="text-slate-500 mb-12">
          From Chemical Engineering to leading frontend teams.
        </p>

        <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <span
                className={`absolute -left-4 top-0 border-2 rounded-full p-1 bg-white ${
                  exp.color.split(" ")[2]
                }`}
              >
                <span className={`${exp.color.split(" ")[1]}`}>{exp.icon}</span>
              </span>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {exp.role}
                  </h3>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-full w-fit mt-2 sm:mt-0 ${
                      exp.color.split(" border")[0]
                    }`}
                  >
                    {exp.year}
                  </span>
                </div>

                <p className="text-sm font-semibold text-slate-500 mb-4">
                  {exp.company}
                </p>

                <p className="text-slate-700 leading-relaxed text-sm">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs rounded-md font-medium border border-slate-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
