import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function gallery() {
  return (
    <div className="container mx-auto w-full h-full items-center justify-start pt-16">
      <div className="flex flex-col text-center h-full text-zinc-300 gap-2">
        {/* header */}
        <div className="pb-8">
          <h1 className="text-5xl">art & music</h1>
          <p>my works.</p>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-10 justify-between">  

            <div className="flex flex-col items-center gap-10 h-full">
              <h2 className="text-2xl">art</h2>
              <div className="flex flex-col gap-8">
                <a href="https://skfb.ly/pDQpF" target="_blank">
                  <Image src="/gallery/dim.webp" width={600} height={300} alt="room diorama"/>
                </a>

                <Image src="/gallery/zag.png" width={600} height={600} alt="WIP sculpt"/>

                <Image src="/gallery/image.webp" width={600} height={300} alt="AES shirt I designed"/>
              
                <Image src="/gallery/hs.webp" width={400} height={300} alt="old drawings from highschool"/>

                <div className="flex flex-row gap-2">
                  <Image src="/gallery/pfp.webp" width={200} height={300} alt="logo I created for my band"/>
                  <Image className="w-auto" src="/gallery/babysfirst.webp" width={300} height={300} alt="first blender project"/>
                </div>
              </div>
          </div>
          
          <div className="flex flex-col items-center gap-10 h-full">
            <h2 className="text-2xl">music</h2>
            {/* make links dialog => yt + bandcamp */}
            <div className="flex flex-col gap-8 items-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/C_TJbIHzkGs?si=pxdeDuDcGvxLMNc1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
                <div className="flex flex-row gap-8">
                  <Button asChild size="icon-lg" className="transition-shadow ease-in-out duration-100 hover:opacity-50 hover:shadow-lg shadow-blue-950">
                    <a href="https://www.youtube.com/@loganjaymes" target="_blank">
                      <Image src="/ico/yt.png" width={100} height={100} alt="youtube" />
                    </a>
                  </Button>

                  <Button asChild size="icon-lg" className="transition-shadow ease-in-out duration-100 hover:opacity-50 hover:shadow-lg shadow-blue-950">
                    <a href="https://courier7.bandcamp.com/" target="_blank">
                      <Image src="/ico/bc.png" width={100} height={100} alt="youtube" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>  
          </div>

        </div>
      
      </div>
    </div>
  )
}