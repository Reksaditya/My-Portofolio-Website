import { About } from "./sections/about"
import { Archievement } from "./sections/archievement"
import { Contact } from "./sections/contact"
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
      <Archievement />
      <Contact /> 
    </main>
  )
}