import { Card, Button } from '@/app/components';
import { offerings } from '@/app/data/offerings';

export const metadata = {
  title: 'Nasza Oferta - Anglo Mania',
  description: 'Poznaj wszystkie nasze kursy: dla młodzieży, dla dorosłych i przygotowanie do matury',
};

export default function OfertaPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 py-16 text-white md:py-24">
        <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4">Nasza Oferta</h1>
          <p className="text-base text-zinc-200 md:text-xl">Wybierz kurs dopasowany do Twojego celu</p>
        </div>
      </section>

      <section className="bg-slate-900 py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {offerings.map((offering) => (
              <Card key={offering.id} variant="light" padding="lg" hover={false}>
                <div className="space-y-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="text-5xl">{offering.icon}</div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-2xl text-white">{offering.title}</h3>
                      <p className="font-semibold text-blue-400">{offering.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-slate-300 md:text-base">{offering.description}</p>

                  <div className="grid gap-4 rounded-lg bg-slate-800 p-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <p className="text-sm font-semibold text-white">👥 Grupa</p>
                      <p className="text-sm text-slate-400">{offering.targetAudience}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">🎂 Wiek</p>
                      <p className="text-sm text-slate-400">{offering.ageGroup}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">⏱️ Czas</p>
                      <p className="text-sm text-slate-400">{offering.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">💰 Cena</p>
                      <p className="text-sm font-bold text-blue-400">{offering.price}</p>
                    </div>
                  </div>

                  <div>
                    <Button variant="primary" size="md" as="a" href="#kontakt">
                      Skontaktuj się
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 py-12 text-white md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4">Nie wiesz, która oferta jest dla Ciebie?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/85">
            Napisz do nas, a pomożemy wybrać najlepszy kurs.
          </p>
          <Button variant="secondary" size="lg" as="a" href="#kontakt">
            Umów bezpłatną konsultację
          </Button>
        </div>
      </section>
    </main>
  );
}
