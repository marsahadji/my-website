'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Code, Users } from 'lucide-react';

const icons = {
  Layers: Layers,
  Code: Code,
  Users: Users,
};

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  index: number;
}

export default function ServiceCard({ title, description, iconName, index }: ServiceCardProps) {
  const Icon = icons[iconName as keyof typeof icons] || Layers;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-8 rounded-2xl bg-background border border-border hover:border-accent/50 transition-all duration-300 shadow-sm"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-serif font-bold text-primary mb-4">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
