import LoginForm from "@/components/molecules/LoginForm";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LoginImage from "@/res/LoginImage.png";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden xl:flex w-1/2 bg-muted items-center justify-center p-12">
        <Image
          src={LoginImage}
          alt="Vitalia Logo"
          width={900}
          height={700}
          className="max-w-screen-2xl rounded-xl"
        />
      </div>
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
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
