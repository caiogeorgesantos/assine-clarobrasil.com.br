"use client";

import { MenuItem } from "@/@types/menu";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { SITE_TITLE } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";

export function HeaderMenuMobile({
  links,
  pathname,
}: {
  links: MenuItem[];
  pathname: string;
}) {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="md:hidden absolute right-1 h-full w-11 flex items-center justify-center">
        <Menu size={24} />
        <span className="sr-only">Menu</span>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{SITE_TITLE}</DrawerTitle>
          <DrawerDescription>Navegue pelas seções do site:</DrawerDescription>

          <div className="flex flex-col items-end mt-8">
            {links.map((item) => (
              <Link
                key={item.url + item.label}
                href={item.url}
                className={`p-4 flex w-full justify-end border-b first:border-t border-gray-300 ${
                  pathname === item.url ? "font-bold" : ""
                }`}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline" className="w-full">
              Fechar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
