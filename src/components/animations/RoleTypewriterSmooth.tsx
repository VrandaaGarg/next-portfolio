"use client";

import { useState, useEffect } from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";

interface RoleTypewriterSmoothProps {
  roles: string[];
  className?: string;
  delayBetweenRoles?: number;
}

export default function RoleTypewriterSmooth({
  roles = [
    "Frontend Developer",
    "Backend Enthusiast",
    "Full Stack Developer",
    "Website Designer",
  ],
  className = "",
  delayBetweenRoles = 4000,
}: RoleTypewriterSmoothProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, delayBetweenRoles);

    return () => clearInterval(interval);
  }, [roles.length, delayBetweenRoles]);

  const words = [
    {
      text: roles[currentRoleIndex],
      className: "text-gradient-accent font-medium",
    },
  ];

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentRoleIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <TypewriterEffectSmooth
            words={words}
            className="my-0"
            cursorClassName="bg-[#fa0f69] h-8 md:h-12 lg:h-16"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
