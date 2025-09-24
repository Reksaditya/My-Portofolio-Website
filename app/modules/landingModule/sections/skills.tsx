import { motion } from 'framer-motion'

interface skillProps {
  skill: string,
  name: string,
  size: number
}

const skillItem: skillProps[] = [
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
    <section id="skills" className="flex flex-col items-center justify-center py-10 gap-16">
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: 100 }}
        transition={{
          duration: 0.5
        }}
        className="flex flex-col gap-1 md:gap-2 items-center justify-center"
      >
        <h2 className="font-semibold text-primary flex justify-center text-2xl md:text-4xl">My Skills</h2>
        <hr className="border-2 border-primary w-16 md:w-24" />
      </motion.div>
      <div className="grid grid-cols-3 lg:grid-cols-7 gap-16 bg-white p-10 rounded-2xl items-center">
        {skillItem.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 0.5
              }}
              className="flex justify-center items-center"
            >
              <img src={`/${item.skill}.png`} alt={item.skill} width={item.size} className="scale-90 lg:scale-100" />
            </motion.div>
          )
        })}
        <div>
        </div>
      </div>
    </section>
  )
}