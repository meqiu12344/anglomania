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
    subtitle: 'Egzaminy i swobodna komunikacja',
    description:
      'Lekcje dla uczniów: szkoła, egzaminy i pewniejsze mówienie.',
    icon: '🧑‍🎓',
    targetAudience: 'Uczniowie klas VII-XII',
    ageGroup: '13-18 lat',
    duration: '60 min, 1-3 razy w tygodniu',
    price: 'od 60 PLN/lekcja',
  },
  {
    id: '2',
    title: 'Korepetycje dla Dorosłych',
    subtitle: 'Angielski do pracy i życia codziennego',
    description:
      'Praktyczne lekcje dla dorosłych dopasowane do Twoich celów.',
    icon: '👨‍💼',
    targetAudience: 'Dorośli i pracownicy',
    ageGroup: '18+',
    duration: '60 min, elastyczne godziny',
    price: 'od 70 PLN/lekcja',
  },
  {
    id: '3',
    title: 'Przygotowanie do Matury',
    subtitle: 'Skuteczne przygotowanie do matury',
    description:
      'Praca na arkuszach i zadaniach egzaminacyjnych krok po kroku.',
    icon: '📚',
    targetAudience: 'Maturzyści (klasa XII)',
    ageGroup: '17-19 lat',
    duration: '90 min, 2-3 razy w tygodniu',
    price: 'od 80 PLN/lekcja',
  },
];



