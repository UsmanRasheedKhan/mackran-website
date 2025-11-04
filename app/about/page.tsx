'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
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

export default function About() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#F7EFE2] to-white relative overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-96 h-96 bg-[#C9A86A] rounded-full opacity-5 blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#0B1220] mb-6 leading-tight">
              About Mackran Real Estate
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            A boutique luxury real estate firm dedicated to connecting discerning clients with premium properties and exceptional investment opportunities across the UAE.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 className="text-4xl md:text-5xl font-bold text-[#0B1220] mb-8">Our Story</motion.h2>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p variants={itemVariants} className="text-gray-700 text-lg leading-relaxed">
                Mackran Properties was founded on the principle of delivering white-glove service to clients seeking luxury real estate in the UAE. With a deep understanding of the market and a commitment to discretion, we have built relationships with some of the most prestigious property owners and investors in the region.
              </motion.p>
              <motion.p variants={itemVariants} className="text-gray-700 text-lg leading-relaxed">
                Our team brings decades of combined experience in luxury real estate, investment advisory, and international property transactions.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-6 bg-gradient-to-br from-[#C9A86A] to-[#0B1220] rounded-2xl opacity-10 blur-2xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <Image
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=600&fit=crop"
              alt="Our Story"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl relative z-10"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-[#F7EFE2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Our Mission",
              description:
                "To provide exceptional real estate services that exceed expectations, facilitating seamless transactions and building lasting relationships with clients through integrity, expertise, and personalized service.",
              icon: "🎯",
            },
            {
              title: "Our Vision",
              description:
                "To be the most trusted and respected luxury real estate boutique in the UAE, known for our discretion, market expertise, and unwavering commitment to client success.",
              icon: "🌟",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#C9A86A] to-transparent rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              />

              <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#C9A86A] relative z-10">
                <motion.div className="text-5xl mb-4">{item.icon}</motion.div>
                <h3 className="text-3xl font-bold text-[#0B1220] mb-4">{item.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#0B1220] mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert professionals dedicated to finding you the perfect property.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: "Amira Al Mansouri", role: "Founder & Lead Agent", bio: "20+ years in luxury real estate" },
              { name: "Ahmed Hassan", role: "Investment Advisor", bio: "Expert in Dubai & Abu Dhabi markets" },
              { name: "Sarah Thompson", role: "Client Relations Manager", bio: "Dedicated to exceptional service" },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -8 }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#C9A86A] to-[#0B1220] rounded-2xl opacity-0 blur-xl group-hover:opacity-20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-[#F7EFE2] to-white p-8 rounded-2xl text-center border-2 border-transparent group-hover:border-[#C9A86A] shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Avatar circle with animation */}
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-br from-[#C9A86A] to-[#0B1220] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {member.name.charAt(0)}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-[#0B1220] mb-2">{member.name}</h3>
                  <motion.p
                    className="text-[#C9A86A] font-semibold mb-3 text-lg"
                    animate={{ color: ["#C9A86A", "#0B1220", "#C9A86A"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {member.role}
                  </motion.p>
                  <p className="text-gray-600 text-base">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#0B1220] to-[#1a1d2b] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready to Partner with Mackran?</h3>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              Join our exclusive clientele and discover the Mackran difference.
            </p>
            <CTAButton href="/contact" variant="secondary">
              Get Started Today
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
