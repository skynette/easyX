import Image from "next/image"

export default function AboutHeroSection() {
    return (
        <section className="bg-secondary py-20 md:py-28">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Hello!</h1>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Welcome to <span className="text-primary">LinkX</span>
                        </h2>
                        <div className="space-y-6 text-secondary-foreground">
                            <p className="text-lg">
                                We take pride in the meaningful impact we're making. With innovative solutions and an unwavering
                                dedication to customer satisfaction, we're driving positive change and empowering individuals and
                                businesses to flourish in the digital era. Join us on our mission to:
                            </p>
                            <ul className="space-y-2 text-lg">
                                <li>- Empower growth</li>
                                <li>
                                    - Simplify <span className="text-primary">payments</span>
                                </li>
                                <li>
                                    - Redefine <span className="text-primary">transportation</span> for all
                                </li>
                            </ul>
                            <p className="text-lg">Together, let's shape a brighter future and create a better world for everyone.</p>
                        </div>
                    </div>

                    {/* App Image */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <Image
                                src="/placeholder.svg?height=600&width=400"
                                alt="LinkX App Interface"
                                width={400}
                                height={600}
                                className="rounded-3xl shadow-md border border-border"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

