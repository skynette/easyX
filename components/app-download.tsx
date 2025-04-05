"use client"

import Image from "next/image"
import { Shield, Smartphone, QrCode } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AppDownloadSection(): JSX.Element {
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

    const appImageVariants = {
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

    const floatAnimation = {
        initial: { y: 0 },
        animate: {
            y: [-8, 8, -8],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Modern gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-secondary/15 to-secondary/10 dark:from-secondary/30 dark:via-secondary/25 dark:to-secondary/20">
                {/* Dot pattern */}
                <div
                    className="absolute inset-0 opacity-10 dark:opacity-20"
                    style={{
                        backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px)",
                        backgroundSize: "20px 20px"
                    }}
                ></div>
            </div>

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

            <div className="container mx-auto max-w-7xl px-4 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                    className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                    {/* App Image */}
                    <div className="order-2 md:order-1 flex justify-center">
                        <motion.div
                            variants={appImageVariants}
                            className="relative"
                            {...floatAnimation}
                        >
                            <div className="absolute -inset-5 bg-gradient-to-br from-primary/20 to-secondary/30 dark:from-primary/15 dark:to-secondary/20 rounded-full blur-2xl opacity-70 -z-10"></div>
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-secondary/30 dark:from-primary/20 dark:to-secondary/20 rounded-3xl blur-md"></div>
                                <Image
                                    src="/app-download.avif"
                                    alt="LinkX App Screenshot"
                                    width={320}
                                    height={600}
                                    className="relative rounded-3xl shadow-2xl z-10 border-4 border-white/90 dark:border-black/30"
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Download Info */}
                    <div className="order-1 md:order-2 text-center md:text-left">
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
                        >
                            Download the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">LinkX</span> App
                        </motion.h2>

                        <motion.div
                            className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto md:mx-0 mb-6"
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: 96, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        ></motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="text-foreground/80 dark:text-muted-foreground mb-10 max-w-lg mx-auto md:mx-0"
                        >
                            Experience the convenience of LinkX on your mobile device. Available on iOS and Android platforms. Scan
                            the QR code or download directly from app stores.
                        </motion.p>

                        <motion.div
                            variants={containerVariants}
                            className="flex flex-col md:flex-row items-center gap-8 mb-10"
                        >
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="bg-white dark:bg-card/95 p-6 rounded-xl shadow-md border border-border/10"
                            >
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg blur-sm"></div>
                                    <div className="relative z-10">
                                        <Image
                                            src="/qr.png"
                                            alt="QR Code to download LinkX app"
                                            width={150}
                                            height={150}
                                            className="mx-auto"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-2 mt-4">
                                    <QrCode size={16} className="text-primary" />
                                    <p className="text-sm font-medium text-foreground">Scan to download</p>
                                </div>
                            </motion.div>

                            <motion.div variants={containerVariants} className="space-y-4">
                                <motion.p variants={itemVariants} className="font-semibold text-lg text-foreground">
                                    Available on
                                </motion.p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <motion.div
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Link href="#" className="block">
                                            <Image
                                                src="/apple-store.png"
                                                alt="Download on the App Store"
                                                width={180}
                                                height={60}
                                                className="object-contain drop-shadow-md"
                                            />
                                        </Link>
                                    </motion.div>

                                    <motion.div
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Link href="#" className="block">
                                            <Image
                                                src="/google-play.png"
                                                alt="Get it on Google Play"
                                                width={180}
                                                height={60}
                                                className="object-contain drop-shadow-md"
                                            />
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-white dark:bg-card/95 p-5 rounded-lg shadow-md border border-border/10"
                        >
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <Shield className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-foreground text-lg">Secure & Reliable</h4>
                                    <p className="text-muted-foreground">
                                        Your data is protected with industry-leading security measures
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}