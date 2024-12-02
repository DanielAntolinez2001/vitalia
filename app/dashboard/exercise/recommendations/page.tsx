"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, ChevronsDown , Scale } from 'lucide-react';

const plans = [
  { 
    id: 1, 
    name: 'Pérdida de Peso', 
    description: 'Plan diseñado para ayudarte a perder peso de manera saludable.',
    icon: <ChevronsDown  className="h-6 w-6" />,
    exercises: [
      { name: 'Carrera continua', duration: '30 minutos' },
      { name: 'Saltar la cuerda', duration: '15 minutos' },
      { name: 'Burpees', sets: 3, reps: 15 },
      { name: 'Mountain climbers', duration: '1 minuto' },
      { name: 'Natación', duration: '45 minutos' }
    ]
  },
  { 
    id: 2, 
    name: 'Ganancia Muscular', 
    description: 'Plan enfocado en aumentar tu masa muscular y fuerza.',
    icon: <Dumbbell className="h-6 w-6" />,
    exercises: [
      { name: 'Sentadillas con barra', sets: 4, reps: 8 },
      { name: 'Press de banca', sets: 4, reps: 8 },
      { name: 'Peso muerto', sets: 3, reps: 6 },
      { name: 'Dominadas', sets: 3, reps: 'hasta el fallo' },
      { name: 'Curl de bíceps', sets: 3, reps: 12 }
    ]
  },
  { 
    id: 3, 
    name: 'Mantenimiento', 
    description: 'Plan para mantener tu peso y condición física actual.',
    icon: <Scale className="h-6 w-6" />,
    exercises: [
      { name: 'Caminata rápida', duration: '30 minutos' },
      { name: 'Flexiones', sets: 3, reps: 15 },
      { name: 'Plancha', duration: '1 minuto' },
      { name: 'Sentadillas sin peso', sets: 3, reps: 20 },
      { name: 'Zancadas', sets: 3, reps: 10 }
    ]
  },
];

interface TrainingPlansProps {
  params: Promise<{ locale: string }>;
}

export default function TrainingPlans({ params }: TrainingPlansProps) {
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [showExercises, setShowExercises] = useState(false);
  const [locale, setLocale] = useState<string>("en");
  const router = useRouter();

  useEffect(() => {
    const getLocale = async () => {
      const resolvedParams = await params;
      setLocale(resolvedParams.locale);
    };

    getLocale();
  }, [params]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push(`/${locale}/login`);
  };

  const handleSelectPlan = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setShowExercises(false);
  };

  const handleStartPlan = () => {
    setShowExercises(true);
  };

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Planes de Entrenamiento</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.id} className={`cursor-pointer transition-all ${selectedPlan?.id === plan.id ? 'ring-2 ring-primary' : ''}`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{plan.name}</CardTitle>
              {plan.icon}
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{plan.description}</p>
              <Button 
                className="mt-4 w-full" 
                onClick={() => handleSelectPlan(plan)}
                variant={selectedPlan?.id === plan.id ? "default" : "outline"}
              >
                {selectedPlan?.id === plan.id ? 'Seleccionado' : 'Seleccionar'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedPlan && !showExercises && (
        <Card>
          <CardHeader>
            <CardTitle>Plan seleccionado: {selectedPlan.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={handleStartPlan}>Comenzar Plan</Button>
          </CardContent>
        </Card>
      )}
      {showExercises && selectedPlan && (
        <Card>
          <CardHeader>
            <CardTitle>Ejercicios para el plan de {selectedPlan.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {selectedPlan.exercises.map((exercise, index) => (
                <li key={index} className="bg-muted p-3 rounded-md">
                  <span className="font-semibold">{exercise.name}</span>: {' '}
                  {'duration' in exercise ? exercise.duration : `${exercise.sets} series x ${exercise.reps} repeticiones`}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}