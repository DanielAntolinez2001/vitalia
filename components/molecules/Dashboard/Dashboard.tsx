"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { DashboardContent } from "./DashboardContent";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Dashboard() {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => setIsMinimized(!isMinimized);

  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden md:block">
        <Sidebar isMinimized={isMinimized} toggleMinimize={toggleMinimize} />
      </div>
      <div
        className={`flex flex-col flex-1 w-full transition-all duration-300 ease-in-out ${
          isMinimized ? "md:ml-[80px]" : "md:ml-[280px]"
        }`}
      >
        <Header>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <Sidebar isMinimized={false} toggleMinimize={() => {}} />
            </SheetContent>
          </Sheet>
        </Header>
        <DashboardContent />
      </div>
    </div>
  );
}
