import { Card } from "@/components/ui/card";
import { Wrench, Monitor, Globe, Settings } from "lucide-react";

export const Materiales = () => {
  return (
    <div className="space-y-6">
      <Card className="p-8 bg-gradient-surface shadow-card-soft">
        <div className="flex items-center space-x-3 mb-6">
          <Wrench className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold text-primary">Materiales y Equipos</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-education-border">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <Monitor className="h-5 w-5 mr-2" />
              Equipos de Cómputo
            </h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Computadora personal</strong>
                  <p className="text-sm text-muted-foreground">
                    Con sistema operativo Windows/macOS/Linux
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Navegador web moderno</strong>
                  <p className="text-sm text-muted-foreground">
                    Chrome, Firefox, Safari o Edge actualizado
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Conexión a Internet</strong>
                  <p className="text-sm text-muted-foreground">
                    Para acceder a las simulaciones PhET
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-education-border">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              Software y Aplicaciones
            </h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>PhET Interactive Simulations</strong>
                  <p className="text-sm text-muted-foreground">
                    Simulación "Energy Skate Park" v2.7.1
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Herramienta de captura</strong>
                  <p className="text-sm text-muted-foreground">
                    Para registrar pantallazos de los datos
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Calculadora científica</strong>
                  <p className="text-sm text-muted-foreground">
                    O software de cálculo (Excel, LibreOffice)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-white p-6 rounded-lg border border-education-border">
          <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            Configuración de la Simulación
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-academic-secondary p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Parámetros del Sistema</h4>
              <ul className="space-y-1">
                <li>• Masa del patinador: 75 kg</li>
                <li>• Aceleración gravitatoria: 9.81 m/s²</li>
                <li>• Altura inicial: variable</li>
                <li>• Velocidad inicial: 0 m/s</li>
              </ul>
            </div>
            
            <div className="bg-academic-secondary p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Configuración de Pista</h4>
              <ul className="space-y-1">
                <li>• Pista tipo rampa</li>
                <li>• Pista tipo "U"</li>
                <li>• Pista personalizada</li>
                <li>• Con/sin fricción</li>
              </ul>
            </div>
            
            <div className="bg-academic-secondary p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Mediciones Registradas</h4>
              <ul className="space-y-1">
                <li>• Energía cinética (J)</li>
                <li>• Energía potencial (J)</li>
                <li>• Energía mecánica total (J)</li>
                <li>• Posición y velocidad</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-accent/10 p-4 rounded-lg border border-accent">
          <h4 className="font-semibold text-lg mb-2">Nota Metodológica</h4>
          <p className="text-foreground">
            La simulación PhET proporciona un entorno controlado donde es posible 
            modificar parámetros específicos y obtener mediciones precisas sin las 
            limitaciones de un experimento físico real, como errores de medición 
            o condiciones ambientales variables.
          </p>
        </div>
      </Card>
    </div>
  );
};