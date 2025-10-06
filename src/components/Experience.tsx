import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      period: "Janvier 2025 - Présent",
      role: "Développeur Full-Stack",
      company: "ALKENZ ELGHALI",
      location: "Maroc",
      description: [
        "Conception et développement d'applications mobiles pour le suivi de production industrielle avec React Native et Laravel",
        "Digitalisation des processus de qualité et maintenance via des applications mobiles innovantes",
        "Développement d'une plateforme web centralisée pour la consultation de données et génération de rapports (React.js + Laravel + MySQL)",
        "Collaboration avec les équipes métier pour optimiser les workflows et améliorer l'efficacité opérationnelle",
      ],
      technologies: ["React Native", "React.js", "Laravel", "MySQL"],
    },
    {
      period: "2023 - 2024",
      role: "Développeur Full-Stack (Stage)",
      company: "Cosumar",
      location: "Maroc",
      description: [
        "Conception et développement d'une application mobile intranet pour la gestion des commandes de repas",
        "Mise en place d'un système de notifications et gestion d'événements pour les employés",
        "Intégration d'un menu en ligne interactif et système de suivi des commandes en temps réel",
        "Optimisation de l'expérience utilisateur pour une adoption maximale par les employés",
      ],
      technologies: ["React Native", "PHP", "MySQL"],
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-4">
              Expériences Professionnelles
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-secondary" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative lg:flex ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary animate-glow-pulse" />

                  {/* Content Card */}
                  <div className="lg:w-1/2">
                    <Card className="glass p-6 border-gradient hover:scale-105 transition-all duration-300 group">
                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 mb-4">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                        <span>•</span>
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1.5">▹</span>
                            <span className="flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full text-foreground font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </div>

                  {/* Spacer for timeline */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
