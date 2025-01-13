import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small businesses and influencers",
    features: [
      "Up to 1,000 automated responses per month",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    description: "Ideal for growing brands and businesses",
    features: [
      "Up to 10,000 automated responses per month",
      "Advanced analytics and reporting",
      "Priority email support",
      "Custom response templates",
    ],
  },
]

export function Pricing() {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Choose Your Vibe</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan, index) => (
          <Card key={plan.name} className={`gen-z-card ${index === 1 ? 'border-2 border-violet-500' : ''}`}>
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-4xl font-bold mb-4 gradient-text">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full gradient-bg elegant-button">
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

