import { Button } from "@/components/ui/button";
import { Pricing } from "@/components/Pricing";
import { Features } from "@/components/Features";
import { AutomationSection } from "@/components/AutomationSection";
import { Benefits } from "@/components/Benefits";
import { BottomCTA } from "@/components/BottomCTA";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { Navigation } from "@/components/Navigation";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container flex h-16 items-center justify-between">
          <span className="text-xl font-bold gradient-text">Reply-It</span>
          <Navigation />
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="elegant-button">
              Sign In
            </Button>
            <Button className="gradient-bg elegant-button">Get Started</Button>
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container pt-32 pb-16 relative">
        <div className="blob w-96 h-96 bg-violet-300 -top-10 -left-10 dark:bg-violet-900"></div>
        <div className="blob w-96 h-96 bg-indigo-300 top-32 -right-10 dark:bg-indigo-900"></div>
        <div className="relative">
          <div className="flex flex-col items-center text-center space-y-6 max-w-[800px] mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight gradient-text animate-fade-up">
              Level Up Your Insta Game
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-[600px] animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Reply-It turns your DMs into a powerhouse. Automate, engage, and
              watch your following soar! 🚀
            </p>
            <div
              className="flex gap-4 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button className="gradient-bg elegant-button">
                Start Free <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="elegant-button bg-background hover:bg-violet-50 dark:hover:bg-violet-900"
              >
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

            {/* Curved Cards Section */}
            <section className="container pb-24 relative">
        <div className="flex justify-center -space-x-4 md:-space-x-8">
          <div className="w-64 md:w-80 aspect-[3/4] rounded-[3rem] overflow-hidden transform hover:-translate-y-4 transition-transform duration-300 relative z-10">
            <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800"></div>
            <img 
              src="/placeholder.svg?height=400&width=300"
              alt="Creator Profile"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-64 md:w-80 aspect-[3/4] rounded-[3rem] overflow-hidden transform hover:-translate-y-4 transition-transform duration-300 relative z-20">
            <div className="absolute inset-0 bg-[#E5E0D9] dark:bg-gray-700"></div>
            <img 
              src="/placeholder.svg?height=400&width=300"
              alt="Creator Profile"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-64 md:w-80 aspect-[3/4] rounded-[3rem] overflow-hidden transform hover:-translate-y-4 transition-transform duration-300 relative z-30">
            <div className="absolute inset-0 bg-white dark:bg-gray-600"></div>
            <img 
              src="/placeholder.svg?height=400&width=300"
              alt="Creator Profile"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-64 md:w-80 aspect-[3/4] rounded-[3rem] overflow-hidden transform hover:-translate-y-4 transition-transform duration-300 relative z-40">
            <div className="absolute inset-0 bg-[#7ED5C9] dark:bg-gray-700"></div>
            <img 
              src="/placeholder.svg?height=400&width=300"
              alt="Creator Profile"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none"></div>
      </section>


      <Pricing />
      <Features />
      <AutomationSection />
      <Benefits />
      <BottomCTA />
      <Footer />
    </div>
  );
}
