"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"

export default function BecomeAgentHero(): JSX.Element {
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
                    className="absolute w-96 h-96 rounded-full bg-gradient-to-bl from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 blur-3xl -z-10 top-20 right-0 transform translate-x-1/2"
                ></motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-secondary/20 to-primary/20 dark:from-secondary/10 dark:to-primary/10 blur-3xl -z-10 bottom-20 left-0 transform -translate-x-1/2"
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
                    {/* App Image - Hidden on mobile */}
                    <div className="hidden lg:flex justify-center order-2 lg:order-1">
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
                                    src="/become-agent.png"
                                    alt="LinkX App Interface"
                                    width={400}
                                    height={600}
                                    className="relative rounded-3xl shadow-2xl z-10 border-4 border-white/90 dark:border-black/30"
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="order-1 lg:order-2 text-center lg:text-left">
                        <motion.div variants={containerVariants}>
                            <motion.div variants={itemVariants} className="mb-2 flex justify-center lg:justify-start">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary font-medium text-sm">
                                    <Star size={16} className="text-primary" />
                                    <span>Become an Agent Today</span>
                                </div>
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl md:text-6xl font-bold text-foreground mb-4"
                            >
                                Be your own <br />
                                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">BOSS</span>
                            </motion.h1>

                            <motion.div
                                className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mb-8 mx-auto lg:mx-0"
                                initial={{ width: 0, opacity: 0 }}
                                whileInView={{ width: 100, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                viewport={{ once: true }}
                            ></motion.div>

                            <motion.div variants={itemVariants} className="space-y-6 text-foreground/80 dark:text-secondary-foreground">
                                <p className="text-lg md:text-xl leading-relaxed">
                                    Become an LinkX agent and start earning high commissions today! As an LinkX agent, you'll offer your
                                    customers a reliable and seamless payment experience. Plus, take control of your car fleet and maximize
                                    your earnings by downloading and signing up for the LinkX app.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <span>Get Started</span>
                                    <ArrowRight size={16} />
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-full border border-primary/30 text-primary font-medium hover:bg-primary/5 transition-colors"
                                >
                                    Learn More
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}