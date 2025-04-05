"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, FileText, Shield, AlertTriangle } from 'lucide-react'
import { motion } from "framer-motion"

export default function TermsConditions(): JSX.Element {
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

    const listItemVariants = {
        hidden: { x: -10, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.3, type: "spring", stiffness: 100 }
        }
    };

    return (
        <div className="relative min-h-screen py-16">
            {/* Subtle background */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-background dark:from-background dark:via-secondary/10 dark:to-background -z-10">
                {/* Dot pattern */}
                <div 
                    className="absolute inset-0 opacity-5 dark:opacity-10"
                    style={{
                        backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px)",
                        backgroundSize: "20px 20px"
                    }}
                ></div>
            </div>

            <motion.div 
                className="container mx-auto px-4 py-12 max-w-4xl"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div className="mb-12" variants={itemVariants}>
                    <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 group">
                        <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2 group-hover:bg-primary/20 transition-colors">
                            <ArrowLeft className="h-4 w-4 text-primary" />
                        </span>
                        <span>Back to Home</span>
                    </Link>

                    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                        <div>
                            <h1 className="text-4xl font-bold mb-3">
                                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Terms & Conditions</span>
                            </h1>
                            <motion.div 
                                className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mb-4"
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: 96, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            ></motion.div>
                            <p className="text-foreground/70 dark:text-muted-foreground">Effective guidelines for using our platform</p>
                        </div>
                        <div className="md:ml-auto">
                            <motion.div
                                whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
                            >
                                <Image
                                    src="/placeholder.svg?height=150&width=150"
                                    alt="Terms and Conditions Illustration"
                                    width={150}
                                    height={150}
                                    className="object-contain drop-shadow-md"
                                />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <div className="bg-white dark:bg-card/95 shadow-md rounded-xl p-8 border border-border/20">
                    <div className="space-y-12">
                        <TermsSection 
                            number={1} 
                            title="Acceptance of Terms"
                            icon={<FileText size={18} />}
                        >
                            <p className="text-foreground/70 dark:text-muted-foreground mb-4">
                                Welcome to Linkx ("we," "our," or "us"). By accessing or using our services, including the Linkx mobile application, website, and related services (collectively, the "Services"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please do not use our Services.
                            </p>
                            <p className="text-foreground/70 dark:text-muted-foreground">
                                By creating an account, accessing, or using any part of the Services, you agree to these Terms and Conditions, including any updates or changes that may be made from time to time. It is your responsibility to review these Terms regularly.
                            </p>
                        </TermsSection>

                        <TermsSection 
                            number={2} 
                            title="Eligibility"
                            icon={<Shield size={18} />}
                        >
                            <p className="text-foreground/70 dark:text-muted-foreground">
                                To use the Services, you must be at least 18 years old and capable of forming a legally binding contract under applicable law. By using the Services, you represent and warrant that you meet these eligibility requirements.
                            </p>
                        </TermsSection>

                        <TermsSection 
                            number={3} 
                            title="Account Registration"
                            icon={<FileText size={18} />}
                        >
                            <p className="text-foreground/70 dark:text-muted-foreground mb-4">
                                To access certain features of the Services, you must register for an account. When registering, you agree to:
                            </p>
                            <TermsList>
                                <TermsListItem>Provide accurate, current, and complete information.</TermsListItem>
                                <TermsListItem>Maintain and promptly update your information to keep it accurate and complete.</TermsListItem>
                                <TermsListItem>Keep your account credentials secure and confidential.</TermsListItem>
                                <TermsListItem>Notify us immediately of any unauthorized use of your account.</TermsListItem>
                            </TermsList>
                            <p className="text-foreground/70 dark:text-muted-foreground mt-4">
                                You are responsible for all activities that occur under your account. We reserve the right to suspend or terminate your account if we suspect any unauthorized or fraudulent activity.
                            </p>
                        </TermsSection>

                        <TermsSection 
                            number={4} 
                            title="Use of Services"
                            icon={<Shield size={18} />}
                        >
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">4.1</span>
                                        With Service Providers
                                    </h3>
                                    <p className="text-foreground/70 dark:text-muted-foreground mb-4">
                                        You may use the Services for personal, non-commercial purposes, in accordance with these Terms. You agree not to:
                                    </p>
                                    <TermsList>
                                        <TermsListItem>Use the Services for any unlawful or fraudulent purpose.</TermsListItem>
                                        <TermsListItem>Access or use the Services in any way that could damage, disable, or impair the Services.</TermsListItem>
                                        <TermsListItem>Interfere with the security or proper functioning of the Services.</TermsListItem>
                                    </TermsList>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">4.2</span>
                                        Prohibited Activities
                                    </h3>
                                    <p className="text-foreground/70 dark:text-muted-foreground mb-4">
                                        You agree not to engage in any of the following activities:
                                    </p>
                                    <TermsList>
                                        <TermsListItem>Impersonating any person or entity, or falsely stating or otherwise misrepresenting your affiliation with a person or entity.</TermsListItem>
                                        <TermsListItem>Uploading, posting, or transmitting any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.</TermsListItem>
                                        <TermsListItem>Using automated systems or software to access the Services without our written consent.</TermsListItem>
                                        <TermsListItem>Engaging in any activity that could interfere with, disrupt, or impose an unreasonable burden on the Services or the networks connected to the Services.</TermsListItem>
                                    </TermsList>
                                </div>
                            </div>
                        </TermsSection>

                        <TermsSection 
                            number={5} 
                            title="Services Provided"
                            icon={<FileText size={18} />}
                        >
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">5.1</span>
                                        Utility Payments
                                    </h3>
                                    <p className="text-foreground/70 dark:text-muted-foreground">
                                        Linkx allows you to pay utility bills (e.g., electricity, water) through the app. You are responsible for providing accurate billing information and ensuring sufficient funds for the transaction.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">5.2</span>
                                        Mobile Recharges and TV Subscriptions
                                    </h3>
                                    <p className="text-foreground/70 dark:text-muted-foreground">
                                        You can purchase mobile airtime, data bundles, and TV subscriptions electricity using the Services. These transactions are subject to the terms and conditions of the respective service providers.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">5.3</span>
                                        Ride-Hailing Services
                                    </h3>
                                    <p className="text-foreground/70 dark:text-muted-foreground mb-4">
                                        Linkx connects riders with drivers for transportation services. By booking a ride, you agree to:
                                    </p>
                                    <TermsList>
                                        <TermsListItem>Provide accurate pickup and drop-off locations.</TermsListItem>
                                        <TermsListItem>Pay the fare as calculated by the app at the end of the ride.</TermsListItem>
                                        <TermsListItem>Behave respectfully towards the driver and other passengers.</TermsListItem>
                                    </TermsList>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">5.4</span>
                                        Delivery Services
                                    </h3>
                                    <p className="text-foreground/70 dark:text-muted-foreground mb-4">
                                        Linkx provides delivery services for items. By requesting a delivery, you agree to:
                                    </p>
                                    <TermsList>
                                        <TermsListItem>Provide accurate delivery details.</TermsListItem>
                                        <TermsListItem>Ensure that the items for delivery do not violate any laws or regulations.</TermsListItem>
                                        <TermsListItem>Pay the delivery fee as determined by the app.</TermsListItem>
                                    </TermsList>
                                </div>
                            </div>
                        </TermsSection>

                        <TermsSection 
                            number={6} 
                            title="Data Security"
                            icon={<Shield size={18} />}
                        >
                            <p className="text-foreground/70 dark:text-muted-foreground">
                                We implement appropriate security measures to protect your information from unauthorized access, use, or disclosure. However, no data transmission over the internet or storage system can be guaranteed to be 100% secure.
                            </p>
                        </TermsSection>

                        <TermsSection 
                            number={7} 
                            title="Driver and User Responsibilities"
                            icon={<AlertTriangle size={18} />}
                        >
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">7.1</span>
                                        Driver Responsibilities
                                    </h3>
                                    <p className="text-foreground/70 dark:text-muted-foreground mb-4">
                                        Drivers using the Linkx platform agree to:
                                    </p>
                                    <TermsList>
                                        <TermsListItem>Maintain a valid driver's license, vehicle registration, and insurance.</TermsListItem>
                                        <TermsListItem>Provide safe and reliable transportation or delivery services.</TermsListItem>
                                        <TermsListItem>Comply with all applicable laws and regulations.</TermsListItem>
                                        <TermsListItem>Treat passengers and customers with respect and professionalism.</TermsListItem>
                                    </TermsList>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">7.2</span>
                                        User Responsibilities
                                    </h3>
                                    <p className="text-foreground/70 dark:text-muted-foreground mb-4">
                                        Users agree to:
                                    </p>
                                    <TermsList>
                                        <TermsListItem>Provide accurate information when booking services.</TermsListItem>
                                        <TermsListItem>Be punctual and respectful when interacting with drivers and delivery personnel.</TermsListItem>
                                        <TermsListItem>Pay for all services and fees as required.</TermsListItem>
                                    </TermsList>
                                </div>
                            </div>
                        </TermsSection>

                        <TermsSection 
                            number={8} 
                            title="Contact Us"
                            icon={<FileText size={18} />}
                            last={true}
                        >
                            <p className="text-foreground/70 dark:text-muted-foreground mb-4">
                                If you have any questions or concerns about these Terms & Conditions, please contact us at:
                            </p>
                            <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4 mt-4">
                                <p className="font-medium flex items-center gap-2 mb-2">
                                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">@</span>
                                    <span>Email:</span> 
                                    <a href="mailto:linkus@gmail.com" className="text-primary hover:underline">linkus@gmail.com</a>
                                </p>
                                <p className="font-medium flex items-center gap-2 mb-2">
                                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">📞</span>
                                    <span>Phone:</span> +234 900 555 123
                                </p>
                                <p className="font-medium flex items-center gap-2">
                                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">🏢</span>
                                    <span>Address:</span> 123 Tech Hub, Victoria Island, Lagos, Nigeria
                                </p>
                            </div>
                        </TermsSection>

                        <motion.div 
                            className="border-t border-border/20 pt-6"
                            variants={itemVariants}
                        >
                            <p className="text-sm text-muted-foreground">
                                Last Updated: April 5, 2024
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

interface TermsSectionProps {
    number: number;
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    last?: boolean;
}

function TermsSection({ number, title, children, icon, last = false }: TermsSectionProps): JSX.Element {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: number * 0.1 }}
            className={`${!last ? 'pb-8 border-b border-border/20' : ''}`}
        >
            <h2 className="text-xl font-semibold mb-4 flex items-center text-foreground">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mr-3 text-white text-sm">{number}</span>
                <span className="flex items-center gap-2">
                    {icon && <span className="text-primary">{icon}</span>}
                    {title}
                </span>
            </h2>
            <div className="ml-11">
                {children}
            </div>
        </motion.section>
    )
}

interface TermsListProps {
    children: React.ReactNode;
}

function TermsList({ children }: TermsListProps): JSX.Element {
    return (
        <motion.ul 
            className="space-y-3"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.05
                    }
                }
            }}
        >
            {children}
        </motion.ul>
    )
}

interface TermsListItemProps {
    children: React.ReactNode;
}

function TermsListItem({ children }: TermsListItemProps): JSX.Element {
    return (
        <motion.li 
            className="flex items-start gap-3 text-foreground/70 dark:text-muted-foreground"
            variants={{
                hidden: { x: -10, opacity: 0 },
                visible: {
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.3, type: "spring", stiffness: 100 }
                }
            }}
        >
            <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
            </span>
            <span>{children}</span>
        </motion.li>
    )
}