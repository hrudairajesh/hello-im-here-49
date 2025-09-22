import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ background: 'var(--hero-gradient)' }}
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            <span className="block">Hello, I'm</span>
            <span className="gradient-text">Your Name</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            A passionate developer crafting beautiful digital experiences 
            with modern technologies and creative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              style={{ boxShadow: 'var(--shadow-soft)' }}
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/20 hover:bg-primary/5"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/20 hover:bg-primary/5"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;