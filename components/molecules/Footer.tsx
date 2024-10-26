import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Vitalia. Todos los derechos reservados.
          </p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="/terms"
            >
              Términos de servicio
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="/privacy"
            >
              Política de privacidad
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
