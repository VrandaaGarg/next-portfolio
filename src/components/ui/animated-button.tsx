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
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "px-4 md:px-8 py-2 md:py-4 bg-gradient-to-r from-[#fa0f69] to-[#ff1b6b] text-white font-semibold rounded-2xl md:rounded-full",
          " transition-all duration-300",
          "relative overflow-hidden group",
          className
        )}
        {...props}
      >
        {/* Content */}
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
