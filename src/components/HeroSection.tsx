import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Heart, Leaf } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  };

  const handleTakeQuiz = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-ayurveda-ivory via-background to-ayurveda-rose/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center justify-center text-center space-y-8 animate-slide-in-left min-h-[60vh]">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="gradient-text">Heal Naturally</span>
                <br />
                <span className="text-foreground">with AI-powered</span>
                <br />
                <span className="gradient-text">Ayurveda</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                Discover your unique constitution, get personalized wellness plans, and transform your health naturally with ancient wisdom and modern AI.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-center w-full">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 group"
                onClick={handleTakeQuiz}
              >
                Take Prakriti Quiz
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={handleGetStarted}
              >
                Start Your Plan
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 justify-center text-center w-full">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Users Healed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-ayurveda-sage/20 to-ayurveda-rose/20 rounded-3xl p-8 ayurveda-shadow">
                <div className="grid grid-cols-2 gap-6">
                  {/* Feature Cards */}
                  <div className="bg-background rounded-2xl p-6 text-center animate-float">
                    <Leaf className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-sm">Dosha Analysis</h3>
                    <p className="text-xs text-muted-foreground mt-1">AI-powered constitution assessment</p>
                  </div>
                  <div className="bg-background rounded-2xl p-6 text-center animate-float" style={{ animationDelay: '0.5s' }}>
                    <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-sm">Personalized Plans</h3>
                    <p className="text-xs text-muted-foreground mt-1">Custom wellness routines</p>
                  </div>
                  <div className="bg-background rounded-2xl p-6 text-center animate-float" style={{ animationDelay: '1s' }}>
                    <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-sm">AyurGPT</h3>
                    <p className="text-xs text-muted-foreground mt-1">24/7 Ayurvedic guidance</p>
                  </div>
                  <div className="bg-background rounded-2xl p-6 text-center animate-float" style={{ animationDelay: '1.5s' }}>
                    <ArrowRight className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-sm">Track Progress</h3>
                    <p className="text-xs text-muted-foreground mt-1">Monitor your wellness journey</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-ayurveda-rose/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
