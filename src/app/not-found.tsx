'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import TechBackground from '@/components/ui/TechBackground';

export default function GlobalNotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
      <TechBackground />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 1, -1, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <h1 className="text-[12rem] md:text-[18rem] font-serif font-black text-primary/10 select-none leading-none">
            404
          </h1>
        </motion.div>
        
        <div className="relative -mt-12 md:-mt-20 mb-12">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-4">
            Donnée introuvable / Data not found
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Le système ne peut résoudre cette requête. <br className="hidden md:block" />
            The system cannot resolve this request.
          </p>
        </div>

        <Button asChild variant="primary" size="lg" className="rounded-full px-12 group">
          <Link href="/" className="gap-3">
            <Home className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            Retour à la base / Return to Base
          </Link>
        </Button>
      </motion.div>

      {/* Decorative Glitch lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-accent/20 animate-pulse" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-primary/20 animate-pulse delay-700" />
      </div>
    </div>
  );
}
