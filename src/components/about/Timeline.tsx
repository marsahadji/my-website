'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative border-l border-primary/20 ml-3 md:ml-6 py-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="mb-12 ml-6 md:ml-10 relative"
        >
          {/* Dot */}
          <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-sm" />
          
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
            {item.year}
          </span>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">
            {item.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
