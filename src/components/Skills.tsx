"use client";

import { motion } from "framer-motion";
import SkillCard from "@/components/ui/SkillCard";
import { Hash, GitBranch, Sparkles } from "lucide-react";
import { FaJava, FaCss3Alt, FaHtml5, FaReact, FaPython } from "react-icons/fa6";
import {
  SiJavascript,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiAppwrite,
  SiVercel,
  SiDjango,
  SiGithub,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { TbBrandCpp, TbBrandVscode } from "react-icons/tb";

const skillsData = {
  "Frontend Development": [
    { name: "HTML5", icon: FaHtml5, proficiency: 95 },
    { name: "CSS3", icon: FaCss3Alt, proficiency: 90 },
    { name: "JavaScript", icon: SiJavascript, proficiency: 88 },
    { name: "TypeScript", icon: BiLogoTypescript, proficiency: 85 },
    { name: "React.js", icon: FaReact, proficiency: 92 },
    { name: "Next.js", icon: RiNextjsFill, proficiency: 88 },
    { name: "Tailwind CSS", icon: RiTailwindCssFill, proficiency: 95 },
    { name: "Framer Motion", icon: SiFramer, proficiency: 80 },
  ],
  "Backend & Database": [
    { name: "Node.js", icon: DiNodejs, proficiency: 85 },
    { name: "Express.js", icon: SiExpress, proficiency: 80 },
    { name: "MongoDB", icon: SiMongodb, proficiency: 85 },
    { name: "Firebase", icon: SiFirebase, proficiency: 82 },
    { name: "Appwrite", icon: SiAppwrite, proficiency: 75 },
    { name: "MySQL", icon: GrMysql, proficiency: 78 },
    { name: "Django", icon: SiDjango, proficiency: 80 },
  ],
  "Programming Languages": [
    { name: "C++", icon: TbBrandCpp, proficiency: 85 },
    { name: "C", icon: Hash, proficiency: 80 },
    { name: "Java", icon: FaJava, proficiency: 82 },
    { name: "Python", icon: FaPython, proficiency: 85 },
  ],
  "Tools & Deployment": [
    { name: "Git", icon: GitBranch, proficiency: 90 },
    { name: "GitHub", icon: SiGithub, proficiency: 92 },
    { name: "Vercel", icon: SiVercel, proficiency: 88 },
    { name: "VS Code", icon: TbBrandVscode, proficiency: 95 },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

export default function Skills() {
  return (
    <section className="min-h-screen  relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            My <span className="text-gradient-primary">Skills</span>{" "}
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block ml-3"
            >
              <Sparkles className="text-[#ff4081] h-6 w-6 md:h-10 md:w-10" />
            </motion.span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
            to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              className="space-y-6"
            >
              {/* Category Title */}
              <motion.h3
                className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center"
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-gradient-accent">{category}</span>
              </motion.h3>

              {/* Skills Grid for Category */}
              <div className="flex flex-wrap gap-6 justify-center items-center">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <SkillCard
                      name={skill.name}
                      icon={skill.icon}
                      category={category}
                      proficiency={skill.proficiency}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-400 mb-6">
            Always learning and expanding my skill set to stay current with the
            latest technologies
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#fa0f69] to-[#ff1b6b] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#fa0f69]/25 transition-all duration-300"
          >
            Let&apos;s Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
