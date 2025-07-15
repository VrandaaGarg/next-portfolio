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
  <div>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      rows={6}
      className="w-full px-4 py-3 glass-effect bg-[var(--card-bg)]/30 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--primary-pink)] focus:border-[var(--primary-pink)] transition-colors duration-200 resize-none text-[var(--text-primary)] placeholder-[var(--text-muted)]"
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
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={`space-y-8 bg-[#0a0a0a]/80 rounded-4xl backdrop-blur-md p-10 ${
        className || ""
      }`}
    >
      <div>
        <h2 className="text-3xl text-gradient-primary bg-gradient-to-r from-[var(--primary-pink)] to-[var(--secondary-pink)] bg-clip-text text-transparent font-bold mb-4 text-center">
          Send me a message
        </h2>
        <p className="text-[var(--text-secondary)] text-center">
          Fill out the form and I&apos;ll get back to you as soon as possible.
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

            <FormTextarea
              placeholder="Your message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />

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
  );
}
