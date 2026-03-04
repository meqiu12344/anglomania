import Image from 'next/image';
import { Button, Badge } from '@/app/components';

export const metadata = {
  title: 'O mnie - Anglo Mania',
  description:
    'Poznaj historię, kwalifikacje i podejście nauczycielskie Anglo Mania. Certyfikowany nauczyciel angielskiego z bogatym doświadczeniem.',
};

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 py-16 text-white md:py-24">
        <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4">O mnie</h1>
          <p className="text-base text-zinc-200 md:text-xl">Certyfikowany nauczyciel angielskiego z pasją do nauki i doskonałości</p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border-2 border-blue-500 bg-gray-100 shadow-lg shadow-blue-500/10">
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
              <h2 className="mb-6 text-gray-900">Moja Historia</h2>
              <div className="space-y-5 text-base leading-8 text-gray-500">
                <p>
                  Cześć! Jestem nauczycielem angielskiego z ponad dziesięcioletnim doświadczeniem
                  w nauczaniu osób w każdym wieku, od gimnazjalistów po dorosłych profesjonalistów.
                </p>
                <p>
                  Moją przygodę z językiem angielskim zacząłem w szkole, gdzie od razu zapamiętałem
                  jego piękno i elastyczność. W liceum zdecydowałem się pogłębiać swoją wiedzę,
                  przygotowując się do certyfikatów międzynarodowych takich jak Cambridge Certificate
                  i TOEFL.
                </p>
                <p>
                  Przez ostatnią dekadę uczyłem uczniów z całkowicie różnych środowisk i celów.
                  Od przygotowania do matury, poprzez angielski biznesowy, aż po konwersacje
                  dla przyjemności. Każdy uczeń ma inne potrzeby, a ja dostosowuję moją metodę
                  nauczania do każdej indywidualnej osoby.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 py-12 text-white md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-white">Kwalifikacje & Doświadczenie</h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 border-b border-blue-500/30 pb-4 text-blue-400">Certyfikaty & Wykształcenie</h3>
              <div className="space-y-4">
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"><Badge variant="success" size="sm" className="min-w-14">2014</Badge><div><h4 className="text-base text-white">Cambridge English Certificate (C1)</h4><p className="text-sm text-white/70">Zaawansowana znajomość angielskiego z pełną biegłością</p></div></div>
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"><Badge variant="success" size="sm" className="min-w-14">2016</Badge><div><h4 className="text-base text-white">TOEFL iBT (115/120)</h4><p className="text-sm text-white/70">Potwierdzenie poziomu akademickiego angielskiego</p></div></div>
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"><Badge variant="success" size="sm" className="min-w-14">2017</Badge><div><h4 className="text-base text-white">TEFL Certification</h4><p className="text-sm text-white/70">Profesjonalne kwalifikacje do nauczania angielskiego</p></div></div>
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"><Badge variant="success" size="sm" className="min-w-14">2018</Badge><div><h4 className="text-base text-white">Specjalizacja w angielskim biznesowym</h4><p className="text-sm text-white/70">Dodatkowe szkolenie z angielskiego w kontekście zawodowym</p></div></div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 border-b border-blue-500/30 pb-4 text-blue-400">Doświadczenie Zawodowe</h3>
              <div className="space-y-4">
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"><Badge variant="info" size="sm" className="min-w-24">2014-2018</Badge><div><h4 className="text-base text-white">Nauczyciel w szkołach prywatnych</h4><p className="text-sm text-white/70">Nauczanie wszystkich poziomów, przygotowanie do egzaminów maturalnych</p></div></div>
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"><Badge variant="info" size="sm" className="min-w-24">2018-2022</Badge><div><h4 className="text-base text-white">Koordynator Szkoły Językowej</h4><p className="text-sm text-white/70">Zarządzanie programami nauczania i mentoring nauczycieli</p></div></div>
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"><Badge variant="info" size="sm" className="min-w-24">2022-Teraz</Badge><div><h4 className="text-base text-white">Nauczyciel Niezależny - Anglo Mania</h4><p className="text-sm text-white/70">Indywidualne korepetycje dostosowane do potrzeb każdego ucznia</p></div></div>
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"><Badge variant="info" size="sm" className="min-w-24">Ciągłe</Badge><div><h4 className="text-base text-white">Doskonalenie Umiejętności</h4><p className="text-sm text-white/70">Regularne szkolenia i konferencje edukacyjne</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center">Moja Filozofia Nauczania</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border-2 border-gray-100 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"><div className="mb-3 text-5xl">🎯</div><h3 className="mb-3 text-xl text-gray-900">Cel-Orientowana Nauka</h3><p className="text-sm leading-6 text-gray-500">Każda lekcja ma jasno określony cel. Razem ustalamy, czego chcesz osiągnąć.</p></div>
            <div className="rounded-2xl border-2 border-gray-100 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"><div className="mb-3 text-5xl">🤝</div><h3 className="mb-3 text-xl text-gray-900">Partnerstwo w Nauce</h3><p className="text-sm leading-6 text-gray-500">Jestem Twoim partnerem w podróży nauki. Feedback jest dla mnie ważny.</p></div>
            <div className="rounded-2xl border-2 border-gray-100 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"><div className="mb-3 text-5xl">🌟</div><h3 className="mb-3 text-xl text-gray-900">Nauczanie z Pasją</h3><p className="text-sm leading-6 text-gray-500">Język to nie tylko gramatyka - to narzędzie do odkrywania świata.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center">Co mówią moi uczniowie?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border-l-4 border-blue-600 bg-white p-6 shadow-sm"><div className="mb-3 text-lg">⭐⭐⭐⭐⭐</div><p className="mb-3 text-sm italic leading-7 text-gray-700">"Nauczyciel jest niezwykle cierpliwy i zawsze dostosowuje lekcje do moich potrzeb. Dzięki jego pomocy zdałam maturę na piątkę!"</p><p className="text-sm font-semibold text-gray-500">- Anna, uczennica klasy XII</p></div>
            <div className="rounded-2xl border-l-4 border-blue-600 bg-white p-6 shadow-sm"><div className="mb-3 text-lg">⭐⭐⭐⭐⭐</div><p className="mb-3 text-sm italic leading-7 text-gray-700">"Poszukiwałem nauczyciela dla firmy na angielski biznesowy. Rezultaty są świetne, a pracownicy pewniejsi siebie."</p><p className="text-sm font-semibold text-gray-500">- Piotr, CEO</p></div>
            <div className="rounded-2xl border-l-4 border-blue-600 bg-white p-6 shadow-sm"><div className="mb-3 text-lg">⭐⭐⭐⭐⭐</div><p className="mb-3 text-sm italic leading-7 text-gray-700">"Zawsze bałem się angielskiego, ale on pokazał mi, że mogę go opanować. Polecam każdemu."</p><p className="text-sm font-semibold text-gray-500">- Tomasz, pracownik biurowy</p></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 py-12 text-white md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-white">Gotów na zmianę?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/85">
            Zapraszam Cię do bezpłatnej konsultacji. Porozmawiamy o Twoich celach i najlepszym sposobie, aby osiągnąć sukces.
          </p>
          <Button variant="secondary" size="lg" as="a" href="#kontakt">
            Umów bezpłatną konsultację
          </Button>
        </div>
      </section>
    </main>
  );
}
