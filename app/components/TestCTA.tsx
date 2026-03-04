export default function TestCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-sky-500 py-14 text-white md:py-20" id="test">
      <div className="absolute -left-40 -top-44 h-[30rem] w-[30rem] rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2>Sprawdź swój poziom angielskiego</h2>
          <p className="mt-4 text-base leading-7 text-white/95 md:text-lg">
            Weź udział w naszym bezpłatnym teście do zaledwie 15 minut! Dowiedz się, jaki jest Twój obecny poziom angielskiego i jakie są Twoje kolejne kroki do fluencji.
          </p>
          <button className="mt-8 inline-flex w-full items-center justify-center rounded-lg border-2 border-white bg-white px-6 py-3 text-base font-semibold text-blue-600 transition hover:-translate-y-0.5 hover:bg-blue-50 sm:w-auto sm:px-10 sm:py-4 sm:text-lg">
            ✍️ Rozpocznij test
          </button>
        </div>
      </div>
    </section>
  );
}
