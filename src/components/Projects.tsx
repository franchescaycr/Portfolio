
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Registro de Medidas',
      description: 'Una aplicación que permite registrar y hacer seguimiento de medidas corporales con interfaz intuitiva.',
      link: 'https://github.com/franchescaycr/Registro_de_medidas'
    },
    {
      title: 'Mokepon',
      description: 'Juego interactivo inspirado en Pokemon, desarrollado con JavaScript y HTML5.',
      link: 'https://github.com/franchescaycr/Juego_Mokepon'
    },
    {
      title: 'Piedra, Papel y Tijera',
      description: 'Implementación del clásico juego con interfaz moderna y animaciones.',
      link: 'https://github.com/franchescaycr/Juego_piedra_papel_tijera'
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <Card key={index} className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Github size={18} />
                  <span>Ver Proyecto</span>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
