import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link"
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

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-12 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-zinc-950">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="flex flex-row gap-10 justify-center">
          {/* fixme slate gray dne. also make global bg color zinc-950;. alos change  max-w-1/2 this fucks up aspect ratio ofhgdfjhnasdmd*/}
          <Card className="bg-slate-gray-950 text-zinc-300 max-w-1/2">
            <CardHeader>
              <CardTitle>about me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-row gap-4 aspect-auto">
                <Image src="/meirl2.jpg" alt="me smile" width={300} height={300} />
                <div className="flex flex-col gap-6">
                  <p>
                    Hi, my name is Logan Bjork. I'm currently a third year undergraduate student at the University of Florida interested in web development- primarily frontend.
                  </p>
                  <p>
                    Outside of programming, I enjoy playing guitar and bass, as well as weightlifting and calisthenics.
                  </p>
                  <div className="flex flex-row gap-6 justify-center h-full items-end">
                    <Button asChild size="icon" className="hover:opacity-50 hover:shadow-md shadow-blue-950">
                      <Link href="https://github.com/loganjaymes">
                        <Image src="/ghub.svg" width={100} height={100} alt="git" />
                      </Link>
                    </Button>
                    <Button asChild size="icon" className="hover:opacity-50 hover:shadow-md shadow-blue-950">
                      <Link href="https://www.linkedin.com/in/loganbjork/">
                        <Image class="invert" src="/linkedin.svg" width={100} height={100} alt="linkedin" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-gray-950 text-zinc-300 h-fit">
            <CardHeader>
              <CardTitle>tech stack & frameworks</CardTitle>
            </CardHeader>
            <CardContent className="flex w-fit">
              <ul className="list-disc">
                <li>Raw HTML/CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.JS</li>
                <li>Svelte</li>
                <li>C++</li>
                <li>Python</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
