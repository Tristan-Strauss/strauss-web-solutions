import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

export function MinimalTemplate() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="fixed top-12 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-6 flex items-center justify-between">
          <span className="text-lg font-medium tracking-tight">Company</span>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
            <span className="hover:text-neutral-900 cursor-pointer">About</span>
            <span className="hover:text-neutral-900 cursor-pointer">Work</span>
            <span className="hover:text-neutral-900 cursor-pointer">Services</span>
            <span className="hover:text-neutral-900 cursor-pointer">Contact</span>
          </nav>
          <Button variant="outline" className="border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white">
            Get in Touch
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 text-balance">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mb-12">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <Button size="lg" className="bg-neutral-900 hover:bg-neutral-800">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <hr className="border-neutral-200" />
      </div>

      {/* Work */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-16">
            <span className="text-sm text-neutral-500 uppercase tracking-wider">Selected Work</span>
          </div>
          <div className="space-y-24">
            {[
              { title: "Project Alpha", year: "2024", category: "Strategy" },
              { title: "Project Beta", year: "2024", category: "Design" },
              { title: "Project Gamma", year: "2023", category: "Development" },
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7">
                    <div className="bg-neutral-100 aspect-[16/10] rounded-sm group-hover:bg-neutral-200 transition-colors" />
                  </div>
                  <div className="md:col-span-5">
                    <div className="flex items-center gap-4 mb-4 text-sm text-neutral-500">
                      <span>{project.year}</span>
                      <span>/</span>
                      <span>{project.category}</span>
                    </div>
                    <h3 className="text-3xl font-light mb-4 group-hover:text-neutral-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <hr className="border-neutral-200" />
      </div>

      {/* About */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <span className="text-sm text-neutral-500 uppercase tracking-wider">About</span>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </h2>
              <p className="text-neutral-600 text-lg mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-neutral-600 text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-16 mb-16">
            <div className="md:col-span-4">
              <span className="text-sm text-neutral-500 uppercase tracking-wider">Services</span>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-light">
                What we offer
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4" />
            <div className="md:col-span-8">
              <div className="space-y-12">
                {[
                  { title: "Strategy", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
                  { title: "Design", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
                  { title: "Development", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim." },
                  { title: "Consulting", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
                ].map((service, i) => (
                  <div key={i} className="border-t border-neutral-200 pt-8">
                    <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                    <p className="text-neutral-600">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <span className="text-sm text-neutral-500 uppercase tracking-wider">Contact</span>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-light mb-12">
                {"Let's work together"}
              </h2>
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-neutral-400 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-neutral-600">hello@company.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-neutral-400 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-neutral-600">+27 12 345 6789</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-neutral-400 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Address</h4>
                      <p className="text-neutral-600">123 Minimal Street, City</p>
                    </div>
                  </div>
                </div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-0 py-3 border-0 border-b border-neutral-200 focus:outline-none focus:border-neutral-900"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-0 py-3 border-0 border-b border-neutral-200 focus:outline-none focus:border-neutral-900"
                  />
                  <textarea
                    placeholder="Message"
                    rows={3}
                    className="w-full px-0 py-3 border-0 border-b border-neutral-200 focus:outline-none focus:border-neutral-900 resize-none"
                  />
                  <Button className="bg-neutral-900 hover:bg-neutral-800 mt-4">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-neutral-500">&copy; 2024 Company. All rights reserved.</span>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <span className="hover:text-neutral-900 cursor-pointer">Privacy</span>
            <span className="hover:text-neutral-900 cursor-pointer">Terms</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
