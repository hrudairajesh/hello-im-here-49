import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hrudairajesh@gmail.com",
      href: "mailto:hrudairajesh@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (778) 893-2102",
      href: "tel:+17788932102",
      color: "text-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vancouver, BC",
      href: "#",
      color: "text-primary"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/hrudai-rajesh",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hrudai-rajesh-24793125b",
      color: "hover:text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="animate-fade-in-up">
              <Card style={{ boxShadow: 'var(--shadow-elevated)' }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-semibold mb-6 gradient-text">
                    Get In Touch
                  </h3>
                  
                  <div className="space-y-6">
                    {contactMethods.map((method) => (
                      <a
                        key={method.label}
                        href={method.href}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                      >
                        <method.icon className={`h-5 w-5 ${method.color} group-hover:scale-110 transition-transform`} />
                        <div>
                          <p className="font-medium">{method.label}</p>
                          <p className="text-muted-foreground">{method.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => (
                        <Button
                          key={social.label}
                          variant="outline"
                          size="sm"
                          asChild
                          className={`${social.color} transition-colors`}
                        >
                          <a href={social.href} target="_blank" rel="noopener noreferrer">
                            <social.icon className="h-4 w-4" />
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Call to Action */}
            <div className="animate-scale-in flex flex-col justify-center">
              <Card style={{ boxShadow: 'var(--shadow-elevated)' }}>
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <Send className="h-12 w-12 mx-auto text-primary mb-4" />
                    <h3 className="text-2xl font-serif font-semibold mb-4">
                      Ready to Start?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Whether you have a project in mind or just want to chat about 
                      technology, I'd love to hear from you. Let's create something 
                      amazing together!
                    </p>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                    style={{ boxShadow: 'var(--shadow-soft)' }}
                    asChild
                  >
                    <a href="mailto:hrudairajesh@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Send a Message
                    </a>
                  </Button>
                  
                  <p className="text-sm text-muted-foreground mt-4">
                    Usually responds within 24 hours
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;