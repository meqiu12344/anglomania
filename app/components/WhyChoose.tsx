import Card from './Card';
import Badge from './Badge';

export default function WhyChoose() {
  const reasons = [
    {
      icon: '👥',
      title: 'Indywidualne podejście',
      description: 'Każdy uczeń dostaje spersonalizowany plan nauki dostosowany do jego potrzeb i celów.',
    },
    {
      icon: '🎓',
      title: 'Nauka do egzaminów',
      description: 'Intensywne szkolenie do matury, egzaminów Cambridge i innych certyfikatów.',
    },
    {
      icon: '🗣️',
      title: 'Nauka mówienia i gramatyki',
      description: 'Skupienie na praktycznym używaniu języka w rozmowach, nie tylko teorii.',
    },
    {
      icon: '😊',
      title: 'Przyjazna atmosfera',
      description: 'Lekcje w ciepłej, bezpiecznej atmosferze, gdzie każdy się czuje komfortowo.',
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16" id="oferta">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <h2>Dlaczego warto wybrać Anglo Mania</h2>
          <Badge variant="primary">Sprawdzeni nauczyciele</Badge>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, idx) => (
            <Card key={idx} variant="light" hover padding="md">
              <div className="mb-3 text-5xl">{reason.icon}</div>
              <h3 className="mb-3 text-xl text-gray-900">{reason.title}</h3>
              <p className="text-sm leading-6 text-gray-500">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
