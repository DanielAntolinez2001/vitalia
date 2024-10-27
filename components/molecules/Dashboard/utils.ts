import { ChartOptions, ChartData } from "chart.js";

export interface MenuItem {
  icon: string;
  label: string;
  items: SubMenuItem[];
}

export interface SubMenuItem {
  icon: string;
  label: string;
  href: string;
}

export const menuItems: MenuItem[] = [
  {
    icon: "Activity",
    label: "Ejercicios",
    items: [
      { icon: "History", label: "Historial", href: "/dashboard/exercise/history" },
      { icon: "Play", label: "Iniciar entrenamiento", href: "/dashboard/exercise/start" },
      { icon: "Book", label: "Recomendaciones", href: "/dashboard/exercise/recommendations" },
    ],
  },
  {
    icon: "Utensils",
    label: "Alimentación",
    items: [
      { icon: "History", label: "Historial", href: "/dashboard/nutrition/history" },
      { icon: "Book", label: "Recetas", href: "/dashboard/nutrition/recipes" },
      { icon: "Plus", label: "Agregar comida", href: "/dashboard/nutrition/add" },
      { icon: "Calculator", label: "Cálculo de calorías diarias", href: "/dashboard/nutrition/calculator" },
    ],
  },
  {
    icon: "Moon",
    label: "Sueño",
    items: [
      { icon: "History", label: "Historial", href: "/dashboard/sleep/history" },
      { icon: "Plus", label: "Agregar descanso", href: "/dashboard/sleep/add" },
    ],
  },
  {
    icon: "Settings",
    label: "Configuración",
    items: [
      { icon: "User", label: "Datos personales", href: "/dashboard/settings/profile" },
      { icon: "CreditCard", label: "Configuración de pago", href: "/dashboard/settings/payment" },
      { icon: "Paintbrush", label: "Personalización", href: "/dashboard/settings/personalization" },
    ],
  },
];

export const chartOptions: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(0, 0, 0, 0.1)",
      },
    },
  },
};

export const generateChartData = (label: string, color: string): ChartData<"line"> => ({
  labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
  datasets: [
    {
      label,
      data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 100)),
      borderColor: color,
      backgroundColor: color.replace(")", ", 0.1)").replace("rgb", "rgba"),
      borderWidth: 2,
      pointBackgroundColor: color,
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: true,
    },
  ],
});