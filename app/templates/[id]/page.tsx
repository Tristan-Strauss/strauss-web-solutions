import { notFound } from "next/navigation"
import Link from "next/link"
import { StarterTemplate } from "@/components/templates/starter-template"
import { BusinessTemplate } from "@/components/templates/business-template"
import { CommerceTemplate } from "@/components/templates/commerce-template"
import { CreativeTemplate } from "@/components/templates/creative-template"
import { MinimalTemplate } from "@/components/templates/minimal-template"
import { ModernTemplate } from "@/components/templates/modern-template"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const templates: Record<string, React.ComponentType> = {
  starter: StarterTemplate,
  business: BusinessTemplate,
  commerce: CommerceTemplate,
  creative: CreativeTemplate,
  minimal: MinimalTemplate,
  modern: ModernTemplate,
}

const templateNames: Record<string, string> = {
  starter: "Starter",
  business: "Business Pro",
  commerce: "Commerce",
  creative: "Creative",
  minimal: "Minimal",
  modern: "Modern",
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  
  const TemplateComponent = templates[id]
  
  if (!TemplateComponent) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Preview Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-foreground text-background py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-background hover:text-background/80 hover:bg-background/10" asChild>
              <Link href="/#templates">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Templates
              </Link>
            </Button>
            <span className="text-sm text-background/60">
              Previewing: <span className="text-background font-medium">{templateNames[id]}</span>
            </span>
          </div>
          <Button size="sm" className="bg-background text-foreground hover:bg-background/90" asChild>
            <Link href="/#contact">
              Use This Template
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Template Content */}
      <div className="pt-12">
        <TemplateComponent />
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return [
    { id: "starter" },
    { id: "business" },
    { id: "commerce" },
    { id: "creative" },
    { id: "minimal" },
    { id: "modern" },
  ]
}
