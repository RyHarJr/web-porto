import { Lock, Smartphone, Search, Headphones } from "lucide-react"

const features = [
  {
    title: "Fast & Secure",
    description: "Optimized performance covering Core Web Vitals and industry-standard security practices.",
    icon: Lock,
  },
  {
    title: "Mobile Friendly",
    description: "Responsive layouts that look perfect on phones, tablets, and desktops.",
    icon: Smartphone,
  },
  {
    title: "SEO Ready",
    description: "Built with search engine best practices to help you get found online.",
    icon: Search,
  },
  {
    title: "24/7 Support",
    description: "Dedicated support team ready to assist you whenever you need help.",
    icon: Headphones,
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Why Choose Us?</h2>
            <p className="text-muted-foreground mb-8 text-lg">We don&apos;t just build websites; we build digital assets that drive growth. Here is what sets us apart.</p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-2 rounded-full bg-primary/10">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl filter blur-3xl opacity-30"></div>
            <div className="relative rounded-2xl border bg-card p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-1">99%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="p-4 bg-muted rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Clients</div>
                </div>
                <div className="p-4 bg-muted rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="p-4 bg-muted rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-1">5★</div>
                  <div className="text-sm text-muted-foreground">Ratings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
