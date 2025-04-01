
import React from "react";

const UXUIProjects: React.FC = () => {
  const projectEmbeds = [
    "https://www.behance.net/embed/project/135501129?ilo0=1",
    "https://www.behance.net/embed/project/112299391?ilo0=1",
    "https://www.behance.net/embed/project/111811895?ilo0=1",
    "https://www.behance.net/embed/project/101787533?ilo0=1"
  ];

  return (
    <section id="uxui" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Proyectos de UX/UI</h2>
        <div className="ux-ui-container grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {projectEmbeds.map((embed, index) => (
            <div key={index} className="w-full aspect-video shadow-md ux-ui-project rounded-lg overflow-hidden">
              <iframe 
                src={embed}
                className="w-full h-full border-0"
                allowFullScreen
                title={`UX/UI Project ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UXUIProjects;
