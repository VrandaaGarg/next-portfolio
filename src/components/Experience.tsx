"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaTrophy, FaMedal } from "react-icons/fa6";
import { HiAcademicCap, HiStar } from "react-icons/hi2";
import { LuCodeXml, LuBuilding, LuUser, LuX } from "react-icons/lu";
import { ShineBorder } from "./ui/shine-border";
import { useState, useCallback, useEffect, memo } from "react";
import { experienceData, Experience } from "@/data/experienceData";
import Image from "next/image";

// Image popup component
const ImagePopup = ({
  src,
  alt,
  isOpen,
  onClose,
}: {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="image-popup-title"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative max-w-2xl max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors rounded-full bg-black/20 hover:bg-black/40"
              aria-label="Close image popup"
            >
              <LuX className="w-6 h-6" />
            </button>
            <Image
              src={src}
              alt={alt}
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl shadow-2xl border-2 border-pink-400/30"
              id="image-popup-title"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ExperienceCard = memo(({ exp }: { exp: Experience }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showImagePopup, setShowImagePopup] = useState(false);

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
        transition={{
          duration: 0.6,
        }}
        viewport={{ once: true, margin: "-150px", amount: 0.3 }}
        className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${getTypeColor(
          exp.type
        )} z-10 shadow-lg shadow-pink-400/30 flex items-center justify-center`}
      >
        <div className="text-white text-sm">{getIcon(exp.iconType)}</div>
      </motion.div>

      {/* Animated pulse around the circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 2.5, 0.8],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-pink-400/25 z-0"
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-120px", amount: 0.2 }}
            transition={{
              duration: 0.8,
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative backdrop-blur-sm bg-neutral-950/50 border border-pink-800/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
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
              <div className="w-20 h-20 mx-auto md:mx-0 rounded-xl overflow-hidden flex-shrink-0 bg-pink-900/30 p-3 border border-pink-800/40">
                <motion.div
                  className={`w-full h-full rounded-lg overflow-hidden ${
                    exp.type === "achievement" ? "cursor-pointer" : ""
                  }`}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                  whileTap={exp.type === "achievement" ? { scale: 0.95 } : {}}
                  onClick={
                    exp.type === "achievement"
                      ? () => setShowImagePopup(true)
                      : undefined
                  }
                  role={exp.type === "achievement" ? "button" : undefined}
                  tabIndex={exp.type === "achievement" ? 0 : undefined}
                  onKeyDown={
                    exp.type === "achievement"
                      ? (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setShowImagePopup(true);
                          }
                        }
                      : undefined
                  }
                  aria-label={
                    exp.type === "achievement"
                      ? `View enlarged ${exp.company} logo`
                      : `${exp.company} logo`
                  }
                >
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <motion.h3
                  className="text-xl font-bold text-neutral-100 mb-2"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px", amount: 0.5 }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  {exp.name}
                </motion.h3>

                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                  <div className="flex items-center gap-2 text-pink-400 justify-center md:justify-start">
                    <LuUser className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.role}</span>
                  </div>
                  {exp.company && (
                    <div className="flex items-center gap-2 text-neutral-400 justify-center md:justify-start">
                      <LuBuilding className="w-4 h-4" />
                      <span className="text-sm">{exp.company}</span>
                    </div>
                  )}
                </div>

                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {exp.technologies && exp.technologies.length > 0 && (
                  <motion.div
                    className="flex flex-wrap gap-2 justify-center md:justify-start"
                    initial={{ opacity: 0, y: 10 }}
                    viewport={{ once: true, margin: "-80px", amount: 0.3 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    {exp.technologies.map((tech: string, idx: number) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-pink-900/30 text-pink-300 border border-pink-800/40 font-medium"
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
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px", amount: 0.5 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-pink-900/30 backdrop-blur-sm border border-pink-800/60 text-pink-300 px-4 py-2 rounded-full text-xs font-medium shadow-lg z-20"
      >
        {exp.duration}
      </motion.div>

      {/* Image Popup - Only for achievements */}
      {exp.type === "achievement" && (
        <ImagePopup
          src={exp.logo}
          alt={`${exp.company} logo`}
          isOpen={showImagePopup}
          onClose={() => setShowImagePopup(false)}
        />
      )}
    </div>
  );
});

ExperienceCard.displayName = "ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px", amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
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
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
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
              <ExperienceCard key={exp.id || index} exp={exp} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px", amount: 0.5 }}
          transition={{
            duration: 0.7,

            ease: "easeInOut",
          }}
          className="text-center md:mt-16 relative z-10"
        >
          <div className="inline-flex items-center gap-1 md:gap-3 px-3 md:px-6 py-1.5 md:py-4 bg-gradient-to-r from-pink-900/30 to-pink-800/20 rounded-full text-pink-300 font-medium border border-pink-800/60 shadow-lg">
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
