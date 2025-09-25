import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/hrudairajesh",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/hrudai-rajesh-24793125b/",
      color: "hover:text-primary"
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and description */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-serif font-bold gradient-text hover:opacity-80 transition-opacity mb-4 block"
            >
              Hrudai Rajesh
            </button>
            <p className="text-muted-foreground">
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="sm"
                asChild
                className={`${social.color} transition-colors border-border hover:border-primary/20`}
              >
                <a 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Hrudai Rajesh
            </p>
          </div>
        </div>

        {/* Back to top button */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <Button 
            variant="ghost" 
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;