import { ShieldCheck, Database, Zap } from 'lucide-react';
import FadeIn from '@/components/animations/fade-in';

const problems = [
  {
    title: "Complexité Architecturale",
    description: "Simplification des systèmes hérités pour une scalabilité réelle sans dette technique étouffante.",
    icon: ShieldCheck,
  },
  {
    title: "Silo de Données",
    description: "Unification et valorisation des données pour une prise de décision basée sur des faits, pas sur des intuitions.",
    icon: Database,
  },
  {
    title: "Performance & Résilience",
    description: "Optimisation critique pour des infrastructures capables de supporter la croissance du marché africain.",
    icon: Zap,
  }
];

export default function Problems() {
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