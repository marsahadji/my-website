import TechBackground from "@/components/ui/TechBackground";
import BackToTop from "@/components/ui/back-to-top";

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  
  return (
    <>
      <TechBackground />
      {props.children}
      <BackToTop />
    </>
  );
}
