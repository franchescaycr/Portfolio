
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensaje enviado",
        description: "¡Gracias por contactarme! Te responderé pronto.",
      });
      setFormState({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Contacto</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-center">¡Hablemos!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="contact-item">
                <Mail className="text-primary" size={20} />
                <span>Email: </span>
                <a 
                  href="mailto:franchescaycarrasco@gmail.com" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  franchescaycarrasco@gmail.com
                </a>
              </div>
              
              <div className="contact-item">
                <Linkedin className="text-primary" size={20} />
                <span>LinkedIn: </span>
                <a 
                  href="https://www.linkedin.com/in/franchesca-carrasco/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Mi Perfil
                </a>
              </div>
              
              <div className="contact-item">
                <Github className="text-primary" size={20} />
                <span>GitHub: </span>
                <a 
                  href="https://github.com/franchescaycr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Mi GitHub
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-center">Envíame un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nombre
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Mensaje
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="¿En qué puedo ayudarte?"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Enviar mensaje
                      <Send size={16} className="ml-2" />
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
