import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Element } from "react-scroll";

const plans = [
  {
    name: "Básico",
    price: "Gratis",
    features: [
      "Seguimiento de ejercicios",
      "Registro de sueño",
      "Registro de comidas",
    ],
  },
  {
    name: "Pro",
    price: "$9.99/mes",
    features: [
      "Todo lo del plan Básico",
      "Análisis avanzado",
      "Consejos personalizados",
      "Soporte prioritario",
    ],
  },
  {
    name: "Empresas",
    price: "Contactar",
    features: [
      "Todo lo del plan Pro",
      "Gestión de equipos",
      "API personalizada",
      "Soporte dedicado",
    ],
  },
];

export default function Pricing() {
  return (
    <Element name="pricing">
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
          Planes y Precios
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="text-2xl font-bold">
                  {plan.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Elegir plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </Element>
  );
}
