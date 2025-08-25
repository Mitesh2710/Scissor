import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Indulge in the Extraordinary
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              SCISSOR is one of the city's most sophisticated salon
              destinations, offering premium hair, beauty, and nail care
              services. With almost two decades of excellence, we have become a
              leader and benchmark in the beauty industry.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our expert stylists and beauty professionals are dedicated to
              providing personalized services that enhance your natural beauty
              and leave you feeling confident and radiant.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">20+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">10K+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
            </div>

            <Button asChild variant="luxury" size="lg">
              <Link to="/services">Discover More</Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-6 animate-fade-in">
            {[
              {
                title: "Expert Stylists",
                description:
                  "Our team consists of certified professionals with years of experience",
              },
              {
                title: "Premium Products",
                description:
                  "We use only the finest beauty products and equipment",
              },
              {
                title: "Personalized Service",
                description:
                  "Every treatment is tailored to your unique needs and preferences",
              },
              {
                title: "Relaxing Atmosphere",
                description:
                  "Enjoy a luxurious and comfortable environment during your visit",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="flex items-start space-x-4 p-6 bg-secondary rounded-lg hover:shadow-md transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
