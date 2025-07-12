import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function projects() {
  return (
    <div className="container mx-auto w-full h-full items-center justify-start pt-16">
      <div className="flex flex-col text-center h-full text-zinc-300 gap-2">
        {/* header */}
        <div className="pb-8">
          <h1 className="text-5xl">projects</h1>
          <p>A concise portfolio of my web-dev projects.</p>
        </div>

        {/* projects start */}
        <div className="flex flex-col gap-8">
          {/* top */}
          <div className="flex gap-8 h-full">
            {/* enviropact */}
            <div className="[perspective:15000px]">
              <div className="flex min-h-full w-1/2">
                <Card className="bg-slate-gray-950 text-zinc-300 overflow-y-auto flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="text-3xl">EnviroPact</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow gap-4 w-full items-center">
                      <Image className="rounded-md" src="/proj/env.jpg" width={400} height={200} alt="TRIFECTA image displaying help info"/>
                      BLURB FIXME
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-row gap-4 w-full justify-between">
                      <p>TECH SHIT HERE</p>
                      <a href="https://github.com/loganjaymes/TRIFECTA">Repository</a>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* trifecta */}
            <div className="[perspective:15000px]">
              <div className="flex min-h-full w-1/2">
                <Card className="bg-slate-gray-950 text-zinc-300 overflow-y-auto flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="text-3xl">TRIFECTA</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow gap-4 w-full items-center">
                      <Image className="rounded-md" src="/proj/trif.png" width={600} height={200} alt="TRIFECTA image displaying help info"/>
                      BLURB FIXME
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-row gap-4 w-full justify-between">
                      <p>TECH SHIT HERE</p>
                      <a href="https://github.com/loganjaymes/TRIFECTA">Repository</a>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>

          {/* btm */}
          <div className="flex gap-8">
            {/* 6 degrees */}
            <div className="[perspective:15000px] flex-1 min-h-0">
              <Card className="bg-slate-gray-950 text-zinc-300 overflow-y-auto">
                <CardHeader>
                  <CardTitle>6 Degrees</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col w-full">
                    IMG
                    BLURB
                </CardContent>
                <CardFooter>
                  <div className="flex flex-row gap-4 w-full justify-between">
                    <p>TECH SHIT HERE</p>
                    <a href="https://github.com/AlexanderWangY/movie-linker">Repository</a>
                  </div>
                </CardFooter>
              </Card>
            </div>

            {/* SEES Signup */}
            <div className="[perspective:15000px] flex-1 min-h-0">
              <Card className="bg-slate-gray-950 text-zinc-300 overflow-y-auto">
                <CardHeader>
                  <CardTitle>SEES Signup</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col w-full">
                    IMG
                    BLURB
                </CardContent>
                <CardFooter>
                  <div className="flex flex-row gap-4 w-full justify-between">
                    <p>TECH SHIT HERE</p>
                    <a href="https://github.com/Kavipatel0/SASEHacks2024">Repository</a>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>

        </div>
        {/* end projects */}

      </div>
    </div>
  )
}