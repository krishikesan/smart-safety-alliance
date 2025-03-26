
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scrolling for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Heatmap", href: "#heatmap" },
    { name: "Cooperation", href: "#cooperation" },
    { name: "Safety", href: "#safety" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center gap-2 animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
            CS
          </div>
          <span className="text-xl font-semibold">CrimeSpot</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity link-underline animate-fade-up"
              style={{ animationDelay: `${150 + index * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="default" 
            size="sm" 
            className="animate-fade-up shadow-sm hover:shadow-md transition-all"
            style={{ animationDelay: "400ms" }}
          >
            Join Initiative
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-6">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
              CS
            </div>
            <span className="text-xl font-semibold">CrimeSpot</span>
          </a>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-md p-1 text-gray-700 hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="space-y-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-base font-medium py-2 opacity-80 hover:opacity-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              className="w-full shadow-sm hover:shadow-md transition-all"
            >
              Join Initiative
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
