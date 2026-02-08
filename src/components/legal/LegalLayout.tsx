import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/fade-in";

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  lastUpdated: string;
  dict: any;
}

export default function LegalLayout({ children, title, lastUpdated, dict }: LegalLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header dict={dict} />
      <main className="flex-grow py-20 md:py-32">
        <article className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 leading-tight">
                  {title}
                </h1>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {lastUpdated}: 08 Février 2026
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="prose prose-slate max-w-none 
                prose-headings:font-serif prose-headings:text-primary prose-headings:font-bold
                prose-p:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-strong:text-primary prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
                {children}
              </div>
            </FadeIn>
          </div>
        </article>
      </main>
      <Footer dict={dict} />
    </div>
  );
}
