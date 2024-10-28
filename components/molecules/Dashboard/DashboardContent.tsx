import { DashboardSection } from "./DashboardSection";
import {
  Activity,
  Utensils,
  Moon,
  Footprints,
  Flame,
  Heart,
} from "lucide-react";
import { generateChartData } from "./utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DashboardContent() {
  return (
    <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Bienvenido a tu dashboard personal
          </h2>
          <p className="text-muted-foreground">
            Aquí podrás ver un resumen de tu actividad diaria, incluyendo
            ejercicios, alimentación y patrones de sueño.
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Pasos Diarios"
            value="8,234"
            icon={<Footprints className="h-4 w-4" />}
          />
          <MetricCard
            title="Calorías Quemadas"
            value="487"
            icon={<Flame className="h-4 w-4" />}
          />
          <MetricCard
            title="Ritmo Cardíaco"
            value="72 bpm"
            icon={<Heart className="h-4 w-4" />}
          />
          <MetricCard
            title="Minutos Activos"
            value="45"
            icon={<Activity className="h-4 w-4" />}
          />
        </div>

        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <DashboardSection
            title="Ejercicios"
            icon={<Activity className="h-6 w-6" />}
            summary={[
              { label: "Último entrenamiento", value: "Hace 2 días" },
              { label: "Próxima meta", value: "5km en 30 minutos" },
            ]}
            chartData={generateChartData(
              "Minutos de ejercicio",
              "rgb(255, 99, 132)"
            )}
          />
          <DashboardSection
            title="Alimentación"
            icon={<Utensils className="h-6 w-6" />}
            summary={[
              { label: "Calorías hoy", value: "1800 / 2200" },
              { label: "Próxima comida", value: "Almuerzo en 2 horas" },
            ]}
            chartData={generateChartData(
              "Calorías consumidas",
              "rgb(53, 162, 235)"
            )}
          />
          <DashboardSection
            title="Sueño"
            icon={<Moon className="h-6 w-6" />}
            summary={[
              { label: "Horas dormidas anoche", value: "7.5" },
              { label: "Calidad del sueño", value: "Buena" },
            ]}
            chartData={generateChartData("Horas de sueño", "rgb(75, 192, 192)")}
          />
        </div>
      </div>
    </main>
  );
}

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

function MetricCard({ title, value, icon }: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
