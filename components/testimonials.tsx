import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    business: "Mitchell Hair Studio",
    content:
      "WebCraft made getting my salon online so easy. They understood exactly what I needed and delivered a beautiful website that my clients love. Highly recommend!",
    rating: 5,
  },
  {
    name: "David Khumalo",
    business: "Khumalo Plumbing Services",
    content:
      "As a plumber, I don&apos;t have time for complicated tech stuff. WebCraft handled everything and now I get new leads from my website every week. Best investment I&apos;ve made.",
    rating: 5,
  },
  {
    name: "Lisa van der Berg",
    business: "Fresh Bites Cafe",
    content:
      "The team was professional and patient. They took our ideas and created something even better than we imagined. Our website looks amazing and loads super fast.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {"Don't"} just take our word for it. Here&apos;s what business owners like you have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-background p-8 rounded-2xl border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                {`"${testimonial.content}"`}
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
