"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data/projectsData";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <main className="min-h-screen py-20 px-4 bg-[#0a0a0a]/40">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            All <span className="text-[#ff4081]">Projects</span>
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            A comprehensive collection of my work, showcasing various
            technologies and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Empty State (if no projects) */}
        {projectsData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center py-20"
          >
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              No projects to display yet. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
