import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react"

export function StarterTemplate() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="bg-slate-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold">Your Business</span>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <span className="hover:text-slate-300 cursor-pointer">Home</span>
            <span className="hover:text-slate-300 cursor-pointer">About</span>
            <span className="hover:text-slate-300 cursor-pointer">Services</span>
            <span className="hover:text-slate-300 cursor-pointer">Contact</span>
          </nav>
          <Button size="sm" className="bg-white text-slate-700 hover:bg-slate-100">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-slate-700 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Welcome to Your Business Name
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-700 hover:bg-slate-100">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Service One", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam." },
              { title: "Service Two", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." },
              { title: "Service Three", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia." },
            ].map((service, i) => (
              <div key={i} className="p-6 border border-slate-200 rounded-xl text-center">
                <div className="w-12 h-12 bg-slate-700 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-slate-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="text-slate-600 mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <ul className="space-y-2">
                {["Quality Service", "Experienced Team", "Customer Focused"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-slate-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-200 rounded-xl aspect-video" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-slate-700 shrink-0" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-slate-600">123 Business Street, City, Country 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-slate-700 shrink-0" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-slate-600">+27 12 345 6789</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-slate-700 shrink-0" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-slate-600">info@yourbusiness.com</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
              />
              <Button className="w-full bg-slate-700 hover:bg-slate-800">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400">&copy; 2024 Your Business Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
