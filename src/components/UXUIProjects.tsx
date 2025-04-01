
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const UXUIProjects: React.FC = () => {
  const projects = [
    {
      id: 135501129,
      title: "Rediseño Beek",
      image: "https://mir-s3-cdn-cf.behance.net/projects/808/8f1357135501129.Y3JvcCw5OTksNzgyLDAsMTA4.png",
      link: "https://www.behance.net/gallery/135501129/Beek-Rediseo"
    },
    {
      id: 112299391,
      title: "Rocket Pizza",
      image: "https://mir-s3-cdn-cf.behance.net/projects/808/52c1b0112299391.Y3JvcCwxMDgwLDg0NCwwLDExNw.png",
      link: "https://www.behance.net/gallery/112299391/Rocket-pizza-UX-Case-Study"
    },
    {
      id: 111811895,
      title: "Proyecto Final - Life Travel",
      image: "https://mir-s3-cdn-cf.behance.net/projects/808/c0c86c111811895.Y3JvcCwxMDgwLDg0NCwwLDExNw.png",
      link: "https://www.behance.net/gallery/111811895/Life-Travel-app-Proyecto-Final-UX"
    },
    {
      id: 101787533,
      title: "ComuApp - MetComU",
      image: "https://mir-s3-cdn-cf.behance.net/projects/808/8809cc101787533.Y3JvcCwxMTk4LDkzNyw5MSwxOTM.png",
      link: "https://www.behance.net/gallery/101787533/ComuApp-Met-ComU-UXUI-2020"
    }
  ];

  return (
    <section id="uxui" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Proyectos de UX/UI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-0 shadow-md ux-ui-project">
              <CardContent className="p-0">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover rounded"
                  />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UXUIProjects;
