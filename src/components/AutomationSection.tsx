import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Video, MessageCircle, ArrowRight } from 'lucide-react'

export function AutomationSection() {
  return (
    <section className="container py-24 relative">
      <div className="blob w-96 h-96 bg-violet-300 top-10 -right-10 dark:bg-violet-900"></div>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative lg:h-[600px] rounded-3xl overflow-hidden border-2 border-violet-200 shadow-2xl order-last lg:order-first">
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 via-indigo-500/20 to-pink-500/20 animate-pulse-glow" />
          <img 
            src="/placeholder.svg?height=600&width=800"
            alt="Video Comment Responses"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight gradient-text">
              Effortlessly Engage with Video Comment Responses
            </h2>
            <p className="text-xl text-muted-foreground">
              With our AI-powered video comment system, you can create personalized responses that feel authentic and engaging.
            </p>
          </div>
          
          <div className="grid gap-6">
            <Card className="gen-z-card">
              <CardContent className="flex gap-4 p-6">
                <Video className="w-10 h-10 text-violet-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">Video Responses</h3>
                  <p className="text-muted-foreground">
                    Create and schedule personalized video responses to boost engagement.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="gen-z-card">
              <CardContent className="flex gap-4 p-6">
                <MessageCircle className="w-10 h-10 text-indigo-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">Smart Comments</h3>
                  <p className="text-muted-foreground">
                    AI-powered comment analysis and response suggestions for better engagement.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button className="gradient-bg elegant-button">
            Try Video Responses <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

