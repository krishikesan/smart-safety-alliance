
import React from 'react';
import { ShieldCheck, Users, Map, Bell } from 'lucide-react';
import CountUp from 'react-countup';

const statistics = [
  {
    value: 2500,
    label: 'Crime Reports Filed',
    icon: ShieldCheck,
    suffix: '+',
  },
  {
    value: 150,
    label: 'Police Stations Connected',
    icon: Map,
    suffix: '+',
  },
  {
    value: 50000,
    label: 'Active Community Members',
    icon: Users,
    suffix: '+',
  },
  {
    value: 86,
    label: 'Emergency Response Rate',
    icon: Bell,
    suffix: '%',
  },
];

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                <CountUp end={stat.value} duration={2.5} separator="," suffix={stat.suffix} />
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
