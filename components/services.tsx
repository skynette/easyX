"use client"
import { Card } from "@/components/ui/card"
import { Smartphone, Zap, Home, Users } from "lucide-react"
import Image from "next/image"
import { motion, Variant, Variants } from "framer-motion"
import { ReactNode } from "react"

export default function ServicesComponent(): JSX.Element {
    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    }

    const circleVariants: Variants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (custom: number) => ({
            scale: 1,
            opacity: 0.3,
            transition: {
                delay: custom * 0.2,
                duration: 0.8,
                type: "spring",
                stiffness: 50
            },
        }),
    }

    const imageVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.8,
                type: "spring",
                stiffness: 60
            },
        },
    }

    // Service data with appropriate icons
    const services: Array<{
        icon: ReactNode;
        title: string;
        description: string;
    }> = [
            {
                icon: <Smartphone className="w-5 h-5 text-primary" />,
                title: "Cheap Data & Airtime Top up",
                description: "We offer data bundles at a discounted price: 1GB for N250, 2GB for N500, 5GB for N1300, and 20GB for N5000, available for all networks. Stay connected with your loved ones and top up your airtime with LinkX - it's quick, easy, and always available 24/7."
            },
            {
                icon: <Home className="w-5 h-5 text-primary" />,
                title: "Utility Bills & Betting",
                description: "Pay your electricity bills, cable TV subscriptions, and education fees conveniently with LinkX! Never miss a payment or wait in long lines again. Plus, use LinkX to bet on your favorite sports games and events and experience the excitement of the game!"
            },
            {
                icon: <Zap className="w-5 h-5 text-primary" />,
                title: "Rides & Delivery",
                description: "Experience the convenience of LinkX! Order rides, share rides with friends, and enjoy fast and reliable delivery of items and goods with our team of dedicated drivers and dispatch riders."
            },
            {
                icon: <Users className="w-5 h-5 text-primary" />,
                title: "Make money on EasyX",
                description: "Join LinkX as an agent and unlock a hassle-free earning opportunity! You can either own a single car or manage a fleet of cars and earn money effortlessly. Plus, refer friends to LinkX and earn even more through our cashback program."
            }
        ]

    return (
        <div className="container mx-auto px-4 py-16 max-w-7xl relative overflow-hidden">
            {/* Background Gradient Elements */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-br from-secondary/30 to-transparent rounded-full blur-3xl opacity-40 dark:opacity-20"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-3xl opacity-30 dark:opacity-15"></div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10"
            >
                <div className="space-y-8">
                    <motion.div variants={itemVariants} className="text-center lg:text-left">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-foreground mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span> We Offer
                        </motion.h2>
                        <motion.div
                            className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto lg:mx-0 mb-4"
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: 100, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        ></motion.div>
                        <motion.p
                            variants={itemVariants}
                            className="mt-4 text-muted-foreground"
                        >
                            LinkX connects you with over 20+ <span className="text-primary font-medium">service providers</span> and drivers,
                            thereby helping you manage all your <span className="text-primary font-medium">bills</span> and{" "}
                            <span className="text-primary font-medium">transportation</span> needs hassle free.
                        </motion.p>
                    </motion.div>

                    <motion.div className="space-y-4">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div>

                <div className="relative hidden lg:flex items-center justify-center">
                    <motion.div
                        custom={0}
                        variants={circleVariants}
                        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-primary/30 to-secondary/10 dark:from-primary/20 dark:to-secondary/5 top-1/4 -left-12"
                    ></motion.div>
                    <motion.div
                        custom={1}
                        variants={circleVariants}
                        className="absolute w-48 h-48 rounded-full bg-gradient-to-tl from-secondary/30 to-primary/10 dark:from-secondary/20 dark:to-primary/5 bottom-1/4 right-0"
                    ></motion.div>
                    <motion.div
                        custom={2}
                        variants={circleVariants}
                        className="absolute w-32 h-32 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/30 dark:from-primary/10 dark:to-secondary/20 top-0 right-1/4"
                    ></motion.div>

                    <motion.div
                        variants={imageVariants}
                        className="relative z-10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-secondary/10 dark:from-transparent dark:via-primary/10 dark:to-secondary/20 rounded-3xl blur-lg"></div>
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            <Image
                                src="/services.png"
                                alt="Person using LinkX app"
                                width={500}
                                height={600}
                                className="object-contain drop-shadow-xl"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    index: number;
}

function ServiceCard({ icon, title, description, index }: ServiceCardProps): JSX.Element {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
        >
            <motion.div
                whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
                className="border border-border hover:border-secondary/30"
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
                <Card className="p-6 bg-gradient-to-br from-background to-muted/50 dark:from-background dark:to-muted/10 backdrop-blur-sm border-0">
                    <div className="flex gap-5">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 flex items-center justify-center shadow-sm">
                            {icon}
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-foreground">{title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </motion.div>
    )
}