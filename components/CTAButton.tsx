'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'whatsapp';
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  className = '',
}: CTAButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          bg: 'bg-[#F7EFE2]',
          text: 'text-[#0B1220]',
          border: 'border-[#C9A86A]',
          hoverBg: 'rgba(201, 168, 106, 0.1)',
        };
      case 'whatsapp':
        return {
          bg: 'bg-green-600',
          text: 'text-white',
          border: 'border-green-600',
          hoverBg: 'rgba(34, 197, 94, 0.1)',
        };
      default:
        return {
          bg: 'bg-[#0B1220]',
          text: 'text-white',
          border: 'border-[#0B1220]',
          hoverBg: 'rgba(201, 168, 106, 0.1)',
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <Link href={href}>
      <motion.button
        className={`relative px-8 py-3 font-semibold rounded-lg overflow-hidden border-2 transition-all duration-300 ${styles.bg} ${styles.text} ${styles.border} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Background fill effect */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `linear-gradient(135deg, rgba(201, 168, 106, 0.2), rgba(247, 239, 226, 0.2))`,
          }}
          initial={{ opacity: 0, x: -100 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
          style={{
            width: '100%',
            height: '100%',
          }}
          animate={{
            opacity: [0, 0.1, 0],
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />

        {/* Text */}
        <motion.span
          className="relative z-10 flex items-center justify-center gap-2"
          initial={{ letterSpacing: '0em' }}
          whileHover={{ letterSpacing: '0.05em' }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.span>
      </motion.button>
    </Link>
  );
}
