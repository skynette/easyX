"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactUsSection(): JSX.Element {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.id]: e.target.value
        });
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
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

    const socialLinks = [
        { icon: <Facebook size={20} />, url: "#", label: "Facebook" },
        { icon: <Instagram size={20} />, url: "#", label: "Instagram" },
        { icon: <Twitter size={20} />, url: "#", label: "Twitter" },
        { icon: <Linkedin size={20} />, url: "#", label: "LinkedIn" }
    ];

    const contactInfo = [
        {
            icon: <Phone className="w-5 h-5" />,
            title: "Phone",
            lines: ["+234 800 LINKX (54659)", "Mon-Fri from 8am to 5pm"]
        },
        {
            icon: <Mail className="w-5 h-5" />,
            title: "Email",
            lines: ["support@linkx.com", "We'll respond as soon as possible"]
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            title: "Office",
            lines: ["123 Tech Hub, Victoria Island", "Lagos, Nigeria"]
        }
    ];

    return (
        <section className="relative py-20 overflow-hidden" id="contact">
            {/* Background with subtle patterns */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-background dark:from-background dark:via-secondary/10 dark:to-background">
                {/* Subtle pattern overlay */}
                <div
                    className="absolute inset-0 opacity-5 dark:opacity-10"
                    style={{
                        backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px)",
                        backgroundSize: "20px 20px"
                    }}
                ></div>

                {/* Decorative elements */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full opacity-50 blur-3xl"></div>
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-secondary/5 to-transparent rounded-full opacity-50 blur-3xl"></div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            Contact <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Us</span>
                        </h2>
                        <motion.div
                            className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto my-5"
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: 96, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        ></motion.div>
                        <p className="mt-4 text-foreground/80 dark:text-muted-foreground max-w-2xl mx-auto">
                            Have questions or need assistance? We're here to help! Reach out to our team through any of the channels
                            below.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-white dark:bg-card/95 dark:backdrop-blur-sm p-8 rounded-xl shadow-sm border border-border/10"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send us a message</h3>
                            <form className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <motion.div
                                        className="space-y-2"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="name" className="text-sm font-medium">
                                            Full Name
                                        </label>
                                        <Input
                                            id="name"
                                            placeholder="Your name"
                                            className="border-border/30 focus:border-primary/50"
                                            value={formState.name}
                                            onChange={handleChange}
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="space-y-2"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Email Address
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Your email"
                                            className="border-border/30 focus:border-primary/50"
                                            value={formState.email}
                                            onChange={handleChange}
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    className="space-y-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <label htmlFor="subject" className="text-sm font-medium">
                                        Subject
                                    </label>
                                    <Input
                                        id="subject"
                                        placeholder="How can we help you?"
                                        className="border-border/30 focus:border-primary/50"
                                        value={formState.subject}
                                        onChange={handleChange}
                                    />
                                </motion.div>

                                <motion.div
                                    className="space-y-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us more about your inquiry..."
                                        rows={5}
                                        className="border-border/30 focus:border-primary/50 resize-none"
                                        value={formState.message}
                                        onChange={handleChange}
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white">
                                            <Send className="mr-2 h-4 w-4" /> Send Message
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
                                <p className="text-muted-foreground mb-8">
                                    Our team is available to assist you with any questions or concerns you may have about our services.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {contactInfo.map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        className="flex items-start gap-4"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + (index * 0.1) }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                                            <div className="text-primary">{item.icon}</div>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-lg text-foreground">{item.title}</h4>
                                            {item.lines.map((line, i) => (
                                                <p key={i} className="text-muted-foreground">{line}</p>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="pt-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="font-medium text-lg mb-4 text-foreground">Follow Us</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.url}
                                            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-primary hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 shadow-sm"
                                            whileHover={{ y: -5, scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-label={`Follow us on ${social.label}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.8 + (index * 0.1) }}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}