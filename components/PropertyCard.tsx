'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PropertyCard({ property }: { property: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/property/${property.slug}`}>
      <motion.article
        className="relative h-80 rounded-lg overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow duration-300"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        {/* Background gradient fallback */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#F7EFE2] via-[#C9A86A] to-[#0B1220] rounded-lg z-0"
          animate={{ opacity: imageError ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Image container - Base layer */}
        <motion.div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-lg z-0"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        >
          {!imageError && (
            <Image
              src={property.img}
              alt={property.title}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </motion.div>

        {/* Info section (visible when not hovering) - Middle layer */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-white p-4 space-y-2 rounded-lg z-10"
          animate={{ 
            y: isHovered ? 20 : 0,
            opacity: isHovered ? 0 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3
            className="font-semibold text-lg text-[#0B1220] line-clamp-1"
            animate={{ color: isHovered ? '#C9A86A' : '#0B1220' }}
            transition={{ duration: 0.3 }}
          >
            {property.title}
          </motion.h3>

          <p className="text-sm text-gray-500">{property.location}</p>

          <motion.p
            className="font-semibold text-lg text-[#C9A86A]"
          >
            {property.price}
          </motion.p>
        </motion.div>

        {/* Dark overlay on hover - Top layer on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-lg z-20"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content overlay - Appears on hover */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-between p-6 z-30 pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Title and location on hover */}
          <div className="space-y-2">
            <motion.h3
              className="font-bold text-xl text-white line-clamp-2"
              initial={{ opacity: 0, y: 10 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {property.title}
            </motion.h3>
            <motion.p
              className="text-sm text-[#F7EFE2] line-clamp-1"
              initial={{ opacity: 0, y: 10 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              📍 {property.location}
            </motion.p>
          </div>

          {/* Price and button on hover */}
          <div className="space-y-3 pointer-events-auto">
            <motion.p
              className="font-bold text-2xl text-[#C9A86A]"
              initial={{ opacity: 0, y: 10 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {property.price}
            </motion.p>

            {/* Explore More Button */}
            <motion.button
              className="w-full bg-gradient-to-r from-[#C9A86A] to-[#F7EFE2] text-[#0B1220] font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.preventDefault()}
            >
              Explore More →
            </motion.button>
          </div>
        </motion.div>

        {/* Glowing border effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none z-40"
          style={{
            boxShadow: 'none',
          }}
          animate={{
            boxShadow: isHovered
              ? 'inset 0 0 20px rgba(201, 168, 106, 0.4), 0 0 30px rgba(201, 168, 106, 0.3)'
              : 'none',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.article>
    </Link>
  );
}
