"use client";

import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui";
import ContactForm from "@/components/ui/contactForm";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-8 md:py-20  text-white overflow-hidden"
    >
      {/* Contact Form and Info */}
      <div className="py-10 md:py-20 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-16 mx-3.5"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Let&apos;s <span className="text-[#ff4081]">Connect</span>{" "}
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block "
            >
              <Phone className="text-[#ff4081] h-5 w-5 md:h-10 md:w-10" />
            </motion.span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Discover some of my latest work and creative solutions
          </p>
        </motion.div>
        <div className=" mx-auto grid max-w-7xl  lg:grid-cols-2 gap-6">
          {/* Contact Form */}

          {/* Contact Info and World Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }} // Reduced duration
            className="space-y-8 mx-5 flex flex-col text-center items-center justify-center"
          >
            {/* World Map */}
            <div className=" bg-[#0a0a0a]/20 shadow-2xl shadow-[#fa0f69]/10 rounded-xl md:rounded-4xl h-full flex flex-col justify-around items-center  p-6 border-2 border-t-[#727070]/15 border-r-[#727070]/15  border-b-[#fa0f69]/15 border-l-[#fa0f69]/15 backdrop-blur-md">
              <div className="">
                <h3 className="text-xl md:text-3xl text-[#ff4081] font-semibold mb-1.5 md:mb-4 text-center">
                  Remote <span className="text-[#ff4081]">Connectivity</span>
                </h3>
                <p className="text-xs md:text-lg text-[var(--text-muted)] text-center mb-2 md:mb-6">
                  Work from anywhere, collaborate globally. Perfect for remote
                  projects and international partnerships.
                </p>
              </div>

              <WorldMap
                dots={[
                  {
                    start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                    end: { lat: 40.7128, lng: -74.006 }, // New York
                  },
                  {
                    start: { lat: 51.5074, lng: -0.1278 }, // London
                    end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                  },
                  {
                    start: { lat: 35.6762, lng: 139.6503 }, // Tokyo
                    end: { lat: -33.8688, lng: 151.2093 }, // Sydney
                  },
                  {
                    start: { lat: 52.52, lng: 13.405 }, // Berlin
                    end: { lat: 55.7558, lng: 37.6176 }, // Moscow
                  },
                  {
                    start: { lat: -23.5505, lng: -46.6333 }, // São Paulo
                    end: { lat: 19.4326, lng: -99.1332 }, // Mexico City
                  },
                ]}
                lineColor="#fa0f69"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" flex gap-3.5 flex-wrap justify-center"
              >
                {/* Email Contact */}
                <motion.a
                  href="mailto:hi@vrandagarg.in"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-2 md:p-4 bg-[#0a0a0a]/30 border border-[#fa0f69]/20 rounded-lg md:rounded-xl backdrop-blur-md hover:border-[#fa0f69]/40 hover:shadow-lg hover:shadow-[#fa0f69]/20 transition-all  duration-300 group"
                >
                  <div className="flex-shrink-0 w-7 h-7 md:w-12 md:h-12 bg-[#18181a]/80 border border-[#fa0f69]/20 rounded-md md:rounded-lg flex items-center justify-center group-hover:border-[#fa0f69]/40 transition-all duration-300">
                    <Mail className="md:w-6 md:h-6 w-3 h-3 text-[#a1a1aa] group-hover:text-[#fa0f69] transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">
                      hi@vrandagarg.in
                    </p>
                  </div>
                </motion.a>

                {/* LinkedIn Contact */}
                <motion.a
                  href="https://linkedin.com/in/vrandagarg"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-2 md:p-4 bg-[#0a0a0a]/30 border border-[#fa0f69]/20 rounded-md md:rounded-xl backdrop-blur-md hover:border-[#fa0f69]/40 hover:shadow-lg hover:shadow-[#fa0f69]/20 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-7 h-7 md:w-12 md:h-12 bg-[#18181a]/80 border border-[#fa0f69]/20 rounded-lg md:rounded-lg flex items-center justify-center group-hover:border-[#fa0f69]/40 transition-all duration-300">
                    <FaLinkedin className="md:w-6 md:h-6 w-3 h-3 text-[#a1a1aa] group-hover:text-[#fa0f69] transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">
                      linkedin.com/in/vrandagarg
                    </p>
                  </div>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
