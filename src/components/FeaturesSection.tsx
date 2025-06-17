import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Brain, FileText, BarChart3, Calendar, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'Prakriti Profiler',
      description: 'AI-powered dosha analysis through adaptive questionnaires and optional image analysis for accurate constitution assessment.',
      color: 'bg-ayurveda-sage/10 text-ayurveda-sage',
      details: [
        'Adaptive AI questionnaire (React, TypeScript)',
        'Optional face/image analysis (future: ML integration)',
        'Dosha scoring logic (custom hooks, utils)',
        'User-friendly UI (Shadcn UI, Tailwind CSS)'
      ]
    },
    {
      icon: FileText,
      title: 'Diagnosis Upload',
      description: 'Upload prescriptions and test reports. Our OCR + NLP technology provides Ayurvedic insights alongside clinical analysis.',
      color: 'bg-ayurveda-sand/20 text-ayurveda-earth',
      details: [
        'File upload (Supabase Storage)',
        'OCR & NLP for text extraction (Supabase Edge Functions, future: AI API)',
        'Secure data handling (Supabase Auth)',
        'Report insights (custom React components)'
      ]
    },
    {
      icon: BarChart3,
      title: 'Lifestyle Graph',
      description: 'Track sleep, work, diet, mood, and cycles. Visualize your wellness alignment with interactive lifestyle analytics.',
      color: 'bg-ayurveda-rose/20 text-ayurveda-earth',
      details: [
        'Daily/weekly trackers (React state, hooks)',
        'Data visualization (Recharts or Chart.js)',
        'Analytics dashboard (Shadcn UI Cards)',
        'Sync with user profile (Supabase DB)'
      ]
    },
    {
      icon: Calendar,
      title: 'AyuPlan Generator',
      description: 'Get personalized wellness plans with diet, herbs, yoga, and mental care routines. Download as PDF for easy access.',
      color: 'bg-ayurveda-leaf/10 text-ayurveda-leaf',
      details: [
        'Personalized plan algorithm (TypeScript logic)',
        'PDF export (jsPDF or similar)',
        'Dynamic recommendations (AI/ML ready)',
        'Download/share options'
      ]
    },
    {
      icon: Leaf,
      title: 'AyurGPT Companion',
      description: '24/7 Ayurvedic AI assistant for dosha questions, food advice, routine suggestions, and daily wellness guidance.',
      color: 'bg-primary/10 text-primary',
      details: [
        '24/7 chat (OpenAI API or custom LLM)',
        'Contextual Q&A (React Query, Supabase)',
        'Food/routine suggestions (knowledge base)',
        'Mobile-friendly chat UI'
      ]
    },
    {
      icon: Sparkles,
      title: 'Remedy Recommender',
      description: 'Instantly get AI-curated herbal, dietary, and lifestyle remedies tailored to your unique health profile and goals.',
      color: 'bg-ayurveda-sand/10 text-ayurveda-rose',
      details: [
        'AI-powered remedy engine (future: LLM integration)',
        'Herbal, dietary, lifestyle suggestions',
        'User feedback loop (Supabase DB)',
        'Quick tips & warnings'
      ]
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-ayurveda-ivory/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Ayurveda AI Synergy Suite</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform combines ancient Ayurvedic wisdom with cutting-edge AI technology to provide personalized wellness solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-lg transition-all duration-300 border-0 ayurveda-shadow bg-background/80 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="pt-4">
                    <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-ayurveda-sage rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Backed by 5000+ years of Ayurvedic wisdom</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
