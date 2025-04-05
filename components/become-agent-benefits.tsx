"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { DollarSign, CarFront, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function BecomeAgentBenefits(): JSX.Element {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, type: "spring", stiffness: 50 }
        }
    };

    const imageVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 50,
                delay: 0.3
            }
        }
    };

    // Benefit card data with appropriate icons
    const benefits = [
        {
            icon: <CarFront className="w-5 h-5 text-primary-foreground" />,
            title: "Become a car fleet owner",
            description: "And as a car fleet owner, you'll have total control over your business, with the ability to: - Manage your fleet and drivers easily - Track your earnings and performance in real-time - Make data-driven decisions to grow your business"
        },
        {
            icon: <DollarSign className="w-5 h-5 text-primary-foreground" />,
            title: "High commission low pricing",
            description: "Become a Linkx agent and start earning high commissions today! As a Linkx agent, you'll offer your customers a reliable and seamless payment experience. Plus, take control of your car fleet and maximize your earnings by downloading and signing up for the Linkx app."
        },
        {
            icon: <BarChart3 className="w-5 h-5 text-primary-foreground" />,
            title: "As an LinkX agent, you'll enjoy",
            description: "High commissions on every transaction - A reliable payment platform for your customers - A user-friendly app to manage your fleet and earnings"
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Modern background with subtle pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-background dark:from-background dark:via-secondary/10 dark:to-background">
                {/* Dot pattern */}
                <div
                    className="absolute inset-0 opacity-5 dark:opacity-10"
                    style={{
                        backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px)",
                        backgroundSize: "20px 20px"
                    }}
                ></div>

                {/* Decorative elements */}
                <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full opacity-60 blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full opacity-60 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    <motion.div className="text-center mb-16" variants={itemVariants}>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Become an <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">LinkX</span> agent at no cost
                        </h2>
                        <motion.div
                            className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto my-5"
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: 96, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        ></motion.div>
                        <p className="mt-2 text-foreground/70 dark:text-muted-foreground max-w-2xl mx-auto">
                            LinkX is the only single platform that provides all your wants. Start earning with zero investment and unlimited potential.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left side - Benefits cards */}
                        <motion.div
                            variants={containerVariants}
                            className="space-y-6"
                        >
                            {benefits.map((benefit, index) => (
                                <BenefitCard
                                    key={index}
                                    icon={benefit.icon}
                                    title={benefit.title}
                                    description={benefit.description}
                                    index={index}
                                />
                            ))}
                        </motion.div>

                        {/* Right side - Image */}
                        <motion.div
                            variants={imageVariants}
                            className="flex justify-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-3xl blur-xl opacity-70"></div>
                                <Image
                                    src="/placeholder.svg?height=500&width=600"
                                    alt="LinkX Agent Benefits"
                                    width={600}
                                    height={500}
                                    className="object-contain relative z-10 rounded-2xl"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

interface BenefitCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    index: number;
}

function BenefitCard({ icon, title, description, index }: BenefitCardProps): JSX.Element {
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
                    transition: { type: "spring", stiffness: 300, damping: 15 }
                }}
                className="h-full rounded-lg overflow-hidden"
            >
                <Card className="p-6 border border-border bg-white dark:bg-card/95 dark:backdrop-blur-sm h-full">
                    <div className="flex gap-5">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                                {icon}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-foreground">{title}</h3>
                            <p className="mt-2 text-muted-foreground leading-relaxed">
                                {description.split('-').map((part, i) =>
                                    part.trim() && (
                                        <span key={i} className="block mt-1">
                                            {i > 0 ? (
                                                <span className="inline-flex items-start">
                                                    <span className="mr-2 text-primary font-bold">•</span>
                                                    {part.trim()}
                                                </span>
                                            ) : part}
                                        </span>
                                    )
                                )}
                            </p>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </motion.div>
    )
}