import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export default function ExerciseRecommendationsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Recomendaciones de Ejercicio
        </h2>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Rutinas Recomendadas</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Implement list of recommended routines */}
          <p>Implementar lista de rutinas recomendadas</p>
        </CardContent>
      </Card>
    </div>
  );
}
