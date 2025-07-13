"use client";

import { motion } from "framer-motion";
import SkillCard from "@/components/ui/SkillCard";
import { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
  proficiency: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  index: number;
}

export default function SkillCategory({
  title,
  skills,
  index,
}: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="space-y-6"
    >
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gradient-accent mb-2">
          {title}
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-[#fa0f69] to-[#ff1b6b] mx-auto rounded-full" />
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4  md:gap-5">
        {skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1 + skillIndex * 0.05,
              type: "spring",
              stiffness: 100,
            }}
          >
            <SkillCard
              name={skill.name}
              icon={skill.icon}
              category={title}
              proficiency={skill.proficiency}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
