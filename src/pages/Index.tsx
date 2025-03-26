
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HeatmapDemo from '@/components/HeatmapDemo';
import CooperationSection from '@/components/CooperationSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Add scroll reveal effect for elements
  useEffect(() => {
    const revealElements = () => {
      const elements = document.querySelectorAll('[data-aos]');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('animate-fade-up');
        }
      });
    };
    
    // Run on initial load
    revealElements();
    
    // Add scroll listener
    window.addEventListener('scroll', revealElements);
    
    // Cleanup
    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <HeatmapDemo />
        <CooperationSection />
        
        <section id="safety" className="py-20 bg-primary text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the CrimeSpot Initiative</h2>
            <p className="text-white/90 mb-10 text-lg">
              Together, we can transform information into efficient safety interventions. Let's unite to create safer, smarter, and more just streets for all of India.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-colors shadow-md">
              Become a Partner
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
