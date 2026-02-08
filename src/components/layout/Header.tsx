'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Languages } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/theme-toggle';

interface HeaderProps {
  dict: {
    nav: {
      about: string;
      blog: string;
      contact: string;
      services: string;
      projects: string;
    };
  };
}

export default function Header({ dict }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const lang = params.lang as string;

  const navLinks = [
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/projects`, label: dict.nav.projects },
    { href: `/${lang}/services`, label: dict.nav.services },
    { href: `/${lang}/blog`, label: dict.nav.blog },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLocale = () => {
    const newLocale = lang === 'en' ? 'fr' : 'en';
    const newPathname = pathname.replace(`/${lang}`, `/${newLocale}`);
    return newPathname;
  };

  return (
    <header 
      className={cn(
        "w-full fixed top-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-border py-4 shadow-sm" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href={`/${lang}`} className="text-2xl font-serif font-bold text-primary tracking-tight">
          Martial Ahadji
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest mr-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 pr-4 border-r border-border">
             <Link 
              href={toggleLocale()} 
              className="p-2 text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-xs font-bold uppercase"
              aria-label="Toggle Language"
            >
              <Languages className="w-4 h-4" />
              {lang === 'en' ? 'FR' : 'EN'}
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-primary p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-xl font-serif font-bold text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <Link 
                  href={toggleLocale()} 
                  className="flex items-center gap-2 text-sm font-bold uppercase text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  <Languages className="w-5 h-5" />
                  {lang === 'en' ? 'Français' : 'English'}
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
