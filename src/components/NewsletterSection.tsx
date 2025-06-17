
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Leaf, Bell, Gift } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to Aarogya Vatika! 🌿",
        description: "You'll receive weekly wellness tips and exclusive Ayurvedic insights.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  const benefits = [
    {
      icon: Leaf,
      title: 'Weekly Wellness Tips',
      description: 'Ayurvedic insights for modern living'
    },
    {
      icon: Bell,
      title: 'Early Access',
      description: 'Be first to try new features'
    },
    {
      icon: Gift,
      title: 'Exclusive Content',
      description: 'Special guides and recipes'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-ayurveda-sage/10 via-primary/5 to-ayurveda-rose/10">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-0 ayurveda-shadow bg-background/90 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-primary">
                    <Mail className="h-5 w-5" />
                    <span className="text-sm font-medium uppercase tracking-wide">Newsletter</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    <span className="gradient-text">Join Our Wellness Community</span>
                  </h3>
                  <p className="text-muted-foreground">
                    Get personalized Ayurvedic tips, seasonal wellness guides, and early access to new features. Join 25,000+ people on their wellness journey.
                  </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={benefit.title} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <benefit.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{benefit.title}</h4>
                        <p className="text-xs text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Newsletter Form */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-ayurveda-ivory to-ayurveda-rose/20 rounded-2xl p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-background border-primary/20 focus:border-primary rounded-lg"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-3"
                    >
                      {isLoading ? 'Subscribing...' : 'Join Wellness Community'}
                    </Button>
                  </form>
                  
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    ✨ Free to join • 📧 Weekly emails • 🚫 Unsubscribe anytime
                  </p>
                </div>

                {/* Social Proof */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-1">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 bg-gradient-to-br from-ayurveda-sage to-ayurveda-earth rounded-full border-2 border-background"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium ml-3">25,000+ subscribers</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Trusted by wellness enthusiasts worldwide
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;
