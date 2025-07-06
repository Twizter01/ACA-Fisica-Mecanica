import { Card } from "@/components/ui/card";
import { Target, CheckCircle2 } from "lucide-react";

export const Objetivos = () => {
  return (
    <div className="space-y-6">
      <Card className="p-8 bg-gradient-surface shadow-card-soft">
        <div className="flex items-center space-x-3 mb-6">
          <Target className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold text-primary">Objetivos</h2>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg border border-education-border">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Objetivo General
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              Analizar y verificar el principio de conservación de la energía mecánica 
              a través de la simulación "Energía en la Pista de Patinaje" de PhET, 
              estudiando las transformaciones entre energías cinética y potencial 
              gravitatoria en un sistema mecánico.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-education-border">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2" />
              Objetivos Específicos
            </h3>
            <ul className="space-y-4 text-foreground">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="leading-relaxed">
                  <strong>Determinar</strong> las relaciones cuantitativas entre la energía 
                  cinética, potencial gravitatoria y mecánica total en diferentes puntos 
                  de la trayectoria.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="leading-relaxed">
                  <strong>Evaluar</strong> el efecto de la fricción en la conservación 
                  de la energía mecánica y calcular las pérdidas energéticas asociadas.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="leading-relaxed">
                  <strong>Analizar</strong> el comportamiento energético del sistema 
                  para diferentes configuraciones de pista y masas del patinador.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="leading-relaxed">
                  <strong>Comparar</strong> los resultados experimentales obtenidos 
                  mediante la simulación con las predicciones teóricas fundamentadas 
                  en las leyes de conservación.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="leading-relaxed">
                  <strong>Interpretar</strong> gráficamente las variaciones de energía 
                  en función de la posición y el tiempo durante el movimiento del patinador.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};