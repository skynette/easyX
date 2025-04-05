"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react"

export default function Footer(): JSX.Element {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, type: "spring", stiffness: 50 }
        }
    };

    const socialVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (custom: number) => ({
            scale: 1,
            opacity: 1,
            transition: { delay: 0.2 + (custom * 0.1), type: "spring", stiffness: 200 }
        })
    };

    const services = [
        { name: "Data Bundle purchase", href: "#" },
        { name: "Mobile Airtime top-up", href: "#" },
        { name: "Order Rides & Deliveries", href: "#" },
        { name: "Cable Tv Subscriptions", href: "#" },
        { name: "Fund Betting", href: "#" },
        { name: "Utility Payment", href: "#" }
    ];

    const companyLinks = [
        { name: "About Us", href: "/about" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Contact Us", href: "/#contact" },
        { name: "Delete Account", href: "#" }
    ];

    const socialLinks = [
        { platform: "twitter", icon: <Twitter size={16} />, href: "#" },
        { platform: "instagram", icon: <Instagram size={16} />, href: "#" },
        { platform: "facebook", icon: <Facebook size={16} />, href: "#" },
        { platform: "linkedin", icon: <Linkedin size={16} />, href: "#" }
    ];

    return (
        <footer className="relative bg-gradient-to-b from-secondary/40 to-secondary/80 dark:from-secondary/30 dark:to-secondary/50 overflow-hidden">
            {/* Background pattern */}
            <div
                className="absolute inset-0 opacity-5 dark:opacity-10"
                style={{
                    backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                }}
            ></div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent opacity-40 dark:opacity-20 rounded-bl-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/10 to-transparent opacity-40 dark:opacity-20 rounded-tr-full blur-2xl"></div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="container mx-auto max-w-7xl px-4 py-16 relative z-10"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <motion.div variants={itemVariants}>
                        <Link href="/" className="flex items-center mb-6 group">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mr-3 shadow-md group-hover:shadow-lg transition-all duration-300">
                                <span className="text-white font-bold text-xl">LX</span>
                            </div>
                            <span className="text-foreground font-bold text-xl">
                                Link<span className="text-primary">X</span>
                            </span>
                        </Link>
                        <p className="text-foreground/80 dark:text-muted-foreground mb-8">
                            Discover the ultimate solution that seamlessly integrates bill payment and ride services, putting control
                            and efficiency right at your fingertips. Say goodbye to hassle and hello to convenience!
                        </p>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold mb-6 text-foreground">
                            <span className="inline-block border-b-2 border-primary pb-1">Services</span>
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <FooterLink href={service.href}>{service.name}</FooterLink>
                                </motion.div>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold mb-6 text-foreground">
                            <span className="inline-block border-b-2 border-primary pb-1">Company</span>
                        </h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <FooterLink href={link.href}>{link.name}</FooterLink>
                                </motion.div>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Info */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold mb-6 text-foreground">
                            <span className="inline-block border-b-2 border-primary pb-1">Info</span>
                        </h3>
                        <ul className="space-y-3 mb-8">
                            <motion.li
                                className="text-foreground/80 dark:text-muted-foreground flex items-center gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </span>
                                <span>+234 900 555 123</span>
                            </motion.li>
                            <motion.li
                                className="text-foreground/80 dark:text-muted-foreground flex items-center gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </span>
                                <span>Support@LinkX.com</span>
                            </motion.li>
                        </ul>

                        <h3 className="text-xl font-bold mb-5 text-foreground">
                            <span className="inline-block border-b-2 border-primary pb-1">Follow us</span>
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.div
                                    key={social.platform}
                                    custom={index}
                                    variants={socialVariants}
                                >
                                    <SocialIcon
                                        platform={social.platform as any}
                                        icon={social.icon}
                                        href={social.href}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    variants={itemVariants}
                    className="border-t border-muted/50 dark:border-muted/30 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center"
                >
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <Link href="/privacy" className="text-sm text-foreground/70 dark:text-muted-foreground hover:text-primary transition-colors">
                            Privacy policy
                        </Link>
                        <Link href="/terms" className="text-sm text-foreground/70 dark:text-muted-foreground hover:text-primary transition-colors">
                            Terms of use
                        </Link>
                    </div>
                    <div className="text-sm text-foreground/70 dark:text-muted-foreground">
                        © {new Date().getFullYear()} LinkX All rights reserved.
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    )
}

function FooterLink({ children, href = "#" }: { children: React.ReactNode, href?: string }): JSX.Element {
    return (
        <li>
            <Link
                href={href}
                className="text-foreground/80 dark:text-muted-foreground hover:text-primary transition-colors flex items-center group"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {children}
            </Link>
        </li>
    )
}

interface SocialIconProps {
    platform: "twitter" | "instagram" | "facebook" | "tiktok" | "linkedin"
    icon: React.ReactNode
    href: string
}

function SocialIcon({ platform, icon, href }: SocialIconProps): JSX.Element {
    return (
        <motion.a
            href={href}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-sm hover:shadow-md"
            aria-label={`Follow us on ${platform}`}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {icon}
        </motion.a>
    )
}