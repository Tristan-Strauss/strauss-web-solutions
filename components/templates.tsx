import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Layers, Building2 } from "lucide-react"

const templates = [
  {
    id: "single-page",
    name: "Single Page",
    package: "Starter Package",
    price: "R2,500",
    icon: FileText,
    description: "Everything you need on one professional page. Perfect for tradespeople and small businesses wanting a simple online presence.",
    features: ["Hero section", "About section", "Services list", "Contact form", "Footer"],
    primaryColor: "bg-slate-700",
  },
  {
    id: "multi-page",
    name: "Multi Page",
    package: "Business Package",
    price: "R5,500",
    icon: Layers,
    description: "A complete 3-5 page website with dedicated sections for your services, about, and contact. Great for growing businesses.",
    features: ["Home page", "About page", "Services page", "Contact page", "Optional gallery"],
    primaryColor: "bg-teal-600",
  },
  {
    id: "premium",
    name: "Premium",
    package: "Premium Package",
    price: "R9,500",
    icon: Building2,
    description: "A full-featured 5+ page website with advanced sections, testimonials, team pages, and more. For businesses ready to stand out.",
    features: ["5+ custom pages", "Team section", "Testimonials", "Project gallery", "Blog ready"],
    primaryColor: "bg-amber-600",
  },
]

export function Templates() {
  return (
    <section id="templates" className="py-20 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Choose Your Template
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Each package comes with a professionally designed template. Preview below and we&apos;ll customize it with your brand, content, and images.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="group bg-background rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Template Preview Card */}
              <div className={`${template.primaryColor} p-8 relative`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                  <template.icon className="h-10 w-10 mb-4" />
                  <h4 className="text-xl font-bold mb-1">{template.name}</h4>
                  <p className="text-sm text-white/80">{template.package}</p>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground">{template.name}</h3>
                  <span className="text-sm font-bold text-foreground">
                    {template.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {template.description}
                </p>
                
                <ul className="space-y-2 mb-6 flex-1">
                  {template.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/templates/${template.id}`}>
                    Preview Template
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
