'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiMaximize2, FiX } from 'react-icons/fi';

import Image from '@/common/components/elements/Image';
import { Button } from '@/components/animate-ui/primitives/buttons/button';

interface LightboxImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LightboxImage = ({ src, alt, className = '' }: LightboxImageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Kunci scroll halaman saat lightbox terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group relative block w-full"
        aria-label={`Perbesar gambar ${alt}`}
      >
        <Image
          src={src}
          width={400}
          height={200}
          alt={alt}
          className={className}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <FiMaximize2 size={28} className="text-white" />
        </div>
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              >
                <Button
                  className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                  aria-label="Tutup"
                  onClick={() => setIsOpen(false)}
                  hoverScale={1.1}
                  tapScale={0.9}
                >
                  <FiX size={24} />
                </Button>
                <motion.img
                  src={src}
                  alt={alt}
                  className="max-h-full max-w-full rounded-lg object-contain"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};

export default LightboxImage;
