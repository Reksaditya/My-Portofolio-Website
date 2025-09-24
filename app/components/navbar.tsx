import { motion } from "framer-motion"
import { useState } from "react"
import { scroller } from 'react-scroll'

interface NavbarMenu {
  menu: string,
  link: string
}

const NavbarProps: NavbarMenu[] = [
  {
    menu: "About",
    link: "about"
  },
  {
    menu: "Skills",
    link: "skills"
  },
  {
    menu: "Projects",
    link: "projects"
  },
  {
    menu: "Contact",
    link: "contacts"
  }
]

export const Navbar = () => {
  let title = "{/} Reksa"

  return (
    <nav className="bg-background flex justify-between py-5 items-center">
      <div>
        <h1 className="text-center lg:text-left text-primary font-semibold text-3xl">{title}</h1>
      </div>
      <div className="gap-20 hidden lg:flex">
        {NavbarProps.map((item, index) => {
          return (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.5,
                type: 'spring',
                stiffness: 150,
                damping: 25
              }}
              onClick={() => {
                scroller.scrollTo(`#${item.link}`, {
                  duration: 500,
                  delay: 0,
                  smooth: 'easeInOut',
                });
              }}
              className={`list-none cursor-pointer hover:font-bold hover:text-primary transition duration-300`}
            >
              {item.menu}
            </motion.li>
          )
        })}
      </div>
    </nav>
  )
}