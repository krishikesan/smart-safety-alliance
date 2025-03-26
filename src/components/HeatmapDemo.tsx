
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Flashlight, MapPin, Shield } from "lucide-react";

const HeatmapDemo = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDemoLoad = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id="heatmap" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 rounded-full text-primary mb-4">
              Visualization
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Crime Heatmaps for Predictive Policing
            </h2>
            <p className="text-muted-foreground mb-6">
              Our advanced heatmap technology visualizes crime patterns across neighborhoods, helping police departments allocate resources more effectively and preventing crime before it happens.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-medium">Historical Data Overlay</h4>
                  <p className="text-sm text-muted-foreground">Combines years of crime data with geographic information to identify patterns and trends.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-medium">Temporal Analysis</h4>
                  <p className="text-sm text-muted-foreground">Examines crime patterns based on time of day, day of week, seasons, and special events.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Flashlight className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-medium">Infrastructure Assessment</h4>
                  <p className="text-sm text-muted-foreground">Identifies areas with poor lighting, insufficient surveillance, or environmental risk factors.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Shield className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-medium">Risk Prediction</h4>
                  <p className="text-sm text-muted-foreground">Uses machine learning algorithms to forecast potential crime hotspots before incidents occur.</p>
                </div>
              </div>
            </div>
            
            <Button onClick={handleDemoLoad} disabled={isLoading} className="shadow-sm hover:shadow-md transition-all">
              {isLoading ? "Loading..." : "View Interactive Demo"}
            </Button>
          </div>
          
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-medium border border-border">
            <Tabs defaultValue="heatmap" className="w-full">
              <div className="bg-secondary/50 p-4 border-b border-border">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="heatmap">Crime Heatmap</TabsTrigger>
                  <TabsTrigger value="prediction">Prediction</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="heatmap" className="m-0">
                <div className="aspect-video relative bg-gray-100 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YxZjVmOSIvPjxwYXRoIGQ9Ik0xMDAgMTAwaDYwMHY0MDBIMTAweiIgZmlsbD0iI2UyZThmMCIvPjxjaXJjbGUgY3g9IjM1MCIgY3k9IjI1MCIgcj0iODAiIGZpbGw9InJnYmEoMjM5LCA2OCwgNjgsIDAuNykiIGZpbGwtb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iNDUwIiBjeT0iMzUwIiByPSI2MCIgZmlsbD0icmdiYSgyMzksIDY4LCA2OCwgMC41KSIgZmlsbC1vcGFjaXR5PSIwLjUiLz48Y2lyY2xlIGN4PSI1MDAiIGN5PSIyMDAiIHI9IjQwIiBmaWxsPSJyZ2JhKDIzOSwgNjgsIDY4LCAwLjQpIiBmaWxsLW9wYWNpdHk9IjAuNCIvPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjMwMCIgcj0iNzAiIGZpbGw9InJnYmEoMjM5LCA2OCwgNjgsIDAuNikiIGZpbGwtb3BhY2l0eT0iMC42Ii8+PHBhdGggZD0iTTEwMCA1MDBMODAwIDUwMCIgc3Ryb2tlPSIjNzg3MTZjIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTUwIDUwMEwxNTAgMTAwIiBzdHJva2U9IiM3ODcxNmMiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0zMDAgNTAwTDMwMCAxMDAiIHN0cm9rZT0iIzc4NzE2YyIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTQ1MCA1MDBMNDUwIDEwMCIgc3Ryb2tlPSIjNzg3MTZjIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNNjAwIDUwMEw2MDAgMTAwIiBzdHJva2U9IiM3ODcxNmMiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik03NTAgNTAwTDc1MCAxMDAiIHN0cm9rZT0iIzc4NzE2YyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]">
                    </div>
                    
                    <div className="absolute top-4 left-4 glass-effect px-3 py-2 rounded-md text-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span>High Crime Rate</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                        <span>Medium Crime Rate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                        <span>Low Crime Rate</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">Delhi NCR Crime Heatmap</h3>
                  <p className="text-sm text-muted-foreground">Current view showing theft and burglary density for the past 30 days across Delhi NCR regions.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="prediction" className="m-0">
                <div className="aspect-video relative bg-gray-100 flex items-center justify-center">
                  <div className="text-center px-4">
                    <p className="text-muted-foreground mb-2">Prediction model visualization would appear here</p>
                    <p className="text-xs text-muted-foreground">Based on historical data, weather patterns, and upcoming events</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">Predictive Analytics</h3>
                  <p className="text-sm text-muted-foreground">Future crime probability based on multiple factors including upcoming festivals and local events.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="resources" className="m-0">
                <div className="aspect-video relative bg-gray-100 flex items-center justify-center">
                  <div className="text-center px-4">
                    <p className="text-muted-foreground mb-2">Resource allocation map would appear here</p>
                    <p className="text-xs text-muted-foreground">Showing optimal patrol routes and officer positioning</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">Resource Optimization</h3>
                  <p className="text-sm text-muted-foreground">Suggested patrol routes and officer placement for maximum coverage of high-risk areas.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeatmapDemo;
