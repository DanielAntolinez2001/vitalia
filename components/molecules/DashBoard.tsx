'use client'

import { useState, useEffect } from "react"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Activity, Utensils, Moon, Settings, ChevronLeft, ChevronRight, LogOut, ChevronDown, Play, Book, Plus, Calculator, CreditCard, Paintbrush, User, Menu, Sun, Dumbbell, History } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function Dashboard() {
  const [isMinimized, setIsMinimized] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeItem, setActiveItem] = useState<number | null>(null)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const handleItemClick = (index: number) => {
    if (isMinimized) {
      setIsMinimized(false)
      setActiveItem(index)
    } else {
      setActiveItem(activeItem === index ? null : index)
    }
  }

  const menuItems = [
    {
      icon: <Dumbbell className="h-4 w-4" />,
      label: "Ejercicios",
      items: [
        { icon: <History />, label: "Historial", href: "#" },
        { icon: <Play />, label: "Iniciar entrenamiento", href: "#" },
        { icon: <Book />, label: "Recomendaciones", href: "#" },
      ],
    },
    {
      icon: <Utensils className="h-4 w-4" />,
      label: "Alimentación",
      items: [
        { icon: <History />, label: "Historial", href: "#" },
        { icon: <Book />, label: "Recetas", href: "#" },
        { icon: <Plus />, label: "Agregar comida", href: "#" },
        { icon: <Calculator />, label: "Cálculo de calorías diarias", href: "#" },
      ],
    },
    {
      icon: <Moon className="h-4 w-4" />,
      label: "Sueño",
      items: [
        { icon: <History />, label: "Historial", href: "#" },
        { icon: <Plus />, label: "Agregar descanso", href: "#" },
      ],
    },
    {
      icon: <Settings className="h-4 w-4" />,
      label: "Configuración",
      items: [
        { icon: <User />, label: "Datos personales", href: "#" },
        { icon: <CreditCard />, label: "Configuración de pago", href: "#" },
        { icon: <Paintbrush />, label: "Personalización", href: "#" },
      ],
    },
  ]

  const CustomSidebarContent = ({ isMobile = false }) => (
    <>
      <SidebarHeader className="flex items-center justify-between p-4">
        {!isMinimized && <h2 className="text-lg font-semibold">Mi Dashboard</h2>}
      </SidebarHeader>
      <SidebarContent className="flex flex-col py-4">
        {menuItems.map((item, index) => (
          <Collapsible key={index} open={activeItem === index}>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => handleItemClick(index)}
              >
                {item.icon}
                {(!isMinimized || isMobile) && <span className="ml-2">{item.label}</span>}
                {(!isMinimized || isMobile) && <ChevronDown className="ml-auto h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {(!isMinimized || isMobile) && item.items.map((subItem, subIndex) => (
                <Link key={subIndex} href={subItem.href} className="flex items-center gap-2 py-2 pl-8 pr-4 hover:bg-accent hover:text-accent-foreground">
                  {subItem.icon}
                  <span>{subItem.label}</span>
                </Link>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <div className={`p-4 ${isMinimized ? 'flex justify-center' : ''}`}>
          <Button variant="outline" className={`${isMinimized ? 'w-10 h-10 p-0' : 'w-full'}`} onClick={() => console.log("Cerrar sesión")}>
            <LogOut className={`h-4 w-4 ${isMinimized ? '' : 'mr-2'}`} />
            {(!isMinimized || isMobile) && "Cerrar sesión"}
          </Button>
        </div>
      </SidebarFooter>
    </>
  )

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        type: 'category' as const,
      },
      y: {
        type: 'linear' as const,
        beginAtZero: true,
      },
    },
  }
  
  const exerciseChartData = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Minutos de ejercicio',
        data: [30, 45, 60, 30, 45, 90, 60],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }
  
  const nutritionChartData = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Calorías consumidas',
        data: [2000, 2200, 1800, 2100, 2300, 2500, 2000],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }
  
  const sleepChartData = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Horas de sueño',
        data: [7, 6.5, 8, 7.5, 6, 9, 8.5],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  }

  return (
    <div className="flex min-h-screen">
      <SidebarProvider>
        <Sidebar className={`fixed left-0 top-0 bottom-0 z-30 hidden md:block ${isMinimized ? 'w-[60px]' : 'w-[280px]'} transition-all duration-300 ease-in-out`}>
          <CustomSidebarContent />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMinimize}
            className="absolute top-4 right-[-12px] z-40 bg-background border rounded-full shadow-md"
          >
            {isMinimized ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </Sidebar>
        <div className={`flex flex-col flex-1 md:${isMinimized ? 'ml-[60px]' : 'ml-[280px]'} transition-all duration-300 ease-in-out`}>
          <nav className="flex items-center justify-between border-b bg-background px-4 py-2">
            <div className="flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden mr-2">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-[280px]">
                  <Sidebar className="w-full">
                    <CustomSidebarContent isMobile={true} />
                  </Sidebar>
                </SheetContent>
              </Sheet>
            </div>
            <h1 className="text-lg font-semibold">Mi Dashboard</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {mounted && (theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
            </Button>
          </nav>
          <main className="flex-1 overflow-y-auto p-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold mb-4">Bienvenido a tu dashboard personal</h2>
              <p className="mb-6">Aquí podrás ver un resumen de tu actividad diaria, incluyendo ejercicios, alimentación y patrones de sueño.</p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4">
                  <DashboardCard title="Ejercicios" icon={<Activity className="h-6 w-6" />}>
                    <p>Último entrenamiento: Hace 2 días</p>
                    <p>Próxima meta: 5km en 30 minutos</p>
                  </DashboardCard>
                  <div className="bg-card rounded-lg p-4 shadow-sm">
                    <Line options={chartOptions} data={exerciseChartData} />
                  </div>
                </div>
                <div className="space-y-4">
                  <DashboardCard title="Alimentación" icon={<Utensils className="h-6 w-6" />}>
                    <p>Calorías hoy: 1800 / 2200</p>
                    <p>Próxima comida: Almuerzo en 2 horas</p>
                  </DashboardCard>
                  <div className="bg-card rounded-lg p-4 shadow-sm">
                    <Line options={chartOptions} data={nutritionChartData} />
                  </div>
                </div>
                <div className="space-y-4">
                  <DashboardCard title="Sueño" icon={<Moon className="h-6 w-6" />}>
                    <p>Horas dormidas anoche: 7.5</p>
                    <p>Calidad del sueño: Buena</p>
                  </DashboardCard>
                  <div className="bg-card rounded-lg p-4 shadow-sm">
                    <Line options={chartOptions} data={sleepChartData} />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}

interface DashboardCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function DashboardCard({ title, icon, children }: DashboardCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          {icon}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="mt-4 space-y-2">
          {children}
        </div>
      </div>
    </div>
  )
}