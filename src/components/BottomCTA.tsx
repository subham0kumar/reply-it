import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function BottomCTA() {
  return (
    <section className="container py-24">
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 dark:from-primary/80 dark:to-primary/40 opacity-90" />
        <div className="relative px-8 py-16 sm:px-16 sm:py-24 text-center text-white space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold max-w-2xl mx-auto text-background dark:text-foreground">
            Transform Your Instagram Engagement with Reply-It's Automation Tools
          </h2>
          <p className="text-lg text-background/80 dark:text-foreground/80 max-w-xl mx-auto">
            Join thousands of creators and businesses who have revolutionized their Instagram engagement strategy.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="gradient-bg elegant-button">
              Get Started Free <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="elegant-button bg-background hover:bg-violet-50 dark:hover:bg-violet-900">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

