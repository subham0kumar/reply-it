import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export function Testimonial() {
  return (
    <section className="container py-20">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-8 text-center space-y-6">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <blockquote className="text-xl font-medium italic">
            "Reply-It transformed our Instagram engagement! Our response time
            has drastically improved, leading to more conversions and satisfied
            customers."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="font-semibold">Jane Doe</div>
              <div className="text-sm text-muted-foreground">
                Marketing Director at Tech
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
