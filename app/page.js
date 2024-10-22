import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer";
import GetMore from "./components/GetMore/GetMore";
import HeroSection from "./components/HeroSection/HeroSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import MarketingPlan from "./components/MarketingPlan/MarketingPlan";
import PricingPlans from "./components/PricingPlans/PricingPlans";
import ReadyToStart from "./components/ReadyToStart/ReadyToStart";
import SomeServices from "./components/SomeServices/SomeServices";
import WeHelp from "./components/WeHelp/WeHelp";
import WhatIncluded from "./components/WhatIncluded/WhatIncluded";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WeHelp />
      <GetMore />
      <HowItWorks />
      <SomeServices />
      <PricingPlans />
      <WhatIncluded />
      <MarketingPlan />
      <ContactUs />
      <ReadyToStart />
      <Footer />
    </>
  );
}
