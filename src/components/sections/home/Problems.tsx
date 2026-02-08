import { ShieldCheck, Database, Zap } from 'lucide-react';
import FadeIn from '@/components/animations/fade-in';

interface ProblemsProps {
  dict: {
    problems: {
      title1: string;
      desc1: string;
      title2: string;
      desc2: string;
      title3: string;
      desc3: string;
    };
  };
}

export default function Problems({ dict }: ProblemsProps) {
  const problems = [
    {
      title: dict.problems.title1,
      description: dict.problems.desc1,
      icon: ShieldCheck,
    },
    {
      title: dict.problems.title2,
      description: dict.problems.desc2,
      icon: Database,
    },
    {
      title: dict.problems.title3,
      description: dict.problems.desc3,
      icon: Zap,
    }
  ];

  return (
    <section className="py-24 bg-transparent border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          {problems.map((item, index) => (
            <FadeIn key={index} delay={0.4 + index * 0.1}>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-2">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
