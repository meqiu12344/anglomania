export default function Contact() {
  return (
    <section className="bg-slate-900 py-12 md:py-16" id="kontakt">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-white">Kontakt</h2>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl text-white">Dane kontaktowe</h3>

            <div className="mb-6 flex items-start gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <p className="mb-1 font-semibold text-white">Telefon</p>
                <a href="tel:+48123456789" className="font-semibold text-blue-400">
                  +48 123 456 789
                </a>
              </div>
            </div>

            <div className="mb-6 flex items-start gap-4">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="mb-1 font-semibold text-white">Email</p>
                <a href="mailto:kacper@anglomaniaschool.pl" className="break-all font-semibold text-blue-400">
                  kacper@anglomaniaschool.pl
                </a>
              </div>
            </div>

            <div className="mb-6 flex items-start gap-4">
              <span className="text-2xl">🕐</span>
              <div>
                <p className="mb-1 font-semibold text-white">Godziny pracy</p>
                <p className="text-slate-400">Pon.-Pt.: 14:00 - 20:00</p>
                <p className="text-slate-400">Sobota: 10:00 - 14:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="mb-1 font-semibold text-white">Lokalizacja</p>
                <p className="text-slate-400">Warszawa, Polska</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl text-white">Napisz wiadomość</h3>
            <form className="flex flex-col gap-4">
              <input
                className="rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-base text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                type="text"
                placeholder="Twoje imię"
                required
              />
              <input
                className="rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-base text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                type="email"
                placeholder="Twój email"
                required
              />
              <input
                className="rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-base text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                type="tel"
                placeholder="Twój telefon"
                required
              />
              <textarea
                className="min-h-32 rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-base text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                placeholder="Twoja wiadomość"
                rows={5}
                required
              ></textarea>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-lg border-2 border-blue-600 bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
