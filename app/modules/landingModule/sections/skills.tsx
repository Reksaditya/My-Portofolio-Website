interface skillProps {
  skill: string,
  name: string,
  size: number
}

const skillItem:skillProps[] = [
  {
    skill: "html5",
    name: "HTML5",
    size: 125
  },
  {
    skill: "css",
    name: "CSS",
    size: 100
  },
  {
    skill: "javascript",
    name: "JavaScript",
    size: 95
  },
  {
    skill: "typescript",
    name: "TypeScript",
    size: 95 
  },
  {
    skill: "react",
    name: "React",
    size: 100
  }, 
  {
    skill: "tailwind",
    name: "Tailwind",
    size: 100
  },
  {
    skill: "bootstrap",
    name: "Bootstrap",
    size: 100
  },
  {
    skill: "git",
    name: "Git",
    size: 100
  },
  {
    skill: "golang",
    name: "Golang",
    size: 150
  },
  {
    skill: "nodejs",
    name: "NodeJS",
    size: 100

  },
  {
    skill: "expressjs",
    name: "ExpressJS",
    size: 100

  },
  {
    skill: "nextjs",
    name: "NextJS",
    size: 100

  },
  {
    skill: "reactrouter",
    name: "React-Router",
    size: 120

  },
  {
    skill: "vercel",
    name: "Vercel",
    size: 100

  },
  {
    skill: "prismadb",
    name: "PrismaDB",
    size: 100
  },
  {
    skill: "postgresql",
    name: "PostgreSQL",
    size: 90
  },
  {
    skill: "shadcnui",
    name: "Shadcn UI",
    size: 90
  },
  {
    skill: "framer",
    name: "Framer Motion",
    size: 90
  }
]

export const Skills = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 gap-16">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="font-semibold text-primary flex justify-center text-4xl">My Skills</h2>
        <hr className="border-2 border-primary w-24" />
      </div>
      <div className="grid grid-cols-7 gap-16 bg-white p-10 rounded-2xl items-center">
        {skillItem.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center"
            >
              <img src={`/${item.skill}.png`} alt={item.skill} width={item.size} />
            </div>
          )
        })}
        <div>
        </div>
      </div>
    </section>
  )
}