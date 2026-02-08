'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Module {
  title: string;
  desc: string;
}

interface CurriculumAccordionProps {
  modules: Module[];
}

export default function CurriculumAccordion({ modules }: CurriculumAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {modules.map((module, index) => (
        <div 
          key={index}
          className="border border-primary/10 rounded-xl bg-background overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/[0.02] transition-colors"
          >
            <span className="font-serif font-bold text-xl text-primary">
              {module.title}
            </span>
            <ChevronDown 
              className={`w-5 h-5 text-accent transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {module.desc}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
