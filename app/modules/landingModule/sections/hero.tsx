import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import { Navbar } from "~/components/navbar"

export const Hero = () => {
  return (
    <section>
      <Navbar />
      <div className="flex items-center justify-between max-w-screen">
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-primary font-semibold text-3xl">Hello There!</h3>
            <h1 className="font-bold text-6xl max-w-[600px]">I'm Dewa Gede Reksa Parama Aditya a <span className="text-primary">Front-End Developer</span></h1>
          </div>
          <div className="text-primary flex gap-5">
            <div className="bg-white p-3 rounded-full" >
              <Instagram className="w-10 h-10"/>
            </div>
            <div className="bg-white p-3 rounded-full" >
              <Linkedin className="w-10 h-10" />
            </div>
            <div className="bg-white p-3 rounded-full" >
              <Github className="w-10 h-10" />
            </div>
            <div className="bg-white p-3 rounded-full" >
              <Mail className="w-10 h-10" />
            </div>
          </div>
          <button className="bg-primary w-60 py-5 rounded-full font-semibold cursor-pointer hover:bg-secondary transition duration-500 active:scale-95">
            View My Resume
          </button>
        </div>
        <div>
          {/* <div className="bg-white bg-opacity outline-2 outline-primary rounded-full w-fit">
            <p>Web Developer</p>
          </div> */}
          <img src="/public/reksa.png" width={600} height={600} />
        </div>
      </div>
    </section>
  )
}