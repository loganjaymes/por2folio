import Image from "next/image";
import { Spotify } from 'react-spotify-embed';

export default function now() {
  return (
    <div className="container mx-auto w-full h-full items-center justify-start pt-16">
      <div className="flex flex-col text-center h-full text-zinc-300 gap-2">
        <div className="pb-8 gap-2">
          <h1 className="text-5xl">now</h1>
          <p>Last updated October 10th, 2025.</p>
          <a href="https://nownownow.com/about" className="opacity-25 hover:underline">What am I?</a>
        </div>

        <div className="flex flex-col gap-8 px-16 text-lg">
          {/* idk if i like px */}
          <div>
            <h2 className="text-3xl">goals...</h2>
            <div className="flex flex-row text-left items-end p-4 gap-4 gap-x-10">
              <Image src="/goals.png" alt="list of goals for the fall" width={350} height={400} />
              <div className="flex flex-col gap-4">
                <p>
                  If you remember my list of goals from the summer, I created another for this fall. A lot of them are repeated because I believe they're things I should continue to shoot for,
                  like projects, leetcode, and hobbies (fe. lifting, boxing, and music).
                </p>
                <p>
                  The ones I want to complete the most this time around are securing an internship/co-op to further my development skills, and my hobby-oriented goals (such as benching 185lbs,
                  completing a muscle up, and releasing a song).
                </p>
                <p>I don't have a deadline yet, but I'm thinking sometime in mid-December.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl">projects...</h2>
            <div className="flex flex-col text-left p-4 gap-4">
              <p>
                Right now, I have a handful of projects I plan on working on. 
              </p>
              <p>
                Since I've become more interested in lower level development as a result of OS, I've began to take more interest in using C rather than C++.
                My first project I'm making is a Chip8 emulator so I can 1. build something actually functional and not a simple CLI program, and 2. so I can better understand how my code communicates with the hardware it's running on. 
              </p>
              <p>
                As for web development, I still plan on working on SEES Signup (name tentative) because I want to be confident in my ability to connect the front and back end of applications.
                That's on hold though for now, since I want to better plan the back end portion of the project as it's my first time doing back end completely by myself.
              </p>
              <p>
                I also plan to purchase an Arduino to continue making the MIDI drumkit I was talking about over the summer. 
                I put off purchasing one because I thought I might be able to get one through my university for cheaper (or even free...), but I think I'm going to bite the bullet and drop the ~$15 it costs lol.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl">music...</h2>
            <div className="flex flex-row text-left p-4 gap-4">
              <Image className="flex" src="/blog/yt.png" alt="screenshot of my youtube page" width={1000} height={400} />
              <div className="flex flex-col gap-4">
                <p>
                  I started uploading some covers to&nbsp;
                  <a href="https://www.youtube.com/@loganjaymes" className="text-blue-300 hover:underline duration-100 hover:shadow-lg shadow-blue-950">Youtube</a>
                  . So far, I've only posted ones from my Instagram stories, but I'm looking to upload more. I plan on doing either Demolition Lovers by MCR next, or 
                  a video of my band playing.
                </p>
                <p>Also, here's my monthly Spotify playlist:</p>
                <Spotify className="w-full" link="https://open.spotify.com/playlist/5ReSaRBLtJeNAQpjGRDNQX?si=fede9bf72ebc417c" />
              </div>
            </div>
          </div>

          {/* <div>
            <h2 className="text-3xl">gym...</h2>
            <div className="flex flex-col text-left p-4 gap-4">
              <p>
                I recently changed my split from PPL (push-pull-legs) to PPC (push-pull-calisthenics) because I missed doing calisthenics. 
                Basically, I merged my (already minimal) legs split to my push and pull days.
              </p>
              <p>
                Hoping to work up to a muscle up (obviously), but some other large goals include a handstand, planche, and one-arm pull up. I think the latter will take the longest, though.
              </p>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  )
}