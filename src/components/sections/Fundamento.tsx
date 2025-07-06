import { Card } from "@/components/ui/card";
import { BookOpen, Calculator, Lightbulb } from "lucide-react";

export const Fundamento = () => {
  return (
    <div className="space-y-6">
      <Card className="p-8 bg-gradient-surface shadow-card-soft">
        <div className="flex items-center space-x-3 mb-6">
          <BookOpen className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold text-primary">Fundamento Teórico</h2>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg border border-education-border">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2" />
              Conceptos Fundamentales
            </h3>
            <div className="space-y-4 text-foreground leading-relaxed">
              <div>
                <h4 className="font-semibold text-lg mb-2">Energía Cinética (K)</h4>
                <p>
                  La energía cinética es la energía asociada al movimiento de un objeto. 
                  Para un objeto de masa <em>m</em> que se mueve con velocidad <em>v</em>, 
                  la energía cinética se define como:
                </p>
                <div className="bg-academic-secondary p-4 my-3 rounded-lg text-center">
                  <strong className="text-xl">K = ½mv²</strong>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Energía Potencial Gravitatoria (U)</h4>
                <p>
                  La energía potencial gravitatoria es la energía almacenada en un objeto 
                  debido a su posición en un campo gravitatorio. Para un objeto de masa <em>m</em> 
                  a una altura <em>h</em> sobre un punto de referencia:
                </p>
                <div className="bg-academic-secondary p-4 my-3 rounded-lg text-center">
                  <strong className="text-xl">U = mgh</strong>
                </div>
                <p className="text-sm text-muted-foreground">
                  Donde g = 9.81 m/s² es la aceleración gravitatoria terrestre.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-education-border">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <Calculator className="h-5 w-5 mr-2" />
              Principio de Conservación de la Energía Mecánica
            </h3>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                La energía mecánica total (E) de un sistema es la suma de su energía 
                cinética y potencial:
              </p>
              <div className="bg-academic-secondary p-4 rounded-lg text-center">
                <strong className="text-xl">E = K + U = ½mv² + mgh</strong>
              </div>
              
              <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                <h4 className="font-semibold text-lg mb-2">Ley de Conservación</h4>
                <p>
                  En ausencia de fuerzas no conservativas (como la fricción), 
                  la energía mecánica total permanece constante durante todo el movimiento:
                </p>
                <div className="bg-white p-3 my-2 rounded text-center">
                  <strong className="text-lg">E₁ = E₂ = constante</strong>
                </div>
                <p>
                  Esto implica que: <strong>K₁ + U₁ = K₂ + U₂</strong>
                </p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-lg mb-2 text-red-800">Efectos de la Fricción</h4>
                <p className="text-red-700">
                  Cuando existe fricción, parte de la energía mecánica se convierte en 
                  energía térmica, resultando en una disminución de la energía mecánica total:
                </p>
                <div className="bg-white p-3 my-2 rounded text-center">
                  <strong className="text-red-800">E₂ = E₁ - W_fricción</strong>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-education-border">
            <h3 className="text-xl font-semibold text-primary mb-4">Aplicación en la Pista de Patinaje</h3>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                En la simulación de PhET, un patinador se desliza por una pista de diferentes 
                formas. Durante su movimiento:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">•</span>
                  <span>En los puntos más altos: máxima energía potencial, mínima energía cinética</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">•</span>
                  <span>En los puntos más bajos: mínima energía potencial, máxima energía cinética</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">•</span>
                  <span>La energía se transforma continuamente entre cinética y potencial</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};