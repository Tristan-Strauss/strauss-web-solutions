"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Wrench, Scissors, HardHat, Utensils, Dumbbell, Stethoscope } from "lucide-react"

const templates = [
  {
    id: 1,
    name: "Plumbing Services",
    category: "Home Services",
    icon: Wrench,
    description: "Professional plumbing and drainage solutions for residential and commercial properties.",
    primaryColor: "bg-blue-600",
    businessName: "FlowFix Plumbing",
    tagline: "Fast, Reliable Plumbing Solutions",
  },
  {
    id: 2,
    name: "Hair Salon",
    category: "Beauty & Wellness",
    icon: Scissors,
    description: "Modern hair styling and beauty treatments in a relaxing atmosphere.",
    primaryColor: "bg-pink-500",
    businessName: "Luxe Hair Studio",
    tagline: "Where Style Meets Elegance",
  },
  {
    id: 3,
    name: "Construction Company",
    category: "Building & Trade",
    icon: HardHat,
    description: "Quality construction and renovation services for homes and businesses.",
    primaryColor: "bg-amber-600",
    businessName: "BuildPro Construction",
    tagline: "Building Dreams Into Reality",
  },
  {
    id: 4,
    name: "Restaurant",
    category: "Food & Hospitality",
    icon: Utensils,
    description: "Delicious cuisine served in a welcoming family-friendly environment.",
    primaryColor: "bg-red-600",
    businessName: "The Garden Table",
    tagline: "Fresh Food, Great Atmosphere",
  },
  {
    id: 5,
    name: "Fitness Studio",
    category: "Health & Fitness",
    icon: Dumbbell,
    description: "Personal training and group fitness classes for all levels.",
    primaryColor: "bg-emerald-600",
    businessName: "Peak Performance Gym",
    tagline: "Transform Your Body & Mind",
  },
  {
    id: 6,
    name: "Medical Practice",
    category: "Healthcare",
    icon: Stethoscope,
    description: "Comprehensive healthcare services with a patient-first approach.",
    primaryColor: "bg-teal-600",
    businessName: "CareFirst Medical",
    tagline: "Your Health, Our Priority",
  },
]

export function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState<typeof templates[0] | null>(null)

  return (
    <section id="templates" className="py-20 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Choose Your Template
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Browse our collection of industry-specific templates. We&apos;ll customize it with your brand, content, and images.
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
                  <h4 className="text-xl font-bold mb-1">{template.businessName}</h4>
                  <p className="text-sm text-white/80">{template.tagline}</p>
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
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelectedTemplate(template)}
                >
                  Preview Template
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Template Preview Modal */}
      <Dialog open={!!selectedTemplate} onOpenChange={() => setSelectedTemplate(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedTemplate && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedTemplate.name} Template Preview</DialogTitle>
              </DialogHeader>

              <div className="mt-4">
                {/* Mock Website Preview */}
                <div className="border border-border rounded-xl overflow-hidden">
                  {/* Mock Header */}
                  <div className={`${selectedTemplate.primaryColor} p-4`}>
                    <div className="flex items-center justify-between text-white">
                      <span className="font-bold text-lg">{selectedTemplate.businessName}</span>
                      <div className="hidden sm:flex items-center gap-4 text-sm">
                        <span>Home</span>
                        <span>Services</span>
                        <span>About</span>
                        <span>Contact</span>
                      </div>
                    </div>
                  </div>

                  {/* Mock Hero */}
                  <div className={`${selectedTemplate.primaryColor} px-8 py-16 text-white text-center`}>
                    <selectedTemplate.icon className="h-16 w-16 mx-auto mb-6 opacity-90" />
                    <h2 className="text-3xl font-bold mb-3">{selectedTemplate.tagline}</h2>
                    <p className="text-white/80 max-w-xl mx-auto mb-6">
                      {selectedTemplate.description}
                    </p>
                    <div className="flex justify-center gap-3">
                      <div className="bg-white text-foreground px-4 py-2 rounded-lg text-sm font-medium">
                        Get a Quote
                      </div>
                      <div className="border border-white/50 px-4 py-2 rounded-lg text-sm">
                        Learn More
                      </div>
                    </div>
                  </div>

                  {/* Mock Services */}
                  <div className="p-8 bg-background">
                    <h3 className="text-xl font-semibold text-center mb-6">Our Services</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 bg-secondary rounded-lg text-center">
                          <div className={`w-10 h-10 mx-auto mb-2 rounded-full ${selectedTemplate.primaryColor}`} />
                          <div className="h-3 bg-muted rounded w-3/4 mx-auto mb-2" />
                          <div className="h-2 bg-muted rounded w-full" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mock Footer */}
                  <div className="p-4 bg-foreground text-background text-center text-sm">
                    <p>&copy; 2024 {selectedTemplate.businessName}. All rights reserved.</p>
                  </div>
                </div>

                <div className="mt-6 flex gap-3 justify-end">
                  <Button variant="outline" onClick={() => setSelectedTemplate(null)}>
                    Close
                  </Button>
                  <Button asChild>
                    <a href="#contact">Use This Template</a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
