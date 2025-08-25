import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";
import { services, packages } from "@/components/data/servicesData";

const Services = () => {

  const hairServices = services.filter(s => s.category === 'Hair');
  const beautyServices = services.filter(s => s.category === 'Beauty');
  const nailServices = services.filter(s => s.category === 'Nail');

  const serviceCategories = [
    { title: 'Hair Services', description: 'Professional cuts, styling, and color treatments', services: hairServices },
    { title: 'Beauty Services', description: 'Complete beauty services for face and body', services: beautyServices },
    { title: 'Nail Services', description: 'Manicure and pedicure services', services: nailServices },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Our Services" 
        description="Discover our comprehensive range of beauty and wellness services" 
      />

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Individual Services */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {serviceCategories.map((category, categoryIndex) => (
              <Card key={category.title} className="hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary mb-2">{category.title}</CardTitle>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.services.map((service, index) => (
                      <div key={service.name}>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-medium text-foreground">{service.name}</h4>
                          <span className="text-gold font-semibold">₹{service.priceINR}</span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-3">Duration: {service.durationMinutes} min</div>
                        {index < category.services.length - 1 && <Separator />}
                      </div>
                    ))}
                  </div>
                  <Button variant="luxury" className="w-full mt-6">
                    Book {category.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Packages Section */}
          <div className="bg-secondary rounded-lg p-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Special Packages</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Save more with our curated service packages designed for your special occasions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={pkg.id} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-in" style={{animationDelay: `${index * 0.1}s`}}>
                  {pkg.savingsINR && (
                    <div className="absolute top-4 right-4 bg-gold text-gold-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Save ₹{pkg.savingsINR}
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{pkg.name}</CardTitle>
                    <p className="text-muted-foreground">{pkg.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Includes:</h4>
                      <ul className="space-y-2">
                        {pkg.services.map((service) => (
                          <li key={service} className="flex items-center text-muted-foreground">
                            <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4 mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-muted-foreground line-through">Regular: ₹{pkg.regularPriceINR}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gold">Package: ₹{pkg.packagePriceINR}</span>
                      </div>
                    </div>

                    <Button asChild variant="luxury" className="w-full">
                      <Link to="/appointment">Book Package</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in">
            <h3 className="text-3xl font-bold text-primary mb-4">Ready to Book?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to schedule your appointment or consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="luxury" size="lg">
                <Link to="/appointment">Book Online</Link>
              </Button>
              <Button variant="hero" size="lg">
                Call (+91) 92227 11143
              </Button>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-secondary text-center py-6 mt-12">
        © 2025 Scissor Salon. All rights reserved.
      </footer>
    </div>
  );
};

export default Services;