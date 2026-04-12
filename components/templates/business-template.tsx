import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, Users, Award, Clock, Star } from "lucide-react"

export function BusinessTemplate() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-12 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">BusinessPro</span>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <span className="hover:text-blue-600 cursor-pointer">Services</span>
            <span className="hover:text-blue-600 cursor-pointer">About</span>
            <span className="hover:text-blue-600 cursor-pointer">Team</span>
            <span className="hover:text-blue-600 cursor-pointer">Testimonials</span>
            <span className="hover:text-blue-600 cursor-pointer">Contact</span>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">Get a Quote</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm mb-6">
                Professional Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Lorem Ipsum Dolor Sit Amet Consectetur
              </h1>
              <p className="text-lg text-blue-100 mb-8">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Watch Video
                </Button>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl aspect-square" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "500+", label: "Happy Clients" },
              { icon: Award, value: "50+", label: "Awards Won" },
              { icon: Clock, value: "10+", label: "Years Experience" },
              { icon: Star, value: "4.9", label: "Average Rating" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Business Consulting", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam quis nostrud." },
              { title: "Strategic Planning", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat." },
              { title: "Financial Analysis", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit." },
              { title: "Market Research", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque." },
              { title: "Growth Strategy", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia." },
              { title: "Digital Solutions", desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci." },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-blue-600 rounded" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.desc}</p>
                <span className="text-blue-600 font-medium cursor-pointer hover:underline">Learn More</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-slate-100 rounded-2xl aspect-[4/3]" />
            <div>
              <span className="text-blue-600 font-medium">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Lorem Ipsum Dolor Sit Amet</h2>
              <p className="text-slate-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-slate-600 mb-8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Quality Assurance", "Expert Team", "24/7 Support", "Fast Delivery"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "John Smith", role: "CEO & Founder" },
              { name: "Jane Doe", role: "Operations Director" },
              { name: "Mike Johnson", role: "Lead Consultant" },
              { name: "Sarah Williams", role: "Finance Manager" },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4" />
                <h4 className="font-semibold text-lg">{member.name}</h4>
                <p className="text-slate-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-blue-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.", name: "Client Name", company: "Company A" },
              { quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", name: "Client Name", company: "Company B" },
              { quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.", name: "Client Name", company: "Company C" },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-blue-200 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-blue-600 font-medium">Contact Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Get In Touch</h2>
              <p className="text-slate-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-slate-600">123 Business Street, City, Country 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-slate-600">+27 12 345 6789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-slate-600">info@businesspro.com</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="bg-slate-50 p-8 rounded-2xl space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <span className="text-xl font-bold text-blue-400">BusinessPro</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white cursor-pointer">Home</li>
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Services</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white cursor-pointer">Consulting</li>
                <li className="hover:text-white cursor-pointer">Strategy</li>
                <li className="hover:text-white cursor-pointer">Analysis</li>
                <li className="hover:text-white cursor-pointer">Research</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>123 Business Street</li>
                <li>+27 12 345 6789</li>
                <li>info@businesspro.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 BusinessPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
