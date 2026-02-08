'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  status: string;
  link: string;
  statusLabel: string;
  index: number;
}

export default function ProjectCard({ 
  title, 
  description, 
  stack, 
  status, 
  link, 
  statusLabel,
  index 
}: ProjectCardProps) {
  const isLive = status === 'Live';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-2xl bg-background border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 shadow-sm"
    >
      {/* Placeholder for Project Image */}
      <div className="aspect-video w-full bg-primary/5 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
        <span className="text-primary/20 font-serif font-black text-4xl select-none group-hover:scale-110 transition-transform duration-500">
          {title[0]}
        </span>
        
        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
          isLive 
            ? 'bg-accent/10 text-accent border-accent/20' 
            : 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20'
        }`}>
          {statusLabel}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-primary mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {stack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded bg-primary/5 text-primary text-[10px] font-bold border border-primary/10">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href={link} 
            className="text-sm font-bold uppercase tracking-widest text-primary hover:text-accent flex items-center gap-2 transition-colors"
          >
            {isLive ? <ExternalLink className="w-4 h-4" /> : <Github className="w-4 h-4" />}
            {isLive ? 'Visit' : 'Repo'}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
