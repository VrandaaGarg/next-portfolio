"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FloatingDock } from "@/components/ui/floating-dock";
import AnimatedButton from "@/components/ui/animated-button";
import RoleTypewriter from "@/components/animations/RoleTypewriter";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import { SiPeerlist } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const socialLinks = [
    {
      title: "Twitter",
      icon: (
        <RiTwitterXLine className="h-full w-full text-neutral-300 hover:text-[#fa0f69] transition-colors" />
      ),
      href: "https://x.com/vrandaagarg", // Replace with your actual Twitter
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-300 hover:text-[#fa0f69] transition-colors" />
      ),
      href: "https://www.linkedin.com/in/vrandagarg/", // Replace with your actual LinkedIn
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-300 hover:text-[#fa0f69] transition-colors" />
      ),
      href: "https://github.com/VrandaaGarg", // Replace with your actual GitHub
    },
    {
      title: "Peerlist",
      icon: (
        <SiPeerlist className="h-full w-full text-neutral-300 hover:text-[#fa0f69] transition-colors" />
      ),
      href: "https://peerlist.io/vrandagarg", // Replace with your actual Peerlist
    },
    {
      title: "Instagram",
      icon: (
        <FaInstagram className="h-full w-full text-neutral-300 hover:text-[#fa0f69] transition-colors" />
      ),
      href: "https://instagram.com/vranda_garg", // Replace with your actual email
    },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background gradient overlay */}

      <div className="relative z-30 container mx-auto max-w-6xl px-6 pt-20 md:px-10 flex min-h-screen items-center">
        <div className="grid lg:grid-cols-2 gap-5 items-center w-full">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-3xl text-neutral-300"
            >
              Hello 👋
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-white">Vranda</span>{" "}
              <span className="text-gradient-primary">Garg</span> ,
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl flex items-center gap-2 md:text-4xl lg:text-5xl font-light text-neutral-300"
            >
              I&apos;m
              <RoleTypewriter
                roles={[
                  "Frontend Developer",
                  "Backend Enthusiast",
                  "Full Stack Developer",
                  "Website Designer",
                ]}
                typingSpeed={120}
                deletingSpeed={80}
                delayBetweenRoles={2500}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg hidden md:block md:text-xl text-neutral-400 max-w-2xl leading-relaxed"
            >
              Crafting beautiful, responsive, and user-friendly web experiences
              with modern technologies. Passionate about transforming ideas into
              beautiful, intuitive digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-row gap-4 "
            >
              <AnimatedButton
                onClick={() => scrollToSection("projects")}
                className="transform text-sm rounded-full hover:bg-gradient-to-br hover:from-[#fd3984] hover:to-[#a6073f] hover:scale-105 transition-transform duration-300"
              >
                View My Work
              </AnimatedButton>
              <AnimatedButton
                onClick={() => scrollToSection("contact")}
                className="bg-transparent text-sm border-2 rounded-full hover:bg-[#fa0f69]/15 border-[#fa0f69] hover:border-[#fa0f69] transform hover:scale-105 transition-transform duration-300"
              >
                Get In Touch
              </AnimatedButton>
            </motion.div>

            {/* Follow section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="pt-3 md:pt-8 flex flex-wrap gap-2 items-center"
            >
              <p className="text-neutral-400 md:mb-4 text-lg">Follow me:</p>
              <div className="flex justify-center sm:justify-start">
                <FloatingDock
                  items={socialLinks}
                  desktopClassName=" backdrop-blur-lg border border-[#fa0f69]/20"
                  mobileClassName="translate-y-0"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#fa0f69] to-[#ff1b6b] rounded-full blur-3xl opacity-20 scale-110" />

              {/* Image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] overflow-hidden ">
                <Image
                  src="https://res.cloudinary.com/dyetf2h9n/image/upload/v1752582426/me_ggujd3.png"
                  alt="Vranda Garg"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r animate-pulse from-[#fa0f69] to-[#ff1b6b] rounded-full opacity-60"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r animate-pulse from-[#ff4081] to-[#fa0f69] rounded-full opacity-40"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#fa0f69] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[#fa0f69] rounded-full mt-2"
          />
        </motion.div>
      </motion.div> */}
    </section>
  );
}
