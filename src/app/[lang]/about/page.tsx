import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/fade-in";
import Timeline from "@/components/about/Timeline";
import TechGrid from "@/components/about/TechGrid";
import { getDictionary } from "@/lib/get-dictionary";

export default async function AboutPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang as 'en' | 'fr');

  return (
    <div className="flex flex-col min-h-screen">
      <Header dict={dict} />
      <main className="flex-grow py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          {/* Hero Bio */}
          <div className="max-w-4xl mb-24">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight">
                {dict.about.title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-sans">
                {dict.about.bio}
              </p>
            </FadeIn>
          </div>

          {/* Timeline Section */}
          <div className="mb-32">
            <FadeIn>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-12 border-b border-border pb-4">
                01. {dict.about.timeline_title}
              </h2>
            </FadeIn>
            <Timeline items={dict.about.timeline} />
          </div>

          {/* Tech Stack Section */}
          <div className="mb-20">
            <FadeIn>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-12 border-b border-border pb-4">
                02. {dict.about.stack_title}
              </h2>
            </FadeIn>
            <TechGrid stack={dict.about.stack} />
          </div>
        </div>
      </main>
      <Footer dict={dict} />
    </div>
  );
}
