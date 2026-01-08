import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Code, Rocket } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-background [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center space-x-2 rounded-full border bg-background/50 px-4 py-1.5 shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-muted-foreground">Professional Web Development Agency</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="max-w-4xl text-4xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl">
            We Build <span className="text-primary">Digital Experiences</span> That Grow Your Business
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            Transform your brand with a modern, high-performance website. We specialize in creating premium digital solutions for startups, businesses, and personal brands.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => window.open("https://wa.me/6289508188642/", "_blank")} size="lg" className="gap-2 h-12 px-8">
              Konsultasi Gratis <ArrowRight className="h-4 w-4" />
            </Button>
            <Button onClick={() => window.open("https://portofolio.ryhar.my.id/", "_blank")} size="lg" variant="outline" className="h-12 px-8">
              View Portfolio
            </Button>
          </motion.div>

          {/* Floaters */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.8 }} className="absolute -z-10 hidden lg:block left-[10%] top-[20%] p-4 bg-background rounded-2xl shadow-xl border animate-bounce-slow">
            <Code className="h-8 w-8 text-blue-500" />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1 }} className="absolute -z-10 hidden lg:block right-[15%] bottom-[30%] p-4 bg-background rounded-2xl shadow-xl border animate-bounce-slow delay-700">
            <Rocket className="h-8 w-8 text-purple-500" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
