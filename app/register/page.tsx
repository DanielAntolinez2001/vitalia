import RegisterForm from "@/components/molecules/RegisterForm";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex flex-col w-full xl:w-1/2 p-8">
        <Button asChild variant="ghost" className="self-start mb-8">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Volver a la página principal
          </Link>
        </Button>
        <div className="flex-grow flex items-center justify-center">
          <RegisterForm />
        </div>
      </div>
      <div className="hidden xl:flex w-1/2 bg-muted items-center justify-center p-12">
        <Image
          src="/logo.svg"
          alt="HealthSaaS Logo"
          width={400}
          height={400}
          className="max-w-md"
        />
      </div>
    </div>
  );
}
