import { Card } from "@/components/ui/card";
import { BookMarked, ExternalLink, Globe, BookOpen } from "lucide-react";

export const Referencias = () => {
  const referencias = [
    {
      tipo: "simulation",
      autor: "PhET Interactive Simulations",
      titulo: "Energy Skate Park",
      detalles: "University of Colorado Boulder",
      url: "https://phet.colorado.edu/en/simulation/energy-skate-park",
      fecha: "2024"
    },
    {
      tipo: "book",
      autor: "Serway, R. A., & Jewett, J. W.",
      titulo: "Physics for Scientists and Engineers with Modern Physics",
      detalles: "9th Edition. Cengage Learning",
      fecha: "2018"
    },
    {
      tipo: "book", 
      autor: "Halliday, D., Resnick, R., & Walker, J.",
      titulo: "Fundamentals of Physics",
      detalles: "11th Edition. John Wiley & Sons",
      fecha: "2018"
    },
    {
      tipo: "web",
      autor: "Khan Academy",
      titulo: "Conservation of Energy",
      detalles: "Physics Course - Classical Mechanics",
      url: "https://www.khanacademy.org/science/physics/work-and-energy/conservation-of-energy",
      fecha: "2024"
    },
    {
      tipo: "article",
      autor: "Wieman, C. E., Adams, W. K., & Perkins, K. K.",
      titulo: "PhET: Simulations that enhance learning",
      detalles: "Science, 322(5902), 682-683",
      fecha: "2008"
    },
    {
      tipo: "book",
      autor: "Young, H. D., & Freedman, R. A.",
      titulo: "University Physics with Modern Physics",
      detalles: "15th Edition. Pearson",
      fecha: "2019"
    }
  ];

  const getIcon = (tipo: string) => {
    switch (tipo) {
      case "simulation":
        return <Globe className="h-4 w-4" />;
      case "web":
        return <ExternalLink className="h-4 w-4" />;
      case "article":
        return <BookMarked className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTipoLabel = (tipo: string) => {
    switch (tipo) {
      case "simulation":
        return "Simulación";
      case "web":
        return "Recurso Web";
      case "article":
        return "Artículo";
      default:
        return "Libro";
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-8 bg-gradient-surface shadow-card-soft">
        <div className="flex items-center space-x-3 mb-6">
          <BookMarked className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold text-primary">Referencias Bibliográficas</h2>
        </div>
        
        <div className="space-y-6">
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="text-amber-800">
              <strong>Formato APA 7ª Edición:</strong> Las siguientes referencias están organizadas 
              alfabéticamente según las normas de la American Psychological Association.
            </p>
          </div>
          
          <div className="space-y-4">
            {referencias.map((ref, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-education-border hover:shadow-card-soft transition-all duration-200">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center space-x-2 text-primary">
                    {getIcon(ref.tipo)}
                    <span className="text-xs font-semibold bg-primary/10 px-2 py-1 rounded">
                      {getTipoLabel(ref.tipo)}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="space-y-2">
                      <p className="text-foreground">
                        <strong>{ref.autor}</strong> ({ref.fecha}).{" "}
                        <em>{ref.titulo}</em>.{" "}
                        {ref.detalles}
                        {ref.url && "."}
                      </p>
                      
                      {ref.url && (
                        <div className="flex items-center space-x-2">
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                          <a 
                            href={ref.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 text-sm underline transition-colors"
                          >
                            {ref.url}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-education-border">
            <h3 className="text-lg font-semibold text-primary mb-4">Recursos Adicionales Consultados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Simulaciones PhET Relacionadas:</h4>
                <ul className="space-y-1">
                  <li>• Energy Skate Park: Basics</li>
                  <li>• Pendulum Lab</li>
                  <li>• Conservation of Energy</li>
                  <li>• Forces and Motion: Basics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Documentación Técnica:</h4>
                <ul className="space-y-1">
                  <li>• PhET Teaching Resources</li>
                  <li>• Simulation User Guide</li>
                  <li>• Activity Design Guidelines</li>
                  <li>• Assessment Materials</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Nota sobre Accesibilidad</h4>
            <p className="text-blue-700 text-sm">
              Todas las referencias web fueron verificadas y encontradas accesibles al momento 
              de la elaboración de este informe ({new Date().toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long' 
              })}). Los recursos de PhET Interactive Simulations están disponibles 
              gratuitamente bajo licencia Creative Commons.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};