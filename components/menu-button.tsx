"use client"

import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { Icons } from "./icons"
import { ThemeToggleSheet } from "./theme-toggle-sheet"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { Separator } from "./ui/separator"

interface MainButtonProps {
  items?: NavItem[]
}

export const MenuWithButton: React.FC<MainButtonProps> = ({ items }) => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="secondary"
            size="sm"
            className="mr-2 h-8 px-1.5 md:hidden"
          >
            <Icons.MajesticonsMenuAlt className="size-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <a href="/" className="flex items-center">
            <Icons.logo className="size-4"></Icons.logo>
            <span className="ml-2 font-bold">foru remove</span>
          </a>

          <ScrollArea className="my-4 h-[calc(100vh-9rem)] pb-10 pl-2">
            <div className="mt-2 flex flex-col space-y-3">
              {items?.map(
                (item, index) =>
                  item.href && (
                    <Link
                      className="text-muted-foreground"
                      key={index}
                      href={item.href}
                      target={item.external ? "_blank" : ""}
                    >
                      {item.title}
                    </Link>
                  )
              )}

              <Separator className="mb-60 mt-20"></Separator>
            </div>
          </ScrollArea>

          <ThemeToggleSheet></ThemeToggleSheet>
        </SheetContent>
      </Sheet>
    </>
  )
}
