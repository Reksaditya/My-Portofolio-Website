import { Github, Instagram, Linkedin, Mail } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-primary flex flex-col items-center justify-center py-10 gap-5">
      <div className="flex gap-10">
        <a href="https://www.instagram.com/gede.reksa/"><Instagram className="w-10 h-10" /></a>
        <a href="https://www.linkedin.com/in/dewa-gede-reksa-parama-aditya-a621b8323/"><Linkedin className="w-10 h-10" /></a>
        <a href="https://github.com/Reksaditya"><Github className="w-10 h-10" /></a>
        <a href="reksaparamaaditya@gmail.com"><Mail className="w-10 h-10" /></a>
      </div>
      <h5>©2025 Reksa Aditya. All Rights Reserved.</h5>
    </footer>
  )
}