
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface UXProject {
  id: string;
  title: string;
  embedUrl: string;
}

const UXUIProjects: React.FC = () => {
  const [isLoading, setIsLoading] = useState<{[key: string]: boolean}>({
    '1': true,
    '2': true,
    '3': true,
    '4': true,
  });

  const projects: UXProject[] = [
    {
      id: '1',
      title: "Proyecto 1",
      embedUrl: "https://www.behance.net/embed/project/135501129?ilo0=1"
    },
    {
      id: '2',
      title: "Proyecto 2",
      embedUrl: "https://www.behance.net/embed/project/112299391?ilo0=1"
    },
    {
      id: '3',
      title: "Proyecto 3",
      embedUrl: "https://www.behance.net/embed/project/111811895?ilo0=1"
    },
    {
      id: '4',
      title: "Proyecto 4",
      embedUrl: "https://www.behance.net/embed/project/101787533?ilo0=1"
    }
  ];

  const handleIframeLoad = (id: string) => {
    setIsLoading(prev => ({...prev, [id]: false}));
  };

  return (
    <section id="uxui" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Proyectos de UX/UI</h2>
        
        <Tabs defaultValue="grid" className="w-full mt-8">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="grid">Vista Cuadrícula</TabsTrigger>
              <TabsTrigger value="focus">Vista Detallada</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="grid" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="relative w-full aspect-video shadow-md ux-ui-project rounded-lg overflow-hidden">
                  {isLoading[project.id] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                      <div className="animate-pulse text-primary text-sm">Cargando proyecto...</div>
                    </div>
                  )}
                  <iframe 
                    src={project.embedUrl}
                    className="w-full h-full border-0"
                    onLoad={() => handleIframeLoad(project.id)}
                    title={`UX/UI Project ${project.id}`}
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="focus">
            <div className="space-y-8">
              {projects.map((project) => (
                <div key={project.id} className="w-full mx-auto max-w-4xl aspect-video shadow-md rounded-lg overflow-hidden">
                  {isLoading[project.id] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                      <div className="animate-pulse text-primary text-sm">Cargando proyecto...</div>
                    </div>
                  )}
                  <iframe 
                    src={project.embedUrl}
                    className="w-full h-full border-0"
                    onLoad={() => handleIframeLoad(project.id)}
                    title={`UX/UI Project ${project.id}`}
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default UXUIProjects;
