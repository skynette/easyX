import Image from "next/image"

export default function AboutUsSection() {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">About Us</h2>

                {/* First row - Founder and description */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
                    {/* Founder image */}
                    <div className="flex flex-col items-center">
                        <div className="mb-4 rounded-xl overflow-hidden max-w-sm">
                            <Image
                                src="/placeholder.svg?height=400&width=320"
                                alt="Omajuwa Okotie"
                                width={320}
                                height={400}
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">Omajuwa Okotie</h3>
                        <p className="text-muted-foreground">CEO & Founder</p>
                    </div>

                    {/* Description */}
                    <div>
                        <p className="text-foreground text-lg leading-relaxed">
                            Introducing Linkx, your one-stop service provider platform for a hassle-free life. Enjoy seamless bill
                            payments, airtime and data top-ups, and convenient transportation solutions all in one place. Our secure
                            and reliable platform streamlines bill payments, making it easy to manage your electricity bills, airtime
                            purchases, cable TV subscriptions, and more with just a few clicks. Plus, our user-friendly interface
                            ensures a smooth transaction experience.
                        </p>
                    </div>
                </div>

                {/* Second row - Description and Co-founder */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Description */}
                    <div className="order-2 md:order-1">
                        <p className="text-foreground text-lg leading-relaxed">
                            But that's not all. Linkx also revolutionizes your daily commute with our integrated ride service. Whether
                            you need a quick ride across town, a reliable transportation solution for your daily commute, or a
                            convenient delivery option for items, our ride service prioritizes your safety and comfort. With Linkx,
                            simplify your payments, commute with ease, and experience the future of transportation today!
                        </p>
                    </div>

                    {/* Co-founder image */}
                    <div className="flex flex-col items-center order-1 md:order-2">
                        <div className="mb-4 rounded-xl overflow-hidden max-w-sm">
                            <Image
                                src="/placeholder.svg?height=400&width=320"
                                alt="Kelvin Piokor"
                                width={320}
                                height={400}
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">Kelvin Piokor</h3>
                        <p className="text-muted-foreground">CO-CEO & Co-Founder</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

