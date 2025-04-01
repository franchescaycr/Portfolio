
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-white border-t">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm text-gray-600">
            © {currentYear} - Franchesca Carrasco | Portafolio Profesional
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
