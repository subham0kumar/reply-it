import { Card, CardContent } from "@/components/ui/card";
import { Brain, MessageCircle, TrendingUp } from "lucide-react";

export function Benefits() {
  return (
    <section className="container py-24">
      <div className="text-center space-y-4 max-w-[800px] mx-auto mb-16">
        <h2 className="text-3xl font-bold">Unlock the Power of Engagement</h2>
        <p className="text-lg text-muted-foreground">
          Our platform offers an expert messaging bot, personalized
          interactions, and tools to turn your audience into loyal brand
          advocates.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <CardContent className="relative pt-8 pb-12 px-6 text-center space-y-4">
            <Brain className="w-12 h-12 text-primary mx-auto" />
            <h3 className="font-semibold text-xl">
              AI-Driven Messaging for Instant Engagement
            </h3>
            <p className="text-muted-foreground">
              Respond to messages with intelligent, context-aware automated
              responses that feel personal and authentic.
            </p>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <CardContent className="relative pt-8 pb-12 px-6 text-center space-y-4">
            <MessageCircle className="w-12 h-12 text-primary mx-auto" />
            <h3 className="font-semibold text-xl">
              Seamless Default Responses
            </h3>
            <p className="text-muted-foreground">
              Create and customize response templates for consistent
              communication across all your Instagram interactions.
            </p>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <CardContent className="relative pt-8 pb-12 px-6 text-center space-y-4">
            <TrendingUp className="w-12 h-12 text-primary mx-auto" />
            <h3 className="font-semibold text-xl">
              Transform Engagement into Opportunities
            </h3>
            <p className="text-muted-foreground">
              Convert casual interactions into meaningful business relationships
              with smart follow-ups and engagement tracking.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
