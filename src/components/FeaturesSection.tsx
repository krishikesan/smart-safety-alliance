
import React from 'react';
import { 
  AlertTriangle, 
  BarChart3, 
  BellRing, 
  Flashlight, 
  Map, 
  MessageSquare, 
  Radio, 
  RotateCcw
} from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Map,
    title: 'Localized Crime Heatmaps',
    description: 'Overlay areas with crime history, distress calls, poor lighting, and CCTV camera density for comprehensive monitoring.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: AlertTriangle,
    title: 'Predictive Patrol Alerts',
    description: 'Identify risky locations during festivals, late nights, or monsoons, such as drunk-driving areas around pubs at weekends.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: MessageSquare,
    title: 'Citizen-Police Cooperation',
    description: 'Citizens report suspicious activity via WhatsApp chatbot, while police post updates for transparency and public trust.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: RotateCcw,
    title: 'Resource Optimization',
    description: 'Optimize routes for PCR vans, beat officers, and community policing kiosks with focus on emerging crime hotspots.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: BellRing,
    title: 'Public Safety Awareness',
    description: 'Send timely alerts and safety advice through SMS and IVR calls in local languages to keep communities informed.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Radio,
    title: 'Voice-Based Reporting',
    description: 'Future implementation of regional dialect support for tribal areas to ensure inclusive safety reporting.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: Flashlight,
    title: 'Smart Infrastructure',
    description: 'Incorporate IoT street lighting networks in smart cities to improve visibility and safety in vulnerable areas.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    description: 'Transform collected information into actionable insights for more effective safety interventions.',
    color: 'bg-cyan-50 text-cyan-600',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 rounded-full text-primary mb-4">
            Key Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforming Public Safety Through Technology
          </h2>
          <p className="text-muted-foreground text-balance">
            CrimeSpot combines advanced analytics with community engagement to create a comprehensive safety ecosystem that adapts to India's diverse urban and rural needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-soft border border-border transition-all duration-300 hover:shadow-medium hover:translate-y-[-4px]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-5", feature.color)}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
