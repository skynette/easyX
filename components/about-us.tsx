"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Linkedin, Twitter } from "lucide-react"

export default function AboutUsSection(): JSX.Element {
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

    const cardVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.1 * custom,
                duration: 0.5,
                type: "spring",
                stiffness: 50
            }
        }),
        hover: {
            y: -10,
            transition: { type: "spring", stiffness: 300 }
        }
    };

    // Team member data
    const teamMembers = [
        {
            name: "Omajuwa Okotie",
            role: "CEO & Founder",
            description: "Visionary leader with over 10 years of experience in fintech and transportation solutions.",
            image: "/placeholder.svg?height=400&width=320"
        },
        {
            name: "Kelvin Piokor",
            role: "CO-CEO & Co-Founder",
            description: "Strategic thinker specializing in business development and partnership growth.",
            image: "/placeholder.svg?height=400&width=320"
        },
        {
            name: "Sarah Johnson",
            role: "CTO",
            description: "Tech innovator with expertise in building scalable platforms and payment systems.",
            image: "/placeholder.svg?height=400&width=320"
        },
        {
            name: "Michael Chen",
            role: "Head of Operations",
            description: "Operations expert ensuring smooth service delivery and customer satisfaction.",
            image: "/placeholder.svg?height=400&width=320"
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Modern background with subtle pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-background dark:from-background dark:via-secondary/10 dark:to-background">
                {/* Dot pattern */}
                <div
                    className="absolute inset-0 opacity-5 dark:opacity-10"
                    style={{
                        backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px)",
                        backgroundSize: "20px 20px"
                    }}
                ></div>

                {/* Decorative elements */}
                <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full opacity-60 blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full opacity-60 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    <motion.div className="text-center mb-16" variants={itemVariants}>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Us</span>
                        </h2>
                        <motion.div
                            className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto my-5"
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: 96, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        ></motion.div>
                    </motion.div>

                    {/* Company description */}
                    <motion.div
                        variants={itemVariants}
                        className="max-w-4xl mx-auto mb-20 text-center"
                    >
                        <p className="text-foreground/80 dark:text-foreground/90 text-lg leading-relaxed mb-6">
                            Introducing Linkx, your one-stop service provider platform for a hassle-free life. Enjoy seamless bill
                            payments, airtime and data top-ups, and convenient transportation solutions all in one place. Our secure
                            and reliable platform streamlines bill payments, making it easy to manage your electricity bills, airtime
                            purchases, cable TV subscriptions, and more with just a few clicks.
                        </p>
                        <p className="text-foreground/80 dark:text-foreground/90 text-lg leading-relaxed">
                            But that's not all. Linkx also revolutionizes your daily commute with our integrated ride service. Whether
                            you need a quick ride across town, a reliable transportation solution for your daily commute, or a
                            convenient delivery option for items, our ride service prioritizes your safety and comfort. With Linkx,
                            simplify your payments, commute with ease, and experience the future of transportation today!
                        </p>
                    </motion.div>

                    {/* Team section */}
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-foreground mb-2">Meet Our Team</h3>
                        <p className="text-foreground/70 dark:text-muted-foreground max-w-2xl mx-auto">
                            The passionate innovators behind LinkX who are dedicated to revolutionizing how you manage payments and transportation.
                        </p>
                    </motion.div>

                    {/* Team members grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard
                                key={member.name}
                                name={member.name}
                                role={member.role}
                                image={member.image}
                                description={member.description}
                                index={index}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

interface TeamMemberCardProps {
    name: string;
    role: string;
    image: string;
    description: string;
    index: number;
}

function TeamMemberCard({ name, role, image, description, index }: TeamMemberCardProps): JSX.Element {
    return (
        <motion.div
            custom={index}
            variants={{
                hidden: { y: 30, opacity: 0 },
                visible: (i) => ({
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: 0.1 * i,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 50
                    }
                })
            }}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
        >
            <div className="bg-white dark:bg-card/95 rounded-xl overflow-hidden shadow-md border border-border/10 h-full flex flex-col">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                    <Image
                        src={image}
                        alt={name}
                        width={400}
                        height={480}
                        className="object-cover aspect-[4/5] w-full"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                        <h3 className="text-white text-xl font-bold">{name}</h3>
                        <p className="text-white/80 font-medium">{role}</p>
                    </div>
                </div>
                <div className="p-5 flex-grow">
                    <p className="text-foreground/70 dark:text-muted-foreground leading-relaxed">{description}</p>
                </div>
                <div className="p-5 pt-0 flex justify-center space-x-3">
                    <SocialButton icon={<Mail size={16} />} />
                    <SocialButton icon={<Linkedin size={16} />} />
                    <SocialButton icon={<Twitter size={16} />} />
                </div>
            </div>
        </motion.div>
    );
}

function SocialButton({ icon }: { icon: React.ReactNode }): JSX.Element {
    return (
        <motion.a
            href="#"
            className="w-8 h-8 rounded-full flex items-center justify-center text-primary border border-primary/30 hover:bg-primary/10 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
        >
            {icon}
        </motion.a>
    );
}