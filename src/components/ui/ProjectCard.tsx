"use client";

import type * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import { LuArrowUpRight, LuGithub, LuExternalLink } from "react-icons/lu";
import { Project } from "@/data/projectsData";
import { BorderBeam } from "./animated-border-beam";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "group relative md:h-[500px] h-[450px] w-[380px] overflow-hidden rounded-2xl p-0 md:w-[700px]",
        "border border-neutral-200/60 bg-white/50 backdrop-blur-sm hover:cursor-pointer",
        "dark:border-pink-800/60 dark:bg-neutral-950/50",
        "shadow-sm transition-shadow duration-300 hover:shadow-lg",
        className
      )}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* First Animated Border Beam - Purple to Blue */}
      <BorderBeam
        size={160}
        duration={12}
        colorFrom="#ff4081"
        colorTo="#ffb3d1"
        borderWidth={3}
        className={cn(
          "transition-opacity duration-300 z-50",
          isHovered ? "opacity-90" : "opacity-60"
        )}
      />

      {/* Second Animated Border Beam - Pink to Purple (opposite direction) */}
      <BorderBeam
        size={160}
        duration={8}
        colorFrom="#ffb3d1"
        colorTo="#ff4081"
        borderWidth={3}
        reverse={false}
        delay={2}
        className={cn(
          "transition-opacity duration-300 z-50",
          isHovered ? "opacity-80" : "opacity-60"
        )}
      />

      <div className="relative mb-2 p-6 pb-4 z-10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border-pink-500/30 border-1 bg-neutral-100 text-neutral-600 dark:bg-pink-800/35 dark:text-neutral-400">
                {project.icon}
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-[#ff4081] to-[#ff4081]/50 dark:from-neutral-800"></div>
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              {project.name}
            </h3>
          </div>
        </div>

        {isHovered && (
          <>
            <motion.img
              src={project.image}
              alt={project.name}
              className="absolute right-4 top-6 h-[72px] w-[72px] aspect-square object-cover rounded-sm shadow-lg ring-2 ring-white dark:ring-neutral-900 z-20"
              width={500}
              height={500}
              layoutId={`project-image-${project.id}`}
              transition={{ duration: 0.3, ease: "circIn" }}
            />

            <motion.div
              className="absolute right-[14px] top-[21px] h-[78px] w-[77px] rounded-sm border border-dashed border-neutral-400/80 bg-transparent dark:border-neutral-600/80 z-20"
              initial={{ opacity: 0, scale: 1.6, filter: "blur(4px)" }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{ delay: 0.35, duration: 0.15, ease: "circIn" }}
            />
          </>
        )}
      </div>

      <div className="mb-4 flex items-center  justify-center px-6 z-10">
        {!isHovered && (
          <>
            <motion.img
              src={project.image}
              alt={project.name}
              className="w-[500] object-cover rounded-2xl border-4 border-white shadow-xl ring-1 ring-neutral-200/50 dark:border-neutral-900 dark:ring-neutral-800/50"
              width={500}
              height={500}
              layoutId={`project-image-${project.id}`}
              transition={{ duration: 0.3, ease: "circIn" }}
            />
          </>
        )}
      </div>

      <motion.div
        className="absolute bottom-2 left-2 right-2 rounded-t-2xl border-t border-[#ff4081]/80 bg-white/95 px-6 pb-5 pt-3 backdrop-blur-sm dark:border-pink-800/80 dark:bg-neutral-950/95 z-30"
        initial={{ y: "100%" }}
        animate={{
          y: isHovered ? 0 : "calc(100% - 53px)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="text-neutral-900 dark:text-neutral-100">
          <div className="mb-2 flex items-center justify-between text-md font-semibold text-neutral-900 dark:text-neutral-100">
            <span>Project Details</span>
            <span>
              <LuArrowUpRight />
            </span>
          </div>
          <p className="mb-3 text-sm font-medium leading-relaxed text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-3">
            <p className="mb-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              Tech Stack:
            </p>
            <div className="flex flex-wrap gap-1">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-md bg-neutral-100 px-2 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 flex flex-row items-center justify-center gap-2">
            {project.liveDemoUrl && (
              <Link
                target="_blank"
                href={project.liveDemoUrl}
                className="flex w-full items-center gap-3 justify-center  rounded-xl border border-neutral-200/60 bg-pink-50/80 px-4 py-3 text-sm font-medium text-neutral-700 transition-all duration-200 hover:border-neutral-300 hover:bg-pink-100/80 hover:text-neutral-900 dark:border-neutral-800/60 dark:bg-pink-500/20 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-pink-700/80 dark:hover:text-neutral-100"
              >
                <span className="flex h-5 w-5 items-center justify-center text-neutral-500 dark:text-neutral-400">
                  <LuExternalLink />
                </span>
                Live Demo
              </Link>
            )}
            <Link
              target="_blank"
              href={project.githubUrl}
              className="flex w-full items-center gap-3 justify-center rounded-xl border border-neutral-200/60 bg-pink-50/80 px-4 py-3 text-sm font-medium text-neutral-700 transition-all duration-200 hover:border-neutral-300 hover:bg-pink-100/80 hover:text-neutral-900 dark:border-neutral-800/60 dark:bg-pink-500/20 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-pink-700/80 dark:hover:text-neutral-100"
            >
              <span className="flex h-5 w-5 items-center justify-center text-neutral-500 dark:text-neutral-400">
                <LuGithub />
              </span>
              View Code
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
