import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/fade-in";
import CurriculumAccordion from "@/components/training/CurriculumAccordion";
import WaitlistForm from "@/components/training/WaitlistForm";
import { getDictionary } from "@/lib/get-dictionary";
import { Database, AlertTriangle, CheckCircle2, Zap } from "lucide-react";
import { Toaster } from "sonner";

export default async function MongoDBTrainingPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang as 'en' | 'fr');

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" richColors />
      <Header dict={dict} />
      
      <main className="flex-grow pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 md:px-12 mb-24">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-8 border border-accent/20">
                <Database className="w-3.5 h-3.5" />
                Expert Architecture Series
              </div>
              <h1 className="text-5xl md:text-8xl font-serif font-bold text-primary mb-8 leading-tight">
                {dict.training.hero_title}
              </h1>
              <p className="text-xl md:text-3xl text-muted-foreground leading-relaxed font-sans max-w-3xl">
                {dict.training.value_prop}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Why / Pain Points */}
        <section className="bg-primary/5 py-24 mb-24 border-y border-primary/10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                  {dict.training.why_title}
                </h2>
                <p className="text-lg text-muted-foreground mb-10">
                  {dict.training.why_intro}
                </p>
                <ul className="space-y-6">
                  {dict.training.pain_points.map((point: string, i: number) => (
                    <li key={i} className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                      <span className="text-primary font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="relative p-8 rounded-3xl bg-background border border-border shadow-xl">
                   <div className="flex items-center gap-3 mb-6">
                     <div className="w-3 h-3 rounded-full bg-red-500" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500" />
                     <div className="w-3 h-3 rounded-full bg-green-500" />
                   </div>
                   <div className="space-y-4 font-mono text-sm">
                     <p className="text-accent">// Query inefficient</p>
                     <p className="text-primary">db.users.find(&#123; age: &#123; $gt: 25 &#125; &#125;).sort(&#123; name: 1 &#125;)</p>
                     <p className="text-muted-foreground">→ COLLSCAN (Scan de 1.2M documents)</p>
                     <p className="text-muted-foreground">→ Sort in memory (32MB exceeded)</p>
                     <div className="pt-4 border-t border-border">
                       <p className="text-accent">// Solution Architecte</p>
                       <p className="text-primary">db.users.createIndex(&#123; age: 1, name: 1 &#125;)</p>
                       <p className="text-muted-foreground">→ IXSCAN (Index scan)</p>
                       <p className="text-muted-foreground">→ Covered query</p>
                     </div>
                   </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="container mx-auto px-6 md:px-12 mb-32">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <FadeIn>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-8 border-b border-border pb-4">
                  01. {dict.training.curriculum_title}
                </h2>
                <div className="space-y-6">
                   <div className="flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-accent" />
                     <span className="text-muted-foreground">4 Modules Intensifs</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-accent" />
                     <span className="text-muted-foreground">Labs Architecte concrets</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <Zap className="w-5 h-5 text-accent" />
                     <span className="text-muted-foreground">Accès à vie aux mises à jour</span>
                   </div>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-2">
              <FadeIn delay={0.2}>
                <CurriculumAccordion modules={dict.training.modules} />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA / Waitlist Section */}
        <section className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <WaitlistForm ctaText={dict.training.cta_waitlist} />
          </FadeIn>
        </section>
      </main>

      <Footer dict={dict} />
    </div>
  );
}
