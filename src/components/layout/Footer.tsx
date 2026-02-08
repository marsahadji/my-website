'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  dict: {
    footer: {
      description: string;
      rights: string;
      legal: string;
      privacy: string;
    };
  };
}

export default function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const params = useParams();
  const lang = params.lang as string;
  
  return (
    <footer className="w-full border-t border-border bg-background py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href={`/${lang}`} className="text-2xl font-serif font-bold text-primary tracking-tight mb-4 block">
              Martial Ahadji
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              {dict.footer.description}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-primary mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href={`/${lang}/about`} className="text-muted-foreground hover:text-accent transition-colors">À propos</Link></li>
              <li><Link href={`/${lang}/blog`} className="text-muted-foreground hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href={`/${lang}/contact`} className="text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-primary mb-6">Social</h4>
            <div className="flex gap-4">
              <Link href="https://github.com" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Martial Ahadji. {dict.footer.rights}
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
            <Link href={`/${lang}/legal/mentions`} className="hover:text-primary transition-colors">{dict.footer.legal}</Link>
            <Link href={`/${lang}/legal/privacy`} className="hover:text-primary transition-colors">{dict.footer.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
