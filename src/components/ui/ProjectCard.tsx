"use client";

import type * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Link from "next/link";
import { LuArrowUpRight, LuGithub, LuExternalLink, LuX } from "react-icons/lu";
import { Project } from "@/data/projectsData";
import { BorderBeam } from "./animated-border-beam";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const [isHovered, setHovered] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      className={cn(
        "group relative md:h-[500px] h-[410px] w-[350px] overflow-hidden rounded-2xl p-0 md:w-[700px]",
        "border   backdrop-blur-sm hover:cursor-pointer",
        "border-pink-800/60 bg-neutral-950/50",
        "shadow-sm transition-shadow duration-300 hover:shadow-lg",
        className
      )}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
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
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border-pink-500/30 border-1 :bg-pink-800/35 text-neutral-400">
                {project.icon}
              </div>
              <div className="h-px flex-1 bg-gradient-to-r  to-[#ff4081]/50 from-neutral-800"></div>
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-neutral-100">
              {project.name}
            </h3>
          </div>
        </div>

        {isHovered && (
          <>
            <motion.img
              src={project.image}
              alt={project.name}
              className="absolute right-4 top-6 h-[72px] w-[72px] aspect-square object-cover rounded-sm shadow-lg ring-2 ring-neutral-900 z-20"
              width={500}
              height={500}
              layoutId={`project-image-${project.id}`}
              transition={{ duration: 0.3, ease: "circIn" }}
            />

            <motion.div
              className="absolute right-[14px] top-[21px] h-[78px] w-[77px] rounded-sm border border-dashed  bg-transparent border-neutral-600/80 z-20"
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
              className="w-[500] object-cover rounded-2xl border-4  shadow-xl ring-1  border-neutral-900 ring-neutral-800/50"
              width={500}
              height={500}
              layoutId={`project-image-${project.id}`}
              transition={{ duration: 0.3, ease: "circIn" }}
            />
          </>
        )}
      </div>

      <motion.div
        className="absolute bottom-2 left-2 right-2 rounded-t-2xl border-t   px-3.5 md:px-6 pb-3 md:pb-5 pt-3 backdrop-blur-sm border-pink-800/80 bg-neutral-950/95 z-30"
        initial={{ y: "100%" }}
        animate={{
          y: isMobile
            ? isMobileExpanded
              ? 0
              : "calc(100% - 48px)"
            : isHovered
            ? 0
            : "calc(100% - 48px)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="text-neutral-100">
          <div className="mb-1.5 md:mb-2 flex items-center justify-between text-md font-semibold text-neutral-100">
            <span>Project Details</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileExpanded(!isMobileExpanded);
              }}
              className="md:pointer-events-none p-1 rounded-md hover:bg-neutral-800 transition-colors duration-200"
            >
              {/* Show close button on small screens when expanded, arrow otherwise */}
              <span className="md:hidden">
                {isMobile && isMobileExpanded ? (
                  <LuX className="text-pink-700" />
                ) : (
                  <LuArrowUpRight />
                )}
              </span>
              {/* Always show arrow on medium+ screens */}
              <span className="hidden md:inline">
                <LuArrowUpRight />
              </span>
            </button>
          </div>
          <p className="mb-1.5 md:mb-3 text-sm font-medium leading-relaxed text-neutral-400">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-1.5 md:mb-3">
            <p className="mb-2 text-sm font-semibold text-neutral-300">
              Tech Stack:
            </p>
            <div className=" flex-wrap gap-1 hidden md:flex">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-md  px-2 py-0.5 md:py-1 text-sm font-medium bg-neutral-800 text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/** Mobile View */}
            <div className=" flex-wrap gap-2 flex md:hidden">
              {project.techStack.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="rounded-md  px-2 py-0.5 md:py-1 text-sm font-medium bg-neutral-800 text-neutral-400"
                >
                  {tech}
                </span>
              ))}

              {project.techStack.length > 3 && (
                <span className="rounded-md  px-2 py-0.5 md:py-1 text-sm font-medium bg-neutral-700 text-neutral-200">
                  +{project.techStack.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-1.5 flex flex-row items-center justify-center gap-2">
            {project.liveDemoUrl && (
              <Link
                target="_blank"
                href={project.liveDemoUrl}
                className="flex w-full items-center gap-1.5 md:gap-3 justify-center  rounded-xl border   px-2 py-2 md:px-4 md:py-3 text-sm font-medium transition-all duration-200  border-neutral-800/60 bg-pink-500/20 text-neutral-300 hover:border-neutral-700 hover:bg-pink-700/80 hover:text-neutral-100"
              >
                <span className="flex h-5 w-5 items-center justify-center text-neutral-400">
                  <LuExternalLink />
                </span>
                Live Demo
              </Link>
            )}
            <Link
              target="_blank"
              href={project.githubUrl}
              className="flex w-full items-center gap-1.5 md:gap-3 justify-center  rounded-xl border px-2 py-2 md:px-4 md:py-3 text-sm font-medium  transition-all duration-200  border-neutral-800/60 bg-pink-500/20 text-neutral-300 hover:border-neutral-700 hover:bg-pink-700/80 hover:text-neutral-100"
            >
              <span className="flex h-5 w-5 items-center justify-center  text-neutral-400">
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
