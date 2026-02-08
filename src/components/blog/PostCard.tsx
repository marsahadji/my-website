'use client';

import Link from 'next/link';
import { PostMetadata } from '@/lib/blog';
import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';

interface PostCardProps {
  post: PostMetadata;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-background border border-border hover:border-accent/50 rounded-xl overflow-hidden shadow-sm transition-all duration-300"
    >
      <Link href={`/blog/${post.slug}`} className="block p-6 h-full">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground uppercase tracking-widest">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          <h3 className="text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors mb-3 leading-tight">
            {post.title}
          </h3>

          <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
            {post.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary/5 text-primary border border-primary/10"
              >
                <Tag className="w-2 h-2" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
      
      {/* Decorative accent line on hover */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}
