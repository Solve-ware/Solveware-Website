// app/page.tsx
import HeroSection from './components/ui/hero-section';
import Features from './components/ui/features';
import Testimonials from './components/ui/testimonials';
import Pricing from './components/ui/pricing';
import FAQ from './components/ui/faq';
import Footer from './components/ui/footer';
import AnimatedGradient from './components/ui/animated-gradiant';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <AnimatedGradient className="absolute top-0 left-0 w-full h-full -z-10" />
      <HeroSection />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}