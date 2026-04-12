import { Package, Layout, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Choose a Package",
    description:
      "Select the package that best fits your business needs and budget. Not sure? We can help you decide.",
  },
  {
    number: "02",
    icon: Layout,
    title: "Pick a Template",
    description:
      "Browse our template gallery and choose a design that suits your industry. We&apos;ll customize it for you.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "We Launch Your Site",
    description:
      "We add your content, images, and branding, then launch your website — typically within 1-2 weeks.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Getting your business online is simple. Here&apos;s our straightforward 3-step process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-border" />
              )}

              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary mb-6">
                  <step.icon className="h-10 w-10 text-foreground" />
                </div>
                <span className="absolute top-0 right-1/2 translate-x-16 -translate-y-2 text-xs font-bold text-muted-foreground bg-background px-2">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
