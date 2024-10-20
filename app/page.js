import GetMore from "./components/GetMore/GetMore";
import HeroSection from "./components/HeroSection/HeroSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import WeHelp from "./components/WeHelp/WeHelp";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WeHelp />
      <GetMore />
      <HowItWorks />
    </>
  );
}
