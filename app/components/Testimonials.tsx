import Card from './Card';
import Badge from './Badge';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Anna K.',
      role: 'Uczeń klasy 8',
      text: 'Poprawiłam oceny i zaczęłam swobodnie mówić po angielsku.',
      rating: 5,
    },
    {
      name: 'Jakub M.',
      role: 'Maturzysta',
      text: 'Przygotowanie do matury było świetne. Wynik: 92%.',
      rating: 5,
    },
    {
      name: 'Marta P.',
      role: 'Pracownica biura',
      text: 'Kurs pomógł mi w pracy i codziennej komunikacji.',
      rating: 5,
    },
  ];

  return (
    <section className="bg-zinc-900 py-12 text-white md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <h2>Co mówią nasi uczniowie</h2>
          <Badge variant="primary">Opinie uczestników</Badge>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} variant="transparent" hover={false} padding="md">
              <div className="mb-3 text-lg tracking-[0.12rem]">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="mb-5 text-sm italic leading-6 text-white/90">"{testimonial.text}"</p>
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="text-sm text-white/70">{testimonial.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
