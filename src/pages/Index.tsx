import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { LanguageSwitcher, Language } from '@/components/LanguageSwitcher';
import { translations } from '@/lib/translations';
import { 
  Mic, 
  BookOpen, 
  CheckCircle, 
  MessageCircle, 
  Brain, 
  BarChart3,
  ArrowRight,
  Sparkles 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];
  const navigate = useNavigate();

  const features = [
    {
      icon: Mic,
      title: t.features.transcription.title,
      description: t.features.transcription.description,
      color: 'text-primary',
    },
    {
      icon: BookOpen,
      title: t.features.structure.title,
      description: t.features.structure.description,
      color: 'text-secondary',
    },
    {
      icon: CheckCircle,
      title: t.features.compliance.title,
      description: t.features.compliance.description,
      color: 'text-accent',
    },
    {
      icon: MessageCircle,
      title: t.features.interaction.title,
      description: t.features.interaction.description,
      color: 'text-primary',
    },
    {
      icon: Brain,
      title: t.features.adaptive.title,
      description: t.features.adaptive.description,
      color: 'text-secondary',
    },
    {
      icon: BarChart3,
      title: t.features.analytics.title,
      description: t.features.analytics.description,
      color: 'text-accent',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                LessonAI
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                {t.nav.features}
              </a>
              <Button 
                variant="ghost" 
                onClick={() => navigate('/dashboard')}
              >
                {t.nav.dashboard}
              </Button>
              <LanguageSwitcher onLanguageChange={setLanguage} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="h-4 w-4" />
              {t.hero.subtitle}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              {t.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Button 
                size="lg" 
                className="text-lg gap-2 shadow-glow"
                onClick={() => navigate('/dashboard')}
              >
                {t.hero.cta}
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                {t.hero.demo}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.features.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
              >
                <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Teaching?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of educators using AI to enhance their lessons.
            </p>
            <Button 
              size="lg" 
              className="text-lg gap-2 shadow-glow"
              onClick={() => navigate('/dashboard')}
            >
              {t.hero.cta}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 LessonAI. Empowering educators worldwide.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
