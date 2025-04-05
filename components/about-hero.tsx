"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function AboutHeroSection(): JSX.Element {
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
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 50,
                delay: 0.3
            }
        }
    };

    const missionItems = [
        { text: "Empower growth" },
        { text: "Simplify payments", highlight: "payments" },
        { text: "Redefine transportation for all", highlight: "transportation" }
    ];

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Modern background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-secondary/15 to-secondary/10 dark:from-secondary/30 dark:via-secondary/25 dark:to-secondary/20">
                {/* Dot pattern */}
                <div
                    className="absolute inset-0 opacity-10 dark:opacity-20"
                    style={{
                        backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px)",
                        backgroundSize: "20px 20px"
                    }}
                ></div>

                {/* Decorative elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="absolute w-96 h-96 rounded-full bg-gradient-to-bl from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 blur-3xl -z-10 top-20 left-0 transform -translate-x-1/2"
                ></motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-secondary/20 to-primary/20 dark:from-secondary/10 dark:to-primary/10 blur-3xl -z-10 bottom-20 right-0 transform translate-x-1/2"
                ></motion.div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Text Content */}
                    <div className="lg:max-w-xl mx-auto lg:mx-0">
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-6xl font-bold text-foreground mb-2 text-center lg:text-left"
                        >
                            Hello!
                        </motion.h1>
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center lg:text-left"
                        >
                            Welcome to <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">LinkX</span>
                        </motion.h2>

                        <motion.div
                            className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mb-8 mx-auto lg:mx-0"
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: 100, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        ></motion.div>

                        <div className="space-y-6 text-foreground/80 dark:text-secondary-foreground">
                            <motion.p variants={itemVariants} className="text-lg text-center lg:text-left">
                                We take pride in the meaningful impact we're making. With innovative solutions and an unwavering
                                dedication to customer satisfaction, we're driving positive change and empowering individuals and
                                businesses to flourish in the digital era. Join us on our mission to:
                            </motion.p>

                            <motion.ul variants={containerVariants} className="space-y-4 text-lg">
                                {missionItems.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + (index * 0.2), duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="mt-1 text-primary">
                                            <CheckCircle2 size={20} />
                                        </span>
                                        {item.highlight ? (
                                            <span>
                                                {item.text.split(item.highlight)[0]}
                                                <span className="text-primary font-medium">{item.highlight}</span>
                                                {item.text.split(item.highlight)[1]}
                                            </span>
                                        ) : (
                                            <span>{item.text}</span>
                                        )}
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <motion.p
                                variants={itemVariants}
                                className="text-lg pt-2 text-center lg:text-left"
                            >
                                Together, let's shape a brighter future and create a better world for everyone.
                            </motion.p>
                        </div>
                    </div>

                    {/* App Image - Only visible on larger screens */}
                    <div className="hidden lg:flex justify-center">
                        <motion.div
                            variants={imageVariants}
                            className="relative"
                            animate={{
                                y: [0, -10, 0],
                                transition: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                        >
                            <div className="absolute -inset-5 bg-gradient-to-br from-primary/20 to-secondary/30 dark:from-primary/15 dark:to-secondary/20 rounded-full blur-2xl opacity-70 -z-10"></div>
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-secondary/30 dark:from-primary/20 dark:to-secondary/20 rounded-3xl blur-md"></div>
                                <Image
                                    src="/placeholder.svg?height=600&width=400"
                                    alt="LinkX App Interface"
                                    width={400}
                                    height={600}
                                    className="relative rounded-3xl shadow-2xl z-10 border-4 border-white/90 dark:border-black/30"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}