"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Award, Zap, LayoutGrid, Clock, Shield, Gift } from "lucide-react"
import { ReactNode } from "react"

export default function WhyLinkXBestSection(): JSX.Element {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    }

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, type: "spring", stiffness: 50 }
        }
    }

    const features = [
        {
            icon: <LayoutGrid className="w-6 h-6" />,
            title: "One App for Multiple Solution",
            description: "Linkx is the one app that helps you simplify your daily life. We are not regarded as the all-in-one app for nothing—Linkx seamlessly integrates bill payments and ride services, putting control and efficiency right at your fingertips. Say GOODBYE to hassle!"
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Enables you high Savings",
            description: "Linkx offers competitive rates, helping you save more. We believe in fair pricing. Say no to hidden fees and exorbitant charges."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "User-Friendly Interface",
            description: "Say goodbye to complex payment processes! Our intuitive interface makes transactions a breeze for both individuals and businesses."
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Instant Transactions",
            description: "At Linkx, we understand the value of speed—time is money. Enjoy lightning-fast transactions without any delays with Linkx."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Secure and Reliable",
            description: "Your security is our top priority. With state-of-the-art encryption technology, rest assured that your transactions are always safe and secure."
        },
        {
            icon: <Gift className="w-6 h-6" />,
            title: "Earn Rewards",
            description: "With Linkx, the opportunities are endless. Start earning today and achieve financial freedom just by: Refer friends and earn rewards Drive with Linkx and boost your income Build a fleet and become a successful entrepreneur"
        }
    ]

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background with modern pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-secondary/15 to-secondary/10 dark:from-secondary/30 dark:via-secondary/20 dark:to-secondary/10">
                {/* Dot pattern overlay */}
                <div
                    className="absolute inset-0 opacity-10 dark:opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle at 20px 20px, rgba(0, 0, 0, 0.2) 3px, transparent 0)`,
                        backgroundSize: "40px 40px"
                    }}
                ></div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent opacity-30 dark:opacity-30 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/5 to-transparent opacity-30 dark:opacity-30 rounded-tr-full"></div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    <motion.div
                        className="text-center mb-14"
                        variants={titleVariants}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            Why <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">LinkX</span> is Simply the Best
                        </h2>
                        <motion.div
                            className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6"
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: 96, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        ></motion.div>
                        <p className="mt-4 text-foreground/80 dark:text-muted-foreground max-w-2xl mx-auto font-medium">
                            LinkX is the only single platform that provides all you need for your daily digital transactions and mobility
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                index={index}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

interface FeatureCardProps {
    icon: ReactNode
    title: string
    description: string
    index: number
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps): JSX.Element {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: 0.1 * index,
                type: "spring",
                stiffness: 50
            }}
            viewport={{ once: true, margin: "-50px" }}
        >
            <motion.div
                whileHover={{
                    y: -8,
                    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
                    transition: { type: "spring", stiffness: 300, damping: 15 }
                }}
                className="h-full rounded-lg overflow-hidden"
            >
                <Card className="h-full bg-white dark:bg-card/95 dark:backdrop-blur-sm border-0 shadow-sm overflow-hidden">
                    <div className="flex h-full">
                        <div className="w-2 flex-shrink-0 bg-gradient-to-b from-primary to-secondary"></div>
                        <div className="p-7">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 flex items-center justify-center text-primary mr-4">
                                    {icon}
                                </div>
                                <h3 className="font-semibold text-xl text-foreground">{title}</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed dark:text-muted-foreground/90">{description}</p>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </motion.div>
    )
}