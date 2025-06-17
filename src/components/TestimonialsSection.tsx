
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=100&h=100&fit=crop&crop=face',
      content: 'Aarogya Vatika transformed my digestive health completely. The personalized Pitta-balancing plan worked like magic. I feel more energetic and balanced than ever before.',
      rating: 5,
      dosha: 'Pitta Dominant'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'The AyurGPT chatbot is incredible! It helped me understand my Vata imbalance and suggested simple lifestyle changes that made a huge difference in my anxiety levels.',
      rating: 5,
      dosha: 'Vata Dominant'
    },
    {
      name: 'Dr. Meera Patel',
      role: 'Physician',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face',
      content: 'As a medical professional, I appreciate how this platform bridges modern healthcare with traditional Ayurveda. The diagnostic insights are remarkably accurate.',
      rating: 5,
      dosha: 'Kapha Dominant'
    },
    {
      name: 'Anjali Gupta',
      role: 'Yoga Instructor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'The lifestyle tracking feature helped me identify patterns I never noticed. The personalized yoga sequences based on my dosha have enhanced my practice significantly.',
      rating: 5,
      dosha: 'Tri-Doshic'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-ayurveda-ivory via-ayurveda-rose/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Healing Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how thousands have transformed their health with personalized Ayurvedic wisdom.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <Card className="bg-background/80 backdrop-blur-sm border-0 ayurveda-shadow">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Profile Section */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-20 h-20 rounded-full mx-auto md:mx-0 mb-4 object-cover"
                  />
                  <h4 className="font-semibold text-lg">{testimonials[currentSlide].name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonials[currentSlide].role}</p>
                  <div className="inline-flex items-center mt-2 px-3 py-1 bg-primary/10 rounded-full">
                    <span className="text-xs text-primary font-medium">{testimonials[currentSlide].dosha}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-6">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <blockquote className="text-lg md:text-xl leading-relaxed text-foreground">
                    "{testimonials[currentSlide].content}"
                  </blockquote>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-primary scale-125' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">15K+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Certified Vaidyas</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">4.9★</div>
            <div className="text-sm text-muted-foreground">App Store Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
