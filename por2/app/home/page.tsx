import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AspectRatio } from "@/components/ui/aspect-ratio"
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

      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="flex flex-row gap-10 justify-center [perspective:1800px]">
          {/* fixme slate gray dne. also make global bg color zinc-950;. alos change  max-w-1/2 this fucks up aspect ratio ofhgdfjhnasdmd*/}
          {/* big one FIXME */}
            <Card className="bg-slate-gray-950 text-zinc-300 max-w-7/12 ">
              <CardHeader>
                <CardTitle>about me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row gap-4">
                  <AspectRatio ratio={23 / 9}>
                    <Image fill={true} src="/meirl2.jpg" alt="me smile" className="rounded-sm object-cover"/>
                  </AspectRatio>
                  <div className="flex flex-col gap-6">
                    <p>
                      Hi, my name is Logan Bjork. I'm currently a third year undergraduate student at the University of Florida interested in web development- primarily frontend.
                    </p>
                    <p>
                      Outside of programming, I enjoy playing guitar and bass, as well as weightlifting and calisthenics.
                    </p>
                    <div className="flex flex-row gap-6 justify-center items-end mt-auto">
                      <Button asChild size="icon" className="transition-shadow ease-in-out duration-100 hover:opacity-50 hover:shadow-md shadow-blue-950">
                        <Link href="https://github.com/loganjaymes">
                          <Image src="/ghub.svg" width={100} height={100} alt="git" />
                        </Link>
                      </Button>
                      <Button asChild size="icon" className="transition-shadow ease-in-out duration-100 hover:opacity-50 hover:shadow-md shadow-blue-950">
                        <Link href="https://www.linkedin.com/in/loganbjork/">
                          <Image className="invert" src="/linkedin.svg" width={100} height={100} alt="linkedin" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
                        
          {/* right cols */}
          <div className="flex flex-col gap-4">
            <div className="[perspective:1600px]">
              <Card className="bg-slate-gray-950 text-zinc-300 h-fit">
                <CardHeader>
                  <CardTitle>tech stack & frameworks</CardTitle>
                </CardHeader>
                <CardContent className="flex w-fit">
                  <ul className="list-disc">
                    {/* maybe have each bullet be img representing tech. use globals.css for this https://stackoverflow.com/questions/21161569/html-list-with-different-images-as-bullets */}
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

            <div className="[perspective:1600px]">
              <Card className="bg-slate-gray-950 text-zinc-300 h-full">
                <CardHeader>
                  <CardTitle>contact (fix me)</CardTitle>
                </CardHeader>
                <CardContent className="flex w-full items-center">
                  <div className="flex w-full justify-center bg-red-400">shoot me an email</div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </main>
  );
}
