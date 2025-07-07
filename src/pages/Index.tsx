import { useState } from "react";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Portada } from "@/components/sections/Portada";
import { Objetivos } from "@/components/sections/Objetivos";
import { Fundamento } from "@/components/sections/Fundamento";
import { Materiales } from "@/components/sections/Materiales";
import { Datos } from "@/components/sections/Datos";
import { Analisis } from "@/components/sections/Analisis";
import { Conclusiones } from "@/components/sections/Conclusiones";
import { Referencias } from "@/components/sections/Referencias";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("portada");

  const renderSection = () => {
    switch (currentSection) {
      case "portada":
        return <Portada />;
      case "objetivos":
        return <Objetivos />;
      case "fundamento":
        return <Fundamento />;
      case "materiales":
        return <Materiales />;
      case "datos":
        return <Datos />;
      case "analisis":
        return <Analisis />;
      case "conclusiones":
        return <Conclusiones />;
      case "referencias":
        return <Referencias />;
      default:
        return <Portada />;
    }
  };

  return (
    <div className="min-h-screen bg-education-surface">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Navigation 
              currentSection={currentSection} 
              onSectionChange={setCurrentSection} 
            />
          </div>
          
          <div className="lg:col-span-3">
            <div className="animate-in fade-in duration-500">
              {renderSection()}
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-primary text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">
            <strong>Informe de Laboratorio - PhET Simulations</strong>
          </p>
          <p className="text-purple-200 text-sm">
            Corporación Unificada Nacional | Departamento de Física
          </p>
          <p className="text-purple-300 text-xs mt-2">
            Energía en la Pista de Patinaje - Análisis de Conservación de Energía Mecánica
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;