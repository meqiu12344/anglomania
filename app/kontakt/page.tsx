import { Contact, Button } from '@/app/components';

export const metadata = {
  title: 'Kontakt - Anglo Mania',
  description: 'Skontaktuj się z nami w sprawie lekcji angielskiego',
};

export default function KontaktPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 py-16 text-white md:py-24">
        <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -left-40 -bottom-40 h-[32rem] w-[32rem] rounded-full bg-blue-500/10 blur-3xl" />
        
        <div className="relative mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Skontaktuj się z nami</h1>
          <p className="text-base text-zinc-200 md:text-xl">Masz pytanie? Napisz lub zadzwoń.</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            {/* Email */}
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center">
              <div className="mb-4 text-5xl">✉️</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Email</h3>
              <p className="text-gray-700">
                <a href="mailto:kontakt@anglomania.pl" className="font-semibold text-blue-600 hover:text-blue-700">
                  kontakt@anglomania.pl
                </a>
              </p>
              <p className="mt-2 text-sm text-gray-600">Odpowiadamy w ciągu 24 godzin</p>
            </div>

            {/* Phone */}
            <div className="rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 p-8 text-center">
              <div className="mb-4 text-5xl">📞</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Telefon</h3>
              <p className="text-gray-700">
                <a href="tel:+48123456789" className="font-semibold text-blue-600 hover:text-blue-700">
                  +48 123 456 789
                </a>
              </p>
              <p className="mt-2 text-sm text-gray-600">Pn-Pt: 9:00 - 17:00</p>
            </div>

            {/* Location */}
            <div className="rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 text-center">
              <div className="mb-4 text-5xl">📍</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Lokalizacja</h3>
              <p className="text-gray-700">
                <span className="font-semibold">Warszawa, Polska</span>
              </p>
              <p className="mt-2 text-sm text-gray-600">Lekcje online i stacjonarne</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Wyślij nam wiadomość</h2>
            <p className="text-gray-600 md:text-lg">Odpowiemy możliwie szybko.</p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <Contact />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">Często Zadawane Pytania</h2>
          
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <details className="rounded-lg border border-gray-200 p-6 hover:border-blue-300">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900">
                Jakie są godziny dostępności?
                <span className="text-xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Standardowo: pon.-pt. 9:00-17:00. Inne godziny ustalamy indywidualnie.
              </p>
            </details>

            {/* FAQ Item 2 */}
            <details className="rounded-lg border border-gray-200 p-6 hover:border-blue-300">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900">
                Czy mogę mieć lekcje online?
                <span className="text-xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Tak. Prowadzimy lekcje online i stacjonarne.
              </p>
            </details>

            {/* FAQ Item 3 */}
            <details className="rounded-lg border border-gray-200 p-6 hover:border-blue-300">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900">
                Jak długa jest pierwsza lekcja?
                <span className="text-xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                To bezpłatna konsultacja ok. 30 minut.
              </p>
            </details>

            {/* FAQ Item 4 */}
            <details className="rounded-lg border border-gray-200 p-6 hover:border-blue-300">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900">
                Ile kosztują lekcje?
                <span className="text-xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Cena zależy od pakietu i trybu zajęć. Szczegóły znajdziesz w ofercie.
              </p>
            </details>

            {/* FAQ Item 5 */}
            <details className="rounded-lg border border-gray-200 p-6 hover:border-blue-300">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900">
                Czy mogę anulować lekcję?
                <span className="text-xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Tak, przy zgłoszeniu min. 24h wcześniej.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-sky-500 py-16 text-white md:py-24">
        <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Gotowy do nauki angielskiego?</h2>
          <p className="mb-8 text-base text-blue-100 md:text-lg">
            Umów bezpłatną konsultację i zacznij już dziś.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href="tel:+48123456789">
              <Button variant="secondary" className="w-full px-8 py-3 text-lg font-semibold">
                Zadzwoń
              </Button>
            </a>
            <a href="mailto:kontakt@anglomania.pl">
              <Button variant="secondary" className="w-full px-8 py-3 text-lg font-semibold">
                Wyślij email
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
