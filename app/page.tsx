'use client';

import AnimatedText from '@/components/AnimatedText';
import CTAButton from '@/components/CTAButton';
import PropertyCard from '@/components/PropertyCard';
import { motion } from 'framer-motion';
import Image from 'next/image';

const demoProperties = [
  {
    id: '1',
    title: 'Dubai Marina 2BR Sea View',
    price: 'AED 3,200,000',
    location: 'Dubai Marina',
    img: 'https://images.unsplash.com/photo-1560184897-6b3d9a89f0d2?w=600&h=400&fit=crop',
    slug: 'dubai-marina-2br-seaview',
    beds: 2,
    baths: 2,
  },
  {
    id: '2',
    title: 'Jumeirah Luxury Villa',
    price: 'AED 12,500,000',
    location: 'Jumeirah',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    slug: 'jumeirah-luxury-villa',
    beds: 4,
    baths: 5,
  },
  {
    id: '3',
    title: 'Downtown Dubai Penthouse',
    price: 'AED 8,900,000',
    location: 'Downtown Dubai',
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
    slug: 'downtown-dubai-luxury-penthouse',
    beds: 3,
    baths: 3,
  },
];

const primeProjects = [
  {
    title: 'Azizi Milan Heights',
    price: 'From AED 575,000',
    area: '339 to 1,149 SQ.FT',
    beds: 'Studio, 1, 2, 3',
    img: 'https://images.unsplash.com/photo-1545321503-87f68cba27b1?w=600&h=400&fit=crop',
  },
  {
    title: 'Sobha Aquacrest',
    price: 'From AED 1,170,000',
    area: '569 to 1,277 SQ.FT',
    beds: '1-3',
    img: 'https://images.unsplash.com/photo-1512917774080-9b274b5ce3eb?w=600&h=400&fit=crop',
  },
  {
    title: 'Palm Jebel Ali Villas',
    price: 'From AED 3,500,000',
    area: '3,000 to 5,000 SQ.FT',
    beds: '3-4',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
  },
];

const communities = [
  {
    name: 'Downtown Dubai',
    description: 'Iconic urban living with world-class amenities',
    properties: '450+',
    img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop',
  },
  {
    name: 'Dubai Marina',
    description: 'Waterfront luxury apartments and penthouses',
    properties: '380+',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
  },
  {
    name: 'Emirates Hills',
    description: 'Exclusive villas in the most prestigious area',
    properties: '280+',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
  },
  {
    name: 'Jumeirah',
    description: 'Ultra-luxury beachfront properties',
    properties: '220+',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
  },
  {
    name: 'Business Bay',
    description: 'Modern apartments near business district',
    properties: '320+',
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
  },
  {
    name: 'Palm Jumeirah',
    description: 'Iconic island villas with sea views',
    properties: '150+',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c36f08b?w=600&h=400&fit=crop',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <section className="relative h-screen bg-gradient-to-br from-[#F7EFE2] via-white to-[#F7EFE2] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-[#C9A86A] rounded-full opacity-5 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#0B1220] rounded-full opacity-5 blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <AnimatedText className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#0B1220] mb-6">
            Mackran Real Estate
          </AnimatedText>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Discover premium UAE real estate. Luxury villas, penthouses, and waterfront apartments across Dubai and Abu Dhabi.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-3 justify-center"
          >
            <motion.input
              aria-label="search"
              placeholder="Search location, e.g. Dubai Marina"
              className="px-6 py-4 border-2 border-gray-300 rounded-lg w-full md:w-80 text-lg focus:outline-none focus:border-[#C9A86A] transition-all duration-300 shadow-sm hover:shadow-md"
              whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(201, 168, 106, 0.2)' }}
            />
            <motion.button
              className="relative px-8 py-4 bg-[#0B1220] text-white rounded-lg font-semibold overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#C9A86A] to-[#0B1220]"
                initial={{ x: -100 }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10">Search Properties</span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.svg
            className="w-6 h-6 text-[#C9A86A]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ scale: 1.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2 className="text-4xl md:text-5xl font-bold text-[#0B1220] mb-4">
              Featured Listings
            </motion.h2>
            <motion.p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
              Handpicked properties representing the finest in UAE real estate. Each listing curated for discerning clients seeking luxury and investment potential.
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {demoProperties.map((property) => (
              <motion.div key={property.id} variants={itemVariants}>
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <CTAButton href="/properties" variant="primary">
              View All Properties
            </CTAButton>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-r from-[#F7EFE2] to-[#F5F0E8] relative overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-96 h-96 bg-[#C9A86A] rounded-full opacity-5 blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1220] mb-4">
              Prime Investment Opportunities
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore Dubai's top-rated projects with excellent ROI potential. Premium off-plan opportunities from leading developers.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {primeProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <motion.div className="relative h-64 w-full overflow-hidden" whileHover={{ scale: 1.02 }}>
                  <Image src={project.img} alt={project.title} fill className="object-cover" loading="lazy" />
                </motion.div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-[#0B1220]">{project.title}</h3>
                  <p className="text-[#C9A86A] font-semibold text-lg">{project.price}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Area: {project.area}</p>
                    <p>Bedrooms: {project.beds}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1220] mb-4">Explore Dubai Communities</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Discover the most sought-after neighborhoods in Dubai. Each community offers unique lifestyle, amenities, and investment potential.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {communities.map((community) => (
              <motion.div
                key={community.name}
                variants={itemVariants}
                className="group relative h-80 rounded-lg overflow-hidden cursor-pointer"
              >
                <Image
                  src={community.img}
                  alt={community.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-6 text-white"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-2">{community.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{community.description}</p>
                  <p className="text-[#C9A86A] font-semibold">{community.properties} Properties</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0B1220] text-white relative overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-96 h-96 bg-[#C9A86A] rounded-full opacity-5 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Mackran?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We provide white-glove service with expertise, discretion, and a commitment to excellence.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: 'E', title: 'Expert Team', desc: '20+ years combined experience' },
              { icon: 'C', title: 'Curated Portfolio', desc: 'Premium properties only' },
              { icon: 'S', title: 'Personal Service', desc: 'Dedicated account managers' },
              { icon: 'T', title: 'Full Transparency', desc: 'Clear pricing and terms' },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="bg-white/10 border border-[#C9A86A]/30 rounded-lg p-8 text-center hover:bg-white/20 hover:border-[#C9A86A] transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-[#F7EFE2] to-white relative overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-96 h-96 bg-[#C9A86A] rounded-full opacity-5 blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-[#0B1220] mb-6 leading-tight">
              Ready to Find Your Dream Property?
            </h3>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              Contact our team of experts today. We're here to help you navigate the UAE luxury real estate market.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <CTAButton href="/contact" variant="primary">
                  Get in Touch
                </CTAButton>
              </motion.div>
              <motion.div variants={itemVariants}>
                <CTAButton href="https://wa.me/971501234567" variant="whatsapp">
                  WhatsApp Us
                </CTAButton>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
