"use client";

import { useState } from "react";
import { DashboardContent } from "./DashboardContent";

export function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardContent />
    </div>
  );
}
