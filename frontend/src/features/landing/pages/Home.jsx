import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import DashboardPreview from "../components/DashboardPreview";
import WhyInventra from "../components/WhyInventra";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import TrustedCompanies from "../components/TrustedCompanies";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <Hero />

      <Features />

      <Stats />

      <TrustedCompanies />

      <DashboardPreview />

      <WhyInventra />

      <Testimonials />

      <FAQ />

      <CTA />

      <Footer />

    </div>
  );
}