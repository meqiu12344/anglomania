'use client';

import { useState } from 'react';
import { Button } from '@/app/components';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is your name?",
    options: ["My name is John", "I am a student", "Yes, I am", "No, I don't"],
    correct: 0,
    level: 'A1'
  },
  {
    id: 2,
    question: "I _____ a teacher.",
    options: ["am", "is", "are", "be"],
    correct: 0,
    level: 'A1'
  },
  {
    id: 3,
    question: "Where are you _____?",
    options: ["from", "go", "come", "visit"],
    correct: 0,
    level: 'A1'
  },
  {
    id: 4,
    question: "He _____ to school every day.",
    options: ["goes", "go", "going", "went"],
    correct: 0,
    level: 'A2'
  },
  {
    id: 5,
    question: "I have been studying English _____ five years.",
    options: ["for", "since", "during", "while"],
    correct: 0,
    level: 'A2'
  },
  {
    id: 6,
    question: "If I _____ you were coming, I would have prepared something.",
    options: ["knew", "had known", "know", "would know"],
    correct: 1,
    level: 'B1'
  },
  {
    id: 7,
    question: "She didn't attend the meeting _____ her illness.",
    options: ["because of", "because", "although", "though"],
    correct: 0,
    level: 'B1'
  },
  {
    id: 8,
    question: "The project was completed _____ time and within budget.",
    options: ["in", "on", "at", "by"],
    correct: 1,
    level: 'B2'
  },
  {
    id: 9,
    question: "I find it difficult to _____ with colleagues who are always negative.",
    options: ["deal", "cope", "manage", "handle"],
    correct: 1,
    level: 'B2'
  },
  {
    id: 10,
    question: "The government's _____ to environmental issues has been widely criticized.",
    options: ["approach", "manner", "method", "way"],
    correct: 0,
    level: 'C1'
  },
  {
    id: 11,
    question: "His _____ comments on the matter were met with considerable skepticism.",
    options: ["dismissive", "derogatory", "disparaging", "contemptuous"],
    correct: 2,
    level: 'C1'
  },
  {
    id: 12,
    question: "The linguistic _____ in the region reflects centuries of cultural interchange.",
    options: ["heterogeneity", "dichotomy", "asymmetry", "paradigm"],
    correct: 0,
    level: 'C2'
  }
];

const levelDescriptions = {
  A1: { name: 'Beginner', color: 'bg-red-900/40 text-red-200', description: 'Posługujesz się językiem angielskim na bardzo podstawowym poziomie' },
  A2: { name: 'Elementary', color: 'bg-orange-900/40 text-orange-200', description: 'Masz podstawową znajomość angielskiego' },
  B1: { name: 'Intermediate', color: 'bg-yellow-900/40 text-yellow-200', description: 'Możesz się porozumieć w typowych sytuacjach' },
  B2: { name: 'Upper Intermediate', color: 'bg-lime-900/40 text-lime-200', description: 'Posługujesz się angielskim sprawnie' },
  C1: { name: 'Advanced', color: 'bg-blue-900/40 text-blue-200', description: 'Masz zaawansowaną znajomość angielskiego' },
  C2: { name: 'Proficiency', color: 'bg-green-900/40 text-green-200', description: 'Mówisz angielskim praktycznie jak native speaker' }
};

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  const startTest = () => {
    setTestStarted(true);
  };

  const handleAnswerClick = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);

    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswers(Array(questions.length).fill(null));
    setShowResults(false);
    setTestStarted(false);
  };

  const getLevel = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return 'C2';
    if (percentage >= 80) return 'C1';
    if (percentage >= 70) return 'B2';
    if (percentage >= 55) return 'B1';
    if (percentage >= 35) return 'A2';
    return 'A1';
  };

  const level = getLevel();
  const percentage = Math.round((score / questions.length) * 100);

  if (!testStarted) {
    return (
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 py-20 text-white md:py-32">
          <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -left-40 -bottom-40 h-[32rem] w-[32rem] rounded-full bg-blue-500/10 blur-3xl" />
          
          <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Test Poziomujący</h1>
            <p className="mb-8 text-lg text-zinc-200 md:text-xl">Sprawdź swój poziom angielskiego w kilka minut.</p>
            
            <div className="mb-12 inline-block rounded-xl bg-white/10 p-8 backdrop-blur-sm">
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-base md:text-lg">12 pytań z różnych poziomów trudności</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏱️</span>
                  <p className="text-base md:text-lg">Około 10 minut</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📊</span>
                  <p className="text-base md:text-lg">Natychmiastowy wynik z poziomem A1-C2</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <p className="text-base md:text-lg">Krótka rekomendacja nauki</p>
                </div>
              </div>
            <Button 
              onClick={startTest}
              className="px-8 py-4 mt-6 text-lg font-semibold"
            >
              Rozpocznij Test
            </Button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (showResults) {
    const levelInfo = levelDescriptions[level as keyof typeof levelDescriptions];
    
    return (
      <main>
        {/* Results Section */}
        <section className="min-h-screen bg-slate-900 py-12 md:py-20">
          <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">Twój Wynik</h1>
              <p className="mb-12 text-lg text-slate-300">Test ukończony. Oto Twój poziom.</p>

              {/* Score Card */}
              <div className="mb-12 rounded-2xl bg-slate-800 p-8 shadow-lg md:p-12">
                <div className="mb-8 text-6xl font-bold text-blue-400">{percentage}%</div>
                
                <div className={`mx-auto mb-8 w-full max-w-xs rounded-xl p-6 ${levelInfo.color}`}>
                  <div className="text-2xl font-bold md:text-3xl">{level}</div>
                  <div className="mt-2 text-lg font-semibold">{levelInfo.name}</div>
                </div>

                <p className="mb-6 text-slate-300 md:text-lg">{levelInfo.description}</p>

                <div className="mb-8 rounded-lg bg-slate-700 p-6">
                  <p className="text-sm text-slate-200">
                    <span className="font-bold">Twój wynik:</span> {score} na {questions.length} poprawnych odpowiedzi
                  </p>
                </div>

                {/* Level-specific recommendations */}
                <div className="mb-8 space-y-4 text-left">
                  <h3 className="text-xl font-bold text-white">Rekomendacje:</h3>
                  {level === 'A1' && (
                    <div className="space-y-2 rounded-lg bg-red-900/30 p-4 text-red-200">
                      <p>• Zacznij kurs od podstaw</p>
                      <p>• Ćwicz słownictwo i proste zdania</p>
                    </div>
                  )}
                  {level === 'A2' && (
                    <div className="space-y-2 rounded-lg bg-orange-900/30 p-4 text-orange-200">
                      <p>• Wzmacniaj gramatykę i słownictwo</p>
                      <p>• Ćwicz krótkie rozmowy</p>
                    </div>
                  )}
                  {level === 'B1' && (
                    <div className="space-y-2 rounded-lg bg-yellow-900/30 p-4 text-yellow-200">
                      <p>• Wybierz kurs intermediate</p>
                      <p>• Pracuj nad płynnością mówienia</p>
                    </div>
                  )}
                  {level === 'B2' && (
                    <div className="space-y-2 rounded-lg bg-lime-900/30 p-4 text-lime-200">
                      <p>• Zapisz się na kurs upper-intermediate</p>
                      <p>• Rozwijaj pisanie i argumentację</p>
                    </div>
                  )}
                  {level === 'C1' && (
                    <div className="space-y-2 rounded-lg bg-blue-900/30 p-4 text-blue-200">
                      <p>• Bardzo dobry poziom języka</p>
                      <p>• Rozwijaj słownictwo specjalistyczne</p>
                    </div>
                  )}
                  {level === 'C2' && (
                    <div className="space-y-2 rounded-lg bg-green-900/30 p-4 text-green-200">
                      <p>• Świetny wynik — poziom biegły</p>
                      <p>• Utrzymuj kontakt z językiem na co dzień</p>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Section */}
              <div className="space-y-4">
                <p className="text-lg font-semibold text-white">Chcesz iść krok dalej?</p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button 
                    onClick={restartTest}
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    Powtórz Test
                  </Button>
                  <a href="#kontakt" className="w-full sm:w-auto">
                    <Button className="w-full">
                      Umów się na Konsultację
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const question = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <main>
      {/* Test Section */}
      <section className="min-h-screen bg-slate-900 py-8 md:py-12">
        <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-300">Pytanie {currentQuestion + 1} z {questions.length}</span>
              <span className="text-sm font-semibold text-slate-300">{percentage}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-700">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 to-sky-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="mb-8 rounded-2xl bg-slate-800 p-6 shadow-lg md:p-8">
            {/* Level Badge */}
            <div className="mb-6 inline-block">
              <span className="inline-block rounded-full bg-blue-900/40 px-3 py-1 text-sm font-semibold text-blue-200">
                Poziom: {question.level}
              </span>
            </div>

            {/* Question */}
            <h2 className="mb-8 text-2xl font-bold text-white md:text-3xl">
              {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className={`w-full rounded-lg border-2 p-4 text-left font-medium transition-all duration-200 ${
                    selectedAnswer === index
                      ? 'border-blue-400 bg-blue-900/40 text-blue-100'
                      : 'border-slate-600 bg-slate-700 text-slate-200 hover:border-blue-500 hover:bg-slate-700'
                  }`}
                >
                  <span className="inline-block mr-3 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex"
                    style={{
                      backgroundColor: selectedAnswer === index ? '#3b82f6' : '#475569',
                      color: selectedAnswer === index ? 'white' : '#cbd5e1',
                      display: 'flex',
                    }}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex-1 rounded-lg border-2 border-slate-600 bg-slate-800 px-6 py-3 font-semibold text-slate-200 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              ← Poprzednie
            </button>
            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="flex-1 rounded-lg border-2 border-blue-600 bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {currentQuestion === questions.length - 1 ? 'Zakończ Test' : 'Następne'} →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
