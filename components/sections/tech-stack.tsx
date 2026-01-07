"use client"

import { motion } from "framer-motion"
import { Atom, Database, FileCode, Layers, Server, Wind } from "lucide-react"

const technologies = [
  { name: "Next.js", icon: Layers, description: "Full-stack React Framework" },
  { name: "React", icon: Atom, description: "UI Library" },
  { name: "Tailwind CSS", icon: Wind, description: "Utility-first CSS" },
  { name: "TypeScript", icon: FileCode, description: "Type Safety" },
  { name: "Node.js", icon: Server, description: "Backend Runtime" },
  { name: "MongoDB", icon: Database, description: "Database" },
]

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Technology Stack
          </h2>
          <p className="mt-4 text-muted-foreground">
            We use the latest modern technologies to build fast, secure, and scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl hover:bg-muted/50 transition-colors group"
            >
              <div className="p-4 rounded-full bg-muted group-hover:bg-primary/10 transition-colors mb-3">
                <tech.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="font-semibold text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
