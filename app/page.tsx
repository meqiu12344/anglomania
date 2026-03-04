import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Offerings from "./components/Offerings";
import TestCTA from "./components/TestCTA";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChoose />
      <Offerings />
      <TestCTA />
      <Testimonials />
      <Contact />
    </main>
  );
}
