"use client";

import { useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { motion } from "framer-motion";
import CTAButton from "@/components/CTAButton";

const allProperties = [
  { id: "1", title: "Dubai Marina 2BR Sea View", price: "AED 3,200,000", img: "https://images.unsplash.com/photo-1560184897-6b3d9a89f0d2?w=600&h=400&fit=crop", location: "Dubai Marina", slug: "dubai-marina-2br-sea-view", beds: 2, baths: 2, type: "apartment" },
  { id: "2", title: "Jumeirah Luxury Villa", price: "AED 12,500,000", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop", location: "Jumeirah", slug: "jumeirah-luxury-villa", beds: 4, baths: 5, type: "villa" },
  { id: "3", title: "Downtown Dubai Penthouse", price: "AED 8,900,000", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop", location: "Downtown Dubai", slug: "downtown-dubai-penthouse", beds: 3, baths: 3, type: "penthouse" },
  { id: "4", title: "Palm Jumeirah Beach Villa", price: "AED 15,000,000", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop", location: "Palm Jumeirah", slug: "palm-jumeirah-villa", beds: 5, baths: 6, type: "villa" },
  { id: "5", title: "Emirates Living 3BR Home", price: "AED 4,500,000", img: "https://images.unsplash.com/photo-1560184897-6b3d9a89f0d2?w=600&h=400&fit=crop", location: "Emirates Living", slug: "emirates-living-home", beds: 3, baths: 3, type: "apartment" },
  { id: "6", title: "Abu Dhabi Waterfront Townhouse", price: "AED 5,200,000", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop", location: "Abu Dhabi", slug: "abu-dhabi-townhouse", beds: 3, baths: 2, type: "townhouse" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export default function Properties() {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  const filtered = allProperties.filter((p) => {
    if (selectedLocation && !p.location.toLowerCase().includes(selectedLocation.toLowerCase())) return false;
    if (selectedType && p.type !== selectedType) return false;
    return true;
  });

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
            <h1 className="text-5xl md:text-7xl font-bold text-[#0B1220] mb-6">Our Properties</h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Browse our curated collection of premium properties across the UAE. Each listing represents excellence in luxury real estate.
          </motion.p>
        </div>
      </section>

      {/* Filters & Listings */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 p-8 bg-gradient-to-r from-[#F7EFE2] to-white rounded-2xl shadow-lg border-2 border-transparent hover:border-[#C9A86A] transition-all duration-300 flex flex-col md:flex-row gap-4"
          >
            <motion.input
              placeholder="Search location..."
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-6 py-4 border-2 border-gray-300 rounded-lg flex-1 focus:outline-none focus:border-[#C9A86A] transition-all duration-300 text-lg font-medium"
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(201, 168, 106, 0.2)",
              }}
            />

            <motion.select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A86A] transition-all duration-300 text-lg font-medium"
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(201, 168, 106, 0.2)",
              }}
            >
              <option value="">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="penthouse">Penthouse</option>
              <option value="townhouse">Townhouse</option>
            </motion.select>

            <motion.button
              onClick={() => {
                setSelectedLocation("");
                setSelectedType("");
              }}
              className="relative px-8 py-4 bg-[#C9A86A] text-white rounded-lg font-semibold overflow-hidden group whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-0"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Clear Filters</span>
            </motion.button>
          </motion.div>

          {/* Results Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <motion.p
              className="text-gray-600 text-lg font-semibold"
              key={`${selectedLocation}-${selectedType}-${filtered.length}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="text-[#C9A86A] font-bold text-2xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.3 }}
              >
                {filtered.length}
              </motion.span>
              {" "}
              of
              {" "}
              <span className="font-bold">{allProperties.length}</span>
              {" "}
              properties
            </motion.p>
          </motion.div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={`${selectedLocation}-${selectedType}`}
            >
              {filtered.map((property) => (
                <motion.div key={property.id} variants={itemVariants}>
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="text-6xl mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🔍
              </motion.div>
              <p className="text-gray-600 text-2xl font-semibold mb-8">
                No properties found matching your criteria.
              </p>
              <motion.button
                onClick={() => {
                  setSelectedLocation("");
                  setSelectedType("");
                }}
                className="relative px-8 py-3 bg-[#0B1220] text-white rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                View All Properties
              </motion.button>
            </motion.div>
          )}
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
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Looking for Something Specific?</h3>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              Our expert team can help you find the perfect property. Let's discuss your requirements.
            </p>
            <CTAButton href="/contact" variant="secondary">
              Contact Our Experts
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
