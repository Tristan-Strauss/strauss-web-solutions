import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle, Star, Mail, Phone, MapPin } from "lucide-react"

export function ModernTemplate() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="fixed top-12 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-teal-600">ModernCo</span>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <span className="hover:text-teal-600 cursor-pointer transition-colors">Home</span>
            <span className="hover:text-teal-600 cursor-pointer transition-colors">Features</span>
            <span className="hover:text-teal-600 cursor-pointer transition-colors">Pricing</span>
            <span className="hover:text-teal-600 cursor-pointer transition-colors">About</span>
            <span className="hover:text-teal-600 cursor-pointer transition-colors">Contact</span>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex">Log In</Button>
            <Button className="bg-teal-600 hover:bg-teal-700">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-teal-600 rounded-full animate-pulse" />
              Lorem Ipsum Dolor Sit
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-balance">
              Lorem Ipsum Dolor Sit Amet Consectetur
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300">
                <Play className="mr-2 h-4 w-4" /> Watch Demo
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-600" />
                Free 14-day trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-600" />
                No credit card required
              </div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="mt-16 bg-slate-100 rounded-2xl aspect-video max-w-5xl mx-auto shadow-2xl shadow-slate-200" />
        </div>
      </section>

      {/* Logos */}
      <section className="py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm text-slate-500 mb-8">Trusted by leading companies</p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-8 w-24 bg-slate-200 rounded" />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-teal-600 font-medium">Features</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">Lorem Ipsum Dolor Sit</h2>
            <p className="text-slate-600 text-lg">
              Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Feature One", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam." },
              { title: "Feature Two", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." },
              { title: "Feature Three", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia." },
              { title: "Feature Four", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium." },
              { title: "Feature Five", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit." },
              { title: "Feature Six", desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur." },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-200 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100 transition-all">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-teal-600 rounded" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-3xl border border-slate-200">
              <span className="text-teal-600 font-medium">Benefit One</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">Lorem Ipsum Dolor Sit Amet</h3>
              <p className="text-slate-600 mb-8">
                Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="bg-slate-100 rounded-xl aspect-video" />
            </div>
            <div className="bg-teal-600 text-white p-12 rounded-3xl">
              <span className="text-teal-200 font-medium">Benefit Two</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">Duis Aute Irure Dolor</h3>
              <p className="text-teal-100 mb-8">
                In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.
              </p>
              <div className="bg-teal-500 rounded-xl aspect-video" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-teal-600 font-medium">Pricing</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">Simple, Transparent Pricing</h2>
            <p className="text-slate-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Starter", price: "R99", features: ["Feature one", "Feature two", "Feature three"] },
              { name: "Professional", price: "R299", popular: true, features: ["Everything in Starter", "Feature four", "Feature five", "Feature six"] },
              { name: "Enterprise", price: "Custom", features: ["Everything in Pro", "Feature seven", "Feature eight", "Dedicated support"] },
            ].map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${plan.popular ? "border-teal-600 ring-2 ring-teal-600" : "border-slate-200"}`}>
                {plan.popular && (
                  <span className="inline-block px-3 py-1 bg-teal-600 text-white text-xs font-medium rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-600">/month</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-teal-600 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? "bg-teal-600 hover:bg-teal-700" : ""}`} variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-teal-600 font-medium">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.", name: "Client Name", role: "Position, Company" },
              { quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", name: "Client Name", role: "Position, Company" },
              { quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.", name: "Client Name", role: "Position, Company" },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full" />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-teal-100 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-teal-600 font-medium">Contact</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Get in Touch</h2>
              <p className="text-slate-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <Mail className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-slate-600">hello@modernco.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <Phone className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-slate-600">+27 12 345 6789</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-slate-600">123 Modern Street, City</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="bg-slate-50 p-8 rounded-2xl space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              <Button className="w-full bg-teal-600 hover:bg-teal-700">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <span className="text-xl font-bold text-teal-400">ModernCo</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white cursor-pointer">Features</li>
                <li className="hover:text-white cursor-pointer">Pricing</li>
                <li className="hover:text-white cursor-pointer">Integrations</li>
                <li className="hover:text-white cursor-pointer">Changelog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white cursor-pointer">Privacy</li>
                <li className="hover:text-white cursor-pointer">Terms</li>
                <li className="hover:text-white cursor-pointer">Cookies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ModernCo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
