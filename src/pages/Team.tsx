import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import stylist1 from "@/assets/stylist-1.jpg";
import stylist2 from "@/assets/stylist-2.jpg";
import servicesImage from "@/assets/services-image.jpg";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Hair Stylist & Color Specialist",
      image: stylist1,
      experience: "12 Years",
      specialties: ["Hair Cutting", "Color Correction", "Balayage", "Bridal Styling"],
      bio: "Sarah is our lead stylist with over a decade of experience in creating stunning transformations. She specializes in modern cuts and innovative color techniques.",
      certifications: ["Redken Certified", "Balayage Expert", "Bridal Specialist"]
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Master Stylist & Texture Specialist",
      image: stylist2,
      experience: "10 Years",
      specialties: ["Men's Grooming", "Texture Work", "Precision Cuts", "Beard Styling"],
      bio: "Michael brings precision and artistry to every cut. His expertise in men's grooming and texture work has made him one of our most sought-after stylists.",
      certifications: ["Aveda Certified", "Men's Grooming Expert", "Texture Specialist"]
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Beauty Specialist & Aesthetician",
      image: servicesImage,
      experience: "8 Years",
      specialties: ["Facial Treatments", "Eyebrow Design", "Makeup Artistry", "Skincare"],
      bio: "Emma's passion for skincare and beauty shines through in every treatment. She creates personalized beauty experiences for each client.",
      certifications: ["Licensed Aesthetician", "Makeup Artist", "Skincare Specialist"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Meet Our Team" 
        description="Our talented professionals are dedicated to bringing your vision to life" 
      />

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
                </div>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
                    <p className="text-gold font-semibold mb-2">{member.role}</p>
                    <div className="inline-block bg-secondary px-3 py-1 rounded-full text-sm text-muted-foreground">
                      {member.experience} Experience
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty) => (
                        <span key={specialty} className="bg-gold/10 text-gold px-2 py-1 rounded text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-2">Certifications:</h4>
                    <ul className="space-y-1">
                      {member.certifications.map((cert) => (
                        <li key={cert} className="text-muted-foreground text-sm flex items-center">
                          <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="luxury" className="w-full">
                    Book with {member.name.split(' ')[0]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Stats */}
          <div className="mt-20 bg-secondary rounded-lg p-8 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-4">Why Choose Our Team?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our stylists are not just professionals, they're artists dedicated to your beauty journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gold mb-2">30+</div>
                <div className="text-muted-foreground">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold mb-2">500+</div>
                <div className="text-muted-foreground">Monthly Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold mb-2">15+</div>
                <div className="text-muted-foreground">Professional Certifications</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
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

export default Team;