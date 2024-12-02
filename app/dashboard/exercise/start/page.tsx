"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Dumbbell, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const exercisesByType = {
  Cardio: {
    Fácil: ['Caminata rápida', 'Natación suave', 'Ciclismo recreativo'],
    Intermedio: ['Trote', 'Saltar la cuerda', 'Aeróbicos'],
    Avanzado: ['Sprints', 'HIIT', 'Carrera de larga distancia'],
  },
  Fuerza: {
    Fácil: ['Sentadillas sin peso', 'Flexiones de rodillas', 'Plancha'],
    Intermedio: ['Sentadillas con peso', 'Flexiones completas', 'Dominadas asistidas'],
    Avanzado: ['Peso muerto', 'Dominadas', 'Press de banca'],
  },
  Flexibilidad: {
    Fácil: ['Estiramientos básicos', 'Yoga para principiantes', 'Rotación de articulaciones'],
    Intermedio: ['Yoga intermedio', 'Pilates', 'Estiramientos dinámicos'],
    Avanzado: ['Yoga avanzado', 'Contorsión', 'Estiramientos profundos'],
  },
};

interface ExerciseLog {
  exercise: string;
  weight?: number;
  reps?: number;
}

export default function StartExercisePage() {
  const [difficulty, setDifficulty] = useState('Fácil');
  const [selectedType, setSelectedType] = useState<keyof typeof exercisesByType | 'Personalizado' | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [customExercises, setCustomExercises] = useState<string[]>([]);
  const [todaysExercises, setTodaysExercises] = useState<ExerciseLog[]>([]);
  const [currentExercise, setCurrentExercise] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const { toast } = useToast();

  const handleTypeSelect = (type: keyof typeof exercisesByType | 'Personalizado') => {
    setSelectedType(type);
    setSearchTerm('');
    setCustomExercises([]);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm && !customExercises.includes(searchTerm)) {
      setCustomExercises([...customExercises, searchTerm]);
      setCurrentExercise(searchTerm);
      setSearchTerm('');
    }
  };

  const addExercise = () => {
    if (currentExercise) {
      const newExercise: ExerciseLog = {
        exercise: currentExercise,
      };
      if (weight) newExercise.weight = parseFloat(weight);
      if (reps) newExercise.reps = parseInt(reps);
      setTodaysExercises([...todaysExercises, newExercise]);
      setCurrentExercise('');
      setWeight('');
      setReps('');
    }
  };

  const handleExerciseSelect = (exercise: string) => {
    setCurrentExercise(exercise);
  };

  const finishWorkout = () => {
    toast({
      title: "Entrenamiento Terminado",
      description: "Tu entrenamiento ha sido guardado correctamente.",
    });
    setTimeout(() => {
      setCustomExercises([]);
      setCurrentExercise('');
      setWeight('');
      setReps('');
      setTodaysExercises([]);
    }, 100);
  };

  const renderExerciseList = () => {
    if (selectedType === 'Personalizado') {
      return (
        <>
          <form onSubmit={handleSearch} className="flex gap-2 mb-4">
            <Input
              type="text"
              placeholder="Buscar ejercicio..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit">Agregar</Button>
          </form>
          <ul className="space-y-2">
            {customExercises.map((exercise, index) => (
              <li key={index} className="bg-muted p-2 rounded-md flex justify-between items-center">
                {exercise}
                <Button variant="outline" size="sm" onClick={() => handleExerciseSelect(exercise)}>Seleccionar</Button>
              </li>
            ))}
          </ul>
        </>
      );
    } else if (selectedType && selectedType in exercisesByType) {
      return (
        <>
          <Select onValueChange={setDifficulty} defaultValue={difficulty}>
            <SelectTrigger className="mb-4">
              <SelectValue placeholder="Selecciona la dificultad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Fácil">Fácil</SelectItem>
              <SelectItem value="Intermedio">Intermedio</SelectItem>
              <SelectItem value="Avanzado">Avanzado</SelectItem>
            </SelectContent>
          </Select>
          <ul className="space-y-2">
            {selectedType && exercisesByType[selectedType as keyof typeof exercisesByType][difficulty as keyof typeof exercisesByType['Cardio']].map((exercise, index) => (
              <li key={index} className="bg-muted p-2 rounded-md flex justify-between items-center">
                {exercise}
                <Button variant="outline" size="sm" onClick={() => handleExerciseSelect(exercise)}>Seleccionar</Button>
              </li>
            ))}
          </ul>
        </>
      );
    }
    return null;
  };

  return (
    <>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Empezar Entrenamiento
          </h2>
        </div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Selecciona un Tipo de Entrenamiento</CardTitle>
            <Play className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="grid gap-4">
            <Button onClick={() => handleTypeSelect('Cardio')}>Cardio</Button>
            <Button onClick={() => handleTypeSelect('Fuerza')}>Fuerza</Button>
            <Button onClick={() => handleTypeSelect('Flexibilidad')}>Flexibilidad</Button>
            <Button onClick={() => handleTypeSelect('Personalizado')}>Personalizado</Button>
          </CardContent>
        </Card>

        {selectedType && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Lista de Ejercicios - {selectedType}</CardTitle>
              {selectedType === 'Personalizado' ? (
                <Search className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Dumbbell className="h-4 w-4 text-muted-foreground" />
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              {renderExerciseList()}
            </CardContent>
          </Card>
        )}

        {currentExercise && (
          <Card>
            <CardHeader>
              <CardTitle>Registrar Ejercicio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="current-exercise">Ejercicio Actual</Label>
                  <Input id="current-exercise" value={currentExercise} readOnly />
                </div>
                <div>
                  <Label htmlFor="weight">Peso (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Ingrese el peso"
                  />
                </div>
                <div>
                  <Label htmlFor="reps">Repeticiones</Label>
                  <Input
                    id="reps"
                    type="number"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                    placeholder="Ingrese las repeticiones"
                  />
                </div>
                <Button onClick={addExercise}>Registrar Ejercicio</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {todaysExercises.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Entrenamiento de Hoy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {todaysExercises.map((exercise, index) => (
                  <li key={index} className="bg-muted p-2 rounded-md">
                    {exercise.exercise}
                    {exercise.weight && ` - Peso: ${exercise.weight}kg`}
                    {exercise.reps && ` - Repeticiones: ${exercise.reps}`}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <Button onClick={finishWorkout} className="w-full">Terminar Entrenamiento</Button>
      </div>
      <Toaster />
    </>
  );
}