import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          En Vitalia, nos tomamos muy en serio la privacidad de nuestros
          usuarios. Esta política describe cómo recopilamos, usamos y protegemos
          su información personal.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          1. Información que Recopilamos
        </h2>
        <p>
          Recopilamos información que usted nos proporciona directamente, como
          su nombre, dirección de correo electrónico y datos de salud que
          ingresa en nuestra plataforma.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          2. Cómo Utilizamos su Información
        </h2>
        <p>
          Utilizamos su información para proporcionar y mejorar nuestros
          servicios, personalizar su experiencia y comunicarnos con usted sobre
          actualizaciones o nuevas características.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          3. Protección de Datos
        </h2>
        <p>
          Implementamos medidas de seguridad técnicas y organizativas para
          proteger sus datos personales contra acceso no autorizado, alteración,
          divulgación o destrucción.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          4. Compartir Información
        </h2>
        <p>
          No vendemos ni compartimos su información personal con terceros,
          excepto cuando sea necesario para proporcionar nuestros servicios o
          cuando lo exija la ley.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Sus Derechos</h2>
        <p>
          Usted tiene derecho a acceder, corregir o eliminar su información
          personal. También puede oponerse al procesamiento de sus datos o
          solicitar la portabilidad de los mismos.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          6. Cambios a esta Política
        </h2>
        <p>
          Podemos actualizar esta política de privacidad de vez en cuando. Le
          notificaremos cualquier cambio publicando la nueva política de
          privacidad en esta página.
        </p>
      </div>
      <Button asChild className="mt-8">
        <Link href="/">Volver a la página principal</Link>
      </Button>
    </div>
  );
}
