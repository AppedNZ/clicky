import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer";
import GetMore from "./components/GetMore/GetMore";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import MarketingPlan from "./components/MarketingPlan/MarketingPlan";
import PricingPlans from "./components/PricingPlans/PricingPlans";
import ReadyToStart from "./components/ReadyToStart/ReadyToStart";
import ServiceAvailability from "./components/ServiceAvailability/ServiceAvailability";
import SignUp from "./components/SignUp/SignUp";
import SomeServices from "./components/SomeServices/SomeServices";
import WeHelp from "./components/WeHelp/WeHelp";
import WhatIncluded from "./components/WhatIncluded/WhatIncluded";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <WeHelp />
      <GetMore />
      <HowItWorks />
      <ServiceAvailability />
      <PricingPlans />
      <WhatIncluded />
      <MarketingPlan />
      <ContactUs />
      <ReadyToStart />
      <Footer />
      <SignUp />
    </>
  );
}
