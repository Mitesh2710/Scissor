import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jennifer Martinez",
      service: "Hair Color & Cut",
      rating: 5,
      text: "Sarah transformed my hair completely! I've never felt more confident. The salon atmosphere is so luxurious and relaxing. Highly recommend!",
      location: "Downtown"
    },
    {
      id: 2,
      name: "David Thompson",
      service: "Men's Grooming Package",
      rating: 5,
      text: "Michael is a master at his craft. The attention to detail and professional service is unmatched. This is now my go-to salon for all grooming needs.",
      location: "Midtown"
    },
    {
      id: 3,
      name: "Lisa Wang",
      service: "Bridal Package",
      rating: 5,
      text: "Emma made my wedding day perfect! The bridal package was exactly what I needed. Every detail was perfect and I felt like a princess.",
      location: "West End"
    },
    {
      id: 4,
      name: "Robert Johnson",
      service: "Facial Treatment",
      rating: 5,
      text: "The facial treatment was incredibly relaxing and my skin looks amazing. The products they use are top quality and the results speak for themselves.",
      location: "Downtown"
    },
    {
      id: 5,
      name: "Maria Garcia",
      service: "Nail Services",
      rating: 5,
      text: "Best manicure and pedicure I've ever had! The nail art was stunning and lasted for weeks. The staff is so talented and friendly.",
      location: "Uptown"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-gold' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Read testimonials from our satisfied clients who trust us with their beauty needs
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative mb-12">
          <Card className="max-w-4xl mx-auto hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex flex-col items-center">
                <h4 className="text-lg font-semibold text-primary mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-muted-foreground mb-1">
                  {testimonials[currentTestimonial].service}
                </p>
                <p className="text-sm text-gold">
                  {testimonials[currentTestimonial].location} Location
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentTestimonial === index ? 'bg-gold' : 'bg-muted'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-background rounded-lg p-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">4.9</div>
              <div className="text-muted-foreground">Average Rating</div>
              <div className="flex justify-center mt-2">
                {renderStars(5)}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">1,200+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">98%</div>
              <div className="text-muted-foreground">Would Recommend</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">15+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-4">Join Our Happy Clients</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experience the same exceptional service that our clients rave about
          </p>
          <Link to="/appointment">
            <Button variant="luxury" size="lg">
              Book Your Appointment Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;