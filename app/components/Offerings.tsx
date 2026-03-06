import Card from './Card';
import Button from './Button';

export default function Offerings() {
  const offerings = [
    {
      title: 'Dla młodzieży',
      description: 'Lekcje dla uczniów i przygotowanie do sprawdzianów.',
      icon: '🧑‍🎓',
    },
    {
      title: 'Dla dorosłych',
      description: 'Angielski do pracy i codziennej komunikacji.',
      icon: '👨‍💼',
    },
    {
      title: 'Przygotowanie do matury',
      description: 'Skupienie na zadaniach maturalnych i strategii egzaminu.',
      icon: '📚',
    },
    {
      title: 'Dla dzieci',
      description: 'Zabawy, gry i kreatywne ćwiczenia dla najmłodszych.',
      icon: '👧',
    },
  ];

  return (
    <section className="bg-slate-900 py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2>Nasza Oferta</h2>
          <p className="mt-2 text-slate-400">Wybierz kurs dla siebie</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering, idx) => (
            <Card key={idx} variant="dark" hover padding="md" className="h-full">
              <div className="flex h-full flex-col">
                <div className="mb-3 text-5xl">{offering.icon}</div>
                <h3 className="mb-3 text-2xl text-white">{offering.title}</h3>
                <p className="text-sm leading-6 text-slate-300">{offering.description}</p>
                <div className="mt-auto pt-6">
                  <Button
                    variant="primary"
                    size="md"
                    fullWidth
                    as="a"
                    href="/oferta"
                    className='color-white'
                  >
                    Skontaktuj się
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
