import { About } from "./sections/about"
import { Hero } from "./sections/hero"
import { Skills } from "./sections/skills"

export const LandingPage = () => {
  return (
    <main className="bg-background px-28">
      <Hero />
      <About />
      <Skills />
    </main>
  )
}