"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code2, Globe, Laptop, LayoutTemplate, Rocket, ShoppingCart } from "lucide-react"

const services = [
  {
    title: "Company Profile",
    description: "Professional website to showcase your business identity, build trust, and reach more clients.",
    icon: Globe,
    color: "text-blue-500",
  },
  {
    title: "Landing Page",
    description: "High-conversion landing pages designed to capture leads and promote your specific campaigns.",
    icon: Rocket,
    color: "text-purple-500",
  },
  {
    title: "Web UMKM / Store",
    description: "Affordable and effective online presence for small businesses to start selling digitally.",
    icon: ShoppingCart,
    color: "text-green-500",
  },
  {
    title: "Custom Web App",
    description: "Tailor-made web applications with complex functionality to solve your specific business needs.",
    icon: Code2,
    color: "text-orange-500",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design implementation to ensure your application is intuitive and beautiful.",
    icon: LayoutTemplate,
    color: "text-pink-500",
  },
  {
    title: "Maintenance",
    description: "Ongoing support, updates, and security monitoring to keep your website running smoothly.",
    icon: Laptop,
    color: "text-cyan-500",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Layanan Kami
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Solusi digital lengkap untuk membantu bisnis Anda tumbuh di era digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 border-muted overflow-hidden group">
                <CardHeader>
                  <div className={`p-3 w-12 h-12 rounded-lg bg-background border shadow-sm mb-4 flex items-center justify-center group-hover:bg-accent/10 transition-colors`}>
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
