import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export const metadata = {
  title: "LJB"
}

const noto = Noto_Sans({
  variable: "--font-noto",
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto.variable}`}
      >
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-12 sm:p-20 font-[family-name:var(--font-noto)] bg-zinc-950">
          <NavigationMenu className="font-semibold">
            <NavigationMenuList>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/home">home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/projects">projects</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/gallery">gallery</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              {/* <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/now">now</Link>
                </NavigationMenuLink>
              </NavigationMenuItem> */}

            </NavigationMenuList>
          </NavigationMenu>
          {children}
        </div>
      </body>
    </html>
  );
}
