import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/home/Hero";
import Problems from "@/components/sections/home/Problems";
import TechBackground from "@/components/ui/TechBackground";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow relative">
        <TechBackground />
        <Hero />
        <Problems />
      </main>
      <Footer />
    </div>
  );
}
