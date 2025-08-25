import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import servicesImage from "@/assets/services-image.jpg";

const Services = () => {
  const services = [
    {
      title: "Hair",
      description: "Professional cuts, styling, and color treatments",
      features: ["Precision Cuts", "Color Treatments", "Styling", "Hair Treatments"]
    },
    {
      title: "Beauty",
      description: "Complete beauty services for face and body",
      features: ["Facial Treatments", "Eyebrow Shaping", "Makeup", "Skin Care"]
    },
    {
      title: "Nails",
      description: "Manicure and pedicure services",
      features: ["Manicures", "Pedicures", "Nail Art", "Gel Polish"]
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Your Palace of Beauty
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience luxury and elegance with our comprehensive beauty services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {services.map((service, index) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow duration-300 animate-slide-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-foreground">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services Image */}
          <div className="relative animate-fade-in">
            <img 
              src={servicesImage} 
              alt="Professional salon services" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-luxury opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;