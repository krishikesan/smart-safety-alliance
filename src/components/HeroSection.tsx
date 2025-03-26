
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Eye, Shield, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-secondary animate-fade-up">
            Citizen-Police Alliance for Safety
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-balance animate-fade-up" style={{ animationDelay: "100ms" }}>
            <span className="text-gradient">CrimeSpot:</span> Smart Policing for Safer Communities
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance animate-fade-up" style={{ animationDelay: "200ms" }}>
            A data-driven collaboration between citizens and police to predict, prevent, and respond to crime effectively across India's diverse landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Button size="lg" className="shadow-sm hover:shadow-md transition-all">
              Learn More <ChevronRight size={16} className="ml-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-2">
              Join Initiative
            </Button>
          </div>
          
          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
            <div className="bg-white/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft transform transition-all hover:translate-y-[-4px] hover:shadow-medium animate-fade-up" style={{ animationDelay: "400ms" }}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Predictive Analysis</h3>
              <p className="text-muted-foreground text-sm">Identify high-risk areas before crime occurs using advanced data analytics and historical patterns.</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft transform transition-all hover:translate-y-[-4px] hover:shadow-medium animate-fade-up" style={{ animationDelay: "500ms" }}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Citizen Cooperation</h3>
              <p className="text-muted-foreground text-sm">Enable seamless reporting of suspicious activities and foster community engagement for safer neighborhoods.</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft transform transition-all hover:translate-y-[-4px] hover:shadow-medium animate-fade-up" style={{ animationDelay: "600ms" }}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Resource Optimization</h3>
              <p className="text-muted-foreground text-sm">Deploy police resources efficiently with data-driven patrol routes and strategic positioning of officers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
