"use client";

import { useState } from "react";
import { Sidebar } from "@/components/molecules/Dashboard/Sidebar";
import { Header } from "@/components/molecules/Dashboard/Header";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMinimized, setIsMinimized] = useState(false);
  const pathname = usePathname();

  const toggleMinimize = () => setIsMinimized(!isMinimized);

  const getHeaderTitle = () => {
    const path = pathname.split("/").pop();
    switch (path) {
      case "dashboard":
        return "Dashboard";
      case "history":
        return "Historial";
      case "start":
        return "Empezar Entrenamiento";
      case "recommendations":
        return "Recomendaciones";
      case "recipes":
        return "Recetas";
      case "add":
        return "Agregar";
      case "calculator":
        return "Calculadora de Calorías";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden md:block">
        <Sidebar isMinimized={isMinimized} toggleMinimize={toggleMinimize} />
      </div>
      <div
        className={`flex flex-col flex-1 w-full transition-all duration-300 ease-in-out ${
          isMinimized ? "md:ml-[72px]" : "md:ml-[240px]"
        }`}
      >
        <Header heading={getHeaderTitle()}>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-[240px]">
              <Sidebar isMinimized={false} toggleMinimize={() => {}} />
            </SheetContent>
          </Sheet>
        </Header>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
