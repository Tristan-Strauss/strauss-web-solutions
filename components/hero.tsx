import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, DollarSign, Server, Building2 } from "lucide-react"

const valueProps = [
  { icon: Zap, label: "Fast Turnaround" },
  { icon: DollarSign, label: "Affordable Pricing" },
  { icon: Server, label: "Hosting Included" },
  { icon: Building2, label: "Built for Small Business" },
]

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Now accepting new clients
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Affordable Websites for Growing Businesses
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional website design, development, and hosting — all in one simple package. Get your business online without the complexity.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#pricing" className="flex items-center gap-2">
                View Packages
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#templates">See Templates</a>
            </Button>
          </div>
        </div>

        {/* Value Props */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {valueProps.map((prop) => (
            <div
              key={prop.label}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <prop.icon className="h-6 w-6 text-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {prop.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
