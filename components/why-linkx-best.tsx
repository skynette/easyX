import { Card } from "@/components/ui/card"

export default function WhyLinkXBestSection() {
    return (
        <div className="bg-secondary py-16 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                        Why <span className="text-primary">LinkX</span> is Simply the Best
                    </h2>
                    <p className="mt-4 text-muted-foreground">LinkX is the only single platform that provides all you need</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        title="One App for Multiple Solution"
                        description="Linkx is the one app that helps you simplify your daily life. We are not regarded as the all-in-one app for nothing—Linkx seamlessly integrates bill payments and ride services, putting control and efficiency right at your fingertips. Say GOODBYE to hassle!"
                    />

                    <FeatureCard
                        title="Enables you high Savings"
                        description="Linkx offers competitive rates, helping you save more. We believe in fair pricing. Say no to hidden fees and exorbitant charges."
                    />

                    <FeatureCard
                        title="User-Friendly Interface"
                        description="Say goodbye to complex payment processes! Our intuitive interface makes transactions a breeze for both individuals and businesses."
                    />

                    <FeatureCard
                        title="Instant Transactions"
                        description="At Linkx, we understand the value of speed—time is money. Enjoy lightning-fast transactions without any delays with Linkx."
                    />

                    <FeatureCard
                        title="Secure and Reliable"
                        description="Your security is our top priority. With state-of-the-art encryption technology, rest assured that your transactions are always safe and secure."
                    />

                    <FeatureCard
                        title="Earn Rewards"
                        description="With Linkx, the opportunities are endless. Start earning today and achieve financial freedom just by: Refer friends and earn rewards Drive with Linkx and boost your income Build a fleet and become a successful entrepreneur"
                    />
                </div>
            </div>
        </div>
    )
}

interface FeatureCardProps {
    title: string
    description: string
}

function FeatureCard({ title, description }: FeatureCardProps) {
    return (
        <Card className="h-full bg-card hover:shadow-md">
            <div className="flex h-full">
                <div className="w-2 flex-shrink-0 bg-primary"></div>
                <div className="p-6">
                    <h3 className="font-semibold text-xl mb-3 text-foreground">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                </div>
            </div>
        </Card>
    )
}

