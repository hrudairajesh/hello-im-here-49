import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Database, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Angular"],
      color: "text-primary"
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "Django"],
      color: "text-accent"
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: ["Figma", "Adobe XD", "Responsive Design", "User Research", "Prototyping"],
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Testing", "Agile"],
      color: "text-accent"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern digital solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="animate-scale-in hover:shadow-lg transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  boxShadow: 'var(--shadow-soft)'
                }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Additional skills summary */}
          <div className="mt-16 text-center animate-fade-in-up">
            <Card className="inline-block max-w-2xl" style={{ boxShadow: 'var(--shadow-elevated)' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-4 gradient-text">
                  Always Learning
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                  languages, and methodologies to stay at the forefront of web development. 
                  Currently diving deep into AI/ML integration and Web3 technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;