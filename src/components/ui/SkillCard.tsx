"use client";

import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ComponentType } from "react";

interface SkillCardProps {
  name: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  category: string;
  proficiency?: number;
}

export default function SkillCard({ name, icon: Icon }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="min-w-[140px] h-[120px]"
    >
      <div className="relative h-full rounded-2xl border border-neutral-800/50 p-2">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          movementDuration={1.5}
        />
        <div className="relative flex h-full flex-col justify-center items-center gap-3 overflow-hidden rounded-xl p-4 bg-gradient-to-br from-[#18181a] to-[#0a0a0a] shadow-lg">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon
              size={28}
              className="text-neutral-400 group-hover:text-[#fa0f69] transition-colors duration-300"
            />
          </motion.div>

          {/* Skill Name */}
          <span className="text-sm font-semibold text-white text-center leading-tight">
            {name}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
