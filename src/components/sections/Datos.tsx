import { Card } from "@/components/ui/card";
import { BarChart3, Activity, Database } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

export const Datos = () => {
  const experimentData = [
    { punto: "A (Inicio)", altura: 5.0, velocidad: 0.0, energiaK: 0, energiaU: 3678, energiaTotal: 3678 },
    { punto: "B (Descenso)", altura: 3.5, velocidad: 5.42, energiaK: 1103, energiaU: 2575, energiaTotal: 3678 },
    { punto: "C (Valle)", altura: 1.0, velocidad: 8.85, energiaK: 2943, energiaU: 735, energiaTotal: 3678 },
    { punto: "D (Ascenso)", altura: 2.5, velocidad: 7.00, energiaK: 1838, energiaU: 1840, energiaTotal: 3678 },
    { punto: "E (Pico)", altura: 4.0, velocidad: 4.43, energiaK: 735, energiaU: 2943, energiaTotal: 3678 },
  ];

  const frictionData = [
    { punto: "A", energiaTotal: 3678, perdida: 0 },
    { punto: "B", energiaTotal: 3590, perdida: 88 },
    { punto: "C", energiaTotal: 3421, perdida: 257 },
    { punto: "D", energiaTotal: 3298, perdida: 380 },
    { punto: "E", energiaTotal: 3125, perdida: 553 },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-8 bg-gradient-surface shadow-card-soft">
        <div className="flex items-center space-x-3 mb-6">
          <BarChart3 className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold text-primary">Datos Experimentales</h2>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg border border-education-border">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <Activity className="h-5 w-5 mr-2" />
              Experimento 1: Sistema Sin Fricción
            </h3>
            <p className="text-muted-foreground mb-4">
              Masa del patinador: 75 kg | Configuración: Pista tipo "U" | Condición: Sin fricción
            </p>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-academic-secondary">
                    <TableHead className="font-semibold">Punto de Medición</TableHead>
                    <TableHead className="text-center">Altura (m)</TableHead>
                    <TableHead className="text-center">Velocidad (m/s)</TableHead>
                    <TableHead className="text-center">Energía Cinética (J)</TableHead>
                    <TableHead className="text-center">Energía Potencial (J)</TableHead>
                    <TableHead className="text-center">Energía Total (J)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {experimentData.map((row, index) => (
                    <TableRow key={index} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{row.punto}</TableCell>
                      <TableCell className="text-center">{row.altura.toFixed(1)}</TableCell>
                      <TableCell className="text-center">{row.velocidad.toFixed(2)}</TableCell>
                      <TableCell className="text-center">{row.energiaK}</TableCell>
                      <TableCell className="text-center">{row.energiaU}</TableCell>
                      <TableCell className="text-center font-semibold text-primary">{row.energiaTotal}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium">
                <strong>Observación:</strong> La energía mecánica total se mantiene constante 
                en 3,678 J, confirmando la conservación de energía en ausencia de fricción.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-education-border">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <Database className="h-5 w-5 mr-2" />
              Experimento 2: Sistema Con Fricción
            </h3>
            <p className="text-muted-foreground mb-4">
              Masa del patinador: 75 kg | Configuración: Pista tipo "U" | Condición: Con fricción (μ = 0.02)
            </p>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-academic-secondary">
                    <TableHead className="font-semibold">Punto de Medición</TableHead>
                    <TableHead className="text-center">Energía Total (J)</TableHead>
                    <TableHead className="text-center">Pérdida Acumulada (J)</TableHead>
                    <TableHead className="text-center">Eficiencia (%)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {frictionData.map((row, index) => (
                    <TableRow key={index} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{row.punto}</TableCell>
                      <TableCell className="text-center">{row.energiaTotal}</TableCell>
                      <TableCell className="text-center text-red-600">{row.perdida}</TableCell>
                      <TableCell className="text-center">
                        {((row.energiaTotal / 3678) * 100).toFixed(1)}%
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-4 bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-red-800 font-medium">
                <strong>Observación:</strong> La energía mecánica total disminuye progresivamente 
                debido a las pérdidas por fricción, alcanzando una pérdida total de 553 J (15% de la energía inicial).
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-education-border">
            <h3 className="text-xl font-semibold text-primary mb-4">Incertidumbres y Precisión</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Mediciones de Energía</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Resolución de medición: ±1 J</li>
                  <li>• Precisión en altura: ±0.1 m</li>
                  <li>• Precisión en velocidad: ±0.01 m/s</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Parámetros del Sistema</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Masa: 75.0 ± 0.1 kg</li>
                  <li>• g: 9.81 m/s² (valor teórico)</li>
                  <li>• Coeficiente de fricción: 0.020 ± 0.002</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};