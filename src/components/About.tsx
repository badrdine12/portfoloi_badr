import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "1+ Ans",
      description: "D'expérience",
    },
    {
      icon: GraduationCap,
      title: "Formation",
      description: "Technicien Spécialisé",
    },
    {
      icon: MapPin,
      title: "Localisation",
      description: "Mohammédia, Maroc",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-4">
              À Propos de Moi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Développeur Full-Stack passionné avec une expertise solide en développement web et mobile.
                J'ai travaillé sur des projets innovants dans le secteur industriel, notamment pour la digitalisation
                des processus de production, qualité et maintenance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ma stack principale comprend <span className="text-primary font-semibold">React.js</span>,{" "}
                <span className="text-primary font-semibold">React Native</span> pour le frontend et mobile,
                ainsi que <span className="text-secondary font-semibold">Laravel</span> et{" "}
                <span className="text-secondary font-semibold">Symfony</span> pour le backend.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Je suis constamment à la recherche de nouveaux défis techniques et j'aime créer des solutions
                qui ont un impact réel sur l'efficacité des entreprises.
              </p>
            </div>

            {/* Right Side - Highlight Cards */}
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="glass p-6 hover:scale-105 transition-all duration-300 border-gradient group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
