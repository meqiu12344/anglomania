import Card from './Card';
import Button from './Button';

export default function Offerings() {
  const offerings = [
    {
      title: 'Dla młodzieży',
      description: 'Szkolenia dla uczniów gimnazjum i liceum, przygotowanie do testów szkolnych.',
      icon: '🧑‍🎓',
    },
    {
      title: 'Dla dorosłych',
      description: 'Kursy dla pracowników, osób chcących poprawić swoje umiejętności zawodowe.',
      icon: '👨‍💼',
    },
    {
      title: 'Przygotowanie do matury',
      description: 'Intensywne szkolenie do egzaminu maturalnego z angielskiego.',
      icon: '📚',
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2>Nasza Oferta</h2>
          <p className="mt-2 text-gray-500">Wybierz kurs dostosowany do Twoich potrzeb</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering, idx) => (
            <Card key={idx} variant="light" hover padding="md">
              <div className="mb-3 text-5xl">{offering.icon}</div>
              <h3 className="mb-3 text-2xl text-gray-900">{offering.title}</h3>
              <p className="mb-6 text-sm leading-6 text-gray-500">{offering.description}</p>
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
