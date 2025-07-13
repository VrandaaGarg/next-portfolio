"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface RoleTypewriterProps {
  roles: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenRoles?: number;
}

export default function RoleTypewriter({
  roles = [
    "Frontend Developer",
    "Backend Enthusiast",
    "Full Stack Developer",
    "Website Designer",
  ],
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenRoles = 2000,
}: RoleTypewriterProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delayBetweenRoles);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentRole.length) {
            setCurrentText(currentRole.substring(0, currentText.length + 1));
          } else {
            setIsPaused(true);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentRole.substring(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    isPaused,
    currentRoleIndex,
    roles,
    typingSpeed,
    deletingSpeed,
    delayBetweenRoles,
  ]);

  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-gradient-accent font-medium">{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="inline-block w-1 h-8 md:h-12 lg:h-16 bg-[#fa0f69] ml-1"
      />
    </div>
  );
}
