import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram, Twitter, Linkedin, Mail } from "lucide-react"

export function CreativeTemplate() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="fixed top-12 left-0 right-0 z-40 bg-neutral-950/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Creative Studio
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <span className="hover:text-purple-400 cursor-pointer transition-colors">Work</span>
            <span className="hover:text-purple-400 cursor-pointer transition-colors">Services</span>
            <span className="hover:text-purple-400 cursor-pointer transition-colors">About</span>
            <span className="hover:text-purple-400 cursor-pointer transition-colors">Contact</span>
          </nav>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            {"Let's Talk"}
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm mb-8">
            Creative Agency
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Lorem Ipsum
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dolor Sit Amet
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
            Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-neutral-900 hover:bg-neutral-200">
              View Our Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="py-32 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-purple-400 font-medium">Our Work</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">Selected Projects</h2>
            </div>
            <span className="text-neutral-400 hover:text-white cursor-pointer hidden md:block">
              View All Projects <ArrowRight className="inline ml-1 h-4 w-4" />
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Project Alpha", category: "Branding" },
              { title: "Project Beta", category: "Web Design" },
              { title: "Project Gamma", category: "App Design" },
              { title: "Project Delta", category: "Motion" },
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <div className="bg-neutral-800 aspect-[4/3] group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-purple-400 text-sm">{project.category}</span>
                <h3 className="text-2xl font-semibold mt-1 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-purple-400 font-medium">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Brand Identity", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." },
              { num: "02", title: "Web Design", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat." },
              { num: "03", title: "App Design", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt." },
              { num: "04", title: "Motion Design", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque." },
              { num: "05", title: "Illustration", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed." },
              { num: "06", title: "Photography", desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur." },
            ].map((service, i) => (
              <div
                key={i}
                className="p-8 border border-white/10 rounded-2xl hover:border-purple-500/50 hover:bg-white/5 transition-all group"
              >
                <span className="text-purple-400 font-mono text-sm">{service.num}</span>
                <h3 className="text-2xl font-semibold mt-4 mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-32 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="text-purple-400 font-medium">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-8">
                Lorem Ipsum Dolor Sit Amet Consectetur
              </h2>
              <p className="text-neutral-400 text-lg mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="text-neutral-400 text-lg mb-8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { value: "10+", label: "Years" },
                  { value: "200+", label: "Projects" },
                  { value: "50+", label: "Clients" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-neutral-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-neutral-800 rounded-3xl aspect-square" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            {"Let's Create Something Amazing Together"}
          </h2>
          <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
          </p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-100">
            Start a Project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Creative Studio
              </span>
              <p className="text-neutral-400 mt-4 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
              <div className="flex gap-4 mt-6">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 cursor-pointer transition-colors">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 cursor-pointer transition-colors">
                  <Twitter className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 cursor-pointer transition-colors">
                  <Linkedin className="h-5 w-5" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-neutral-400">
                <li className="hover:text-white cursor-pointer">Work</li>
                <li className="hover:text-white cursor-pointer">Services</li>
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get in Touch</h4>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  hello@creative.com
                </li>
                <li>123 Creative Street</li>
                <li>City, Country 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-neutral-500">
            <p>&copy; 2024 Creative Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
