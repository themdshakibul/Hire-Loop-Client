import FeaturesSection from "@/Components/Apps/Home/FeaturesSection";
import StartsSections from "@/Components/Apps/Home/StartsSections";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <StartsSections />
      <FeaturesSection />
    </section>
  );
}
