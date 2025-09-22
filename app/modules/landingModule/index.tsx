import { About } from "./sections/about"
import { Experience } from "./sections/experience"
import { Hero } from "./sections/hero"
import { Projects } from "./sections/projects"
import { Skills } from "./sections/skills"

export const LandingPage = () => {
  return (
    <main className="bg-background px-28">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </main>
  )
}