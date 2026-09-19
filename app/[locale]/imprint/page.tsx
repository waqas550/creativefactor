import { getTranslations } from 'next-intl/server';
import PageHeader from '@/components/layout/Pageheader';
import bg from '@/public/images/bgsections.webp';
import { routing } from '@/lib/i18n/routing';

// Generate static paths for all supported locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'imprint' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function ImprintPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'imprint' });
  const isGerman = locale === 'de';

  return (
    <>
      <PageHeader />
      <section className="py-16">
        <div
          className="container mx-auto px-4 sm:px-8 rounded-lg overflow-hidden shadow-lg bg-white p-6 sm:p-8 w-full sm:w-10/12"
          style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="max-w-4xl mx-auto text-dimWhite [&_strong]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white [&_a]:text-secondary [&_a:hover]:underline">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">{t('title')}</h2>
            <p className="mb-8 text-center text-sm italic text-dimWhite">{t('lastUpdated')}</p>
            <div className="space-y-6 text-base leading-relaxed">
              {isGerman ? (
                // German Content
                <>
                  <section>
                    <h2 className="text-xl font-semibold mb-4">Roland Gropp ProEntertainment</h2>
                    <p className="mb-2">Roland Gropp (Herausgeber/Autor gemäß § 6 MDStV)</p>
                    <p className="mb-2">Altvaterstrasse 11</p>
                    <p className="mb-2">85107 Baar-Ebenhausen</p>
                    <p className="mb-2">Deutschland</p>
                  </section>

                  <section>
                    <p className="mb-2"><strong>D-U-N-S® Nr.</strong> 313537890</p>
                    <p className="mb-2"><strong>UID-Nr.</strong> DE814938962</p>
                  </section>

                  <section>
                    <p className="mb-2"><strong>Festnetz:</strong> +49-(0)-8453-336820 (Deutsch, Englisch, Spanisch, Portugiesisch)</p>
                    <p className="mb-2"><strong>Telefax:</strong> +49-(0)-8453-336821</p>
                    <p className="mb-2"><strong>Mobil:</strong> +49-(0)-160-7823089 (Deutsch, Englisch)</p>
                    <p className="mb-2"><strong>Mobil:</strong> +49-(0)-151-15661147 (Deutsch, Englisch, Spanisch, Portugiesisch)</p>
                  </section>

                  <section>
                    <p className="mb-2"><strong>Email:</strong> info@creative-factor.com</p>
                    <p className="mb-2"><strong>Webseite:</strong> www.creative-factor.com</p>
                  </section>
                </>
              ) : (
                // English Content
                <>
                  <section>
                    <h2 className="text-xl font-semibold mb-4">Roland Gropp ProEntertainment</h2>
                    <p className="mb-2">Roland Gropp (Publisher/Author gemäß § 6 MDStV)</p>
                    <p className="mb-2">Altvaterstrasse 11</p>
                    <p className="mb-2">85107 Baar-Ebenhausen</p>
                    <p className="mb-2">Deutschland</p>
                  </section>

                  <section>
                    <p className="mb-2"><strong>D-U-N-S® Nr.</strong> 313537890</p>
                    <p className="mb-2"><strong>UID-Nr.</strong> DE814938962</p>
                  </section>

                  <section>
                    <p className="mb-2"><strong>Festnetz:</strong> +49-(0)-8453-336820 (German, English, Spanish, Portuguese)</p>
                    <p className="mb-2"><strong>Telefax:</strong> +49-(0)-8453-336821</p>
                    <p className="mb-2"><strong>Mobil:</strong> +49-(0)-160-7823089 (German, English)</p>
                    <p className="mb-2"><strong>Mobil:</strong> +49-(0)-151-15661147 (German, English, Spanish, Portuguese)</p>
                  </section>

                  <section>
                    <p className="mb-2"><strong>Email:</strong> info@creative-factor.com</p>
                    <p className="mb-2"><strong>Website:</strong> www.creative-factor.com</p>
                  </section>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
