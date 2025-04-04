import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"
import Link from "next/link"

export default function AppDownloadSection() {
    return (
        <div className="py-16 px-4 bg-secondary">
            <div className="container mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* App Image */}
                    <div className="order-2 md:order-1 flex justify-center">
                        <div className="relative">
                            {/* <div className="absolute w-64 h-64 rounded-full bg-primary/20 -z-10 -top-10 -left-10"></div> */}
                            <Image
                                src="/app-download.avif"
                                alt="LinkX App Screenshot"
                                width={300}
                                height={400}
                                className=""
                            />
                        </div>
                    </div>

                    {/* Download Info */}
                    <div className="order-1 md:order-2 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                            Download the <span className="text-primary">LinkX</span> App
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
                            Experience the convenience of LinkX on your mobile device. Available on iOS and Android platforms. Scan
                            the QR code or download directly from app stores.
                        </p>

                        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                            <div className="bg-card p-4 rounded-xl shadow-md">
                                <Image
                                    src="/qr.png"
                                    alt="QR Code to download LinkX app"
                                    width={150}
                                    height={150}
                                    className="mx-auto"
                                />
                                <p className="text-sm text-center mt-2 font-medium text-foreground">Scan to download</p>
                            </div>


                            <div className="space-y-4">
                                <p className="font-semibold text-lg text-foreground">Available on</p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="#" className="hover:opacity-90 transition-opacity">
                                        <Image
                                            src="/apple-store.png"
                                            alt="Download on the App Store"
                                            width={170}
                                            height={50}
                                            className="object-contain"
                                        />
                                    </Link>

                                    <Link href="#" className="hover:opacity-90 transition-opacity">
                                        <Image
                                            src="/google-play.png"
                                            alt="Get it on Google Play"
                                            width={170}
                                            height={50}
                                            className="object-contain"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card p-4 rounded-lg shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-primary"
                                    >
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-foreground">Secure & Reliable</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Your data is protected with industry-leading security measures
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

