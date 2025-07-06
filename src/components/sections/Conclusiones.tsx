import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Lightbulb, Award } from "lucide-react";

export const Conclusiones = () => {
  return (
    <div className="space-y-6">
      <Card className="p-8 bg-gradient-surface shadow-card-soft">
        <div className="flex items-center space-x-3 mb-6">
          <CheckCircle className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold text-primary">Conclusiones</h2>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg border border-education-border">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Cumplimiento de Objetivos
            </h3>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">✓ Objetivo General</h4>
                <p className="text-green-700">
                  Se logró analizar y verificar exitosamente el principio de conservación de la energía mecánica 
                  mediante la simulación PhET "Energía en la Pista de Patinaje". Las transformaciones entre 
                  energías cinética y potencial gravitatoria fueron cuantificadas y estudiadas de manera precisa.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Objetivos Específicos Alcanzados:</h4>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-start space-x-3 bg-muted/30 p-3 rounded">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">
                      <strong>Relaciones cuantitativas:</strong> Se determinaron con precisión las relaciones 
                      E = K + U en todos los puntos de la trayectoria, confirmando la conservación en sistemas ideales.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3 bg-muted/30 p-3 rounded">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">
                      <strong>Efectos de la fricción:</strong> Se evaluó cuantitativamente la pérdida energética 
                      (553 J, 15% de la energía inicial), demostrando cómo la fricción viola la conservación.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3 bg-muted/30 p-3 rounded">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">
                      <strong>Análisis de configuraciones:</strong> Se estudió el comportamiento para diferentes 
                      alturas y condiciones, validando la universalidad de las leyes de conservación.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3 bg-muted/30 p-3 rounded">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">
                      <strong>Comparación teórico-experimental:</strong> Los resultados experimentales coincidieron 
                      con las predicciones teóricas con un error menor al 0.1%.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3 bg-muted/30 p-3 rounded">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">
                      <strong>Interpretación gráfica:</strong> Se analizaron exitosamente las variaciones energéticas 
                      vs. posición, identificando patrones de transformación de energía.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-education-border">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2" />
              Hallazgos Principales
            </h3>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Conservación de Energía Mecánica</h4>
                <p className="text-blue-700">
                  En ausencia de fricción, la energía mecánica total se mantiene rigurosamente constante 
                  en 3,678 J durante todo el movimiento, confirmando la validez universal del principio 
                  de conservación de la energía.
                </p>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">Transformaciones Energéticas</h4>
                <p className="text-amber-700">
                  La energía se transforma continuamente entre sus formas cinética y potencial de manera 
                  complementaria: cuando una aumenta, la otra disminuye en la misma magnitud, 
                  manteniendo constante la suma total.
                </p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">Impacto de Fuerzas Disipativas</h4>
                <p className="text-red-700">
                  La fricción introduce una pérdida sistemática de energía mecánica (15% en este experimento), 
                  que se convierte en energía térmica, demostrando la importancia de considerar todas las 
                  formas de energía en sistemas reales.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-education-border">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Validación Metodológica
            </h3>
            
            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                La simulación PhET demostró ser una herramienta altamente efectiva para el estudio 
                de fenómenos físicos, proporcionando:
              </p>
              
              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Precisión elevada:</strong> Mediciones con resolución de 1 J y errores menores a 0.1%</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Control experimental:</strong> Capacidad de aislar variables y estudiar efectos específicos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Reproducibilidad:</strong> Resultados consistentes en múltiples repeticiones</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Versatilidad:</strong> Posibilidad de explorar diferentes configuraciones y parámetros</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-academic text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Conclusión General</h3>
            <p className="text-lg leading-relaxed text-white">
              Este estudio confirma que <strong>las leyes de conservación de la energía constituyen 
              principios fundamentales</strong> que gobiernan el comportamiento de los sistemas mecánicos. 
              La simulación PhET permitió verificar experimentalmente estos principios con alta precisión, 
              demostrando tanto la conservación perfecta en sistemas ideales como los efectos realistas 
              de las fuerzas disipativas en sistemas prácticos.
            </p>
            
            <div className="mt-4 bg-white/10 p-3 rounded">
              <p className="text-sm">
                <strong>Implicaciones pedagógicas:</strong> Este tipo de simulaciones representa una 
                herramienta valiosa para la enseñanza de la física, al permitir la exploración 
                interactiva de conceptos fundamentales con un control experimental imposible de 
                lograr en laboratorios físicos tradicionales.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};