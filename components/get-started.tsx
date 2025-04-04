import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function GetStartedSection() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-7xl relative overflow-hidden">
            {/* Background circles */}
            <div className="absolute w-72 h-72 rounded-full bg-primary/20 top-0 left-0 -translate-x-1/2"></div>
            <div className="absolute w-48 h-48 rounded-full bg-primary/20 bottom-1/4 right-0 translate-x-1/4"></div>
            <div className="absolute w-32 h-32 rounded-full bg-primary/20 bottom-0 left-1/4 translate-y-1/2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left side with images - positioned slightly lower */}
                <div className="relative order-2 lg:order-1 mt-8 lg:mt-16">
                    <Image
                        src="/get-started.png"
                        alt="Person using LinkX app with phone screens"
                        width={500}
                        height={600}
                        className="object-contain mx-auto"
                    />
                </div>

                {/* Right side with steps */}
                <div className="order-1 lg:order-2">
                    <div className="text-center lg:text-left mb-10">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Get started with <span className="">LinkX</span> Today!!!
                        </h2>
                    </div>

                    <div className="space-y-8 max-w-lg mx-auto lg:mx-0">
                        <StepItem
                            number={1}
                            title="Download and Install the LinkX App"
                            description="Visit your app store, search for 'LinkX', and download the app on your mobile device."
                            highlightedText="LinkX"
                        />

                        <StepItem
                            number={2}
                            title="Sign Up on LinkX freely"
                            description="Open the LinkX app and sign up in just a few easy steps! Simply provide some basic personal information, and you'll be all set to start"
                            highlightedText="LinkX"
                        />

                        <StepItem
                            number={3}
                            title="Add funds, pay Bills, order ride and get items delivered"
                            description="Once signed in, simply add funds to pay bills and order rides. It's that simple!"
                        />

                        <div className="pt-4">
                            <Button
                                size="lg"
                                variant="default"
                                className="rounded-full px-8 py-6 text-lg w-full md:w-auto"
                            >
                                Download App
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface StepItemProps {
    number: number
    title: string
    description: string
    highlightedText?: string
}

function StepItem({ number, title, description, highlightedText }: StepItemProps) {
    // Function to highlight specific text in the title
    const renderTitle = () => {
        if (!highlightedText) return title

        const parts = title.split(highlightedText)
        return (
            <>
                {parts[0]}
                <span className="">{highlightedText}</span>
                {parts[1]}
            </>
        )
    }

    return (
        <div className="flex gap-4">
            <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold">
                    {number}
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-lg">{renderTitle()}</h3>
                <p className="mt-1">{description}</p>
            </div>
        </div>
    )
}

