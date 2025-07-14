"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, FolderOpen, ExternalLink } from "lucide-react";
import { BsFillHeartFill } from "react-icons/bs";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/projects", icon: FolderOpen },
  ];

  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className={`bg-[#280512]/20 rounded-full border backdrop-blur-xl ${
          isScrolled
            ? "border-t-2 border-r-2 border-b-2 border-l-2 border-t-[var(--primary-pink)]/15 border-r-[var(--primary-pink)]/15 border-b-zinc-600/25 border-l-zinc-600/25 shadow-xl shadow-pink-900/10"
            : "border-t-2 border-r-2 border-b-2 border-l-2 border-t-[var(--primary-pink)]/10 border-r-[var(--primary-pink)]/10 border-b-zinc-600/25 border-l-zinc-600/25 shadow-xl shadow-pink-900/10"
        }`}
        animate={{
          width: isScrolled ? "90vw" : "95vw",
          maxWidth: isScrolled ? "900px" : "1200px",
          paddingLeft: isScrolled ? "0.5rem" : "1rem",
          paddingRight: isScrolled ? "0.5rem" : "1rem",
          paddingTop: isScrolled ? "0.05rem" : "0.2rem",
          paddingBottom: isScrolled ? "0.05rem" : "0.2rem",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between px-4 md:px-6 py-1.5 md:py-2">
          {/* Logo/Brand */}
          <Link href="/" className="relative group flex  gap-3">
            <div className="flex justify-center items-center">
              <BsFillHeartFill className="text-[#d44575]  animate-pulse text-2xl hover:rotate-12 duration-300" />
            </div>
            <motion.span
              className="font-bold text-lg md:text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#ffb3cd] to-[#ff1b6b]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Vranda Garg
            </motion.span>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-primary"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center "
            animate={{
              gap: isScrolled ? "0.5rem" : "2rem",
            }}
          >
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="group relative flex items-center space-x-2 text-[var(--text-secondary)] hover:text-[var(--primary-pink)] transition-colors duration-200 font-medium"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconComponent className=" text-lg md:text-xl" />
                    </motion.div>
                    <span className="text-lg">{item.name}</span>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink size={12} />
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              );
            })}

            <button className="bg-gradient-to-br text-lg from-[#c11853] to-[#d44575] text-white px-4 py-2 rounded-full">
              Resume
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-[var(--card-bg)] transition-colors duration-200 focus:outline-none"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} className="text-[var(--text-primary)]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} className="text-[var(--text-primary)]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Dropdown Menu */}
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-2 mx-2.5 bg-[#280512]/20 border border-t-2 border-r-2 border-b-2 border-l-2 border-t-[var(--primary-pink)]/15 border-r-[var(--primary-pink)]/15 border-b-zinc-600/25 border-l-zinc-600/25 shadow-xl shadow-pink-900/10  backdrop-blur-xl rounded-2xl overflow-hidden  border-[var(--border-color)]"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center space-x-3 text-[var(--text-secondary)] hover:text-[var(--primary-pink)] transition-colors duration-200 font-medium py-2 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent className="text-[#d04780]" size={18} />
                        </motion.div>
                        <span className="text-base text-white">
                          {item.name}
                        </span>

                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ExternalLink size={14} />
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
