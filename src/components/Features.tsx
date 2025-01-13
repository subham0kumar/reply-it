import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Zap, Sparkles, ArrowRight } from 'lucide-react'

export function Features() {
  return (
    <section className="container py-24 relative">
      <div className="blob w-96 h-96 bg-indigo-300 -bottom-10 -left-10 dark:bg-indigo-900"></div>
      <div className="grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight gradient-text">
              Supercharge Your Insta DMs with AI Magic ✨
            </h2>
            <p className="text-xl text-muted-foreground">
              Our AI-powered DM responses keep your audience hooked 24/7. It's like having a social media manager that never sleeps!
            </p>
          </div>
          
          <div className="grid gap-6">
            <Card className="gen-z-card">
              <CardContent className="flex gap-4 p-6">
                <MessageSquare className="w-10 h-10 text-violet-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">Instant Engagement</h3>
                  <p className="text-muted-foreground">
                    Respond to DMs in seconds with AI-generated replies that feel totally human.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="gen-z-card">
              <CardContent className="flex gap-4 p-6">
                <Zap className="w-10 h-10 text-indigo-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">Smart Automation</h3>
                  <p className="text-muted-foreground">
                    Set up custom flows that trigger based on keywords or user actions. It's like magic! 🪄
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="gen-z-card">
              <CardContent className="flex gap-4 p-6">
                <Sparkles className="w-10 h-10 text-pink-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">Trend-Savvy Responses</h3>
                  <p className="text-muted-foreground">
                    Our AI stays up-to-date with the latest trends, ensuring your replies are always on point.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button className="gradient-bg elegant-button">
            Explore Features <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="relative lg:h-[600px] rounded-3xl overflow-hidden border-2 border-violet-200 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-indigo-500/20 to-pink-500/20 animate-pulse-glow" />
          <img 
            src="/placeholder.svg?height=600&width=800"
            alt="AI-Powered DM Responses"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

