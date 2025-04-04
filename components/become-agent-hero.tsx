import Image from "next/image"

export default function BecomeAgentHero() {
    return (
        <section className="bg-secondary py-20 md:py-28">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* App Image */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <Image
                                src="/become-agent.png"
                                alt="LinkX App Interface"
                                width={400}
                                height={600}
                                className="rounded-3xl shadow-md border border-border"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                            Be your own <br />
                            <span className="text-primary">BOSS</span>
                        </h1>
                        <div className="space-y-6 text-secondary-foreground">
                            <p className="text-lg">
                                Become an LinkX agent and start earning high commissions today! As an LinkX agent, you'll offer your
                                customers a reliable and seamless payment experience. Plus, take control of your car fleet and maximize
                                your earnings by downloading and signing up for the LinkX app.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

