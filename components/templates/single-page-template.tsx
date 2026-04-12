import { Phone, Mail, MapPin, Clock, Wrench, Shield, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SinglePageTemplate() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-slate-800 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <span className="text-xl font-bold">Lorem Business</span>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-slate-300">About</a>
            <a href="#services" className="hover:text-slate-300">Services</a>
            <a href="#contact" className="hover:text-slate-300">Contact</a>
          </div>
          <a href="tel:+27123456789" className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">+27 12 345 6789</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Lorem Ipsum Dolor Sit Amet Consectetur
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-800 hover:bg-slate-100">
              Get a Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Call Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                About Lorem Business
              </h2>
              <p className="text-slate-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="text-slate-600 mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-slate-100 rounded-lg p-4">
                  <p className="text-2xl font-bold text-slate-800">15+</p>
                  <p className="text-sm text-slate-600">Years Experience</p>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <p className="text-2xl font-bold text-slate-800">500+</p>
                  <p className="text-sm text-slate-600">Happy Clients</p>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <p className="text-2xl font-bold text-slate-800">24/7</p>
                  <p className="text-sm text-slate-600">Support</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-200 rounded-2xl aspect-square flex items-center justify-center">
              <span className="text-slate-400 text-lg">Your Image Here</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wrench, title: "Service One", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod." },
              { icon: Shield, title: "Service Two", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi." },
              { icon: ThumbsUp, title: "Service Three", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
            ].map((service, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <service.icon className="h-10 w-10 text-slate-700 mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Get In Touch
              </h2>
              <p className="text-slate-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-800 text-white p-3 rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <p className="text-slate-800 font-medium">+27 12 345 6789</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-slate-800 text-white p-3 rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="text-slate-800 font-medium">info@lorembusiness.co.za</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-slate-800 text-white p-3 rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Address</p>
                    <p className="text-slate-800 font-medium">123 Lorem Street, Pretoria</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-slate-800 text-white p-3 rounded-lg">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Hours</p>
                    <p className="text-slate-800 font-medium">Mon - Fri: 8am - 5pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 resize-none"
                  />
                </div>
                <Button className="w-full bg-slate-800 hover:bg-slate-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xl font-bold mb-2">Lorem Business</p>
          <p className="text-slate-400 text-sm mb-4">Professional services you can trust.</p>
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Lorem Business. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
