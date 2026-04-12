"use client"

import { Phone, Mail, MapPin, Clock, Wrench, Zap, Droplets, Flame, Shield, Users, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MultiPageTemplate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-teal-700 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <span className="text-xl font-bold">Lorem Services</span>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-teal-200">Home</a>
            <a href="#about" className="hover:text-teal-200">About</a>
            <a href="#services" className="hover:text-teal-200">Services</a>
            <a href="#gallery" className="hover:text-teal-200">Gallery</a>
            <a href="#contact" className="hover:text-teal-200">Contact</a>
          </div>
          <a href="tel:+27123456789" className="flex items-center gap-2 bg-teal-600 px-4 py-2 rounded-lg text-sm hover:bg-teal-500">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">+27 12 345 6789</span>
          </a>
        </div>
      </nav>

      {/* Page Indicator */}
      <div className="bg-teal-800 text-teal-200 text-center py-2 text-sm">
        This template includes 5 pages: Home, About, Services, Gallery, Contact
      </div>

      {/* HOME PAGE */}
      <section id="home" className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-teal-700" />
        <div className="relative py-24 md:py-40">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <p className="text-teal-300 font-medium mb-4">Welcome to Lorem Services</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Professional Lorem Ipsum Services
                </h1>
                <p className="text-lg text-teal-100 mb-8">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-teal-800 hover:bg-teal-50">
                    Get Free Quote
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Our Services
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-white text-xl font-semibold mb-6">Quick Contact</h3>
                  <form className="space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" />
                    <input type="tel" placeholder="Your Phone" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" />
                    <textarea placeholder="How can we help?" rows={3} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none" />
                    <Button className="w-full bg-white text-teal-800 hover:bg-teal-50">Submit Request</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-teal-50 border-y border-teal-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "1,500+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "24/7", label: "Emergency Service" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold text-teal-700">{stat.value}</p>
                <p className="text-sm text-teal-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PAGE */}
      <section id="about" className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-xs font-medium text-teal-600 bg-teal-50 inline-block px-3 py-1 rounded-full mb-4">PAGE: ABOUT</div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Lorem Services
              </h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600 mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: Users, text: "Experienced Team" },
                  { icon: Award, text: "Quality Guaranteed" },
                  { icon: CheckCircle, text: "Satisfaction Promise" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-teal-600" />
                    <span className="text-sm text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-teal-100 rounded-2xl aspect-square flex items-center justify-center">
                <span className="text-teal-400 text-sm">Team Photo</span>
              </div>
              <div className="bg-teal-100 rounded-2xl aspect-square flex items-center justify-center mt-8">
                <span className="text-teal-400 text-sm">Work Photo</span>
              </div>
              <div className="bg-teal-100 rounded-2xl aspect-square flex items-center justify-center">
                <span className="text-teal-400 text-sm">Office Photo</span>
              </div>
              <div className="bg-teal-100 rounded-2xl aspect-square flex items-center justify-center mt-8">
                <span className="text-teal-400 text-sm">Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PAGE */}
      <section id="services" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-xs font-medium text-teal-600 bg-teal-50 inline-block px-3 py-1 rounded-full mb-4">PAGE: SERVICES</div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Wrench, title: "Service Lorem", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.", features: ["Feature one", "Feature two", "Feature three"] },
              { icon: Zap, title: "Service Ipsum", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.", features: ["Feature one", "Feature two", "Feature three"] },
              { icon: Droplets, title: "Service Dolor", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.", features: ["Feature one", "Feature two", "Feature three"] },
              { icon: Flame, title: "Service Amet", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.", features: ["Feature one", "Feature two", "Feature three"] },
              { icon: Shield, title: "Service Consectetur", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.", features: ["Feature one", "Feature two", "Feature three"] },
              { icon: CheckCircle, title: "Service Adipiscing", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.", features: ["Feature one", "Feature two", "Feature three"] },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-teal-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f, j) => (
                    <li key={j} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PAGE */}
      <section id="gallery" className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-xs font-medium text-teal-600 bg-teal-50 inline-block px-3 py-1 rounded-full mb-4">PAGE: GALLERY</div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through some of our recent projects and see the quality of our workmanship.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-teal-100 rounded-xl aspect-video flex items-center justify-center hover:bg-teal-200 transition-colors cursor-pointer">
                <span className="text-teal-400 text-sm">Project {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT PAGE */}
      <section id="contact" className="py-20 md:py-32 bg-teal-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-xs font-medium text-teal-200 bg-teal-600 inline-block px-3 py-1 rounded-full mb-4">PAGE: CONTACT</div>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Contact Us
              </h2>
              <p className="text-teal-100 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Get in touch with us today.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "+27 12 345 6789" },
                  { icon: Mail, label: "Email", value: "info@loremservices.co.za" },
                  { icon: MapPin, label: "Address", value: "456 Lorem Avenue, Johannesburg" },
                  { icon: Clock, label: "Hours", value: "Mon - Sat: 7am - 6pm" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-teal-600 p-3 rounded-lg">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-teal-300">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-500">
                  <option>Select Service</option>
                  <option>Service Lorem</option>
                  <option>Service Ipsum</option>
                  <option>Service Dolor</option>
                </select>
                <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none" />
                <Button className="w-full bg-teal-700 hover:bg-teal-600">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <p className="text-xl font-bold mb-4">Lorem Services</p>
              <p className="text-teal-300 text-sm max-w-md">
                Professional lorem ipsum services for residential and commercial clients. Quality workmanship guaranteed.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-4">Quick Links</p>
              <ul className="space-y-2 text-sm text-teal-300">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">Contact</p>
              <ul className="space-y-2 text-sm text-teal-300">
                <li>+27 12 345 6789</li>
                <li>info@loremservices.co.za</li>
                <li>456 Lorem Ave, Johannesburg</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-teal-800 pt-8 text-center text-sm text-teal-400">
            &copy; {new Date().getFullYear()} Lorem Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
