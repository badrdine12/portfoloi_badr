import { Code2, Database, Globe, Layers, Server, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: ["React.js", "React Native", "JavaScript", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      icon: Server,
      title: "Backend",
      color: "from-purple-500 to-pink-500",
      skills: ["PHP", "Laravel", "Symfony", "Node.js", "RESTful APIs", "GraphQL"],
    },
    {
      icon: Database,
      title: "Bases de Données",
      color: "from-green-500 to-emerald-500",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Redis"],
    },
    {
      icon: Smartphone,
      title: "Mobile",
      color: "from-orange-500 to-red-500",
      skills: ["React Native", "Expo", "Mobile UI/UX", "Native Modules", "Push Notifications"],
    },
    {
      icon: Layers,
      title: "Méthodologies",
      color: "from-indigo-500 to-purple-500",
      skills: ["Agile", "Scrum", "MERISE", "UML", "Git", "CI/CD"],
    },
    {
      icon: Globe,
      title: "Langues",
      color: "from-yellow-500 to-orange-500",
      skills: ["Arabe (Natif)", "Français (Bon niveau)", "Anglais (Intermédiaire)"],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 bg-background-light/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-4">
              Compétences
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Une expertise complète en développement full-stack avec des technologies modernes
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="glass p-6 hover:scale-105 transition-all duration-300 group cursor-pointer border-gradient"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-20`}>
                    <category.icon className="w-8 h-8 text-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-gradient transition-all">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-muted/50 rounded-full text-foreground/80 hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 hover:text-foreground transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
