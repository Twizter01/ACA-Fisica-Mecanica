import { BookOpen, FlaskConical } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-gradient-academic text-white shadow-academic">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <FlaskConical className="h-8 w-8" />
            <div>
            <h1 className="text-3xl font-bold">Corporación Unificada Nacional</h1>
            <p className="text-purple-100 mt-1">Laboratorio de Física - Simulaciones PhET</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-lg">Informe Académico</span>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <h2 className="text-4xl font-bold mb-2">Energía en la Pista de Patinaje</h2>
          <p className="text-xl text-purple-100">Análisis de Conservación de Energía Mecánica</p>
        </div>
      </div>
    </header>
  );
};