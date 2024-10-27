import { DashboardSection } from "./DashboardSection";
import { Activity, Utensils, Moon } from "lucide-react";
import { generateChartData } from "./utils";

export function DashboardContent() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container py-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Bienvenido a tu dashboard personal
          </h2>
          <p className="text-muted-foreground">
            Aquí podrás ver un resumen de tu actividad diaria, incluyendo
            ejercicios, alimentación y patrones de sueño.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
