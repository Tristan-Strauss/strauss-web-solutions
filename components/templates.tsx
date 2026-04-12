import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Layout, Briefcase, ShoppingBag, Palette, FileText, Megaphone } from "lucide-react"

const templates = [
  {
    id: "starter",
    name: "Starter",
    category: "Simple",
    icon: Layout,
    description: "A clean, minimal template perfect for small businesses just getting started online.",
    primaryColor: "bg-slate-700",
  },
  {
    id: "business",
    name: "Business Pro",
    category: "Professional",
    icon: Briefcase,
    description: "A professional template with sections for services, team, and testimonials.",
    primaryColor: "bg-blue-600",
  },
  {
    id: "commerce",
    name: "Commerce",
    category: "E-Commerce",
    icon: ShoppingBag,
    description: "Showcase your products with a modern storefront layout and product galleries.",
    primaryColor: "bg-emerald-600",
  },
  {
    id: "creative",
    name: "Creative",
    category: "Portfolio",
    icon: Palette,
    description: "Bold and artistic design perfect for creatives and agencies.",
    primaryColor: "bg-purple-600",
  },
  {
    id: "minimal",
    name: "Minimal",
    category: "Simple",
    icon: FileText,
    description: "Ultra-clean design with focus on typography and whitespace.",
    primaryColor: "bg-neutral-800",
  },
  {
    id: "modern",
    name: "Modern",
    category: "Professional",
    icon: Megaphone,
    description: "Contemporary design with bold sections and engaging animations.",
    primaryColor: "bg-indigo-600",
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
            Browse our collection of professionally designed templates. We&apos;ll customize it with your brand, content, and images.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className="group bg-background rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Template Preview Card */}
              <div className={`${template.primaryColor} p-8 relative`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                  <template.icon className="h-10 w-10 mb-4" />
                  <h4 className="text-xl font-bold mb-1">{template.name}</h4>
                  <p className="text-sm text-white/80">Professional Design</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground">{template.name}</h3>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {template.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {template.description}
                </p>
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
