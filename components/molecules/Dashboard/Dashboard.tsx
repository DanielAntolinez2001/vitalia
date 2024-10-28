"use client";

import { useState } from "react";
import { DashboardContent } from "./DashboardContent";

export function Dashboard() {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => setIsMinimized(!isMinimized);

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardContent />
    </div>
  );
}
