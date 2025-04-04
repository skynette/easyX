"use client"
import { Card } from "@/components/ui/card"
import { Smartphone } from "lucide-react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

export default function ServicesComponent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              <span className="text-primary">Services</span> We Offer
            </h2>
            <p className="mt-4 text-muted-foreground">
              LinkX connects you with over 20+ <span className="text-primary">service providers</span> and drivers,
              thereby helping you manage all your <span className="text-primary">bills</span> and{" "}
              <span className="text-primary">transportation</span>
              needs hassle free.
            </p>
          </div>

          <div className="space-y-4">
            <ServiceCard
              title="Cheap Data & Airtime Top up"
              description="We offer data bundles at a discounted price: 1GB for N250, 2GB for N500, 5GB for N1300, and 20GB for N5000, available for all networks. Stay connected with your loved ones and top up your airtime with LinkX - it's quick, easy, and always available 24/7."
            />

            <ServiceCard
              title="Utility Bills & Betting"
              description="Pay your electricity bills, cable TV subscriptions, and education fees conveniently with LinkX! Never miss a payment or wait in long lines again. Plus, use LinkX to bet on your favorite sports games and events and experience the excitement of the game!"
            />

            <ServiceCard
              title="Rides & Delivery"
              description="Experience the convenience of LinkX! Order rides, share rides with friends, and enjoy fast and reliable delivery of items and goods with our team of dedicated drivers and dispatch riders."
            />

            <ServiceCard
              title="Make money on EasyX"
              description="Join LinkX as an agent and unlock a hassle-free earning opportunity! You can either own a single car or manage a fleet of cars and earn money effortlessly. Plus, refer friends to LinkX and earn even more through our cashback program."
            />
          </div>
        </div>

        <div className="relative hidden lg:flex items-center justify-center">
          <div className="absolute w-64 h-64 rounded-full bg-primary/20 top-1/4 -left-12"></div>
          <div className="absolute w-48 h-48 rounded-full bg-primary/20 bottom-1/4 right-0"></div>
          <div className="absolute w-32 h-32 rounded-full bg-primary/20 top-0 right-1/4"></div>
          <div className="relative z-10">
            <Image
              src="/services.png"
              alt="Person using LinkX app"
              width={500}
              height={600}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface ServiceCardProps {
  title: string
  description: string
}

function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <Card className="p-4 border border-border">
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Smartphone className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-foreground">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  )
}

