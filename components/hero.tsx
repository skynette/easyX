"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"

export default function HomeHeroSection() {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [controls, isInView])

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
            transition: { duration: 0.5 },
        },
    }

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    }

    return (
        <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-secondary/10 dark:from-secondary/20 dark:to-background">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                    }}
                ></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center"
                >
                    {/* App Image - Mobile: First, Desktop: Second column */}
                    <div className="order-1 lg:order-2 flex justify-center mb-8 lg:mb-0">
                        <motion.div variants={imageVariants} className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-secondary/40 to-primary/30 rounded-full blur-3xl opacity-30"></div>
                            <motion.div
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="relative z-10"
                            >
                                <Image
                                    src="/placeholder.svg?height=600&width=320"
                                    alt="LinkX App Interface"
                                    width={320}
                                    height={600}
                                    className="object-contain drop-shadow-xl rounded-3xl"
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Text Content - Mobile: Second, Desktop: First column */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">LinkX:</span>{" "}
                            Leading Digital Payment and Ride Services
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-xl mb-8 text-muted-foreground">
                            Experience Seamless Bill Payment and Ride Services: Convenient Control at Your Fingertips!
                        </motion.p>

                        {/* App Store Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 lg:mb-12"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href="#" className="hover:opacity-90 transition-opacity">
                                    <Image
                                        src="/placeholder.svg?height=50&width=170"
                                        alt="Get it on Google Play"
                                        width={170}
                                        height={50}
                                        className="object-contain"
                                    />
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href="#" className="hover:opacity-90 transition-opacity">
                                    <Image
                                        src="/placeholder.svg?height=50&width=170"
                                        alt="Download on the App Store"
                                        width={170}
                                        height={50}
                                        className="object-contain"
                                    />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}