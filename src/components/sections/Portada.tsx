import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, BookOpen, Hash, Building2 } from "lucide-react";

export const Portada = () => {
  return (
    <Card className="p-12 text-center space-y-8 bg-gradient-surface shadow-card-soft">
      <div className="space-y-6">
        <div className="flex justify-center mb-8">
          <Building2 className="h-20 w-20 text-primary" />
        </div>
        
        <h1 className="text-4xl font-bold text-primary mb-2">
          CORPORACIÓN UNIFICADA NACIONAL
        </h1>
        <p className="text-xl text-muted-foreground">
          Departamento de Física
        </p>
        
        <Separator className="my-8" />
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground">
            INFORME DE LABORATORIO
          </h2>
          <h3 className="text-2xl font-semibold text-primary">
            "Energía en la Pista de Patinaje"
          </h3>
          <p className="text-lg text-muted-foreground">
            Análisis de la Conservación de Energía Mecánica mediante Simulación PhET
          </p>
        </div>
        
        <Separator className="my-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">Estudiante:</p>
                <p className="text-muted-foreground">Gabriel Rodriguez</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">Asignatura:</p>
                <p className="text-muted-foreground">Física I - Mecánica</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Hash className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">Código:</p>
                <p className="text-muted-foreground">53312</p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-muted-foreground">
          <p className="text-lg">Fecha de presentación</p>
          <p className="text-xl font-semibold">{new Date().toLocaleDateString('es-ES', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
        </div>
      </div>
    </Card>
  );
};