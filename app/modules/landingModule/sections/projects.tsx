import { div } from "framer-motion/client"
import { Card, CardContent } from "~/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel"

interface projectsProps {
  name: string
  link: string
  size: number
  tech: string[]
}

const projectItems: projectsProps[] = [
  {
    name: "My Portofolio Website",
    link: "portofolio",
    size: 1010,
    tech: ["reactrouter", "shadcnui", "tailwind", "framer"]
  },
  {
    name: "Pemilos Smanika",
    link: "pemilos",
    size: 1000,
    tech: ["reactrouter", "shadcnui", "tailwind", "framer", "postgresql", "prismadb"]
  },
  {
    name: "Berjati Diri",
    link: "berjatidiri",
    size: 1000,
    tech: ["nextjs", "tailwind", "framer"]
  }
]

export const Projects = () => {
  return (
    <section className="py-10 flex flex-col jsutify-center items-center gap-10">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="font-semibold text-primary flex justify-center text-4xl">Featured Projects</h2>
        <hr className="border-2 border-primary w-40" />
      </div>
      <Carousel>
        <CarouselContent
          className=""
        >
          {projectItems.map((item, index) => {
            return (
              <CarouselItem key={index} className="basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center">
                      <img src={`public/${item.link}.png`} alt={item.name} width={item.size} />
                      <h2 className="font-semibold text-primary">{item.name}</h2>
                      <div className="flex gap-4   justify-center items-center pt-2">
                        {item.tech.map((tech, index) => {
                          return (
                            <div key={index}>
                              <img src={`public/${tech}.png`} alt={tech} width={25} />
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}