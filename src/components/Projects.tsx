
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Github, ExternalLink, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  link: string;
  tags?: string[];
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const projects: Project[] = [
    {
      title: 'Registro de Medidas',
      description: 'Una aplicación que permite registrar y hacer seguimiento de medidas corporales con interfaz intuitiva.',
      link: 'https://github.com/franchescaycr/Registro_de_medidas',
      tags: ['JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Mokepon',
      description: 'Juego interactivo inspirado en Pokemon, desarrollado con JavaScript y HTML5.',
      link: 'https://github.com/franchescaycr/Juego_Mokepon',
      tags: ['JavaScript', 'HTML5', 'Game']
    },
    {
      title: 'Piedra, Papel y Tijera',
      description: 'Implementación del clásico juego con interfaz moderna y animaciones.',
      link: 'https://github.com/franchescaycr/Juego_piedra_papel_tijera',
      tags: ['JavaScript', 'CSS', 'Game']
    }
  ];

  // Get unique tags
  const allTags = [...new Set(projects.flatMap(project => project.tags || []))];
  
  const filteredProjects = activeFilter 
    ? projects.filter(project => project.tags?.includes(activeFilter))
    : projects;

  return (
    <section id="projects" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Proyectos</h2>
        
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          <Button 
            variant={!activeFilter ? "default" : "outline"} 
            size="sm" 
            onClick={() => setActiveFilter(null)}
            className="rounded-full"
          >
            Todos
          </Button>
          
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={activeFilter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(tag)}
              className="rounded-full"
            >
              {tag}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="h-full transform hover:-translate-y-1 transition-all duration-300 hover:shadow-md"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags?.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Github size={18} />
                  <span>Ver Código</span>
                </a>
                <Button size="sm" variant="ghost" className="rounded-full" asChild>
                  <a
                    href={project.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Search size={16} />
                    <span>Detalles</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
