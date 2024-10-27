import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { ChevronLeft, ChevronRight, ChevronDown, LogOut } from "lucide-react";
import { menuItems, MenuItem, SubMenuItem } from "./utils";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface SidebarProps {
  isMinimized: boolean;
  toggleMinimize: () => void;
}

export function Sidebar({ isMinimized, toggleMinimize }: SidebarProps) {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    if (isMinimized) {
      toggleMinimize();
      setActiveItem(index);
    } else {
      setActiveItem(activeItem === index ? null : index);
    }
  };

  const renderIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as
      | LucideIcon
      | undefined;
    return IconComponent ? (
      <IconComponent className={`${isMinimized ? "h-6 w-6" : "h-5 w-5"}`} />
    ) : null;
  };

  return (
    <SidebarProvider>
      <SidebarComponent
        className={`fixed left-0 top-0 bottom-0 z-30 hidden md:block ${
          isMinimized ? "w-[80px]" : "w-[280px]"
        } transition-all duration-300 ease-in-out bg-background border-r`}
      >
        <SidebarHeader className="flex items-center justify-between p-4 border-b">
          {!isMinimized && (
            <h2 className="text-lg font-semibold">Mi Dashboard</h2>
          )}
        </SidebarHeader>
        <SidebarContent className="flex flex-col py-4">
          {menuItems.map((item: MenuItem, index: number) => (
            <Collapsible
              key={index}
              open={activeItem === index && !isMinimized}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className={`w-full justify-start px-4 py-2 text-left ${
                    isMinimized ? "justify-center" : ""
                  }`}
                  onClick={() => handleItemClick(index)}
                >
                  {renderIcon(item.icon)}
                  {!isMinimized && <span className="ml-2">{item.label}</span>}
                  {!isMinimized && <ChevronDown className="ml-auto h-4 w-4" />}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                {!isMinimized &&
                  item.items.map((subItem: SubMenuItem, subIndex: number) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="flex items-center gap-2 py-2 pl-8 pr-4 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {renderIcon(subItem.icon)}
                      <span>{subItem.label}</span>
                    </Link>
                  ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </SidebarContent>
        <SidebarFooter className="border-t p-4">
          <Button
            variant="outline"
            className={`${
              isMinimized ? "w-12 h-12 p-0" : "w-full"
            } justify-center`}
            onClick={() => console.log("Cerrar sesión")}
          >
            <LogOut className={`h-5 w-5 ${isMinimized ? "" : "mr-2"}`} />
            {!isMinimized && <span>Cerrar sesión</span>}
          </Button>
        </SidebarFooter>
        <Button
          variant="secondary"
          size="icon"
          onClick={toggleMinimize}
          className="absolute top-4 -right-3 z-40 rounded-full shadow-md"
          aria-label={isMinimized ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isMinimized ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </SidebarComponent>
    </SidebarProvider>
  );
}
