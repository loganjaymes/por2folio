import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function projects() {
  return (
    <div className="container mx-auto w-full h-full items-center justify-start pt-16">
      <div className="flex flex-col text-center h-full text-zinc-300 gap-2">
        {/* header */}
        <div className="pb-8">
          <h1 className="text-5xl">projects</h1>
          <p>A concise portfolio of my personal projects.</p>
        </div>

        {/* projects start */}
        {/* eventually make line after perspecitve (<div className="flex max-w-lg min-h-full">)  max-w-md and have 3 per row. will need to rearrange divs but its fine */}
        <div className="flex flex-col gap-8">
          {/* top */}
          <div className="flex gap-8 h-full items-center justify-center">
            {/* enviropact */}
            <div className="[perspective:15000px]">
              <div className="flex max-w-lg min-h-full">
                <Card className="bg-slate-gray-950 text-zinc-300 overflow-y-auto flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="text-3xl">EnviroPact</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow gap-4 w-full items-center">
                      <Image className="rounded-md" src="/proj/env.png" width={600} height={200} alt="A screenshot from ENVIROPACT's homepage"/>
                      {/* BLURB FIXME */}
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-row gap-4 w-full justify-between items-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="hover:cursor-pointer">Tech Stack & Info</Button>
                        </DialogTrigger>
                        <DialogContent className="border-blue-950 bg-zinc-950 border-2 text-zinc-300">
                          <DialogHeader>
                            <DialogTitle>EnviroPact</DialogTitle>
                            <DialogDescription className="text-zinc-400">
                              Created for SASEHacks2024 in less than three days, EnviroPact is a social media web app focused on community engagement through enviromental cleanups.
                              Users can create, join, and search events in their area, RVSPing with their Google Account, all to find others and work towards the common goal of improving our environment.
                              <br />
                              &nbsp;
                              <br />
                              Created with
                              <div className="flex flex-row p-1 gap-2">
                                <Button size="icon" className="rounded-md overflow-auto">
                                  <Image className="invert" src="/techicons/react.svg" width={100} height={100} alt="react" />
                                </Button>
                                <Button size="icon" className="rounded-md overflow-auto">
                                  <Image src="/techicons/tailwind.svg" width={100} height={100} alt="tailwind css" />
                                </Button>
                                <Button size="icon" className="rounded-md overflow-auto">
                                  <Image src="/techicons/ant.svg" width={100} height={100} alt="ant design" />
                                </Button>
                                <Button size="icon" className="rounded-md overflow-auto">
                                  <Image src="/techicons/framer.svg" width={100} height={100} alt="framer motion" />
                                </Button>
                                <Button size="icon" className="rounded-md overflow-auto">
                                  <Image src="/techicons/firebase.png" width={100} height={100} alt="firebase and firestore" />
                                </Button>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                      <a className="text-blue-300 hover:underline duration-100 hover:shadow-lg shadow-blue-950" href="https://github.com/Kavipatel0/SASEHacks2024">Repository</a>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* trifecta */}
            <div className="[perspective:15000px]">
              <div className="flex max-w-lg min-h-full">
                <Card className="bg-slate-gray-950 text-zinc-300 overflow-y-auto flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="text-3xl">TRIFECTA</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow gap-4 w-full items-center">
                      <Image className="rounded-md" src="/proj/trif.png" width={600} height={200} alt="TRIFECTA image displaying help info"/>
                      {/* BLURB FIXME */}
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-row gap-4 w-full justify-between items-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="hover:cursor-pointer">Tech Stack & Info</Button>
                        </DialogTrigger>
                        <DialogContent className="border-blue-950 bg-zinc-950 border-2 text-zinc-300">
                          <DialogHeader>
                            <DialogTitle>TRIFECTA</DialogTitle>
                            <DialogDescription className="text-zinc-400">
                              Trifecta is a Discord bot that automatically tracks any scores sent into a text channel from the NYT Wordle, Mini-Crossword, and Connections. 
                              Each user's score is logged into their respective game's daily leaderboard in ascending order.
                              <br />
                              &nbsp;
                              <br />
                              Created with
                              <div className="flex flex-row p-1 gap-2">
                                <Button size="icon" className="rounded-md overflow-auto">
                                  <Image src="/techicons/python.png" width={100} height={100} alt="python" />
                                </Button>
                                <Button size="icon" className="rounded-md overflow-auto">
                                  <Image src="/techicons/discordpy.png" width={100} height={100} alt="discord.py" />
                                </Button>
                                <Button size="icon" className="rounded-md overflow-auto">
                                  <Image className="invert" src="/techicons/aws.png" width={100} height={100} alt="amazon web services" />
                                </Button>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                      <a className="text-blue-300 hover:underline duration-100 hover:shadow-lg shadow-blue-950" href="https://github.com/loganjaymes/TRIFECTA">Repository</a>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>

          {/* btm */}
          <div className="flex gap-8 h-full items-center justify-center">
            {/* 6 degrees */}
            <div className="[perspective:15000px]">
              <div className="flex max-w-lg min-h-full">
                <Card className="bg-slate-gray-950 text-zinc-300 overflow-y-auto">
                  <CardHeader>
                    <CardTitle className="text-3xl">Six Degrees</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow gap-4 w-full items-center">
                    <Image className="rounded-md" src="/proj/sixdeg.png" width={600} height={200} alt="A screenshot displaying some connections between the movies Dune and Ponyo"/>
                    {/* BLURB FIXME */}
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-row gap-4 w-full justify-between items-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="hover:cursor-pointer">Tech Stack & Info</Button>
                        </DialogTrigger>
                        <DialogContent className="border-blue-950 bg-zinc-950 border-2 text-zinc-300">
                          <DialogHeader>
                            <DialogTitle>Six Degrees</DialogTitle>
                            <DialogDescription className="text-zinc-400">
                              This project aims to emulate the idea that no two humans currently alive are separated by more than 6 degrees. 
                              In the same way, we hypothesize that no two films made after the 2000s have more than 6 degrees of connections between shared actors. 
                              Meaning, any film within our dataset should be able to link to another based on actors within 6 nodes.
                              <br />
                              &nbsp;
                              <br />
                              Created with
                              <div className="flex flex-row p-1 gap-2">
                                <Button size="icon" className="rounded-md overflow-auto">
                                  <Image className="invert" src="/techicons/svelte.png" width={100} height={100} alt="svelte" />
                                </Button>
                                <Button size="icon" className="rounded-md overflow-auto">
                                  <Image src="/techicons/tailwind.svg" width={100} height={100} alt="tailwind css" />
                                </Button>
                                <Button size="icon" className="rounded-md overflow-auto">
                                  <Image src="/techicons/skeletonui.png" width={100} height={100} alt="skeleton ui" />
                                </Button>
                                <Button size="icon" className="rounded-md overflow-auto">
                                  <Image src="/techicons/rust.svg" width={100} height={100} alt="rust" />
                                </Button>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                      <a className="text-blue-300 hover:underline duration-100 hover:shadow-lg shadow-blue-950" href="https://github.com/AlexanderWangY/movie-linker">Repository</a>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* SEES Signup */}
            <div className="[perspective:15000px]">
              <div className="flex max-w-lg min-h-full">
                <Card className="bg-slate-gray-950 text-zinc-300 overflow-y-auto">
                  <CardHeader>
                    <CardTitle className="text-3xl">SEES Sign-Up</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow gap-4 w-full items-center">
                    <Image className="rounded-md" src="/proj/seeswip.png" width={600} height={200} alt="A WIP image showing a low poly blender rig"/>
                    {/* BLURB FIXME */}
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-row gap-4 w-full justify-between items-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="hover:cursor-pointer">Tech Stack & Info</Button>
                        </DialogTrigger>
                        <DialogContent className="border-blue-950 bg-zinc-950 border-2 text-zinc-300">
                          <DialogHeader>
                            <DialogTitle>SEES Sign-Up</DialogTitle>
                            <DialogDescription className="text-zinc-400">
                              A work-in-progress web app composed of things I already know, things I want to learn, and things I think are cool. 
                              With that being said, it is a project based on one of my interests, the Persona series, that combines all of the above.
                              As of right now, I am currently in the pre-production stage of the web app, however, I plan to use it as a learning experience more than anything,
                              as it is forcing me to learn a handful of different coding and art mediums.
                              <br />
                              &nbsp;
                              <br />
                              Created with (subject to change)
                              <div className="flex flex-row p-1 gap-2">
                                <Button size="icon" className="rounded-md overflow-auto">
                                  <Image className="invert" src="/techicons/threejs.png" width={100} height={100} alt="three js" />
                                </Button>
                                <Button size="icon" className="rounded-md overflow-auto">
                                  <Image src="/techicons/tailwind.svg" width={100} height={100} alt="tailwind css" />
                                </Button>
                                <Button size="icon" className="rounded-md overflow-auto">
                                  <Image src="/techicons/blender.png" width={100} height={100} alt="blender" />
                                </Button>
                                <Button size="icon" className="rounded-md overflow-auto">
                                  <Image src="/techicons/firebase.png" width={100} height={100} alt="firebase and firestore" />
                                </Button>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                      <a className="text-blue-300 hover:underline duration-100 hover:shadow-lg shadow-blue-950" href="">No Repository Yet!</a>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>

        </div>
        {/* end projects */}

      </div>
    </div>
  )
}