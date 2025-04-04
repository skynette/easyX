import type React from "react"
import Image from "next/image"

export default function BecomeAgentRequirements() {
    return (
        <section className="py-16 bg-secondary" id="requirements">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">What you will need to apply with us</h2>
                    <p className="mt-2 text-muted-foreground">LinkX is the only single platform the provides all your wants.</p>
                </div>

                <div className="space-y-12">
                    {/* Personal Requirements */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1">
                            <Image
                                src="/placeholder.svg?height=300&width=400"
                                alt="Driver in car"
                                width={400}
                                height={300}
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h3 className="text-2xl font-bold text-foreground mb-4">Personal Requirements</h3>
                            <ul className="space-y-3">
                                <RequirementItem>Be at least 25 years old</RequirementItem>
                                <RequirementItem>Have a clean driving record</RequirementItem>
                                <RequirementItem>Have auto insurance</RequirementItem>
                                <RequirementItem>
                                    Own an iPhone or Android smartphone capable of downloading and running the Driver app
                                </RequirementItem>
                            </ul>
                        </div>
                    </div>

                    {/* Vehicle Requirements */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">Vehicle Requirements</h3>
                            <ul className="space-y-3">
                                <RequirementItem>Year: 2008 or newer (note: car year may vary by region)</RequirementItem>
                                <RequirementItem>Doors: 4</RequirementItem>
                                <RequirementItem>Seats: 5-8, including the driver's seat</RequirementItem>
                                <RequirementItem>License plate: Must be clear and visible</RequirementItem>
                                <RequirementItem>Car year may vary by region</RequirementItem>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/placeholder.svg?height=300&width=400"
                                alt="Person with car"
                                width={400}
                                height={300}
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    {/* Documents */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1">
                            <Image
                                src="/placeholder.svg?height=300&width=400"
                                alt="Documents"
                                width={400}
                                height={300}
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h3 className="text-2xl font-bold text-foreground mb-4">Documents</h3>
                            <ul className="space-y-3">
                                <RequirementItem>Driver profile photo</RequirementItem>
                                <RequirementItem>Vehicle registration</RequirementItem>
                                <RequirementItem>Personal vehicle insurance</RequirementItem>
                                <RequirementItem>Driver license</RequirementItem>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function RequirementItem({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-start gap-2">
            <span className="h-5 w-5 rounded-full bg-primary flex-shrink-0 mt-1"></span>
            <span className="text-foreground">{children}</span>
        </li>
    )
}

