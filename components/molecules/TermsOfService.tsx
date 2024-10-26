import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Términos de Servicio</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Bienvenido a Vitalia. Al utilizar nuestro servicio, usted acepta
          cumplir con los siguientes términos y condiciones:
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          1. Aceptación de los Términos:
        </h2>
        <p>
          Al utilizar nuestra aplicación, aceptas cumplir con estos Términos de
          Servicio. Si no estás de acuerdo, no debes utilizar la aplicación.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          2. Uso de la Aplicación:
        </h2>
        <p>
          La aplicación está destinada a usuarios mayores de 13 años. Al
          utilizarla, te comprometes a no utilizarla para actividades ilegales o
          no autorizadas.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          3. Propiedad Intelectual:
        </h2>
        <p>
          Todos los contenidos, marcas y derechos de propiedad intelectual de la
          aplicación son propiedad de [Nombre de la Empresa]. Queda prohibida
          cualquier reproducción sin permiso previo.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          4. Responsabilidad:
        </h2>
        <p>
          La aplicación proporciona información y herramientas para el
          bienestar, pero no sustituye el consejo médico. No nos hacemos
          responsables de decisiones tomadas basadas en la información de la
          aplicación.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Modificaciones:</h2>
        <p>
          Nos reservamos el derecho de modificar estos Términos de Servicio en
          cualquier momento. Notificaremos a los usuarios sobre cambios
          significativos.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">6. Terminación:</h2>
        <p>
          Podemos suspender o cancelar tu acceso a la aplicación en caso de
          violación de estos Términos.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">7. Ley Aplicable:</h2>
        <p>Estos Términos se rigen por las leyes de Colombia.</p>
      </div>
      <Button asChild className="mt-8">
        <Link href="/">Volver a la página principal</Link>
      </Button>
    </div>
  );
}
