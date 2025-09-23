import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Electrical Engineering Student & Co-founder building innovative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-up">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm an Electrical Engineering student at UBC with a passion for power systems, 
                renewable energy, and digital solutions. As Co-founder of VibeOps, I lead a 
                startup delivering GIS-driven web platforms and engineering software tools.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Currently serving as IEEE UBC Student Branch Chair, I've organized career fairs, 
                technical workshops, and represented the branch at national conferences. My experience 
                spans from BC Hydro distribution planning to solar energy analysis in the Philippines.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['Leadership', 'Engineering Design', 'Data Analysis', 'Project Management'].map((trait) => (
                  <span 
                    key={trait}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            
            <Card className="animate-scale-in" style={{ boxShadow: 'var(--shadow-elevated)' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6 gradient-text">
                  Quick Facts
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">Vancouver, BC</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Education</span>
                    <span className="font-medium">UBC Electrical Engineering</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Focus</span>
                    <span className="font-medium">Power Systems & Software</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Role</span>
                    <span className="font-medium text-accent">IEEE Chair & Co-founder</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;