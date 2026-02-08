import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/home/Hero";
import Problems from "@/components/sections/home/Problems";
import { getDictionary } from "@/lib/get-dictionary";

export default async function Home(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang as 'en' | 'fr');

  return (
    <div className="flex flex-col min-h-screen">
      <Header dict={dict} />
      <main className="flex-grow relative">
        <Hero dict={dict} lang={lang} />
        <Problems dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}