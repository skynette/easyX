"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Lock, Shield, Bell, Eye, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function PrivacyPolicy(): JSX.Element {
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
                                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Privacy Policy</span>
                            </h1>
                            <motion.div
                                className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mb-4"
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: 96, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            ></motion.div>
                            <p className="text-foreground/70 dark:text-muted-foreground">How we protect and manage your data</p>
                        </div>
                        <div className="md:ml-auto">
                            <motion.div
                                whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
                            >
                                <Image
                                    src="/placeholder.svg?height=150&width=150"
                                    alt="Privacy Policy Illustration"
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
                        <PolicySection
                            number={1}
                            title="OUR COMMITMENT TO PRIVACY"
                            icon={<Lock size={18} />}
                        >
                            <p className="text-foreground/70 dark:text-muted-foreground">
                                LinkX and its affiliates ("we", "our", "us", or "LinkX") are committed to protecting your privacy and
                                safeguarding your personal information. In creating LinkX, we've prioritized privacy. This Privacy Policy
                                document tells you how we use, store, and protect your information when you use our services, including
                                billing, payments, mobile services. To learn more, read everything on this page or contact us with any
                                questions.
                            </p>
                        </PolicySection>

                        <PolicySection
                            number={2}
                            title="INFORMATION WE COLLECT"
                            icon={<Eye size={18} />}
                        >
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">2.1</span>
                                        Information You Provide
                                    </h3>
                                    <p className="text-foreground/70 dark:text-muted-foreground mb-3">
                                        When you create an account or sign up, we collect your name, email address, phone number.
                                    </p>
                                    <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4 mb-3">
                                        <p className="text-foreground/80 dark:text-muted-foreground">
                                            <span className="font-medium text-foreground">Profile Information:</span> This includes basic account information, such as your profile
                                            picture, address, and contact details.
                                        </p>
                                    </div>
                                    <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4">
                                        <p className="text-foreground/80 dark:text-muted-foreground">
                                            <span className="font-medium text-foreground">Payment Information:</span> When you make a purchase or transaction, we collect payment card
                                            information and billing address.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">2.2</span>
                                        Information We Collect Automatically
                                    </h3>
                                    <p className="text-foreground/70 dark:text-muted-foreground mb-3">
                                        When you use our services, we automatically collect certain information about your device and how you
                                        use our services.
                                    </p>
                                    <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4 mb-3">
                                        <p className="text-foreground/80 dark:text-muted-foreground">
                                            <span className="font-medium text-foreground">Device Information:</span> We collect technical data about the device you use to access our
                                            app, including device type, operating system, and unique device identifiers.
                                        </p>
                                    </div>
                                    <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4">
                                        <p className="text-foreground/80 dark:text-muted-foreground">
                                            <span className="font-medium text-foreground">Location Information:</span> When you use certain features of our app, we may collect location
                                            information from your device to provide location-based services.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </PolicySection>

                        <PolicySection
                            number={3}
                            title="HOW WE USE YOUR INFORMATION"
                            icon={<Shield size={18} />}
                        >
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">3.1</span>
                                        To Provide and Improve Our Services
                                    </h3>
                                    <PolicyList>
                                        <PolicyListItem>To process transactions and manage your account;</PolicyListItem>
                                        <PolicyListItem>To provide customer service and respond to your inquiries;</PolicyListItem>
                                        <PolicyListItem>To improve and personalize your experience with our services;</PolicyListItem>
                                        <PolicyListItem>To develop new features and services for you.</PolicyListItem>
                                    </PolicyList>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">3.2</span>
                                        For Safety and Security
                                    </h3>
                                    <PolicyList>
                                        <PolicyListItem>To verify your identity and prevent fraud;</PolicyListItem>
                                        <PolicyListItem>To ensure the safety and security of our users and services.</PolicyListItem>
                                    </PolicyList>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">3.3</span>
                                        For Communications
                                    </h3>
                                    <PolicyList>
                                        <PolicyListItem>To send administrative messages, updates, and promotional offers;</PolicyListItem>
                                        <PolicyListItem>To facilitate communication between users when necessary;</PolicyListItem>
                                        <PolicyListItem>
                                            Service updates: to let you know about changes to our policies, our services, and important system
                                            updates.
                                        </PolicyListItem>
                                    </PolicyList>
                                </div>
                            </div>
                        </PolicySection>

                        <PolicySection
                            number={4}
                            title="SHARING YOUR INFORMATION"
                            icon={<Shield size={18} />}
                        >
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">4.1</span>
                                        With Service Providers
                                    </h3>
                                    <p className="text-foreground/70 dark:text-muted-foreground">
                                        We share your information with third-party service providers who perform services on our behalf, such as
                                        payment processing, data analysis, and customer support.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">4.2</span>
                                        With Other Users
                                    </h3>
                                    <p className="text-foreground/70 dark:text-muted-foreground mb-3">
                                        Certain information, such as your name, profile picture, and other public information, may be visible to
                                        other users who use our platform.
                                    </p>
                                    <p className="text-foreground/70 dark:text-muted-foreground">
                                        If you're a driver or rider, we may share your information with the other party to facilitate your
                                        journey.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">4.3</span>
                                        For Legal and Safety Reasons
                                    </h3>
                                    <p className="text-foreground/70 dark:text-muted-foreground mb-3">
                                        We may disclose your information if we believe in good faith that such disclosure is necessary to:
                                    </p>
                                    <PolicyList className="mb-3">
                                        <PolicyListItem>Comply with legal obligations;</PolicyListItem>
                                        <PolicyListItem>Protect and defend the rights or property of others;</PolicyListItem>
                                        <PolicyListItem>Protect the personal safety of users of the service or the public.</PolicyListItem>
                                    </PolicyList>
                                    <p className="text-foreground/70 dark:text-muted-foreground">
                                        In the event of a merger, sale, or other asset transfer, we may transfer your information to the
                                        acquiring entity. However, this Privacy Policy will still govern your information.
                                    </p>
                                </div>
                            </div>
                        </PolicySection>

                        <PolicySection
                            number={5}
                            title="YOUR CHOICES"
                            icon={<Bell size={18} />}
                        >
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">5.1</span>
                                        Accessing Information
                                    </h3>
                                    <p className="text-foreground/70 dark:text-muted-foreground">
                                        You can access your personal information through your profile settings. You may also delete your account
                                        by contacting our customer support.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">5.2</span>
                                        Location Information
                                    </h3>
                                    <p className="text-foreground/70 dark:text-muted-foreground">
                                        You can enable or disable location services through your device settings, but this may affect the
                                        functionality of our services.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm text-primary font-semibold">5.3</span>
                                        Marketing Communications
                                    </h3>
                                    <p className="text-foreground/70 dark:text-muted-foreground">
                                        You can opt out of marketing communications we send by following the unsubscribe instructions in the
                                        emails. You may also adjust your notification preferences in your account settings.
                                    </p>
                                </div>
                            </div>
                        </PolicySection>

                        <PolicySection
                            number={6}
                            title="DATA SECURITY"
                            icon={<Lock size={18} />}
                        >
                            <p className="text-foreground/70 dark:text-muted-foreground">
                                We implement appropriate security measures to protect your information from unauthorized access, use, or
                                disclosure. However, no data transmission over the internet or mobile networks can be guaranteed to be 100%
                                secure.
                            </p>
                        </PolicySection>

                        <PolicySection
                            number={7}
                            title="COOKIES"
                            icon={<Shield size={18} />}
                        >
                            <p className="text-foreground/70 dark:text-muted-foreground">
                                We use cookies and similar technologies to enhance your experience with our website, to identify your device
                                when you use our different pages, collect information about your use, and to improve our services. Cookies
                                allow us to remember your preferences and customize your experience. We may also use cookies to analyze the
                                traffic to our website for the purpose of our policy for the purpose of research. Our website uses only
                                essential cookies to function properly.
                            </p>
                        </PolicySection>

                        <PolicySection
                            number={8}
                            title="CONTACT US"
                            icon={<Mail size={18} />}
                            last={true}
                        >
                            <p className="text-foreground/70 dark:text-muted-foreground mb-4">
                                If you have any questions or concerns about our Privacy Policy or our data practices, please contact us at:
                            </p>
                            <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4 mt-4">
                                <p className="font-medium flex items-center gap-2 mb-2">
                                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">@</span>
                                    <span>Email:</span>
                                    <a href="mailto:privacy@linkx.com" className="text-primary hover:underline">privacy@linkx.com</a>
                                </p>
                                <p className="font-medium flex items-center gap-2 mb-2">
                                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">📞</span>
                                    <span>Phone:</span> +234 800 LINKX (54659)
                                </p>
                                <p className="font-medium flex items-center gap-2">
                                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <MapPin size={14} />
                                    </span>
                                    <span>Address:</span> 123 Tech Hub, Victoria Island, Lagos, Nigeria
                                </p>
                            </div>
                        </PolicySection>

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

interface PolicySectionProps {
    number: number;
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    last?: boolean;
}

function PolicySection({ number, title, children, icon, last = false }: PolicySectionProps): JSX.Element {
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

interface PolicyListProps {
    children: React.ReactNode;
    className?: string;
}

function PolicyList({ children, className = "" }: PolicyListProps): JSX.Element {
    return (
        <motion.ul
            className={`space-y-3 ${className}`}
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

interface PolicyListItemProps {
    children: React.ReactNode;
}

function PolicyListItem({ children }: PolicyListItemProps): JSX.Element {
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