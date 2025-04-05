"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check, User, Car, FileText } from "lucide-react"

export default function BecomeAgentRequirements(): JSX.Element {
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

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const listItemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, type: "spring", stiffness: 100 }
        }
    };

    // Requirement section data
    const requirementSections = [
        {
            title: "Personal Requirements",
            icon: <User className="w-6 h-6 text-white" />,
            items: [
                "Be at least 25 years old",
                "Have a clean driving record",
                "Have auto insurance",
                "Own an iPhone or Android smartphone capable of downloading and running the Driver app"
            ],
            image: "/placeholder.svg?height=300&width=400",
            alt: "Driver in car",
            imageFirst: true
        },
        {
            title: "Vehicle Requirements",
            icon: <Car className="w-6 h-6 text-white" />,
            items: [
                "Year: 2008 or newer (note: car year may vary by region)",
                "Doors: 4",
                "Seats: 5-8, including the driver's seat",
                "License plate: Must be clear and visible",
                "Car year may vary by region"
            ],
            image: "/placeholder.svg?height=300&width=400",
            alt: "Person with car",
            imageFirst: false
        },
        {
            title: "Documents",
            icon: <FileText className="w-6 h-6 text-white" />,
            items: [
                "Driver profile photo",
                "Vehicle registration",
                "Personal vehicle insurance",
                "Driver license"
            ],
            image: "/placeholder.svg?height=300&width=400",
            alt: "Documents",
            imageFirst: true
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden" id="requirements">
            {/* Modern background with subtle pattern */}
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
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary/5 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-primary/5 to-transparent opacity-60"></div>
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
                            What you will need to <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">apply with us</span>
                        </h2>
                        <motion.div
                            className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto my-5"
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: 96, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        ></motion.div>
                        <p className="mt-2 text-foreground/70 dark:text-muted-foreground max-w-2xl mx-auto">
                            LinkX is the only single platform that provides all your wants. Here's what you'll need to get started.
                        </p>
                    </motion.div>

                    <div className="space-y-20">
                        {requirementSections.map((section, sectionIndex) => (
                            <motion.div
                                key={section.title}
                                variants={itemVariants}
                                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                            >
                                <motion.div
                                    className={`${section.imageFirst ? 'order-2 md:order-1' : 'order-2'}`}
                                    variants={imageVariants}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="relative"
                                    >
                                        <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/10 dark:to-secondary/10 rounded-3xl blur-xl opacity-70"></div>
                                        <Image
                                            src={section.image}
                                            alt={section.alt}
                                            width={400}
                                            height={300}
                                            className="relative z-10 rounded-2xl object-cover shadow-lg border-2 border-white/20 dark:border-black/20"
                                        />
                                    </motion.div>
                                </motion.div>

                                <motion.div className={`${section.imageFirst ? 'order-1 md:order-2' : 'order-1'}`}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                                            {section.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground">{section.title}</h3>
                                    </div>

                                    <motion.ul
                                        className="space-y-4"
                                        variants={listVariants}
                                    >
                                        {section.items.map((item, itemIndex) => (
                                            <RequirementItem key={itemIndex} index={itemIndex}>
                                                {item}
                                            </RequirementItem>
                                        ))}
                                    </motion.ul>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to action */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-foreground mb-4">Ready to join the LinkX family?</h3>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Start your journey as a LinkX agent today and take control of your financial future.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-md hover:shadow-lg transition-shadow"
                    >
                        Apply Now
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

interface RequirementItemProps {
    children: React.ReactNode;
    index: number;
}

function RequirementItem({ children, index }: RequirementItemProps): JSX.Element {
    return (
        <motion.li
            className="flex items-start gap-4"
            variants={{
                hidden: { x: -20, opacity: 0 },
                visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                        delay: 0.1 * index,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100
                    }
                }
            }}
        >
            <span className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 mt-0.5 flex items-center justify-center shadow-sm">
                <Check className="h-3.5 w-3.5 text-white" />
            </span>
            <span className="text-foreground/90 dark:text-foreground/80">{children}</span>
        </motion.li>
    )
}