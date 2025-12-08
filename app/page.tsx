import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedIn from "@/components/FeaturedIn";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import SEOResults from "@/components/SEOResults";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import HomeStructuredData from "@/components/HomeStructuredData";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeStructuredData />
      <Header />
      <Hero />
      <FeaturedIn />
      <Services />
      <Portfolio />
      <SEOResults />
      <Features />
      <CTA />
      <Footer />
      <BackToTop />
    </div>
  );
}
