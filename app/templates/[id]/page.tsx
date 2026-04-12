import { notFound } from "next/navigation"
import Link from "next/link"
import { SinglePageTemplate } from "@/components/templates/single-page-template"
import { MultiPageTemplate } from "@/components/templates/multi-page-template"
import { PremiumTemplate } from "@/components/templates/premium-template"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const templates: Record<string, React.ComponentType> = {
  "single-page": SinglePageTemplate,
  "multi-page": MultiPageTemplate,
  "premium": PremiumTemplate,
}

const templateInfo: Record<string, { name: string; package: string }> = {
  "single-page": { name: "Single Page", package: "Starter Package - R2,500" },
  "multi-page": { name: "Multi Page", package: "Business Package - R5,500" },
  "premium": { name: "Premium", package: "Premium Package - R9,500" },
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

  const info = templateInfo[id]

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
            <span className="hidden sm:inline text-sm text-background/60">
              Previewing: <span className="text-background font-medium">{info.name}</span>
              <span className="ml-2 text-background/40">({info.package})</span>
            </span>
          </div>
          <Button size="sm" className="bg-background text-foreground hover:bg-background/90" asChild>
            <Link href="/#contact">
              Get This Package
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
    { id: "single-page" },
    { id: "multi-page" },
    { id: "premium" },
  ]
}
