import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="text-center space-y-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Tu salud, tu control
      </h1>
      <p className="text-xl text-muted-foreground">
        Monitorea tu ejercicio, sueño y nutrición en una sola plataforma. Mejora
        tu salud con datos precisos y consejos personalizados.
      </p>
      <Button size="lg" asChild>
        <Link href="/register">Comienza gratis</Link>
      </Button>
    </section>
  );
}
