import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import FeaturedIn from "@/components/FeaturedIn";
import EnhancedPortfolio from "@/components/EnhancedPortfolio";
import SEOResults from "@/components/SEOResults";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import HomeStructuredData from "@/components/HomeStructuredData";
import Features from "@/components/Features";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeStructuredData />
      <Header />
      <Hero />
      <AboutSection serviceName="Digital Agency" locationin="Bangalore" />
      <Services />
      <SEOResults />
      <EnhancedPortfolio />
      <div className="bg-slate-50 py-20">
        <Testimonials />
      </div>
      <FeaturedIn />
      <Features />
      <PricingSection />
      <CTA />
      <Footer />
      <BackToTop />
    </div>
  );
}

// Cache homepage for 1 hour
export const revalidate = 3600;
