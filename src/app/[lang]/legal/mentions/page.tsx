import LegalLayout from "@/components/legal/LegalLayout";
import { getDictionary } from "@/lib/get-dictionary";

export default async function MentionsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang as 'en' | 'fr');

  return (
    <LegalLayout 
      title={dict.legal.mentions_title} 
      lastUpdated={dict.legal.last_updated} 
      dict={dict}
    >
      {lang === 'fr' ? (
        <>
          <h2>1. Éditeur du Site</h2>
          <p>
            Le présent site, accessible à l&apos;adresse <strong>martial.tg</strong>, est édité par : <br />
            <strong>Martial Ahadji</strong> <br />
            Architecte Logiciel indépendant basé à Lomé, Togo. <br />
            Email : hello@martial.tg
          </p>

          <h2>2. Hébergement</h2>
          <p>
            Le site est hébergé par : <br />
            <strong>Vercel Inc.</strong> <br />
            440 N Barranca Ave #4133 <br />
            Covina, CA 91723 <br />
            États-Unis
          </p>

          <h2>3. Propriété Intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, architecture, code source) est la propriété exclusive de Martial Ahadji, sauf mention contraire. Toute reproduction ou représentation, totale ou partielle, est interdite sans autorisation préalable.
          </p>

          <h2>4. Responsabilité</h2>
          <p>
            Martial Ahadji s&apos;efforce de fournir des informations précises sur ce site, mais ne saurait être tenu pour responsable des omissions, des inexactitudes ou des carences dans la mise à jour.
          </p>
        </>
      ) : (
        <>
          <h2>1. Site Publisher</h2>
          <p>
            This website, accessible at <strong>martial.tg</strong>, is published by: <br />
            <strong>Martial Ahadji</strong> <br />
            Independent Software Architect based in Lomé, Togo. <br />
            Email: hello@martial.tg
          </p>

          <h2>2. Hosting</h2>
          <p>
            The website is hosted by: <br />
            <strong>Vercel Inc.</strong> <br />
            440 N Barranca Ave #4133 <br />
            Covina, CA 91723 <br />
            United States
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this site (text, images, architecture, source code) is the exclusive property of Martial Ahadji, unless otherwise stated. Any reproduction or representation, in whole or in part, is prohibited without prior authorization.
          </p>

          <h2>4. Liability</h2>
          <p>
            Martial Ahadji strives to provide accurate information on this site, but cannot be held responsible for omissions, inaccuracies, or deficiencies in updating.
          </p>
        </>
      )}
    </LegalLayout>
  );
}
