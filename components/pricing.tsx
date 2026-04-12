import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const packages = [
  {
    name: "Starter",
    subtitle: "Single Page Website",
    price: "R2,500",
    description: "Perfect for small businesses or personal brands just getting started.",
    features: [
      "1-page scrolling website",
      "Basic design layout",
      "Contact form included",
      "Mobile responsive",
      "SSL certificate",
    ],
    popular: false,
  },
  {
    name: "Business",
    subtitle: "Multi-Page Website",
    price: "R5,500",
    description: "Ideal for growing businesses that need more pages and features.",
    features: [
      "3-5 pages included",
      "Enhanced design options",
      "About, Services, Contact pages",
      "Basic SEO structure",
      "Social media integration",
      "Mobile responsive",
    ],
    popular: true,
  },
  {
    name: "Premium",
    subtitle: "Advanced Website",
    price: "R9,500",
    description: "For established businesses requiring custom features and advanced design.",
    features: [
      "5+ pages included",
      "Custom design elements",
      "Forms, galleries, integrations",
      "Advanced SEO optimization",
      "Performance optimization",
      "Priority support",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Choose the package that fits your business needs. All packages include hosting at R150/month.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative p-8 rounded-2xl border ${
                pkg.popular
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-foreground text-background text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold">{pkg.name}</h3>
                <p
                  className={`text-sm ${
                    pkg.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {pkg.subtitle}
                </p>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-bold">{pkg.price}</span>
                <span
                  className={`text-sm ${
                    pkg.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {" "}
                  once-off
                </span>
              </div>

              <p
                className={`text-sm mb-6 ${
                  pkg.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`h-5 w-5 shrink-0 ${
                        pkg.popular ? "text-primary-foreground" : "text-foreground"
                      }`}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={pkg.popular ? "secondary" : "default"}
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>

              <p
                className={`text-xs text-center mt-4 ${
                  pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                + R150/month hosting
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
