import LegalLayout from "@/components/legal/LegalLayout";
import { getDictionary } from "@/lib/get-dictionary";

export default async function PrivacyPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang as 'en' | 'fr');

  return (
    <LegalLayout 
      title={dict.legal.privacy_title} 
      lastUpdated={dict.legal.last_updated} 
      dict={dict}
    >
      {lang === 'fr' ? (
        <>
          <h2>1. Collecte des Données</h2>
          <p>
            Nous collectons uniquement les données que vous nous fournissez volontairement via le formulaire de contact (nom, email, message) ou lors de l&apos;inscription à la newsletter.
          </p>

          <h2>2. Utilisation des Données</h2>
          <p>
            Les données collectées sont utilisées exclusivement pour : <br />
            - Répondre à vos demandes de contact. <br />
            - Vous envoyer des analyses techniques via notre newsletter (si vous y avez consenti). <br />
            Vos données ne sont jamais vendues ou cédées à des tiers.
          </p>

          <h2>3. Cookies</h2>
          <p>
            Ce site utilise des cookies techniques essentiels pour : <br />
            - Mémoriser vos préférences de thème (clair/sombre). <br />
            - Mémoriser votre choix de langue. <br />
            Aucun cookie de pistage publicitaire n&apos;est utilisé.
          </p>

          <h2>4. Vos Droits</h2>
          <p>
            Conformément aux lois sur la protection des données, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles. Vous pouvez exercer ce droit en nous contactant à hello@martial.tg.
          </p>
        </>
      ) : (
        <>
          <h2>1. Data Collection</h2>
          <p>
            We only collect data that you voluntarily provide to us via the contact form (name, email, message) or when signing up for the newsletter.
          </p>

          <h2>2. Use of Data</h2>
          <p>
            The collected data is used exclusively to: <br />
            - Respond to your contact requests. <br />
            - Send you technical analysis via our newsletter (if you have consented). <br />
            Your data is never sold or transferred to third parties.
          </p>

          <h2>3. Cookies</h2>
          <p>
            This site uses essential technical cookies to: <br />
            - Remember your theme preferences (light/dark). <br />
            - Remember your choice of language. <br />
            No advertising tracking cookies are used.
          </p>

          <h2>4. Your Rights</h2>
          <p>
            In accordance with data protection laws, you have a right of access, rectification, and deletion of your personal data. You can exercise this right by contacting us at hello@martial.tg.
          </p>
        </>
      )}
    </LegalLayout>
  );
}
