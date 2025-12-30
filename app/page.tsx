import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedIn from "@/components/FeaturedIn";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import EnhancedPortfolio from "@/components/EnhancedPortfolio";
import SEOResults from "@/components/SEOResults";
import WorkProcess from "@/components/WorkProcess";
import Features from "@/components/Features";
import PricingSection from "@/components/PricingSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import HomeStructuredData from "@/components/HomeStructuredData";
import PlatformSolutions from "@/components/PlatformSolutions";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeStructuredData />
      <Header />
      <Hero />
      <FeaturedIn />
      <AboutSection />
      <Services />
      <PlatformSolutions />
      <EnhancedPortfolio />
      <SEOResults />
      <WorkProcess />
      <Features />
      <PricingSection />
      <Testimonials />
      <CTA />
      <Footer />
      <BackToTop />
    </div>
  );
}

// Cache homepage for 1 hour
export const revalidate = 3600;
