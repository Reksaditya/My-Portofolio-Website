import { About } from "./sections/about"
import { Hero } from "./sections/hero"

export const LandingPage = () => {
  return (
    <main className="bg-background px-28">
      <Hero />
      <About />
    </main>
  )
}