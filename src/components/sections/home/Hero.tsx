import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import FadeIn from '@/components/animations/fade-in';

interface HeroProps {
  dict: {
    hero: {
      title: string;
      subtitle: string;
      cta_primary: string;
      cta_secondary: string;
    };
  };
  lang: string;
}

export default function Hero({ dict, lang }: HeroProps) {
  return (
    <section className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-8 leading-tight">
              {dict.hero.title}
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl font-sans leading-relaxed">
              {dict.hero.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href={`/${lang}/blog`}>
                  {dict.hero.cta_primary}
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`/${lang}/contact`}>
                  {dict.hero.cta_secondary}
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
