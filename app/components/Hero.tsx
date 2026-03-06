export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 py-20 text-white md:py-28" id="home">
      <div className="absolute -right-40 -top-56 h-[36rem] w-[36rem] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-28 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl" />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Skuteczne korepetycje z angielskiego
          </h1>
          <p className="mb-4 text-lg font-medium text-zinc-100 md:text-2xl">
            Mów pewnie po angielsku z Anglo Mania
          </p>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-7 text-zinc-300 md:text-lg">
            Krótkie, konkretne lekcje dopasowane do Twojego celu.
          </p>
          <div className="mb-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
            <a href="tel:+48123456789" className="inline-flex w-full items-center justify-center rounded-lg border-2 border-blue-600 bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/35 transition hover:-translate-y-0.5 hover:bg-blue-500 sm:w-auto">
              📞 Zadzwoń teraz
            </a>
            <a href="#kontakt" className="inline-flex w-full items-center justify-center rounded-lg border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-blue-600 sm:w-auto">
              📝 Umów bezpłatną konsultację
            </a>
          </div>
          <p className="text-sm font-medium text-sky-200">✨ Pierwsza konsultacja gratis</p>
        </div>
      </div>
    </section>
  );
}
