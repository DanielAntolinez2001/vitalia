"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/molecules/Header";
import Hero from "@/components/molecules/Hero";
import About from "@/components/molecules/About";
import Team from "@/components/molecules/Team";
import Pricing from "@/components/molecules/Pricing";
import Footer from "@/components/molecules/Footer";

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header theme={theme} setTheme={setTheme} />
      <main className="container mx-auto px-4 py-12 space-y-24">
        <Hero />
        <Separator className="my-12" />
        <About />
        <Separator className="my-12" />
        <Team />
        <Separator className="my-12" />
        <Pricing />
      </main>
      <Separator className="my-12" />
      <Footer />
    </div>
  );
}
