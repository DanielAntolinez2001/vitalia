import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BedDouble } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddSleepPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Agregar Descanso</h2>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Detalles del Descanso</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sleep-start">Hora de Inicio</Label>
              <Input id="sleep-start" type="datetime-local" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sleep-end">Hora de Fin</Label>
              <Input id="sleep-end" type="datetime-local" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sleep-quality">Calidad del Sueño (1-10)</Label>
              <Input id="sleep-quality" type="number" min="1" max="10" />
            </div>
            <Button type="submit">Registrar Descanso</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
