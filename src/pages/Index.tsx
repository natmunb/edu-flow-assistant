import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import {
  Mic,
  BookOpen,
  CheckCircle,
  MessageCircle,
  Brain,
  BarChart3,
  ArrowRight,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

import heroBg from "@/assets/Hero.png";
import logo from "@/assets/logo_thinking.png";

const Index = () => {
  const { t, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const features = [
    {
      icon: Mic,
      title: t.features.transcription.title,
      description: t.features.transcription.description,
      color: "text-primary",
    },
    {
      icon: BookOpen,
      title: t.features.structure.title,
      description: t.features.structure.description,
      color: "text-secondary",
    },
    {
      icon: CheckCircle,
      title: t.features.compliance.title,
      description: t.features.compliance.description,
      color: "text-accent",
    },
    {
      icon: MessageCircle,
      title: t.features.interaction.title,
      description: t.features.interaction.description,
      color: "text-primary",
    },
    {
      icon: Brain,
      title: t.features.adaptive.title,
      description: t.features.adaptive.description,
      color: "text-secondary",
    },
    {
      icon: BarChart3,
      title: t.features.analytics.title,
      description: t.features.analytics.description,
      color: "text-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          {/* LOGO + TEXTO */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="ThinkForge logo"
              className="h-7 w-7 object-contain"
              loading="lazy"
            />
            <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-hero bg-clip-text text-transparent whitespace-nowrap">
              ThinkForge
            </span>
          </div>

          {/* BOTÃO HAMBÚRGUER (MOBILE) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground hover:text-primary transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t.nav.features}
            </a>

            <Button
              variant="ghost"
              onClick={() => navigate("/subscribe")}
              className="hover:text-primary transition-colors"
            >
              {t.nav.subscribe || "Join Waitlist"}
            </Button>

            <LanguageSwitcher />
          </div>
        </div>

        {/* MENU MOBILE */}
        <div
          className={`md:hidden fixed top-[72px] left-0 w-full bg-background/95 border-t border-border flex flex-col items-center gap-5 py-6 transition-all duration-300 ease-in-out ${
            menuOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-5 opacity-0 invisible"
          }`}
        >
          <a
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t.nav.features}
          </a>

          <Button
            variant="ghost"
            onClick={() => {
              navigate("/subscribe");
              setMenuOpen(false);
            }}
            className="hover:text-primary transition-colors"
          >
            {t.nav.subscribe || "Join Waitlist"}
          </Button>

          <LanguageSwitcher />
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden py-20 md:py-32 bg-cover bg-center bg-no-repeat w-full max-w-[100vw]"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Overlay escuro para contraste */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="h-4 w-4" />
              {t.hero.subtitle}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              {t.hero.title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Button
                size="lg"
                className="text-lg gap-2 shadow-glow bg-primary text-white hover:bg-primary/90"
                onClick={() => navigate("/dashboard")}
              >
                Demo Test
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg bg-white/20 text-white border-white/40 hover:bg-white/30"
                onClick={() => navigate("/subscribe")}
              >
                {t.hero.cta}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
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

      {/* CTA SECTION */}
      <section className="py-20 relative overflow-hidden" id="demo">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Teaching?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Join thousands of educators using AI to enhance their lessons.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-border bg-muted/20 text-center">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground text-sm sm:text-base">
            &copy; 2025 ThinkForge. Empowering educators worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;