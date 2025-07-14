"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WorldMap } from "@/components/ui";
import { Mail, Send, User } from "lucide-react";

// Optimized form input component to reduce re-renders
const FormInput = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  icon,
}: {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
}) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      {icon}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 pl-10 py-3 glass-effect bg-[var(--card-bg)]/30 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--primary-pink)] focus:border-[var(--primary-pink)] transition-colors duration-200 text-[var(--text-primary)] placeholder-[var(--text-muted)]"
      placeholder={placeholder}
      autoComplete={name}
    />
  </div>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mvgkovyl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20  bg-[#0a0a0a]/40 text-white overflow-hidden"
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

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 bg-[#0a0a0a]/80 rounded-4xl backdrop-blur-md p-10"
          >
            <div>
              <h2 className="text-3xl text-gradient-primary bg-gradient-to-r from-[var(--primary-pink)] to-[var(--secondary-pink)] bg-clip-text text-transparent font-bold mb-4 text-center">
                Send me a message
              </h2>
              <p className="text-[var(--text-secondary)] text-center">
                Fill out the form and I&apos;ll get back to you as soon as
                possible.
              </p>
            </div>

            <AnimatePresence>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="glass-effect bg-[var(--card-bg)]/50 border border-[var(--primary-pink)]/30 rounded-lg p-6 text-center backdrop-blur-md"
                >
                  <div className="text-[var(--primary-pink)] text-4xl mb-4">
                    ✓
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--primary-pink)] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Thank you for reaching out. I&apos;ll get back to you soon!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <FormInput
                    type="text"
                    placeholder="Your name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    icon={<User className="text-[var(--primary-pink)]" />}
                  />

                  <FormInput
                    type="email"
                    placeholder="your.email@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    icon={<Mail className="text-[var(--primary-pink)]" />}
                  />

                  <div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 glass-effect bg-[var(--card-bg)]/30 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--primary-pink)] focus:border-[var(--primary-pink)] transition-colors duration-200 resize-none text-[var(--text-primary)] placeholder-[var(--text-muted)]"
                      placeholder="Your message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-primary hover:gradient-secondary disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 text-white hover-glow"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
