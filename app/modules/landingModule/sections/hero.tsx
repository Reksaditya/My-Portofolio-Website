import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import { Navbar } from "~/components/navbar"
import { motion } from "framer-motion"
import { Button } from "~/components/ui/button"

export const Hero = () => {
  return (
    <section>
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-screen">
        <div className="relative flex lg:hidden">
          <motion.div
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.8,
            }}
            className="outline-2 ring-2 ring-primary outline-primary w-fit bg-white/60 px-5 py-2 rounded-full absolute left-4 bottom-40"
          >
            <p className="text-primary text-sm font-semibold">Web Developer</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="outline-2 ring-2 ring-primary outline-primary w-fit bg-white/60 px-5 py-2 rounded-full absolute right-2 bottom-20"
          >
            <p className="text-primary text-sm font-semibold">Front-End Developer</p>
          </motion.div>
          <img src="/reksa.png" alt="reksa" width={600} height={600} />
        </div>
        <div className="flex flex-col gap-5 items-center lg:items-start">
          <div className="flex flex-col lg:gap-2">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5
              }}
              className="text-primary font-semibold text-xl lg:text-3xl text-center lg:text-left"
            >
              Hello There!
            </motion.h3>
            <h1 className="font-bold text-center lg:text-left text-3xl lg:text-6xl max-w-[600px]">I'm Dewa Gede Reksa Parama Aditya a <span className="text-primary">Front-End Developer</span></h1>
          </div>
          <div className="text-primary flex gap-5">
            <motion.div
              initial={{ opacity: 0, rotate: -180, translateX: -50 }}
              animate={{ opacity: 1, rotate: 0, translateX: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.5
              }}
              className="bg-white p-3 rounded-full cursor-pointer"
            >
              <a href="https://www.instagram.com/gede.reksa/"><Instagram className="md:w-10 md:h-10" /></a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: -180, translateX: -50 }}
              animate={{ opacity: 1, rotate: 0, translateX: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.5
              }}
              className="bg-white p-3 rounded-full cursor-pointer"
            >
              <a href="https://www.linkedin.com/in/dewa-gede-reksa-parama-aditya-a621b8323/"><Linkedin className="md:w-10 md:h-10" /></a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: -180, translateX: -50 }}
              animate={{ opacity: 1, rotate: 0, translateX: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5
              }}
              className="bg-white p-3 rounded-full cursor-pointer"
            >
              <a href="https://github.com/Reksaditya"><Github className="md:w-10 md:h-10" /></a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: -180, translateX: -50 }}
              animate={{ opacity: 1, rotate: 0, translateX: 0 }}
              transition={{
                duration: 0.5
              }}
              className="bg-white p-3 rounded-full cursor-pointer"
            >
              <a href="mailto:reksaparamaaditya@gmail.com"><Mail className="md:w-10 md:h-10" /></a>
            </motion.div>
          </div>
          <Button variant={"default"} className="bg-primary w-60 py-5 rounded-full font-semibold cursor-pointer hover:bg-secondary transition duration-500 active:scale-95 h-16" >
            View My Resume
          </Button>
        </div>
        <div className="relative hidden lg:flex">
          <motion.div
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.8,
            }}
            className="outline-2 ring-2 ring-primary outline-primary w-fit bg-white/60 px-5 py-2 rounded-full absolute left-14 bottom-68"
          >
            <p className="text-primary font-semibold">Web Developer</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="outline-2 ring-2 ring-primary outline-primary w-fit bg-white/60 px-5 py-2 rounded-full absolute right-4 bottom-48"
          >
            <p className="text-primary font-semibold">Front-End Developer</p>
          </motion.div>
          <img src="/reksa.png" alt="reksa" width={600} height={600} />
        </div>
      </div>
    </section>
  )
}