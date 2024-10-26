"use client";

import { useState } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type HeaderProps = {
  theme: string | undefined;
  setTheme: (theme: string) => void;
};

export default function Header({ theme, setTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          VITALIA
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className={`${navigationMenuTriggerStyle()} cursor-pointer`}
              >
                Acerca de
              </ScrollLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ScrollLink
                to="team"
                smooth={true}
                duration={500}
                className={`${navigationMenuTriggerStyle()} cursor-pointer`}
              >
                Equipo
              </ScrollLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ScrollLink
                to="pricing"
                smooth={true}
                duration={500}
                className={`${navigationMenuTriggerStyle()} cursor-pointer`}
              >
                Precios
              </ScrollLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <div className="hidden sm:flex space-x-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Iniciar sesión</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register">Registrarse</Link>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="container py-6 px-4 space-y-4">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="block text-lg font-medium transition-colors hover:text-primary cursor-pointer py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca de
            </ScrollLink>
            <ScrollLink
              to="team"
              smooth={true}
              duration={500}
              className="block text-lg font-medium transition-colors hover:text-primary cursor-pointer py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Equipo
            </ScrollLink>
            <ScrollLink
              to="pricing"
              smooth={true}
              duration={500}
              className="block text-lg font-medium transition-colors hover:text-primary cursor-pointer py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Precios
            </ScrollLink>
            <div className="pt-4 space-y-3">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full justify-center"
              >
                <Link href="/login">Iniciar sesión</Link>
              </Button>
              <Button size="lg" asChild className="w-full justify-center">
                <Link href="/register">Registrarse</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
