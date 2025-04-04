import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Smartphone } from "lucide-react"

export default function BecomeAgentBenefits() {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Become an <span className="text-primary">LinkX</span> agent at no cost
                    </h2>
                    <p className="mt-2 text-muted-foreground">LinkX is the only single platform the provides all your wants.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left side - Benefits cards */}
                    <div className="space-y-6">
                        <BenefitCard
                            title="Become a car fleet owner"
                            description="And as a car fleet owner, you'll have total control over your business, with the ability to: - Manage your fleet and drivers easily - Track your earnings and performance in real-time - Make data-driven decisions to grow your business"
                        />

                        <BenefitCard
                            title="High comission low pricing"
                            description="Become a Linkx agent and start earning high commissions today! As a Linkx agent, you'll offer your customers a reliable and seamless payment experience. Plus, take control of your car fleet and maximize your earnings by downloading and signing up for the Linkx app."
                        />

                        <BenefitCard
                            title="As an LinkX agent, you'll enjoy"
                            description="High commissions on every transaction - A reliable payment platform for your customers - A user-friendly app to manage your fleet and earnings"
                        />
                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center">
                        <Image
                            src="/placeholder.svg?height=500&width=600"
                            alt="LinkX Agent Benefits"
                            width={600}
                            height={500}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

interface BenefitCardProps {
    title: string
    description: string
}

function BenefitCard({ title, description }: BenefitCardProps) {
    return (
        <Card className="p-6 border border-border">
            <div className="flex gap-4">
                <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-primary-foreground" />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg text-foreground">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                </div>
            </div>
        </Card>
    )
}

