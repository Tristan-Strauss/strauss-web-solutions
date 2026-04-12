import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Template Preview - WebCraft",
  description: "Preview our professionally designed website templates",
}

export default function TemplateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
