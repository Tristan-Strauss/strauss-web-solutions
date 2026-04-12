"use client"

import { Phone, Mail, MapPin, Clock, Wrench, Zap, Droplets, Flame, Shield, Users, Award, CheckCircle, Star, ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PremiumTemplate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-amber-900 text-amber-100 text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-3 w-3" /> +27 12 345 6789
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <Mail className="h-3 w-3" /> info@lorempremium.co.za
            </span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2">5.0 Rating</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white py-4 border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-800">Lorem Premium</span>
          <div className="hidden lg:flex items-center gap-8 text-sm">
            <a href="#home" className="text-gray-600 hover:text-amber-700">Home</a>
            <a href="#about" className="text-gray-600 hover:text-amber-700">About</a>
            <a href="#services" className="text-gray-600 hover:text-amber-700">Services</a>
            <a href="#team" className="text-gray-600 hover:text-amber-700">Team</a>
            <a href="#projects" className="text-gray-600 hover:text-amber-700">Projects</a>
            <a href="#testimonials" className="text-gray-600 hover:text-amber-700">Testimonials</a>
            <a href="#blog" className="text-gray-600 hover:text-amber-700">Blog</a>
            <a href="#contact" className="text-gray-600 hover:text-amber-700">Contact</a>
          </div>
          <Button className="bg-amber-700 hover:bg-amber-600">
            Free Consultation
          </Button>
        </div>
      </nav>

      {/* Page Indicator */}
      <div className="bg-amber-50 text-amber-800 text-center py-2 text-sm border-b border-amber-100">
        This premium template includes 8+ pages: Home, About, Services, Team, Projects, Testimonials, Blog, Contact
      </div>

      {/* HOME PAGE - Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="relative py-28 md:py-44">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-amber-300 font-semibold mb-4 flex items-center gap-2">
                <span className="w-12 h-px bg-amber-400" /> PREMIUM SERVICE SINCE 2005
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Lorem Ipsum Professional Services
              </h1>
              <p className="text-xl text-amber-100 mb-8 max-w-2xl">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Our Work
                </Button>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div className="text-white">
                  <p className="text-4xl font-bold">25+</p>
                  <p className="text-sm text-amber-200">Years Experience</p>
                </div>
                <div className="w-px h-12 bg-amber-500" />
                <div className="text-white">
                  <p className="text-4xl font-bold">2,000+</p>
                  <p className="text-sm text-amber-200">Projects Done</p>
                </div>
                <div className="w-px h-12 bg-amber-500" />
                <div className="text-white">
                  <p className="text-4xl font-bold">99%</p>
                  <p className="text-sm text-amber-200">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-sm text-gray-400">
            <span>As featured in:</span>
            <span className="text-gray-500 font-semibold">LOREM MAGAZINE</span>
            <span className="text-gray-500 font-semibold">IPSUM NEWS</span>
            <span className="text-gray-500 font-semibold">DOLOR DAILY</span>
            <span className="text-gray-500 font-semibold">AMET BUSINESS</span>
          </div>
        </div>
      </section>

      {/* ABOUT PAGE */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-xs font-medium text-amber-700 bg-amber-50 inline-block px-3 py-1 rounded-full mb-4">PAGE: ABOUT</div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-amber-100 rounded-2xl aspect-4/3 flex items-center justify-center">
                <span className="text-amber-400">Company Image</span>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-700 text-white p-6 rounded-xl">
                <p className="text-4xl font-bold">25+</p>
                <p className="text-sm text-amber-200">Years of Excellence</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About Our Company
              </h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600 mb-8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Shield, text: "Licensed & Certified" },
                  { icon: Users, text: "Expert Team" },
                  { icon: Award, text: "Award Winning" },
                  { icon: CheckCircle, text: "100% Guaranteed" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-amber-100 p-2 rounded-lg">
                      <item.icon className="h-5 w-5 text-amber-700" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-amber-700 hover:bg-amber-600">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PAGE */}
      <section id="services" className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-xs font-medium text-amber-700 bg-amber-100 inline-block px-3 py-1 rounded-full mb-4">PAGE: SERVICES</div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Wrench, title: "Service Lorem", price: "From R500" },
              { icon: Zap, title: "Service Ipsum", price: "From R750" },
              { icon: Droplets, title: "Service Dolor", price: "From R600" },
              { icon: Flame, title: "Service Sit", price: "From R850" },
              { icon: Shield, title: "Service Amet", price: "From R400" },
              { icon: CheckCircle, title: "Service Consectetur", price: "From R950" },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="bg-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-700 transition-colors">
                  <service.icon className="h-8 w-8 text-amber-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-700 font-semibold">{service.price}</span>
                  <Button variant="ghost" size="sm" className="text-amber-700 hover:text-amber-800">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PAGE */}
      <section id="team" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-xs font-medium text-amber-700 bg-amber-50 inline-block px-3 py-1 rounded-full mb-4">PAGE: TEAM</div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals are dedicated to delivering exceptional results.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "John Lorem", role: "Founder & CEO" },
              { name: "Sarah Ipsum", role: "Operations Director" },
              { name: "Michael Dolor", role: "Lead Technician" },
              { name: "Emily Amet", role: "Customer Relations" },
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="bg-amber-100 rounded-2xl aspect-square flex items-center justify-center mb-4 overflow-hidden">
                  <span className="text-amber-400">Photo</span>
                </div>
                <h4 className="font-semibold text-gray-900">{member.name}</h4>
                <p className="text-sm text-amber-700">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS PAGE */}
      <section id="projects" className="py-24 md:py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-xs font-medium text-amber-400 bg-amber-900/50 inline-block px-3 py-1 rounded-full mb-4">PAGE: PROJECTS</div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Take a look at some of our recent work and see the quality we deliver.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-gray-800 rounded-xl aspect-video flex items-center justify-center overflow-hidden relative">
                  <span className="text-gray-600">Project {i + 1}</span>
                  <div className="absolute inset-0 bg-amber-700/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-semibold">View Project</span>
                  </div>
                </div>
                <h4 className="mt-4 font-semibold">Project Lorem {i + 1}</h4>
                <p className="text-sm text-gray-400">Commercial • Completed 2024</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PAGE */}
      <section id="testimonials" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-xs font-medium text-amber-700 bg-amber-50 inline-block px-3 py-1 rounded-full mb-4">PAGE: TESTIMONIALS</div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dont just take our word for it. Here&apos;s what our valued clients have to say.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "David Lorem", company: "Lorem Corp", text: "Exceptional service from start to finish. The team was professional, punctual, and delivered beyond our expectations. Highly recommended!" },
              { name: "Maria Ipsum", company: "Ipsum Industries", text: "We&apos;ve worked with many companies over the years, but none compare to the quality and dedication of Lorem Premium. They truly care about their clients." },
              { name: "James Dolor", company: "Dolor Holdings", text: "Fast response, fair pricing, and outstanding workmanship. They&apos;ve handled all our needs for the past 5 years without a single complaint." },
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 relative">
                <Quote className="h-10 w-10 text-amber-200 absolute top-6 right-6" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="bg-amber-200 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-amber-700 font-semibold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PAGE */}
      <section id="blog" className="py-24 md:py-32 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-xs font-medium text-amber-700 bg-amber-100 inline-block px-3 py-1 rounded-full mb-4">PAGE: BLOG</div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Latest News & Tips
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with industry insights, tips, and company news.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Lorem Ipsum Tips for Better Results", date: "April 10, 2024", category: "Tips" },
              { title: "Understanding Dolor Amet Services", date: "April 5, 2024", category: "Guide" },
              { title: "Why Consectetur Matters for Your Business", date: "March 28, 2024", category: "Insights" },
            ].map((post, i) => (
              <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-amber-100 aspect-video flex items-center justify-center">
                  <span className="text-amber-400">Blog Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm mb-3">
                    <span className="text-amber-700 font-medium">{post.category}</span>
                    <span className="text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-amber-700 cursor-pointer">{post.title}</h3>
                  <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor...</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT PAGE */}
      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-xs font-medium text-amber-700 bg-amber-50 inline-block px-3 py-1 rounded-full mb-4">PAGE: CONTACT</div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Ready to start your project? Contact us today for a free consultation and quote. We&apos;re here to help.
              </p>
              <div className="space-y-6 mb-8">
                {[
                  { icon: Phone, label: "Phone", value: "+27 12 345 6789", subtext: "Mon - Sat, 7am - 7pm" },
                  { icon: Mail, label: "Email", value: "info@lorempremium.co.za", subtext: "We reply within 24 hours" },
                  { icon: MapPin, label: "Office", value: "789 Lorem Boulevard, Cape Town", subtext: "Visit by appointment" },
                  { icon: Clock, label: "Hours", value: "Mon - Sat: 7am - 7pm", subtext: "24/7 Emergency Service" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-amber-100 p-3 rounded-xl">
                      <item.icon className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="font-semibold text-gray-900">{item.value}</p>
                      <p className="text-sm text-gray-400">{item.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 rounded-2xl p-6">
                <p className="text-sm text-amber-800 font-medium mb-2">Emergency Service Available</p>
                <p className="text-sm text-amber-700">Call our 24/7 emergency line for urgent assistance.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-500">
                  <option>Select Service</option>
                  <option>Service Lorem</option>
                  <option>Service Ipsum</option>
                  <option>Service Dolor</option>
                  <option>Service Amet</option>
                </select>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-500">
                  <option>Property Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                </select>
                <textarea rows={4} placeholder="Project Details" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none" />
                <Button className="w-full bg-amber-700 hover:bg-amber-600 py-6 text-lg">
                  Get Your Free Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <p className="text-2xl font-bold mb-4">Lorem Premium</p>
              <p className="text-gray-400 text-sm mb-6">
                Premium lorem ipsum services for discerning clients. Excellence in every project since 2005.
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                ))}
                <span className="ml-2 text-sm text-gray-400">5.0 on Google</span>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-4">Services</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Service Lorem</a></li>
                <li><a href="#" className="hover:text-white">Service Ipsum</a></li>
                <li><a href="#" className="hover:text-white">Service Dolor</a></li>
                <li><a href="#" className="hover:text-white">Service Amet</a></li>
                <li><a href="#" className="hover:text-white">Emergency Service</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">Company</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#team" className="hover:text-white">Our Team</a></li>
                <li><a href="#projects" className="hover:text-white">Projects</a></li>
                <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
                <li><a href="#blog" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">Contact</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+27 12 345 6789</li>
                <li>info@lorempremium.co.za</li>
                <li>789 Lorem Boulevard</li>
                <li>Cape Town, South Africa</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Lorem Premium. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
