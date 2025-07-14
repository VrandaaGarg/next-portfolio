"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data/projectsData";
import ProjectCard from "@/components/ui/ProjectCard";
import { LuArrowRight } from "react-icons/lu";

export default function Projects() {
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <section className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Featured <span className="text-[#ff4081]">Projects</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Discover some of my latest work and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex w-full justify-end">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            onClick={() => {
              window.location.href = "/projects";
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="inline-flex justify-end items-center gap-2 px-8 py-4 rounded-2xl bg-neutral-900 dark:bg-[#ff4081] text-white dark:text-neutral-900 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <span>See All Projects</span>
              <LuArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
