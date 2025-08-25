import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for joining our newsletter. You'll receive beauty tips and exclusive offers.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-luxury">
      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden animate-fade-in">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Stay in the Loop
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Subscribe to our newsletter for exclusive beauty tips, special offers, 
                and be the first to know about our latest services and promotions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" variant="luxury" className="whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
            </form>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Weekly Beauty Tips
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Exclusive Offers
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No Spam Ever
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our privacy policy. Unsubscribe at any time.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;