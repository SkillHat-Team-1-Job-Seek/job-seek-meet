import React from "react";
import NavigationBar from "./NavigationBar";
import HeroSection from "./HeroSection";
import OurReachSection from "./OurReach";
import FeaturesSection from "./Features";
import Testimonials from "./Testimonials";
import AboutUsSection from "./AboutUs";
import HowItWorkSection from "./HowItWorks";
import FAQSection from "./FAQs";
import FooterSection from "./Footer";

const LandingPage = ({ navigateTo }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Navigation */}
      <NavigationBar navigateTo={navigateTo} />
      {/* Hero Section */}
      <HeroSection />
      {/* Our Reach Section */}
      <OurReachSection />
      {/* Features Section */}
      <FeaturesSection />
      {/* How It Works Section */}
      <HowItWorkSection />
      {/*Testimonial Section */}
      <Testimonials />
      {/* About Us Section */}
      <AboutUsSection />
      {/* FAQ Section */}
      <FAQSection />
      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default LandingPage;
