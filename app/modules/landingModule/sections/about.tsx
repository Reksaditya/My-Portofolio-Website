export const About = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-5 py-10">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h2 className="font-semibold text-primary flex justify-center text-5xl">About Me</h2>
        <hr className="border-2 border-primary w-36" />
      </div>
      <div>
        <h3 className="text-xl max-w-5xl text-center">A first-year <span className="text-yellow-500 font-semibold">Informatics</span> student at <span className="text-primary font-semibold">Telkom University</span> passionate about Software Development especially at Front-End Developer. Have a high motivation and entushiasm for learning, and can work well in a team. Committed to continuously improving skill especially at Software Development.</h3>
      </div>
    </section>
  )
}