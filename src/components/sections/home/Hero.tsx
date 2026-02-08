import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import FadeIn from '@/components/animations/fade-in';

export default function Hero() {
  return (
    <section className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-8 leading-tight">
              Construire la souveraineté numérique en Afrique.
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl font-sans leading-relaxed">
              Architecte Logiciel & Data. J&apos;aide les entreprises et les institutions à bâtir des systèmes résilients.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/blog">
                  Lire mes analyses
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Me contacter
                  <Mail />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}