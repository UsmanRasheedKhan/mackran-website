'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Blog() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const posts = [
    {
      id: 1,
      title: 'Luxury Real Estate Trends in Dubai 2025',
      excerpt: 'Exploring the latest investment opportunities and market movements in Dubai premium segment.',
      date: 'Nov 4, 2025',
      category: 'Market Trends',
    },
    {
      id: 2,
      title: 'Waterfront Living: A Guide to Coastal Properties',
      excerpt: 'Discover the best waterfront developments across the UAE and why they are worth the investment.',
      date: 'Nov 1, 2025',
      category: 'Lifestyle',
    },
    {
      id: 3,
      title: 'Investment Guide: UAE Real Estate for International Buyers',
      excerpt: 'Everything you need to know about purchasing property as a foreign investor in the UAE.',
      date: 'Oct 28, 2025',
      category: 'Investment',
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
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
            <h1 className="text-5xl md:text-7xl font-bold text-[#0B1220] mb-6">Mackran Insights</h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Stay informed with our latest articles, market trends, and investment insights.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {posts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="group relative"
                whileHover={{ x: 4 }}
              >
                {/* Background glow */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-[#C9A86A] to-transparent rounded-lg opacity-0 group-hover:opacity-5 blur-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                />

                {/* Card */}
                <div className="relative border-l-4 border-transparent group-hover:border-[#C9A86A] pl-8 py-8 hover:bg-[#F7EFE2]/30 transition-all duration-300 rounded-lg px-6">
                  {/* Left accent bar animation */}
                  <motion.div
                    className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#C9A86A] to-transparent rounded-full"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  />

                  <motion.div
                    className="inline-block mb-3 px-3 py-1 bg-[#C9A86A] text-white rounded-full text-xs font-semibold"
                    whileHover={{ scale: 1.1 }}
                  >
                    {post.category}
                  </motion.div>

                  <motion.p
                    className="text-sm text-gray-500 mb-3 font-medium"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    📅 {post.date}
                  </motion.p>

                  <motion.h2
                    className="text-3xl font-bold text-[#0B1220] mb-4 group-hover:text-[#C9A86A] transition-colors duration-300"
                    whileHover={{ x: 8 }}
                  >
                    {post.title}
                  </motion.h2>

                  <motion.p className="text-gray-700 text-lg mb-6 leading-relaxed">{post.excerpt}</motion.p>

                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#C9A86A] font-semibold group/link"
                    whileHover={{ x: 8 }}
                  >
                    <span>Read More</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 relative"
          >
            {/* Background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#C9A86A] to-[#0B1220] rounded-3xl opacity-10 blur-3xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative p-12 md:p-16 bg-gradient-to-br from-[#F7EFE2] to-white rounded-3xl border-2 border-[#C9A86A]/20 shadow-xl">
              <motion.div
                className="text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-[#0B1220] mb-6">
                  Subscribe to Our Newsletter
                </motion.h3>

                <motion.p
                  variants={itemVariants}
                  className="text-gray-700 mb-10 max-w-2xl mx-auto text-lg leading-relaxed"
                >
                  Get exclusive insights, market updates, and new property listings delivered to your inbox weekly.
                </motion.p>

                <motion.form
                  onSubmit={handleSubscribe}
                  className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto"
                  variants={itemVariants}
                >
                  <motion.input
                    placeholder="your@email.com"
                    type="email"
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A86A] transition-all duration-300 text-lg"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: '0 0 20px rgba(201, 168, 106, 0.2)',
                    }}
                  />

                  <motion.button
                    type="submit"
                    className="relative px-8 py-4 bg-[#0B1220] text-white rounded-lg font-semibold overflow-hidden group whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Button fill effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#C9A86A] to-[#0B1220]"
                      initial={{ x: -100 }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                    />

                    <motion.span
                      className="relative z-10"
                      animate={subscribed ? { scale: [1, 0.8, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {subscribed ? '✓ Subscribed!' : 'Subscribe'}
                    </motion.span>
                  </motion.button>
                </motion.form>

                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-[#C9A86A] font-semibold mt-4"
                  >
                    Thank you for subscribing! Check your inbox for updates.
                  </motion.p>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
