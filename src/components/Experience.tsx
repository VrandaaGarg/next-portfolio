"use client";

import { motion } from "framer-motion";
import { FaAward, FaTrophy, FaMedal } from "react-icons/fa6";
import { HiAcademicCap, HiStar } from "react-icons/hi2";
import { LuCodeXml, LuCalendar, LuBuilding, LuUser } from "react-icons/lu";
import { ShineBorder } from "./ui/shine-border";
import { useState } from "react";
import { experienceData, Experience } from "@/data/experienceData";

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "achievement":
        return "from-pink-500 to-rose-500";
      case "experience":
        return "from-pink-400 to-pink-600";
      case "education":
        return "from-pink-300 to-pink-500";
      default:
        return "from-pink-400 to-pink-600";
    }
  };

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "trophy":
        return <FaTrophy className="text-pink-400" />;
      case "medal":
        return <FaMedal className="text-pink-400" />;
      case "code":
        return <LuCodeXml className="text-pink-400" />;
      case "academic":
        return <HiAcademicCap className="text-pink-400" />;
      default:
        return <FaAward className="text-pink-400" />;
    }
  };

  return (
    <div className="mb-20 md:mb-28 relative">
      {/* Timeline node/circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${getTypeColor(
          exp.type
        )} z-10 shadow-lg shadow-pink-400/30 flex items-center justify-center`}
      >
        <div className="text-white text-sm">{getIcon(exp.iconType)}</div>
      </motion.div>

      {/* Animated pulse around the circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: [0.8, 2, 0.8], opacity: [0.5, 0, 0.5] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
        className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-pink-400/20 z-0"
      />

      {/* Content card */}
      <div
        className={`flex w-full ${exp.left ? "justify-end" : "justify-start"}`}
      >
        <div
          className={`w-full md:w-5/12 ${
            exp.left ? "md:pr-8 lg:pr-16" : "md:pl-8 lg:pl-16"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: exp.left ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.02, y: -5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative bg-white/50 backdrop-blur-sm dark:bg-neutral-950/50 border border-pink-200/60 dark:border-pink-800/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Animated Shine Border */}
            <ShineBorder
              borderWidth={2}
              duration={8}
              shineColor={["#ff4081", "#ffb3d1", "#ff4081"]}
              className={`transition-opacity duration-300 ${
                isHovered ? "opacity-90" : "opacity-50"
              }`}
            />

            <div className="flex flex-col md:flex-row items-start gap-4">
              {/* Logo */}
              <div className="w-20 h-20 mx-auto md:mx-0 rounded-xl overflow-hidden flex-shrink-0 bg-pink-100/80 dark:bg-pink-900/30 p-3 border border-pink-200/40 dark:border-pink-800/40">
                <motion.img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-full h-full object-cover rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <motion.h3
                  className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ ease: "easeInOut", duration: 0.6 }}
                >
                  {exp.name}
                </motion.h3>

                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                  <div className="flex items-center gap-2 text-pink-600 dark:text-pink-400 justify-center md:justify-start">
                    <LuUser className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.role}</span>
                  </div>
                  {exp.company && (
                    <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 justify-center md:justify-start">
                      <LuBuilding className="w-4 h-4" />
                      <span className="text-sm">{exp.company}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 text-pink-500 dark:text-pink-300 mb-4 justify-center md:justify-start">
                  <LuCalendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.duration}</span>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {exp.technologies && exp.technologies.length > 0 && (
                  <motion.div
                    className="flex flex-wrap gap-2 justify-center md:justify-start"
                    initial={{ opacity: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {exp.technologies.map((tech: string, idx: number) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 border border-pink-200/40 dark:border-pink-800/40 font-medium"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating date indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-pink-50/90 dark:bg-pink-900/30 backdrop-blur-sm border border-pink-200/60 dark:border-pink-800/60 text-pink-700 dark:text-pink-300 px-4 py-2 rounded-full text-xs font-medium shadow-lg z-20"
      >
        {exp.duration}
      </motion.div>
    </div>
  );
};

export default function ExperienceTimeline() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Animated Background Elements */}

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Experience <span className="text-[#ff4081]">&</span> Achievements
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block ml-3"
            >
              <FaAward className="text-[#ff4081]" />
            </motion.span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            My journey through various achievements, experiences, and milestones
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative z-10">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-300/40 via-pink-400/60 to-pink-300/40 hidden md:block" />

          {/* Experience Cards */}
          <div className="relative">
            {experienceData.map((exp, index) => (
              <ExperienceCard key={exp.id || index} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 relative z-10"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-pink-100 to-pink-50 dark:from-pink-900/30 dark:to-pink-800/20 rounded-full text-pink-700 dark:text-pink-300 font-medium border border-pink-200/60 dark:border-pink-800/60 shadow-lg">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <HiStar className="text-pink-500" />
            </motion.span>
            <span>Always striving for excellence!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
