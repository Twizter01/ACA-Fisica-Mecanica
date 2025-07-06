import { Card } from "@/components/ui/card";
import { TrendingUp, Calculator, PieChart, AlertTriangle } from "lucide-react";

export const Analisis = () => {
  return (
    <div className="space-y-6">
      <Card className="p-8 bg-gradient-surface shadow-card-soft">
        <div className="flex items-center space-x-3 mb-6">
          <TrendingUp className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold text-primary">Análisis de Resultados</h2>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg border border-education-border">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <Calculator className="h-5 w-5 mr-2" />
              Procesamiento de Datos
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Cálculo de Energías</h4>
                <div className="bg-academic-secondary p-4 rounded-lg">
                  <p className="mb-2"><strong>Ejemplo para el Punto C (Valle):</strong></p>
                  <div className="space-y-2 font-mono text-sm">
                    <p>Energía Potencial: U = mgh = 75 kg × 9.81 m/s² × 1.0 m = <strong>735 J</strong></p>
                    <p>Energía Cinética: K = ½mv² = ½ × 75 kg × (8.85 m/s)² = <strong>2,943 J</strong></p>
                    <p>Energía Total: E = K + U = 2,943 J + 735 J = <strong>3,678 J</strong></p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-3">Análisis Estadístico - Sistema Sin Fricción</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h5 className="font-semibold text-green-800">Energía Media</h5>
                    <p className="text-2xl font-bold text-green-700">3,678 J</p>
                    <p className="text-sm text-green-600">Desviación: ±0 J</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h5 className="font-semibold text-blue-800">Variación Máxima</h5>
                    <p className="text-2xl font-bold text-blue-700">0%</p>
                    <p className="text-sm text-blue-600">Conservación perfecta</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <h5 className="font-semibold text-amber-800">Error Experimental</h5>
                    <p className="text-2xl font-bold text-amber-700">menor a 0.1%</p>
                    <p className="text-sm text-amber-600">Dentro de tolerancia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-education-border">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <PieChart className="h-5 w-5 mr-2" />
              Análisis Gráfico y Tendencias
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Comportamiento Energético</h4>
                <div className="bg-academic-secondary p-4 rounded-lg">
                  <p className="mb-3"><strong>Transformaciones de Energía Observadas:</strong></p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Punto A a C:</strong> Conversión de energía potencial (3,678 J a 735 J) 
                      a energía cinética (0 J a 2,943 J)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Punto C a E:</strong> Conversión de energía cinética (2,943 J a 735 J) 
                      a energía potencial (735 J a 2,943 J)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Transformación completa:</strong> La energía se intercambia 
                      completamente entre sus formas cinética y potencial</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-3">Análisis de Pérdidas por Fricción</h4>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="space-y-3">
                    <p><strong>Pérdida total de energía:</strong> 553 J (15% de la energía inicial)</p>
                    <p><strong>Tasa de pérdida promedio:</strong> 138 J por segmento de trayectoria</p>
                    <p><strong>Trabajo realizado por la fricción:</strong></p>
                    <div className="bg-white p-3 my-2 rounded font-mono text-sm">
                      W_fricción = E_inicial - E_final = 3,678 J - 3,125 J = 553 J
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-education-border">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Comparación con Predicciones Teóricas
            </h3>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">✓ Resultados Coherentes</h4>
                <ul className="space-y-2 text-green-700">
                  <li>• La conservación de energía se verifica exactamente en el sistema ideal</li>
                  <li>• Las transformaciones entre K y U siguen las predicciones teóricas</li>
                  <li>• La velocidad máxima ocurre en el punto de menor altura potencial</li>
                  <li>• Los cálculos de energía coinciden con los valores esperados (E = mgh_inicial)</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Validación Matemática</h4>
                <p className="text-blue-700 mb-2">
                  La velocidad teórica en el valle se puede calcular usando conservación de energía:
                </p>
                <div className="bg-white p-3 rounded font-mono text-sm">
                  mgh = ½mv² entonces v = √(2gh) = √(2 × 9.81 × 4.0) = 8.86 m/s
                </div>
                <p className="text-blue-700 mt-2">
                  <strong>Valor experimental:</strong> 8.85 m/s (error menor a 0.1%)
                </p>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">Efectos de Factores Reales</h4>
                <p className="text-amber-700">
                  La inclusión de fricción reproduce fielmente el comportamiento de sistemas reales, 
                  donde la energía mecánica disminuye debido a la conversión en energía térmica, 
                  confirmando la validez del modelo utilizado en la simulación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};