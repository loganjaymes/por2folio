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
            <div className="flex flex-col text-left p-4 gap-4">
              <p>
                At the start of the summer, I made a list of goals I wanted to accomplish by the end (so, from May to early August). 
                It's been about a month since then, and I've already accomplished two of them and am working towards 3 of them.
              </p>
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
              </p>
              <p>
                For myself though, one of my goals 
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl">gym...</h2>
            <div className="flex flex-col text-left p-4 gap-4">
              <p>

              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}