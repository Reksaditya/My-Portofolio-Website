import { motion } from 'framer-motion'

export const About = () => {
  return (
    <section id="about" className="flex flex-col justify-center items-center gap-10 py-10">
      <motion.div 
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: 100 }}
        transition={{
          duration: 0.5
        }}
        className="flex flex-col md:gap-2 items-center justify-center"
      >
        <h2 className="font-semibold text-primary flex justify-center text-2xl md:text-4xl">About Me</h2>
        <hr className="border-2 border-primary w-20 md:w-28" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5
        }}
      >
        <h3 className="text-sm md:text-xl max-w-5xl text-center">A first-year <span className="text-yellow-500 font-semibold">Informatics</span> student at <span className="text-primary font-semibold">Telkom University</span> passionate about Software Development especially at Front-End Developer. Have a high motivation and entushiasm for learning, and can work well in a team. Committed to continuously improving skill especially at Software Development.</h3>
      </motion.div>
    </section>
  )
}