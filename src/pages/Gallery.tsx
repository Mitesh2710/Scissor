import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import servicesImage from "@/assets/services-image.jpg";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      image: gallery1,
      title: "Hair Transformation",
      category: "hair",
      description: "Complete makeover with cut and color"
    },
    {
      id: 2,
      image: gallery2,
      title: "Color Highlights",
      category: "hair",
      description: "Stunning balayage technique"
    },
    {
      id: 3,
      image: servicesImage,
      title: "Bridal Styling",
      category: "styling",
      description: "Elegant wedding day look"
    },
    {
      id: 4,
      image: gallery1,
      title: "Modern Cut",
      category: "hair",
      description: "Contemporary layered style"
    },
    {
      id: 5,
      image: gallery2,
      title: "Color Correction",
      category: "hair",
      description: "Professional color restoration"
    },
    {
      id: 6,
      image: servicesImage,
      title: "Facial Treatment",
      category: "beauty",
      description: "Rejuvenating skincare service"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'hair', label: 'Hair' },
    { id: 'styling', label: 'Styling' },
    { id: 'beauty', label: 'Beauty' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Our Gallery" 
        description="Discover the transformations and artistry that define our work" 
      />

      {/* Gallery Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "luxury" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="hero" className="transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Details
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in">
            <h3 className="text-3xl font-bold text-primary mb-4">Ready for Your Transformation?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your appointment today and let our expert stylists create your perfect look
            </p>
            <Link to="/appointment">
              <Button variant="luxury" size="lg">
                Book Your Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <footer className="bg-secondary text-center py-6 mt-12">
        © 2025 Scissor Salon. All rights reserved.
      </footer>
    </div>
  );
};

export default Gallery;