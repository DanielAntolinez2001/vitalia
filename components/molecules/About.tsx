import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Element } from "react-scroll";

export default function About() {
  return (
    <Element name="about">
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
          Acerca de Vitalia
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Empoderar a las personas a alcanzar un estilo de vida saludable
                a través de una experiencia integral que combina ejercicio,
                sueño y nutrición. Nuestra aplicación proporciona herramientas
                personalizadas, recursos educativos y una comunidad de apoyo
                para fomentar hábitos sostenibles que mejoren la salud y el
                bienestar de cada usuario.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Ser la aplicación líder en bienestar integral, reconocida por
                transformar vidas a través de la promoción de un equilibrio
                saludable entre el ejercicio, el sueño y la nutrición. Aspiramos
                a crear un mundo donde cada persona tenga acceso a las
                herramientas y conocimientos necesarios para vivir de manera
                saludable y plena.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Element>
  );
}
