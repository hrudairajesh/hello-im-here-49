import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cpu, Wrench, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: ["Python", "MATLAB", "C", "Arduino", "Assembly", "Verilog", "Web Scraping", "API"],
      color: "text-primary"
    },
    {
      icon: Cpu,
      title: "Engineering Software",
      skills: ["CYMEdist", "PVsyst", "ArcGIS", "Power BI", "NI Multisim", "LTSPICE", "PCB Design"],
      color: "text-accent"
    },
    {
      icon: Wrench,
      title: "Lab & Hardware",
      skills: ["Soldering", "Oscilloscope", "DMM", "FPGA", "PCBs", "Circuit Analysis", "Drill Press"],
      color: "text-primary"
    },
    {
      icon: Lightbulb,
      title: "Design & CAD",
      skills: ["Fusion 360", "SolidWorks", "Microsoft Office", "Machine Learning", "GIS Analysis"],
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
              From power systems analysis to software development and leadership
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
                  Core Strengths
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Combining electrical engineering expertise with software development skills, 
                  I excel at data analysis, project management, and technical communication. 
                  Currently focused on power systems, renewable energy, and digital transformation.
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