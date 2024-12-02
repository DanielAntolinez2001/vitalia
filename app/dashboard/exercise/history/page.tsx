"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Flame, Repeat, Clock } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Session {
  calories: number;
  repetitions: number;
  time: number;
}

interface Activity {
  date: string;
  type: string;
  duration: number;
  calories: number;
}

export default function ExerciseHistoryPage() {
  const [session, setSession] = useState<Session>({
    calories: 0,
    repetitions: 0,
    time: 0,
  });

  const updateSession = (field: keyof Session, value: string) => {
    setSession({ ...session, [field]: Number(value) });
  };

  const recentActivities: Activity[] = [
    { date: "2023-05-01", type: "Cardio", duration: 30, calories: 300 },
    { date: "2023-05-03", type: "Strength", duration: 45, calories: 200 },
    { date: "2023-05-05", type: "Flexibility", duration: 20, calories: 100 },
    { date: "2023-05-07", type: "Cardio", duration: 40, calories: 400 },
    { date: "2023-05-09", type: "Strength", duration: 50, calories: 250 },
  ];

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Historial de Ejercicios
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Entrenamientos
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              +10.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Calorías Quemadas
            </CardTitle>
            <Flame className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{session.calories}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Repeticiones
            </CardTitle>
            <Repeat className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{session.repetitions}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tiempo Total
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{session.time} min</div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Desglose de Logros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="calories">Calorías Quemadas</Label>
              <Input
                id="calories"
                type="number"
                value={session.calories}
                onChange={(e) => updateSession('calories', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="repetitions">Repeticiones</Label>
              <Input
                id="repetitions"
                type="number"
                value={session.repetitions}
                onChange={(e) => updateSession('repetitions', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Tiempo (minutos)</Label>
              <Input
                id="time"
                type="number"
                value={session.time}
                onChange={(e) => updateSession('time', e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Últimas Actividades</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fecha</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Duración (min)</TableHead>
                <TableHead>Calorías</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivities.map((activity, index) => (
                <TableRow key={index}>
                  <TableCell>{activity.date}</TableCell>
                  <TableCell>{activity.type}</TableCell>
                  <TableCell>{activity.duration}</TableCell>
                  <TableCell>{activity.calories}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}