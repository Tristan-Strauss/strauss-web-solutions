import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Search, Star, Truck, Shield, RotateCcw, Headphones } from "lucide-react"

export function CommerceTemplate() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top Bar */}
      <div className="bg-emerald-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span>Free shipping on orders over R500</span>
          <div className="hidden sm:flex items-center gap-4">
            <span>Help</span>
            <span>Track Order</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-12 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <span className="text-2xl font-bold text-emerald-600">ShopName</span>
          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Heart className="h-6 w-6 text-slate-600 cursor-pointer hover:text-emerald-600" />
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-slate-600 cursor-pointer hover:text-emerald-600" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-emerald-600 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700 hidden sm:flex">Sign In</Button>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 py-3 hidden md:flex items-center gap-8 text-sm font-medium">
          <span className="hover:text-emerald-600 cursor-pointer">All Products</span>
          <span className="hover:text-emerald-600 cursor-pointer">New Arrivals</span>
          <span className="hover:text-emerald-600 cursor-pointer">Best Sellers</span>
          <span className="hover:text-emerald-600 cursor-pointer">Categories</span>
          <span className="hover:text-emerald-600 cursor-pointer">Sale</span>
        </nav>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm mb-4">
                New Collection
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Lorem Ipsum Dolor Sit Amet
              </h1>
              <p className="text-lg text-emerald-100 mb-8">
                Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                Shop Now
              </Button>
            </div>
            <div className="bg-white/10 rounded-2xl aspect-square" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "Free Shipping", desc: "On orders over R500" },
              { icon: Shield, title: "Secure Payment", desc: "100% secure checkout" },
              { icon: RotateCcw, title: "Easy Returns", desc: "30 day return policy" },
              { icon: Headphones, title: "24/7 Support", desc: "Dedicated support" },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4">
                <feature.icon className="h-10 w-10 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Category One", "Category Two", "Category Three", "Category Four"].map((cat, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-slate-100 rounded-2xl aspect-square mb-4 group-hover:bg-emerald-100 transition-colors" />
                <h3 className="font-semibold text-center group-hover:text-emerald-600">{cat}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
            <span className="text-emerald-600 font-medium cursor-pointer hover:underline">View All</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Product Name One", price: "R299", oldPrice: "R399" },
              { name: "Product Name Two", price: "R199", oldPrice: null },
              { name: "Product Name Three", price: "R449", oldPrice: "R599" },
              { name: "Product Name Four", price: "R349", oldPrice: null },
              { name: "Product Name Five", price: "R179", oldPrice: "R249" },
              { name: "Product Name Six", price: "R599", oldPrice: null },
              { name: "Product Name Seven", price: "R259", oldPrice: "R329" },
              { name: "Product Name Eight", price: "R399", oldPrice: null },
            ].map((product, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden group">
                <div className="relative">
                  <div className="bg-slate-100 aspect-square group-hover:bg-slate-200 transition-colors" />
                  {product.oldPrice && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      Sale
                    </span>
                  )}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-emerald-50">
                    <Heart className="h-4 w-4 text-slate-600" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex gap-0.5 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-emerald-600">{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-sm text-slate-400 line-through">{product.oldPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Subscribe to get special offers and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <span className="text-xl font-bold text-emerald-400">ShopName</span>
              <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white cursor-pointer">All Products</li>
                <li className="hover:text-white cursor-pointer">New Arrivals</li>
                <li className="hover:text-white cursor-pointer">Best Sellers</li>
                <li className="hover:text-white cursor-pointer">Sale</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Help</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white cursor-pointer">Shipping Info</li>
                <li className="hover:text-white cursor-pointer">Returns</li>
                <li className="hover:text-white cursor-pointer">FAQ</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>123 Shop Street</li>
                <li>+27 12 345 6789</li>
                <li>info@shopname.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ShopName. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
