'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';

// Mock data - replace with Firebase data later
const propertyDatabase: { [key: string]: any } = {
  'dubai-marina-2br-seaview': {
    slug: 'dubai-marina-2br-seaview',
    title: 'Modern 2BR Apartment with Sea View',
    location: 'Dubai Marina, Dubai',
    price: 'AED 1,200,000',
    area: '1,250 sq ft',
    beds: 2,
    baths: 2,
    parking: 1,
    type: 'Apartment',
    img: 'https://images.unsplash.com/photo-1545321503-87f68cba27b1?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1545321503-87f68cba27b1?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9b274b5ce3eb?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
    ],
    description: 'Luxurious 2-bedroom apartment in the heart of Dubai Marina. This stunning property features modern architecture, premium finishes, and breathtaking sea views. Perfect for families or professionals seeking the epitome of urban luxury living.',
    amenities: [
      'Swimming Pool',
      'Gym & Fitness',
      'Concierge Service',
      'Parking',
      'Garden',
      'Balcony with Sea View',
      'Modern Kitchen',
      'Central A/C',
      'Security System',
      '24/7 Security',
    ],
    features: [
      { icon: '🏠', label: 'Type', value: 'Apartment' },
      { icon: '📐', label: 'Area', value: '1,250 sq ft' },
      { icon: '🛏️', label: 'Bedrooms', value: '2' },
      { icon: '🚿', label: 'Bathrooms', value: '2' },
      { icon: '🚗', label: 'Parking', value: '1 Space' },
    ],
    developedBy: 'Emaar Properties',
    yearBuilt: 2020,
    furnished: true,
    petFriendly: true,
  },
  'downtown-dubai-luxury-penthouse': {
    slug: 'downtown-dubai-luxury-penthouse',
    title: 'Luxury Penthouse with Burj Khalifa View',
    location: 'Downtown Dubai, Dubai',
    price: 'AED 3,500,000',
    area: '3,500 sq ft',
    beds: 3,
    baths: 3,
    parking: 2,
    type: 'Penthouse',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545321503-87f68cba27b1?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
    ],
    description: 'Exclusive penthouse offering panoramic views of Burj Khalifa and Downtown Dubai skyline. Features premium materials, state-of-the-art technology, and elegant interior design.',
    amenities: [
      'Private Elevator',
      'Swimming Pool',
      'Spa',
      'Gym',
      'Cinema Room',
      'Wine Cellar',
      'Rooftop Garden',
      'Smart Home System',
      'Security System',
    ],
    features: [
      { icon: '🏗️', label: 'Type', value: 'Penthouse' },
      { icon: '📐', label: 'Area', value: '3,500 sq ft' },
      { icon: '🛏️', label: 'Bedrooms', value: '3' },
      { icon: '🚿', label: 'Bathrooms', value: '3' },
      { icon: '🚗', label: 'Parking', value: '2 Spaces' },
    ],
    developedBy: 'Emaar Properties',
    yearBuilt: 2022,
    furnished: true,
    petFriendly: false,
  },
  'emirates-hills-villa': {
    slug: 'emirates-hills-villa',
    title: 'Stunning Villa in Emirates Hills',
    location: 'Emirates Hills, Dubai',
    price: 'AED 5,200,000',
    area: '5,000 sq ft',
    beds: 4,
    baths: 4,
    parking: 3,
    type: 'Villa',
    img: 'https://images.unsplash.com/photo-1512917774080-9b274b5ce3eb?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9b274b5ce3eb?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
    ],
    description: 'Magnificent 4-bedroom villa in the prestigious Emirates Hills community. Spacious compound with private garden, modern amenities, and exceptional attention to detail.',
    amenities: [
      'Private Swimming Pool',
      'Gym',
      'Garden',
      'Parking',
      'Modern Kitchen',
      'Home Theater',
      'Security Gate',
      'A/C System',
    ],
    features: [
      { icon: '🏡', label: 'Type', value: 'Villa' },
      { icon: '📐', label: 'Area', value: '5,000 sq ft' },
      { icon: '🛏️', label: 'Bedrooms', value: '4' },
      { icon: '🚿', label: 'Bathrooms', value: '4' },
      { icon: '🚗', label: 'Parking', value: '3 Spaces' },
    ],
    developedBy: 'Emaar Properties',
    yearBuilt: 2021,
    furnished: false,
    petFriendly: true,
  },
};

export default function PropertyDetail({ params }: { params: { slug: string } }) {
  const property = propertyDatabase[params.slug];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-[#0B1220]">Property Not Found</h1>
          <p className="text-gray-600">Sorry, the property you're looking for doesn't exist.</p>
          <Link href="/properties">
            <motion.button className="bg-gradient-to-r from-[#C9A86A] to-[#F7EFE2] text-[#0B1220] font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              Back to Properties
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 px-6 py-4">
        <Link href="/properties" className="text-[#C9A86A] hover:text-[#0B1220] font-semibold transition-colors">
          ← Back to Properties
        </Link>
      </div>

      {/* Hero Section - Image Gallery */}
      <section className="relative h-96 md:h-[500px] overflow-hidden bg-gray-100">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full"
        >
          <Image
            src={property.gallery[currentImageIndex]}
            alt={`${property.title} - Image ${currentImageIndex + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            priority
            loading="eager"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/1200x800?text=Property+Image';
            }}
          />
        </motion.div>

        {/* Image Navigation */}
        {property.gallery.length > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {property.gallery.map((_: any, index: number) => (
              <motion.button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentImageIndex ? 'w-8 bg-[#C9A86A]' : 'w-2 bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        )}

        {/* Navigation Arrows */}
        {property.gallery.length > 1 && (
          <>
            <motion.button
              onClick={() => setCurrentImageIndex(prev => (prev - 1 + property.gallery.length) % property.gallery.length)}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ←
            </motion.button>
            <motion.button
              onClick={() => setCurrentImageIndex(prev => (prev + 1) % property.gallery.length)}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              →
            </motion.button>
          </>
        )}
      </section>

      {/* Property Details */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-4">
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-[#0B1220]">
                {property.title}
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg text-gray-600">
                📍 {property.location}
              </motion.p>
              <motion.p variants={itemVariants} className="text-3xl font-bold text-[#C9A86A]">
                {property.price}
              </motion.p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {property.features.map((feature: any, index: number) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-[#F7EFE2] to-white p-4 rounded-lg border border-[#C9A86A]/20"
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <p className="text-sm text-gray-600">{feature.label}</p>
                  <p className="font-semibold text-[#0B1220]">{feature.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-[#F7EFE2]/50 to-white p-8 rounded-lg border border-[#C9A86A]/20"
          >
            <h2 className="text-2xl font-bold text-[#0B1220] mb-4">About This Property</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{property.description}</p>
          </motion.div>

          {/* Amenities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-[#0B1220] mb-6">Amenities</h2>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {property.amenities.map((amenity: string, index: number) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-[#C9A86A] hover:shadow-md transition-all"
                >
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700">{amenity}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#0B1220] mb-4">Property Details</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between"><span>Developer:</span> <span className="font-semibold">{property.developedBy}</span></li>
                <li className="flex justify-between"><span>Year Built:</span> <span className="font-semibold">{property.yearBuilt}</span></li>
                <li className="flex justify-between"><span>Furnished:</span> <span className="font-semibold">{property.furnished ? 'Yes' : 'No'}</span></li>
                <li className="flex justify-between"><span>Pet Friendly:</span> <span className="font-semibold">{property.petFriendly ? 'Yes' : 'No'}</span></li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#C9A86A]/10 to-[#F7EFE2]/20 border border-[#C9A86A]/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#0B1220] mb-4">Financing Options</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Mortgage Available</li>
                <li>✓ Flexible Payment Plans</li>
                <li>✓ Bank Support</li>
                <li>✓ Investor Friendly</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Inquiry Form Section */}
      <section className="bg-gradient-to-r from-[#0B1220] to-[#2C2F33] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interested in This Property?</h2>
            <p className="text-gray-300 text-lg">Get in touch with our team for more information or to schedule a viewing.</p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <motion.div
              className="md:col-span-2 space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.input
                variants={itemVariants}
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-6 py-3 bg-white/10 border border-[#C9A86A]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A86A] focus:ring-1 focus:ring-[#C9A86A] transition-all"
                required
              />
              <motion.input
                variants={itemVariants}
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-6 py-3 bg-white/10 border border-[#C9A86A]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A86A] focus:ring-1 focus:ring-[#C9A86A] transition-all"
                required
              />
              <motion.input
                variants={itemVariants}
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-6 py-3 bg-white/10 border border-[#C9A86A]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A86A] focus:ring-1 focus:ring-[#C9A86A] transition-all"
                required
              />
              <motion.textarea
                variants={itemVariants}
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-6 py-3 bg-white/10 border border-[#C9A86A]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A86A] focus:ring-1 focus:ring-[#C9A86A] transition-all resize-none"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="md:col-span-1 bg-gradient-to-r from-[#C9A86A] to-[#F7EFE2] text-[#0B1220] font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Inquiry
            </motion.button>

            <motion.a
              href={`https://wa.me/971555123456?text=I'm interested in ${property.title} - ${property.price}`}
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-1 bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💬 WhatsApp
            </motion.a>
          </motion.form>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 bg-green-500/20 border border-green-500 text-green-300 p-4 rounded-lg text-center"
            >
              ✓ Thank you! We'll contact you shortly.
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#F7EFE2] to-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220] mb-4">Explore More Properties</h2>
            <p className="text-gray-600 text-lg mb-8">Browse our collection of premium properties across Dubai</p>
            <Link href="/properties">
              <motion.button className="bg-gradient-to-r from-[#C9A86A] to-[#F7EFE2] text-[#0B1220] font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
                Browse All Properties
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
