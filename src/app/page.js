// src/app/page.js
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="bg-slate-900">
      <Header />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <Footer />
    </main>
  );
}
