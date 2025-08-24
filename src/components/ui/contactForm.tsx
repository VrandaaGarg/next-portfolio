"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Mail } from "lucide-react";

interface FormInputProps {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
}

const FormInput = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  icon,
}: FormInputProps) => (
  <div className="relative group">
    {/* Input shine effect on hover */}
    <motion.div
      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      initial={{ x: "-100%" }}
      whileHover={{ x: "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.div>

    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
      {icon}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="relative w-full px-4 pl-10 py-3 glass-effect bg-[var(--card-bg)]/30 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--primary-pink)]/30 focus:border-[var(--primary-pink)]/30 transition-colors duration-200 text-[var(--text-primary)] placeholder-[var(--text-muted)] hover:bg-[var(--card-bg)]/40"
      placeholder={placeholder}
      autoComplete={name}
    />
  </div>
);

interface FormTextareaProps {
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextarea = ({
  placeholder,
  name,
  value,
  onChange,
}: FormTextareaProps) => (
  <div className="relative group">
    {/* Textarea shine effect on hover */}

    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      rows={4}
      className="relative w-full px-4 py-3 glass-effect bg-[var(--card-bg)]/30 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--primary-pink)]/30 focus:border-[var(--primary-pink)]/30 transition-colors duration-200 resize-none text-[var(--text-primary)] placeholder-[var(--text-muted)] hover:bg-[var(--card-bg)]/40"
      placeholder={placeholder}
    />
  </div>
);

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
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
      // Create FormData object for Web3Forms
      const formDataToSend = new FormData();
      formDataToSend.append(
        "access_key",
        "e138b10a-f643-4087-b244-0d0e83476ea5"
      );
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Form submission failed:", result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={`relative bg-[#0a0a0a]/20 shadow-2xl mx-5 shadow-[#fa0f69]/10 rounded-xl md:rounded-4xl px-4- md:px-11 p-7 md:p-8 border-2 border-t-[#727070]/15 border-r-[#727070]/15 border-b-[#fa0f69]/15 border-l-[#fa0f69]/15 backdrop-blur-md overflow-hidden ${
        className || ""
      }`}
    >
      {/* Infinite Moving Glassy Shine Effect */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1,
        }}
      >
        <div className="h-full w-full bg-gradient-to-r from-transparent via-pink-300/20 to-transparent transform skew-x-12 blur-sm" />
      </motion.div>

      {/* Secondary Shine Effect - Slower and More Subtle */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2,
        }}
      >
        <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-pink-400/15 to-transparent transform -skew-x-12 blur-md" />
      </motion.div>

      {/* Content Container with relative positioning */}
      <div className="relative z-10">
        <div>
          <h2 className="text-2xl md:text-3xl text-[#ff4081] font-bold mb-4 text-center">
            Send me a message
          </h2>
          <p className="text-sm md:text-base text-[var(--text-muted)] text-center mb-6">
            I&apos;d love to hear from you! Whether you have a question, a
            project in mind, or just want to say hi, I&apos;m all ears.
          </p>
        </div>

        <AnimatePresence>
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className=" bg-transparent  rounded-lg p-6 text-center "
            >
              <div className="text-[var(--primary-pink)] text-4xl mb-4">✓</div>
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
              className="space-y-4 md:space-y-6"
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

              <FormTextarea
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full gradient-primary hover:gradient-secondary disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 text-white hover-glow  overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12" />
                </motion.div>
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
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
