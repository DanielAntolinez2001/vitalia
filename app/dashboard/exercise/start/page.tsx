import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StartExercisePage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Empezar Entrenamiento
        </h2>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>Selecciona un Tipo de Entrenamiento</CardTitle>
          <Play className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button>Cardio</Button>
          <Button>Fuerza</Button>
          <Button>Flexibilidad</Button>
          <Button>Personalizado</Button>
        </CardContent>
      </Card>
    </div>
  );
}
