import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import DashboardPreview from "../components/DashboardPreview";
import WhyInventra from "../components/WhyInventra";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <DashboardPreview />

      <WhyInventra />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}