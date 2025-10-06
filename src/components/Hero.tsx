import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Avatar */}
          <div className="inline-block animate-scale-in">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full border-gradient p-1 animate-glow-pulse">
              <img 
                src="/profile.jpg" 
                alt="Badr Eddine Binoua" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold animate-fade-in">
            <span className="text-gradient">Badr Eddine Binoua</span>
          </h1>

          {/* Title */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Développeur Full-Stack
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Passionné par la création d'applications web et mobiles innovantes avec React, React Native et Laravel.
            Spécialisé dans le développement d'expériences utilisateur fluides et performantes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform shadow-lg hover:shadow-glow"
              asChild
            >
              <a href="#contact">Me Contacter</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gradient hover:bg-card/80 hover:scale-105 transition-all"
              asChild
            >
              <a href="/CV_Badr_Eddine_Binoua.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Télécharger CV
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gradient hover:bg-card/80 hover:scale-105 transition-all"
              asChild
            >
              <a href="#experience">Voir Mon Parcours</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <a
              href="mailto:badrbinoua07@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-8 animate-bounce">
            <a href="#about" className="inline-block text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
