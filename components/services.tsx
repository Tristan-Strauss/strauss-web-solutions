import { Palette, Code, Server } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Website Design",
    description:
      "Clean, modern designs tailored to your brand. We create visually appealing websites that capture your business identity and engage your customers.",
  },
  {
    icon: Code,
    title: "Website Development",
    description:
      "Fast, responsive, and mobile-friendly websites built with the latest technologies. Your site will work flawlessly on any device.",
  },
  {
    icon: Server,
    title: "Website Hosting",
    description:
      "Reliable hosting at R150/month per website. We handle all the technical details — security, updates, and performance — so you can focus on your business.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Everything You Need to Get Online
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From design to hosting, we provide a complete solution for your online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-foreground/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
