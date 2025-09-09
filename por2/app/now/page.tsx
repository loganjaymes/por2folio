import Image from "next/image";
import { Spotify } from 'react-spotify-embed';

export default function now() {
  return (
    <div className="container mx-auto w-full h-full items-center justify-start pt-16">
      <div className="flex flex-col text-center h-full text-zinc-300 gap-2">
        <div className="pb-8 gap-2">
          <h1 className="text-5xl">now</h1>
          <p>Last updated September 9th, 2025.</p>
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
                  like applications, leetcode, and hobbies (fe. lifting, boxing, and music).
                </p>
                <p>
                  The ones I want to complete the most this time around are securing an internship/co-op to further my development skills, and my hobby-oriented goals (such as benching 185lbs,
                  completing a muscle up, and releasing a song).
                </p>
                <p>
                  While I don't think mass applying is inherently a bad thing, I still plan on only applying to internships that actually interest me, and hitting my goal of 100 from there.
                </p>
                {/* <ul className="flex flex-col list-none list-inside pl-6 gap-2">
                  <li>... a song, because that's long overdue for how long I've been playing instruments, performing, and recording my own music. </li>
                  <li>... remaking this website, because my previous one was in raw HTML/CSS (maybe I'll include some pictures of it later, lol) 
                    and I need to fully throw myself into actual frameworks for what I want to eventually accomplish with web development.</li>
                  <li>... and 100 leetcodes because I'm internship-less and need to better prepare myself for interviews.
                    As of a few days ago, I committed myself to doing an hour of leetcode per day, so hopefully the 100 come within time. </li>
                </ul> */}
                <p>I don't have a deadline yet, but I'm thinking sometime in mid-December.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl">projects...</h2>
            <div className="flex flex-col text-left p-4 gap-4">
              <p>
                While I initially wanted to create a hardware-focused project (a MIDI drumkit), I decided it would be a better use of my time now to really hone in on web-development.
              </p>
              <p>
                With that being said, I'm currently working on creating a project that combines fullstack web development, 3D-rendering and modelling, and Persona (the videogame franchise).
                I'm using Blender, Three.js, and GoogleAuth to do so. 
              </p>
              <div className="flex flex-row justify-around items-end">
                <p>Right now, I have most of the rig done, but here's an older picture from some progress pictures I took.</p>
                <Image className="flex" src="/blndr.jpg" alt="semi-constructed blender rig of a low-poly leg" width={400} height={400} />
              </div>
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
                <Spotify className="w-full" link="https://open.spotify.com/playlist/3PngZsvUIXx2NAYZUc22iz?si=339cc4b1b4454904" />
              </div>
            </div>
          </div>

          <div>
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
          </div>

        </div>
      </div>
    </div>
  )
}