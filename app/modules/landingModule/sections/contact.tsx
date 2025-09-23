import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"

export const Contact = () => {
  return (
    <section className="py-10 flex flex-col jsutify-center items-center gap-10">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="font-semibold text-primary flex justify-center text-4xl">Contact Me</h2>
        <hr className="border-2 border-primary w-32" />
      </div>
      <form action="" className="w-full flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="w-1/2 flex flex-col gap-4">
            <Input type="text" placeholder="Name" className="h-12 text-black" />
            <Input type="email" placeholder="Email" className="h-12 text-black" />
            <Input type="text" placeholder="Subject"  className="h-12 text-black" />
          </div>
          <Textarea placeholder="Message" className="h-44 flex items-start justify-start text-black" />
        </div>
        <Button className="h-12 cursor-pointer">Submit</Button>
      </form>
    </section>
  )
}