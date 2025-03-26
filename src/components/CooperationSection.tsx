
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, LucideSmartphone, MessageCircle, ShieldAlert } from 'lucide-react';

const CooperationSection = () => {
  return (
    <section id="cooperation" className="section-padding bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 rounded-full text-primary mb-4">
            Citizen-Police Alliance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building Trust Through Cooperation
          </h2>
          <p className="text-muted-foreground text-balance">
            CrimeSpot bridges the gap between citizens and law enforcement, creating a collaborative ecosystem where information flows seamlessly and trust is strengthened.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Citizen Reporting Platform</h3>
              <p className="text-muted-foreground mb-6">
                Our intuitive WhatsApp chatbot makes it easy for citizens to report suspicious activities, share concerns, and participate actively in keeping their communities safe.
              </p>
              
              <div className="space-y-4">
                <Card className="border border-border shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">WhatsApp Integration</h4>
                        <p className="text-sm text-muted-foreground">
                          Report incidents through familiar messaging platforms with support for text, images, and location sharing.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-border shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <ShieldAlert className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Anonymous Reporting</h4>
                        <p className="text-sm text-muted-foreground">
                          Option to share information anonymously, ensuring citizens feel safe when reporting sensitive matters.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-border shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <LucideSmartphone className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Multilingual Support</h4>
                        <p className="text-sm text-muted-foreground">
                          Interface available in multiple Indian languages to ensure accessibility across diverse communities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Button className="mt-6 shadow-sm hover:shadow-md transition-all">
                Try Demo Chatbot <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
              
              <div className="bg-white rounded-2xl shadow-medium border border-border overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h4 className="font-medium">CrimeSpot WhatsApp Chatbot</h4>
                </div>
                
                <div className="p-4 bg-gray-50 h-96 overflow-y-auto">
                  <div className="flex flex-col gap-4">
                    <div className="self-start max-w-[80%] bg-white rounded-lg p-3 shadow-sm">
                      <p className="text-sm">Welcome to CrimeSpot! How can I assist you today?</p>
                      <p className="text-[10px] text-gray-500 mt-1">10:30 AM</p>
                    </div>
                    
                    <div className="self-end max-w-[80%] bg-primary/10 rounded-lg p-3">
                      <p className="text-sm">I want to report suspicious activity near Lajpat Nagar metro station.</p>
                      <p className="text-[10px] text-gray-500 mt-1">10:31 AM</p>
                    </div>
                    
                    <div className="self-start max-w-[80%] bg-white rounded-lg p-3 shadow-sm">
                      <p className="text-sm">I'm here to help. Could you please describe what you observed?</p>
                      <p className="text-[10px] text-gray-500 mt-1">10:32 AM</p>
                    </div>
                    
                    <div className="self-end max-w-[80%] bg-primary/10 rounded-lg p-3">
                      <p className="text-sm">A group of people are trying to break into a parked car.</p>
                      <p className="text-[10px] text-gray-500 mt-1">10:33 AM</p>
                    </div>
                    
                    <div className="self-start max-w-[80%] bg-white rounded-lg p-3 shadow-sm">
                      <p className="text-sm">Thank you for reporting this. Could you share the location? Is it safe for you to do so?</p>
                      <p className="text-[10px] text-gray-500 mt-1">10:34 AM</p>
                    </div>
                    
                    <div className="self-end max-w-[80%] bg-primary/10 rounded-lg p-3">
                      <p className="text-sm">Yes, I'm at a safe distance. It's near Exit Gate 2 of Lajpat Nagar Metro Station. [Location shared]</p>
                      <p className="text-[10px] text-gray-500 mt-1">10:35 AM</p>
                    </div>
                    
                    <div className="self-start max-w-[80%] bg-white rounded-lg p-3 shadow-sm">
                      <p className="text-sm">Thank you. I've alerted the nearest patrol unit. They will respond within 5 minutes. Would you like to remain anonymous?</p>
                      <p className="text-[10px] text-gray-500 mt-1">10:36 AM</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <input type="text" className="flex-1 px-3 py-2 border border-border rounded-md text-sm" placeholder="Type your message..." disabled />
                    <button className="bg-primary text-white rounded-md px-4 py-2 text-sm" disabled>Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Transparency Builds Trust</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-soft border border-border">
              <h4 className="font-medium mb-3">Response Updates</h4>
              <p className="text-sm text-muted-foreground">Citizens receive timely updates on the status of their reports, enhancing transparency.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-soft border border-border">
              <h4 className="font-medium mb-3">Safety Advisories</h4>
              <p className="text-sm text-muted-foreground">Regular safety tips and advisories based on current trends and seasonal factors.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-soft border border-border">
              <h4 className="font-medium mb-3">Success Stories</h4>
              <p className="text-sm text-muted-foreground">Showcase how citizen reports led to successful interventions and crime prevention.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CooperationSection;
