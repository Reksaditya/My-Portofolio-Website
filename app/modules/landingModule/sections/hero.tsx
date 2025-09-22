import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import { Navbar } from "~/components/navbar"
import { motion } from "framer-motion"
import { Button } from "~/components/ui/button"

export const Hero = () => {
  return (
    <section>
      <Navbar />
      <div className="flex items-center justify-between max-w-screen">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <motion.h3 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5
              }}
              className="text-primary font-semibold text-3xl"
            >
              Hello There!
            </motion.h3>
            <h1 className="font-bold text-6xl max-w-[600px]">I'm Dewa Gede Reksa Parama Aditya a <span className="text-primary">Front-End Developer</span></h1>
          </div>
          <div className="text-primary flex gap-5">
            <div className="bg-white p-3 rounded-full cursor-pointer" >
              <Instagram className="w-10 h-10" />
            </div>
            <div className="bg-white p-3 rounded-full cursor-pointer" >
              <Linkedin className="w-10 h-10" />
            </div>
            <div className="bg-white p-3 rounded-full cursor-pointer" >
              <Github className="w-10 h-10" />
            </div>
            <div className="bg-white p-3 rounded-full cursor-pointer" >
              <Mail className="w-10 h-10" />
            </div>
          </div>
          <Button variant={"default"} className="bg-primary w-60 py-5 rounded-full font-semibold cursor-pointer hover:bg-secondary transition duration-500 active:scale-95" >
            View My Resume
          </Button>
        </div>
        <div>
          {/* <div className="outline-2 ring-2 ring-primary outline-primary rounded-full w-fit">
            <div className="bg-white opacity-50 px-5 py-2 rounded-full">
              <p className="text-primary font-semibold">Web Developer</p>
            </div>
          </div> */}
          <img src="/public/reksa.png" alt="reksa" width={600} height={600} />
        </div>
      </div>
    </section>
  )
}