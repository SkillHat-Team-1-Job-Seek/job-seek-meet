import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import HeroSection from "./HeroSection";
import OurReachSection from "./OurReach";
import FeaturesSection from "./Features";
import Testimonials from "./Testimonials";
import AboutUsSection from "./AboutUs";
import HowItWorkSection from "./HowItWorks";
import FAQSection from "./FAQs";
import FooterSection from "./Footer";

const LandingPage = () => {
  const navigate = useNavigate();

  const featuresRef = useRef(null);
  const aboutUsRef = useRef(null);
  const howItWorksRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionMap = {
      features: featuresRef,
      about: aboutUsRef,
      howItWorks: howItWorksRef,
      faq: faqRef,
    };

    sectionMap[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <NavigationBar scrollTo={scrollToSection} />
      <HeroSection onJoin={() => navigate("/signup")} />
      <OurReachSection />
      <div ref={featuresRef}>
        <FeaturesSection />
      </div>
      <div ref={howItWorksRef}>
        <HowItWorkSection />
      </div>
      <Testimonials />
      <div ref={aboutUsRef}>
        <AboutUsSection />
      </div>
      <div ref={faqRef}>
        <FAQSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default LandingPage;

