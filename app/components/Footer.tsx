import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-900 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-4 text-lg font-semibold text-blue-400">Anglo Mania</h4>
            <p className="text-sm leading-6 text-white/70">Korepetycje z angielskiego dla młodzieży i dorosłych.</p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-blue-400">Nawigacja</h4>
            <ul>
              <li className="mb-2"><Link className="text-sm text-white/70 transition hover:text-blue-400" href="/">Strona główna</Link></li>
              <li className="mb-2"><Link className="text-sm text-white/70 transition hover:text-blue-400" href="/oferta">Oferta</Link></li>
              <li className="mb-2"><Link className="text-sm text-white/70 transition hover:text-blue-400" href="/o-mnie">O mnie</Link></li>
              <li className="mb-2"><a className="text-sm text-white/70 transition hover:text-blue-400" href="#test">Test poziomujący</a></li>
              <li><a className="text-sm text-white/70 transition hover:text-blue-400" href="#kontakt">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-blue-400">Kontakt</h4>
            <ul>
              <li className="mb-2"><a className="text-sm text-white/70 transition hover:text-blue-400" href="tel:+48123456789">📞 +48 123 456 789</a></li>
              <li><a className="text-sm text-white/70 transition hover:text-blue-400" href="mailto:kacper@anglomaniaschool.pl">✉️ kacper@anglomaniaschool.pl</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-blue-400">Obserwuj nas</h4>
            <div className="flex gap-3">
              <a className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white" href="#facebook" aria-label="Facebook">f</a>
              <a className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white" href="#instagram" aria-label="Instagram">📷</a>
              <a className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white" href="#twitter" aria-label="Twitter">𝕏</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/60">
          <p>&copy; {currentYear} Anglo Mania. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
