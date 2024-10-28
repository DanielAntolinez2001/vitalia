import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "lucide-react";

export default function RecipesPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Recetas Saludables
        </h2>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recetas Recomendadas</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Implement list or grid of recipes */}
          <p>Implementar lista de recetas recomendadas</p>
        </CardContent>
      </Card>
    </div>
  );
}
