
import React from 'react';
import { ChevronRight, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary to-secondary/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                CS
              </div>
              <span className="text-xl font-semibold">CrimeSpot</span>
            </div>
            <p className="text-muted-foreground mb-6 text-sm">
              A citizen-focused crime prevention initiative aimed at empowering police and fostering mutual trust between law enforcement and communities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Features
                </a>
              </li>
              <li>
                <a href="#heatmap" className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Crime Heatmaps
                </a>
              </li>
              <li>
                <a href="#cooperation" className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Citizen Cooperation
                </a>
              </li>
              <li>
                <a href="#safety" className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Safety Initiatives
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1" /> About Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  National Police Headquarters, New Delhi, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  +91 1800-XXX-XXXX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  info@crimespot.gov.in
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Subscribe to Updates</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Stay informed about safety initiatives and program updates in your area.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 border border-border rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-white rounded-r-md px-4 py-2 text-sm hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2023 CrimeSpot. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
