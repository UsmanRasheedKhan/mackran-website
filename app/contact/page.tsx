'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import CTAButton from '@/components/CTAButton';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#F7EFE2] to-white relative overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-[#C9A86A] rounded-full opacity-5 blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#0B1220] mb-6">Get in Touch</h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Have questions? Our team is here to help. Reach out today and discover your next luxury property.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#0B1220] mb-10">Send us a Message</h2>

            <motion.form
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name' },
                { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com' },
                { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+971...' },
              ].map((field) => (
                <motion.div key={field.name} variants={itemVariants}>
                  <label className="block text-gray-700 font-semibold mb-3">{field.label}</label>
                  <motion.input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A86A] transition-all duration-300 text-lg"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: '0 0 20px rgba(201, 168, 106, 0.2)',
                    }}
                    animate={
                      focusedField === field.name
                        ? { borderColor: '#C9A86A' }
                        : { borderColor: '#d1d5db' }
                    }
                  />
                </motion.div>
              ))}

              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 font-semibold mb-3">Message</label>
                <motion.textarea
                  name="message"
                  placeholder="Tell us what you're looking for..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A86A] transition-all duration-300 text-lg resize-none"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: '0 0 20px rgba(201, 168, 106, 0.2)',
                  }}
                  animate={
                    focusedField === 'message'
                      ? { borderColor: '#C9A86A' }
                      : { borderColor: '#d1d5db' }
                  }
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  className="relative w-full px-8 py-4 bg-[#0B1220] text-white rounded-lg font-semibold overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#C9A86A] to-[#0B1220]"
                    initial={{ x: -100 }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  <span className="relative z-10">Send Message</span>
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#0B1220] mb-10">Contact Information</h2>

            <motion.div
              className="space-y-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: 'Dubai Office',
                  content: 'Downtown Dubai\nDubai, UAE',
                  icon: '📍',
                },
                {
                  title: 'Phone',
                  content: '+971 50 123 4567',
                  icon: '📞',
                  href: 'tel:+971501234567',
                },
                {
                  title: 'Email',
                  content: 'info@mackran.ae',
                  icon: '✉️',
                  href: 'mailto:info@mackran.ae',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group"
                >
                  <motion.div
                    className="p-8 bg-gradient-to-br from-[#F7EFE2] to-white rounded-2xl border-2 border-transparent group-hover:border-[#C9A86A] shadow-md hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="font-semibold text-[#C9A86A] mb-3 text-lg">{item.title}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-700 hover:text-[#C9A86A] transition duration-300 text-lg font-medium"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-700 text-lg font-medium whitespace-pre-line">{item.content}</p>
                    )}
                  </motion.div>
                </motion.div>
              ))}

              <motion.div variants={itemVariants}>
                <CTAButton href="https://wa.me/971501234567" variant="whatsapp">
                  💬 WhatsApp Us
                </CTAButton>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
