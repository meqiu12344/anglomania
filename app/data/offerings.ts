export interface OfferingType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  targetAudience: string;
  ageGroup: string;
  duration: string;
  price: string;
}

export const offerings: OfferingType[] = [
  {
    id: '1',
    title: 'Korepetycje dla Młodzieży',
    subtitle: 'Przygotowanie do egzaminów i biegłość języka',
    description:
      'Program dla uczniów gimnazjum i liceum. Skupiamy się na rozwoju umiejętności komunikacyjnych i przygotowaniu do egzaminów szkolnych.',
    icon: '🧑‍🎓',
    targetAudience: 'Uczniowie gimnazjum i liceum (klasy VII-XII)',
    ageGroup: '13-18 lat',
    duration: 'Lekcje 60 minut, 1-3 razy w tygodniu',
    price: 'od 60 PLN/lekcja',
  },
  {
    id: '2',
    title: 'Korepetycje dla Dorosłych',
    subtitle: 'Angielski biznesowy i komunikacja zawodowa',
    description:
      'Program dla dorosłych, którzy chcą poprawy angielskiego w pracy lub dla osobistego rozwoju. Praktyczne lekcje dostosowane do Twoich celów.',
    icon: '👨‍💼',
    targetAudience: 'Dorośli, pracownicy, przedsiębiorcy',
    ageGroup: '18+',
    duration: 'Lekcje 60 minut, elastyczne godziny',
    price: 'od 70 PLN/lekcja',
  },
  {
    id: '3',
    title: 'Przygotowanie do Matury',
    subtitle: 'Intensywne szkolenie do egzaminu maturalnego',
    description:
      'Kompleksowe przygotowanie do egzaminu maturalnego z angielskiego. Pracujemy z aktualnymi arkuszami maturalnymi i egzaminami Cambridge.',
    icon: '📚',
    targetAudience: 'Maturzyści (klasa XII)',
    ageGroup: '17-19 lat',
    duration: 'Lekcje 90 minut, 2-3 razy w tygodniu',
    price: 'od 80 PLN/lekcja',
  },
];



