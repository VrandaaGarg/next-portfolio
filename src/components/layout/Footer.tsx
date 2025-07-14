"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowUp, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user has scrolled down more than 300px
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:hi@vrandagarg.in",
      color: "hover:text-[#fa0f69]",
    },
    {
      name: "Twitter",
      icon: RiTwitterXLine,
      href: "https://twitter.com/vranda_garg_",
      color: "hover:text-[#fa0f69]",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/vrandagarg",
      color: "hover:text-[#fa0f69]",
    },
    {
      name: "Peerlist",
      icon: SiPeerlist,
      href: "https://peerlist.io/vrandagarg",
      color: "hover:text-[#fa0f69]",
    },
  ];

  return (
    <footer className="relative mt-20 w-full bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent">
      {/* Decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#fa0f69]/50 to-transparent" />

      {/* Main footer content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full px-6 py-12 border-t border-[#fa0f69]/20 bg-[#0a0a0a]/80 backdrop-blur-lg"
      >
        {/* Animated border glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fa0f69]/5 via-[#ff1b6b]/5 to-[#fa0f69]/5 opacity-50 animate-pulse" />

        {/* Content container */}
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Top section with name and hearts */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            {/* Left side - Name with hearts */}
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#ffb3cd] to-[#ff1b6b] cursor-pointer"
              >
                Vranda Garg
              </motion.h3>

              {/* Animated hearts */}
              <div className="flex gap-2">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="w-6 h-6 rounded-full hover:scale-125 hover:mx-1 cursor-pointer duration-300 transition-all transform border-2 border-[#fa0f69]/40 flex items-center justify-center"
                  >
                    <Heart className="w-3 h-3 text-[#fa0f69]/60 hover:scale-110" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side - Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.3,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-xl bg-[#18181a]/80 border border-[#fa0f69]/20 text-[#a1a1aa] ${social.color} transition-all duration-300 hover:border-[#fa0f69]/40 hover:shadow-lg hover:shadow-[#fa0f69]/20`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-[#fa0f69]/20">
            {/* Left side - Created with love */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-[#a1a1aa] mb-4 md:mb-0"
            >
              <span>created with love</span>
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Heart className="w-4 h-4 text-[#d44575] fill-current" />
              </motion.div>
            </motion.div>

            {/* Right side - Copyright */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#a1a1aa] text-sm"
            >
              © {new Date().getFullYear()} Vranda Garg. All rights reserved.
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(250, 15, 105, 0.4)",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-[#fa0f69] to-[#ff1b6b] text-white shadow-lg hover:shadow-xl hover:shadow-[#fa0f69]/25 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="md:w-6 md:h-6 w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
