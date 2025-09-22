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
              Passionate about creating meaningful digital experiences through code
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-up">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a dedicated developer with a passion for creating innovative solutions 
                that make a difference. With expertise in modern web technologies, I focus 
                on building applications that are not only functional but also beautiful 
                and user-friendly.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with the 
                developer community.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['Problem Solving', 'Creative Thinking', 'Team Collaboration', 'Continuous Learning'].map((trait) => (
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
                    <span className="font-medium">Your City, Country</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="font-medium">X+ Years</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Focus</span>
                    <span className="font-medium">Full-Stack Development</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Availability</span>
                    <span className="font-medium text-accent">Open to opportunities</span>
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