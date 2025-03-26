
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajiv Kumar',
    role: 'Police Commissioner, Delhi',
    content: 'CrimeSpot has revolutionized how we allocate resources. With data-driven insights, we've seen a 24% reduction in response times to emergency calls.',
    avatar: '',
  },
  {
    name: 'Priya Sharma',
    role: 'Community Watch Leader',
    content: 'The real-time alerts have empowered our community to be more vigilant. We feel safer knowing that we're working together with law enforcement.',
    avatar: '',
  },
  {
    name: 'Arun Patel',
    role: 'Urban Safety Researcher',
    content: 'The predictive analytics capabilities are impressive. I've observed firsthand how accurate the crime forecasting can be in identifying potential hotspots.',
    avatar: '',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 rounded-full text-primary mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Law Enforcement and Communities
          </h2>
          <p className="text-muted-foreground">
            Hear from the people who have experienced the impact of CrimeSpot in their communities and professional work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-8 relative">
                <Quote className="absolute text-primary/10 h-20 w-20 -top-2 -left-2 rotate-180" />
                
                <p className="text-gray-700 mb-6 relative z-10">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.name.split(' ').map(name => name[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
