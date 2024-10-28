import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface DashboardSectionProps {
  title: string;
  icon: React.ReactNode;
  summary: Array<{ label: string; value: string }>;
  chartData: ChartData<"line">;
}

const chartOptions: ChartOptions<"line"> = {
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
      type: "category",
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

export function DashboardSection({
  title,
  icon,
  summary,
  chartData,
}: DashboardSectionProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {summary.map((item, index) => (
            <p key={index} className="text-xs text-muted-foreground">
              {item.label}:{" "}
              <span className="font-medium text-foreground">{item.value}</span>
            </p>
          ))}
        </div>
        <div className="h-[200px] mt-4">
          <Line options={chartOptions} data={chartData} />
        </div>
      </CardContent>
    </Card>
  );
}
