import Image from 'next/image';
import { Button, Badge } from '@/app/components';

export const metadata = {
  title: 'O mnie - Anglo Mania',
  description:
    'Poznaj moje doświadczenie, kwalifikacje i styl nauczania.',
};

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 py-16 text-white md:py-24">
        <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4">O mnie</h1>
          <p className="text-base text-zinc-200 md:text-xl">Certyfikowany nauczyciel angielskiego z doświadczeniem</p>
        </div>
      </section>

      <section className="bg-slate-900 py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border-2 border-blue-500 bg-slate-800 shadow-lg shadow-blue-500/10">
                <Image
                  src="/profile.webp"
                  alt="Zdjęcie nauczyciela"
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 p-6 text-white">
                <h3 className="mb-5 text-2xl text-white">Szybkie fakty</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 rounded-lg bg-white/10 p-3 text-sm leading-6"><span>🎓</span><span><strong>Edukacja:</strong> Cambridge Certificate, TOEFL</span></li>
                  <li className="flex items-start gap-3 rounded-lg bg-white/10 p-3 text-sm leading-6"><span>⏱️</span><span><strong>Doświadczenie:</strong> 10+ lat nauczania</span></li>
                  <li className="flex items-start gap-3 rounded-lg bg-white/10 p-3 text-sm leading-6"><span>👥</span><span><strong>Uczniowie:</strong> 150+ zadowolonych osób</span></li>
                  <li className="flex items-start gap-3 rounded-lg bg-white/10 p-3 text-sm leading-6"><span>🏆</span><span><strong>Wyniki:</strong> 95% zdawalność egzaminów</span></li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-white">Moja Historia</h2>
              <div className="space-y-5 text-base leading-8 text-slate-300">
                <p>
                  Uczę angielskiego od ponad 10 lat. Pracuję z młodzieżą i dorosłymi.
                </p>
                <p>
                  Pomagam w maturze, angielskim biznesowym i codziennej komunikacji.
                  Każde zajęcia dopasowuję do celu ucznia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-800 py-12 text-white md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-white">Kwalifikacje & Doświadczenie</h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 border-b border-blue-500/30 pb-4 text-blue-400">Certyfikaty & Wykształcenie</h3>
              <div className="space-y-4">
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"><Badge variant="success" size="sm" className="min-w-14">2014</Badge><div><h4 className="text-base text-white">Cambridge English Certificate (C1)</h4><p className="text-sm text-white/70">Poziom zaawansowany</p></div></div>
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"><Badge variant="success" size="sm" className="min-w-14">2016</Badge><div><h4 className="text-base text-white">TOEFL iBT (115/120)</h4><p className="text-sm text-white/70">Wysoki wynik akademicki</p></div></div>
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"><Badge variant="success" size="sm" className="min-w-14">2017</Badge><div><h4 className="text-base text-white">TEFL Certification</h4><p className="text-sm text-white/70">Kwalifikacje nauczycielskie</p></div></div>
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"><Badge variant="success" size="sm" className="min-w-14">2018</Badge><div><h4 className="text-base text-white">Specjalizacja w angielskim biznesowym</h4><p className="text-sm text-white/70">Język w środowisku pracy</p></div></div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 border-b border-blue-500/30 pb-4 text-blue-400">Doświadczenie Zawodowe</h3>
              <div className="space-y-4">
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"><Badge variant="info" size="sm" className="min-w-24">2014-2018</Badge><div><h4 className="text-base text-white">Nauczyciel w szkołach prywatnych</h4><p className="text-sm text-white/70">Praca ze wszystkimi poziomami</p></div></div>
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"><Badge variant="info" size="sm" className="min-w-24">2018-2022</Badge><div><h4 className="text-base text-white">Koordynator Szkoły Językowej</h4><p className="text-sm text-white/70">Programy nauczania i mentoring</p></div></div>
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"><Badge variant="info" size="sm" className="min-w-24">2022-Teraz</Badge><div><h4 className="text-base text-white">Nauczyciel Niezależny - Anglo Mania</h4><p className="text-sm text-white/70">Korepetycje indywidualne</p></div></div>
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"><Badge variant="info" size="sm" className="min-w-24">Ciągłe</Badge><div><h4 className="text-base text-white">Rozwój zawodowy</h4><p className="text-sm text-white/70">Stałe szkolenia branżowe</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-white">Moja Filozofia Nauczania</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border-2 border-slate-700 bg-slate-800 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"><div className="mb-3 text-5xl">🎯</div><h3 className="mb-3 text-xl text-white">Jasny cel</h3><p className="text-sm leading-6 text-slate-300">Każda lekcja ma konkretny efekt.</p></div>
            <div className="rounded-2xl border-2 border-slate-700 bg-slate-800 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"><div className="mb-3 text-5xl">🤝</div><h3 className="mb-3 text-xl text-white">Współpraca</h3><p className="text-sm leading-6 text-slate-300">Pracujemy razem i na bieżąco korygujemy plan.</p></div>
            <div className="rounded-2xl border-2 border-slate-700 bg-slate-800 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"><div className="mb-3 text-5xl">🌟</div><h3 className="mb-3 text-xl text-white">Praktyka</h3><p className="text-sm leading-6 text-slate-300">Mniej teorii, więcej użycia języka.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-800 py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-white">Co mówią moi uczniowie?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border-l-4 border-blue-500 bg-slate-700 p-6 shadow-sm"><div className="mb-3 text-lg">⭐⭐⭐⭐⭐</div><p className="mb-3 text-sm italic leading-7 text-slate-200">"Lekcje były konkretne i zdałam maturę z dobrym wynikiem."</p><p className="text-sm font-semibold text-slate-400">- Anna, klasa XII</p></div>
            <div className="rounded-2xl border-l-4 border-blue-500 bg-slate-700 p-6 shadow-sm"><div className="mb-3 text-lg">⭐⭐⭐⭐⭐</div><p className="mb-3 text-sm italic leading-7 text-slate-200">"Zespół szybko przełamał barierę mówienia w pracy."</p><p className="text-sm font-semibold text-slate-400">- Piotr, CEO</p></div>
            <div className="rounded-2xl border-l-4 border-blue-500 bg-slate-700 p-6 shadow-sm"><div className="mb-3 text-lg">⭐⭐⭐⭐⭐</div><p className="mb-3 text-sm italic leading-7 text-slate-200">"W końcu mówię po angielsku bez stresu."</p><p className="text-sm font-semibold text-slate-400">- Tomasz, pracownik biurowy</p></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-12 text-white md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-white">Gotów na zmianę?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/85">
            Umów bezpłatną konsultację i sprawdź najlepszy plan nauki.
          </p>
          <Button variant="secondary" size="lg" as="a" href="#kontakt">
            Umów bezpłatną konsultację
          </Button>
        </div>
      </section>
    </main>
  );
}
