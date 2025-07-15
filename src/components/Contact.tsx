"use client";

import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui";
import ContactForm from "@/components/ui/contactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20  text-white overflow-hidden"
    >
      {/* Contact Form and Info */}
      <div className="py-20 ">
        <div className="max-w-7xl mx-auto grid  lg:grid-cols-2 gap-16">
          {/* Contact Form */}

          {/* Contact Info and World Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }} // Reduced duration
            className="space-y-8 flex flex-col text-center items-center justify-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }} // Reduced duration
              className="text-5xl text-center md:text-5xl lg:text-5xl font-bold mb-8 relative z-20"
            >
              Let&apos;s get in{" "}
              <span className="text-gradient-primary bg-gradient-to-r from-[var(--primary-pink)] to-[var(--secondary-pink)] bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h1>

            {/* World Map */}
            <div className=" bg-[#0a0a0a]/60 rounded-xl p-6 border border-[#fa0f69]/30 backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Remote{" "}
                <span className="text-[var(--text-secondary)]">
                  Connectivity
                </span>
              </h3>
              <p className="text-sm text-[var(--text-muted)] text-center mb-6">
                Work from anywhere, collaborate globally. Perfect for remote
                projects and international partnerships.
              </p>

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
            </div>
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
