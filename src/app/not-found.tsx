'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-serif font-black text-primary/10 select-none">
          404
        </h1>
        <div className="relative -mt-16 mb-8">
          <h2 className="text-3xl font-serif font-bold text-primary">
            Donnée introuvable
          </h2>
          <div className="flex justify-center mt-4">
            <motion.div 
              className="h-1 w-12 bg-accent rounded-full"
              animate={{ 
                width: [48, 80, 48],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </div>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-md mx-auto mb-10">
          Il semble que cette donnée soit manquante dans l&apos;architecture de ce site. 
          Le chemin a peut-être été déplacé ou supprimé.
        </p>

        <Button asChild variant="primary" size="lg">
          <Link href="/" className="gap-2">
            <Home className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
        </Button>
      </motion.div>

      {/* Background visual element for 404 */}
      <div className="absolute inset-0 -z-20 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <div className="font-mono text-[10px] leading-none whitespace-pre rotate-12">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i}>
              {Array.from({ length: 100 }).map((_, j) => (
                Math.random() > 0.8 ? '0 ' : '1 '
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
