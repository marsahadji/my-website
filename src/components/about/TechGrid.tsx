'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StackCategory {
  category: string;
  items: string[];
}

interface TechGridProps {
  stack: StackCategory[];
}

export default function TechGrid({ stack }: TechGridProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {stack.map((group, index) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-primary/5 rounded-2xl p-6 border border-primary/10"
        >
          <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 border-b border-primary/10 pb-2">
            {group.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {group.items.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-background border border-border rounded-md text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-default shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
