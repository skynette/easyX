import Image from "next/image"
import Link from "next/link"

export default function HomeHeroSection() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/80">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: "radial-gradient(white, rgba(255, 255, 255, 0.2) 2px, transparent 2px)",
                        backgroundSize: "50px 50px",
                    }}
                ></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
                    {/* App Image - Mobile: First, Desktop: Second column */}
                    <div className="order-1 lg:order-2 flex justify-center mb-8 lg:mb-0">
                        <div className="relative">
                            <Image
                                src="/hero.avif"
                                alt="LinkX App Interface"
                                width={320}
                                height={600}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Text Content - Mobile: Second, Desktop: First column */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            <span className="text-primary">LinkX:</span> Leading Digital Payment and Ride Services
                        </h1>
                        <p className="text-xl mb-8">
                            Experience Seamless Bill Payment and Ride Services: Convenient Control at Your Fingertips!
                        </p>

                        {/* App Store Buttons as Images */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 lg:mb-12">
                            <Link href="#" className="hover:opacity-90 transition-opacity">
                                <Image
                                    src="/google-play.png"
                                    alt="Get it on Google Play"
                                    width={170}
                                    height={50}
                                    className="object-contain"
                                />
                            </Link>

                            <Link href="#" className="hover:opacity-90 transition-opacity">
                                <Image
                                    src="/apple-store.png"
                                    alt="Download on the App Store"
                                    width={170}
                                    height={50}
                                    className="object-contain"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}