import { motion } from "framer-motion"
import { useState } from "react"

interface NavbarMenu {
  menu: string,
  link: string
}

const NavbarProps: NavbarMenu[] = [
  {
    menu: "About",
    link: ""
  },
  {
    menu: "Skills",
    link: ""
  },
  {
    menu: "Projects",
    link: ""
  },
  {
    menu: "Contact",
    link: ""
  }
]

export const Navbar = () => {
  let title = "{/} Reksa"
  const [underlineVisible, setUnderlineVisible] = useState(false)

  return (
    <nav className="bg-background flex justify-between py-5 items-center">
      <div>
        <h1 className="text-primary font-semibold text-3xl">{title}</h1>
      </div>
      <div className="flex gap-20">
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
              className={`list-none cursor-pointer hover:`}
            >
              {item.menu}
              {underlineVisible && (
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  className={`block transition-all duration-500 h-0.5 bg-primary max-w-full`}
                />
              )}
            </motion.li>
          )
        })}
      </div>
    </nav>
  )
}