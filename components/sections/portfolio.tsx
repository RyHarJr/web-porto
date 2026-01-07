"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "RestFull API",
    category: "API",
    image: "/portfolio/api.png",
    description: "a RestFull API for a Bot WhatsApp application.",
    url: "https://api.ryhar.my.id/",
  },
  {
    title: "Bot WhatsApp",
    category: "Application",
    image: "/portfolio/bot.png",
    description: "a Bot WhatsApp application.",
    url: "https://bot.ryhar.my.id/",
  },
  {
    title: "Porto",
    category: "Web Application",
    image: "/portfolio/porto.png",
    description: "a Porto application.",
    url: "https://portofolio.ryhar.my.id/",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Selected Works
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Check out some of our recent projects. We take pride in delivering high-quality, pixel-perfect websites.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-background border shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button onClick={() => window.open(project.url, "_blank")} variant="secondary" size="sm" className="gap-2">
                    View Project <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-2">
                  {project.category}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <Button onClick={() => window.open("https://github.com/RyHarJr/", "_blank")} variant="outline">View All Projects</Button>
        </div>
      </div>
    </section>
  )
}
