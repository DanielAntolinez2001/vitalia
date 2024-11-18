'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */


import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function AddFoodPage() {
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");
  const [dailyCalorieLimit, setDailyCalorieLimit] = useState(2000); 
  const [totalCaloriesConsumed, setTotalCaloriesConsumed] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    setDailyCalorieLimit(2000);
    setTotalCaloriesConsumed(1500);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newCalories = parseInt(calories);
      const newTotalCalories = totalCaloriesConsumed + newCalories;
      
      console.log("Alimento agregado:", { foodName, calories: newCalories, protein, carbs, fat });
      
      setTotalCaloriesConsumed(newTotalCalories);

      toast({
        title: "Alimento agregado",
        description: `${foodName} ha sido agregado a tu base de datos personal.`,
      });

      if (newTotalCalories > dailyCalorieLimit) {
        toast({
          title: "¡Alerta de calorías!",
          description: `Has superado tu límite diario de calorías (${dailyCalorieLimit} kcal). Consumo actual: ${newTotalCalories} kcal.`,
          variant: "destructive",
        });
      }

      setFoodName("");
      setCalories("");
      setProtein("");
      setCarbs("");
      setFat("");
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo agregar el alimento. Por favor, intenta de nuevo.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Agregar Comida</h2>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>Detalles de la Comida</CardTitle>
          <Plus className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="food-name">Nombre de la Comida</Label>
              <Input 
                id="food-name" 
                placeholder="Ej: Ensalada César" 
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="calories">Calorías (kcal)</Label>
              <Input 
                id="calories" 
                type="number" 
                placeholder="Ej: 300" 
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="protein">Proteínas (g)</Label>
              <Input 
                id="protein" 
                type="number" 
                placeholder="Ej: 10" 
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="carbs">Carbohidratos (g)</Label>
              <Input 
                id="carbs" 
                type="number" 
                placeholder="Ej: 30" 
                value={carbs}
                onChange={(e) => setCarbs(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fat">Grasas (g)</Label>
              <Input 
                id="fat" 
                type="number" 
                placeholder="Ej: 15" 
                value={fat}
                onChange={(e) => setFat(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Agregar Comida</Button>
          </form>
        </CardContent>
      </Card>
      <Toaster />
    </div>
  );
}