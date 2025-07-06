import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  FileText, 
  Target, 
  BookOpen, 
  Wrench, 
  BarChart3, 
  TrendingUp, 
  CheckCircle, 
  BookMarked 
} from "lucide-react";

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: "portada", label: "Portada", icon: FileText },
  { id: "objetivos", label: "Objetivos", icon: Target },
  { id: "fundamento", label: "Fundamento Teórico", icon: BookOpen },
  { id: "materiales", label: "Materiales y Equipos", icon: Wrench },
  { id: "datos", label: "Datos Experimentales", icon: BarChart3 },
  { id: "analisis", label: "Análisis de Resultados", icon: TrendingUp },
  { id: "conclusiones", label: "Conclusiones", icon: CheckCircle },
  { id: "referencias", label: "Referencias", icon: BookMarked },
];

export const Navigation = ({ currentSection, onSectionChange }: NavigationProps) => {
  return (
    <Card className="p-6 sticky top-6 shadow-card-soft">
      <h3 className="text-lg font-semibold mb-4 text-primary">Secciones del Informe</h3>
      <nav className="space-y-2">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Button
              key={section.id}
              variant={currentSection === section.id ? "default" : "ghost"}
              className={`w-full justify-start text-left transition-academic ${
                currentSection === section.id 
                  ? "bg-gradient-academic text-white shadow-academic" 
                  : "hover:bg-secondary"
              }`}
              onClick={() => onSectionChange(section.id)}
            >
              <Icon className="h-4 w-4 mr-3" />
              {section.label}
            </Button>
          );
        })}
      </nav>
    </Card>
  );
};