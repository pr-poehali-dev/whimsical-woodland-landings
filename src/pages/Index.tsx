import { useState } from "react";
import { heroes } from "@/components/landing/data";
import { Nav, HeroSection } from "@/components/landing/HeroSection";
import { AboutSection, HowItWorksSection, CollectionGrid, QuizSection } from "@/components/landing/CollectionSection";
import { MeaningSection, PreorderSection, ReviewsSection, Footer } from "@/components/landing/StorySection";

export default function Index() {
  const [selected, setSelected] = useState(heroes[0]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5efe4] text-[#34271e]">
      <Nav />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <CollectionGrid />
      <QuizSection selected={selected} setSelected={setSelected} />
      <MeaningSection />
      <PreorderSection />
      <ReviewsSection />
      <Footer />
    </main>
  );
}
