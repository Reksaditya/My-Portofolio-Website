import { useEffect, useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import emailjs from 'emailjs-com'

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (e: any) => {
    console.log("CHANGE:", e.target.name, e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form)
    setIsLoading(true)

    emailjs.send(
      "service_wl26y6h",
      "template_7hiqi3c",
      {
        from_name: form.name,
        from_email: form.email,
        form_subject: form.subject,
        message: form.message,
      },
      "IwHDhbZjQPn6X-Gtd"
    )
      .then(() => {
        alert("Message Send!")
        setForm({ name: "", email: "", subject: "", message: "" })
        setIsLoading(false)
      })
      .catch(() => {
        alert("Failed to send message")
        setIsLoading(false)
      });
  }

  return (
    <section id="contact" className="py-10 flex flex-col jsutify-center items-center gap-10">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="font-semibold text-primary flex justify-center text-4xl">Contact Me</h2>
        <hr className="border-2 border-primary w-32" />
      </div>
      <form action="" className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <Input
              type="text"
              name="name"
              placeholder="Name"
              className="h-12 text-black"
              onChange={handleChange}
              value={form.name}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="h-12 text-black"
              onChange={handleChange}
              value={form.email}
              required
            />
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              className="h-12 text-black"
              onChange={handleChange}
              value={form.subject}
              required
            />
          </div>
          <Textarea
            placeholder="Message"
            name="message"
            className="h-44 flex items-start justify-start text-black"
            onChange={handleChange}
            value={form.message}
            required
          />
        </div>
        <Button 
          className="h-12 cursor-pointer" 
          type="submit"
          disabled={isDisabled}
        >
          {isLoading ? "Sending..." : "Submit"}
        </Button>
      </form>
    </section>
  )
}