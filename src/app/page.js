import HeroSection from "@/Components/Apps/Home/HeroSection";
import NextRoleCTA from "@/Components/Apps/Home/NextRoleCTA";
import PricingSection from "@/Components/Apps/Home/PricingSection";

import Image from "next/image";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <PricingSection />
      <NextRoleCTA />
    </section>
  );
}
