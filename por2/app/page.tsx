import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-zinc-950">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Card className="bg-zinc-800 opacity-100 text-zinc-300">
          <CardHeader>
            <CardTitle>about me</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Hi, my name is Logan Bjork. I'm currently an undergraduate student at the University of Florida interested in web development- primarily frontend.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>tech stack</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
