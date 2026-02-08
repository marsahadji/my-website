import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/fade-in";
import ContactForm from "@/components/forms/ContactForm";
import { getDictionary } from "@/lib/get-dictionary";
import { Mail, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Toaster } from "sonner";

export default async function ContactPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang as 'en' | 'fr');

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" richColors />
      <Header dict={dict} />
      <main className="flex-grow py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Column: Info */}
            <div className="flex flex-col">
              <FadeIn>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-6">
                  {dict.contact.subtitle}
                </p>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight">
                  {dict.contact.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-md">
                  {dict.contact.intro}
                </p>
              </FadeIn>

              <div className="space-y-10 mt-auto">
                <FadeIn delay={0.2}>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                        {dict.contact.email_label}
                      </h4>
                      <Link href="mailto:hello@martial.tg" className="text-xl font-medium text-primary hover:text-accent transition-colors">
                        hello@martial.tg
                      </Link>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                        {dict.contact.location_label}
                      </h4>
                      <p className="text-xl font-medium text-primary">
                        Lomé, Togo
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                        {dict.contact.availability_label}
                      </h4>
                      <p className="text-muted-foreground">
                        {dict.contact.availability_status}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Right Column: Form */}
            <FadeIn delay={0.2}>
              <div className="bg-primary/5 p-8 md:p-12 rounded-3xl border border-primary/10 relative">
                <div className="absolute top-8 right-8 text-primary/10">
                  <ArrowUpRight className="w-12 h-12" />
                </div>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </main>
      <Footer dict={dict} />
    </div>
  );
}
