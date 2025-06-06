import Image from "next/image";

export default function now() {
  return (
    <div className="container mx-auto w-full h-full items-center justify-start pt-16">
      <div className="flex flex-col text-center h-full text-zinc-300 gap-2">
        <div className="pb-8">
          <h1 className="text-5xl">now</h1>
          <p>Last updated June 6th, 2025.</p>
          <a href="https://nownownow.com/about" className="opacity-25 hover:underline">What am I?</a>
        </div>

        <div className="flex flex-col gap-8 px-16 text-lg">
          {/* idk if i like px */}
          <div>
            <h2 className="text-3xl">goals...</h2>
            <div className="flex flex-row text-left items-end p-4 gap-4 gap-x-10">
              <Image src="/goals.jpg" alt="list of goals for the summer" width={350} height={400} />
              <div className="flex flex-col gap-4">
                <p>
                  At the start of the summer, I made a list of goals I wanted to accomplish by the end (so, from May to early August). 
                  It's been about a month since then, and I've already accomplished two of them and am working towards 3 of them- that being a muscle up, 100 leetcodes, and remaking this website.
                </p>
                <p>
                  The ones I want to complete the most are releasing a song, remaking this website, and doing 100 leetcodes in that order-
                </p>
                <ul className="flex flex-col list-none list-inside pl-6 gap-2">
                  <li>... a song, because that's long overdue for how long I've been playing instruments, performing, and recording my own music. </li>
                  <li>... remaking this website, because my previous one was in raw HTML/CSS (maybe I'll include some pictures of it later, lol) 
                    and I need to fully throw myself into actual frameworks for what I want to eventually accomplish with web development.</li>
                  <li>... and 100 leetcodes because I'm internship-less and need to better prepare myself for interviews.
                    As of a few days ago, I committed myself to doing an hour of leetcode per day, so hopefully the 100 come within time. </li>
                </ul>
                <p>The deadline I'm giving myself is August 8th, since that's when the summer semester ends at UF.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl">projects...</h2>
            <div className="flex flex-col text-left p-4 gap-4">
              <p>
                Outside of this website, another project I have in the works is making a MIDI drumset. 
                My inspiration for this comes from the fact that most have horrible sound presets unless you're willing to shell out an egregious amount of money.
              </p>
              <p>
                By creating it myself, I would be able to:
              </p>
              <ul className="list-decimal list-inside pl-6">
                <li>load custom sounds, </li>
                <li>do it for far cheaper, </li>
                <li>use it to both record and re-learn the drums (they were my first instrument growing up!), and </li>
                <li>combine my love of music with technology.</li>
              </ul>
              <p>
                I hope to at least start it by the end of the month, as I've been busy between balancing school/projects, recovering a sleep schedule, and the gym.
                My goal is to have that be my "big" project for this summer, and finish it by the end of the semester.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl">music...</h2>
            <div className="flex flex-col text-left p-4 gap-4">
              <p>
                I'm trying to work on getting a band together with a friend. Right now we plan on learning&nbsp;
                <a href="https://www.youtube.com/watch?v=WumCI56iYUk&pp=ygUSYnVsbHMgaW4gdGhlIGJyb254" className="transition delay-25 hover:italic hover:opacity-50 hover:text-blue-100">Bulls in the Bronx by Pierce the Veil</a>
                , as well as&nbsp;
                <a href="https://www.youtube.com/watch?v=GItBDuFa-wk&pp=ygUJZGVnYXVzc2Vy" className="transition delay-25 hover:italic hover:opacity-50 hover:text-blue-100">Degausser by Brand New.</a>
              </p>
              <p>
                We're still looking for a drummer, though, and either a new guitarist or bassist.
                With that being said, hopefully we'll be able to perform in the fall, even if it's a small parking garage show or something.
              </p>
              <p>
                For myself though, one of my goals (as mentioned before) is to release a song of my own. 
                I want it to be Loathe/Pierce the Veil/Paramore esque, as that's what I'm most interested in making my music sound like.
                I definitely need to practice more regardless of releasing anything.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl">gym...</h2>
            <div className="flex flex-col text-left p-4 gap-4">
              <p>
                I recently changed my split from PPL (push-pull-legs) to PPC (push-pull-calisthenics) because I missed doing calisthenics. 
                Basically, I merged my (already minimal) legs split to my push and pull days- squats and calf raises on push, with hamstring curls and the adductor machine on pull.
                I cut leg extensions completely because I already have pretty big quads. 
              </p>
              <p>
                Hoping to work up to a muscle up (obviously), but some other large goals include a handstand, planche, one-arm pull up, and to get lean enough to see a bicep vein.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}