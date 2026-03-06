import Badge from './Badge';

export default function WhyChoose() {
  const reasons = [
    {
      icon: '👥',
      title: 'Indywidualne podejście',
      description: 'Plan nauki dopasowany do Twojego celu.',
    },
    {
      icon: '🎓',
      title: 'Nauka do egzaminów',
      description: 'Przygotowanie do matury i certyfikatów.',
    },
    {
      icon: '🗣️',
      title: 'Nauka mówienia i gramatyki',
      description: 'Praktyka języka, nie tylko teoria.',
    },
    {
      icon: '😊',
      title: 'Przyjazna atmosfera',
      description: 'Spokojne lekcje w komfortowej atmosferze.',
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16" id="oferta">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <h2>Dlaczego Anglo Mania</h2>
          <Badge variant="primary">4 konkretne argumenty</Badge>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <ol className="space-y-5 border-l-2 border-blue-100 pl-4 sm:pl-6">
              {reasons.map((reason, idx) => (
                <li key={idx} className="relative rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md">
                  <div className="absolute -left-[1.35rem] top-[30%] flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-sm font-bold text-white shadow">
                    {idx + 1}
                  </div>

                  <h3 className="mb-1 text-xl text-gray-900">{reason.title}</h3>
                  <p className="text-sm leading-6 text-gray-600">{reason.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 p-6 text-white shadow-lg">
            <p className="mb-2 text-sm font-semibold tracking-wide text-blue-100">W SKRÓCIE</p>
            <h3 className="mb-4 text-2xl font-bold">Nauka, która daje efekty</h3>
            <ul className="space-y-3 text-sm text-blue-50">
              <li>✓ Jasny plan działania od pierwszej lekcji</li>
              <li>✓ Regularny feedback i mierzalny postęp</li>
              <li>✓ Ćwiczenia dopasowane do Twojego celu</li>
            </ul>
            <a
              href="/kontakt"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Porozmawiajmy
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
