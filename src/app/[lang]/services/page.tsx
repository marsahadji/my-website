import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/fade-in";
import ServiceCard from "@/components/services/ServiceCard";
import { getDictionary } from "@/lib/get-dictionary";

export default async function ServicesPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang as 'en' | 'fr');

  return (
    <div className="flex flex-col min-h-screen">
      <Header dict={dict} />
      <main className="flex-grow py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
                {dict.services.title}
              </h1>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-6">
                {dict.services.subtitle}
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {dict.services.intro}
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dict.services.items.map((service: any, index: number) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                iconName={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer dict={dict} />
    </div>
  );
}
