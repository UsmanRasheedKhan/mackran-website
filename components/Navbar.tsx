'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        className="relative py-2 cursor-pointer text-gray-700 overflow-hidden"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.span
          animate={{ color: isHovered ? '#C9A86A' : '#374151' }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {label}
        </motion.span>

        {/* Underline fill effect */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C9A86A] to-[#F7EFE2]"
          animate={{
            width: isHovered ? '100%' : '0%',
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </motion.div>
    </Link>
  );
};

const NavButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      {/* Button background fill effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#C9A86A] to-[#0B1220] rounded"
        animate={{
          opacity: isHovered ? 0.15 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      <Link href="/contact">
        <button className="relative px-6 py-2 bg-[#0B1220] text-white rounded font-medium transition-all duration-300 border border-[#0B1220] hover:border-[#C9A86A]">
          <motion.span
            animate={{ letterSpacing: isHovered ? '0.05em' : '0em' }}
            transition={{ duration: 0.3 }}
          >
            Contact
          </motion.span>
        </button>
      </Link>
    </motion.div>
  );
};

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <motion.div
            className="text-2xl font-bold text-[#0B1220] cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Mackran<span className="text-[#C9A86A]">.</span>
          </motion.div>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <NavLink href="/properties" label="Properties" />
          <NavLink href="/about" label="About" />
          <NavLink href="/blog" label="Blog" />
          <NavButton />
        </div>

        <div className="md:hidden">
          <motion.button
            aria-label="menu"
            className="p-2 text-[#0B1220] text-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            ☰
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
