import { Card, CardContent, CardDescription, CardHeader } from "~/components/ui/card"

interface archievementProps {
  title: string,
  description: string,
  image: string
}

const archevementItems: archievementProps[] = [
  {
    title: "5th Place at Bedah Data APBD 2023 by Kementrian Keuangan RI",
    description: "A competition consisting of three selection stages. In stage 1, we must pass the written exam passing grades. In the semifinal stage, we are asked to make a graphic video. And the final was held on 18-19 October 2023 at the Ministry of Finance of the Republic of Indonesia, Jakarta, Indonesia. In the final, there are four competition sessions, i.e. Quiz, Excel E-Sport, Presentation, and Debate.",
    image: "public/bd23.JPG"
  },
  {
    title: "Semifinal at Liga Digital Nasional 2024 in Field Web Dev by Skilvul",
    description: "Digital competition for finding digital talent. There have three stage competition, i.e. elimination, semifinal, and final. In elimination, i asked to making an idea to implemented on semifinals. In elimination stage, 12 people were taken to advanced to semifinal. At semifinals there is best of 3 people were taken to final stage. I placed in 4th at semifinal, so i didn't advanced to final stage.",
    image: "public/ldn24.png"
  },
  {
    title: "YSC NTB 2023 in Field Robo Maker by BPSDMD NTB",
    description: "A bootcamp organized by BPSDM NTB and UITM Malaysia. Participants were quarantined for three days to receive robotics training and were given a final project to compete in at the end of the event.",
    image: "public/ysc23.png"
  },
  {
    title: "YSC NTB 2024 in Field AI Innovate by BPSDMD NTB",
    description: "A bootcamp organized by BPSDM NTB and UITM Malaysia. Participants were quarantined for three days to receive AI training and were given a final project, the final project will be presented at the end of event.",
    image: "public/ysc24.JPG"
  }
]

export const Archievement = () => {
  return (
    <section className="py-10 flex flex-col jsutify-center items-center gap-10">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="font-semibold text-primary flex justify-center text-4xl">Archievement</h2>
        <hr className="border-2 border-primary w-32" />
      </div>
      <div className="flex flex-col gap-5">
        {archevementItems.map((item, index) => {
          return (
            <Card className="w-full" key={index}>
              <CardContent className="flex gap-10">
                <img src={item.image} alt={item.title} width={250} />
                <div className="w-full flex-col gap-5">
                  <CardHeader className="font-semibold px-0">
                    {item.title}
                  </CardHeader>
                  <CardDescription className="text-justify">
                    {item.description}
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}