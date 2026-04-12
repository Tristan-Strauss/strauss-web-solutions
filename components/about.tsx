import { Users, Target, Heart } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "Small Business Focus",
    description: "We specialize in helping small businesses establish their online presence without the enterprise price tag.",
  },
  {
    icon: Target,
    title: "Simplicity First",
    description: "No jargon, no complexity. We make the process easy to understand and hassle-free for you.",
  },
  {
    icon: Heart,
    title: "Genuine Support",
    description: "We treat every client like a partner. Your success is our success, and we&apos;re here to help you grow.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Helping Small Businesses Succeed Online
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We started WebCraft because we saw too many small businesses struggling to get online. 
              Website design was either too expensive or too complicated, leaving many business owners frustrated.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Our mission is simple: provide affordable, professional websites that help local businesses 
              compete in the digital world. We handle all the technical details so you can focus on what 
              you do best — running your business.
            </p>
          </div>

          <div className="grid gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border"
              >
                <div className="w-12 h-12 shrink-0 rounded-lg bg-secondary flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
