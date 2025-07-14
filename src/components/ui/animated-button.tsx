"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface AnimatedButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "px-4 md:px-8 py-2 md:py-4 bg-gradient-to-r from-[#fa0f69] to-[#ff1b6b] text-white font-semibold rounded-2xl md:rounded-full",
          "hover:shadow-lg hover:shadow-[#fa0f69]/25 transition-all duration-300",
          "relative overflow-hidden group",
          className
        )}
        {...props}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fa0f69] to-[#ff1b6b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

        {/* Content */}
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
