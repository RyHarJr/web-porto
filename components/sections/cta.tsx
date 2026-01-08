import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">Ready to Elevate Your Business?</h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg md:text-xl mb-10">Let&apos;s build a website that drives results. Schedule your free consultation today.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => window.open("https://portofolio.ryhar.my.id/", "_blank")} size="lg" variant="secondary" className="gap-2 text-primary font-bold h-14 px-8 text-lg">
            Start Your Project <ArrowRight className="h-5 w-5" />
          </Button>
          <Button onClick={() => window.open("https://wa.me/6289508188642/", "_blank")} size="lg" variant="outline" className="h-14 px-8 text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Contact on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
