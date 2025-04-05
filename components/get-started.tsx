"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function GetStartedSection(): JSX.Element {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, type: "spring", stiffness: 50 },
        },
    }

    const circleVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (custom: number) => ({
            scale: 1,
            opacity: 0.25,
            transition: {
                delay: custom * 0.2,
                duration: 0.8,
                type: "spring",
                stiffness: 40
            },
        }),
    }

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0, y: 20 },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                duration: 1,
                type: "spring",
                stiffness: 40
            },
        },
    }

    const steps = [
        {
            number: 1,
            title: "Download and Install the LinkX App",
            description: "Visit your app store, search for 'LinkX', and download the app on your mobile device.",
            highlightedText: "LinkX"
        },
        {
            number: 2,
            title: "Sign Up on LinkX freely",
            description: "Open the LinkX app and sign up in just a few easy steps! Simply provide some basic personal information, and you'll be all set to start",
            highlightedText: "LinkX"
        },
        {
            number: 3,
            title: "Add funds, pay Bills, order ride and get items delivered",
            description: "Once signed in, simply add funds to pay bills and order rides. It's that simple!"
        }
    ]

    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Modern gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-background dark:from-background dark:via-secondary/10 dark:to-background">
                {/* Fine dot pattern */}
                <div
                    className="absolute inset-0 opacity-30 dark:opacity-0"
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(0, 0, 0, 0.2) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                    }}
                ></div>
                <div
                    className="absolute inset-0 opacity-0 dark:opacity-20"
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.6) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                    }}
                ></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className="relative"
                >
                    {/* Animated background circles */}
                    <motion.div
                        custom={0}
                        variants={circleVariants}
                        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/15 dark:to-secondary/15 blur-xl top-0 left-0 -translate-x-1/2"
                    ></motion.div>
                    <motion.div
                        custom={1}
                        variants={circleVariants}
                        className="absolute w-48 h-48 rounded-full bg-gradient-to-tl from-secondary/20 to-primary/20 dark:from-secondary/15 dark:to-primary/15 blur-xl bottom-1/4 right-0 translate-x-1/4"
                    ></motion.div>
                    <motion.div
                        custom={2}
                        variants={circleVariants}
                        className="absolute w-32 h-32 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 dark:from-primary/15 dark:to-secondary/15 blur-xl bottom-0 left-1/4 translate-y-1/2"
                    ></motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left side with images - positioned slightly lower */}
                        <div className="relative order-2 lg:order-1 mt-8 lg:mt-16">
                            <motion.div
                                variants={imageVariants}
                                className="relative"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-b from-primary/10 to-secondary/20 dark:from-primary/5 dark:to-secondary/10 rounded-3xl blur-2xl opacity-60"></div>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    transition={{ type: "spring", stiffness: 100 }}
                                    className="relative z-10"
                                >
                                    <Image
                                        src="/get-started.png"
                                        alt="Person using LinkX app with phone screens"
                                        width={500}
                                        height={600}
                                        className="object-contain mx-auto drop-shadow-xl"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Right side with steps */}
                        <div className="order-1 lg:order-2">
                            <motion.div
                                variants={itemVariants}
                                className="text-center lg:text-left mb-10"
                            >
                                <h2 className="text-4xl md:text-5xl font-bold">
                                    Get started with{" "}
                                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                        LinkX
                                    </span>{" "}
                                    Today!!!
                                </h2>
                                <motion.div
                                    className="h-1 w-28 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto lg:mx-0 mt-4"
                                    initial={{ width: 0, opacity: 0 }}
                                    whileInView={{ width: 112, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    viewport={{ once: true }}
                                ></motion.div>
                            </motion.div>

                            <motion.div
                                variants={containerVariants}
                                className="space-y-8 max-w-lg mx-auto lg:mx-0"
                            >
                                {steps.map((step, index) => (
                                    <StepItem
                                        key={index}
                                        number={step.number}
                                        title={step.title}
                                        description={step.description}
                                        highlightedText={step.highlightedText}
                                        index={index}
                                    />
                                ))}

                                <motion.div
                                    variants={itemVariants}
                                    className="pt-6"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    >
                                        <Button
                                            size="lg"
                                            variant="default"
                                            className="rounded-full px-8 py-6 text-lg w-full md:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                                        >
                                            Download App
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

interface StepItemProps {
    number: number
    title: string
    description: string
    highlightedText?: string
    index: number
}

function StepItem({ number, title, description, highlightedText, index }: StepItemProps): JSX.Element {
    // Function to highlight specific text in the title
    const renderTitle = (): ReactNode => {
        if (!highlightedText) return title

        const parts = title.split(highlightedText)
        return (
            <>
                {parts[0]}
                <span className="text-primary font-medium">{highlightedText}</span>
                {parts[1]}
            </>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            viewport={{ once: true }}
            className="flex gap-5"
        >
            <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center font-bold text-primary-foreground shadow-md">
                    {number}
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-lg text-foreground">{renderTitle()}</h3>
                <p className="mt-2 text-muted-foreground">{description}</p>
            </div>
        </motion.div>
    )
}