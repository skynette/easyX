"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

export default function FAQSection(): JSX.Element {
    const [openItem, setOpenItem] = useState<string | undefined>("item-1")

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, type: "spring", stiffness: 50 }
        }
    }

    const faqItems = [
        {
            value: "item-1",
            question: "Why should I use Linkx",
            answer: "Linkx stands as the pinnacle for safe and hassle-free utility payments in Nigeria. Offering unmatched speed compared to other payment platforms, Linkx ensures swift transactions. Our commitment lies in providing you with access to consistently affordable services, including rides, while maintaining the utmost security for your data through our state-of-the-art military-grade safety measures."
        },
        {
            value: "item-2",
            question: "Why did my transaction fail?",
            answer: "Transactions may fail due to several reasons including network connectivity issues, insufficient funds, bank server downtime, or incorrect payment details. We recommend checking your internet connection, ensuring you have sufficient funds, verifying your payment details, and trying again. If the issue persists, please contact our customer support team for assistance."
        },
        {
            value: "item-3",
            question: "Can I load the token I purchased on another prepaid meter?",
            answer: "No, tokens are meter-specific and can only be used on the meter for which they were generated. Each prepaid meter has a unique identifier that is encoded into the token during generation. If you need to purchase a token for a different meter, you'll need to initiate a new transaction with the correct meter number."
        },
        {
            value: "item-4",
            question: "What do I do if my token is not generated after payment?",
            answer: "If your token isn't generated after payment, please wait for a few minutes as there might be a slight delay in processing. If after 15 minutes you still haven't received your token, check the transaction history in your Linkx app to confirm the payment status. If the payment was successful but no token was generated, please contact our customer support with your transaction reference number for immediate assistance."
        },
        {
            value: "item-5",
            question: "How long will it take for my driver to arrive after booking?",
            answer: "Driver arrival time varies based on your location, traffic conditions, and driver availability. Typically, drivers arrive within 5-15 minutes in urban areas. You can track your driver's location in real-time through the Linkx app once your booking is confirmed. The app provides an estimated time of arrival that updates as your driver approaches."
        },
        {
            value: "item-6",
            question: "Can I get a refund if my transaction fails?",
            answer: "Yes, if your transaction fails and your account has been debited, you're eligible for a refund. Failed transactions are typically automatically reversed within 24 hours. If you don't see the reversal after 24 hours, please contact our customer support with your transaction details. We'll investigate and process your refund promptly."
        }
    ]

    return (
        <section className="relative py-20 overflow-hidden" id="faq">
            {/* Modern background */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-secondary/15 to-secondary/10 dark:from-secondary/30 dark:via-secondary/20 dark:to-secondary/10">
                {/* Subtle pattern */}
                <div
                    className="absolute inset-0 opacity-10 dark:opacity-15"
                    style={{
                        backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px)",
                        backgroundSize: "20px 20px"
                    }}
                ></div>

                {/* Decorative elements */}
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full opacity-70 blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-secondary/10 to-transparent rounded-full opacity-70 blur-3xl"></div>
            </div>

            <div className="container mx-auto max-w-4xl px-4 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                    className="text-center mb-14"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
                    >
                        Frequently Asked <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Questions</span>
                    </motion.h2>

                    <motion.div
                        className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto my-5"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: 96, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    ></motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-foreground/80 dark:text-muted-foreground max-w-3xl mx-auto"
                    >
                        Have a question about our services? Our section has got you covered with helpful information on all our
                        offerings.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    className="space-y-4"
                >
                    <Accordion
                        type="single"
                        collapsible
                        value={openItem}
                        onValueChange={setOpenItem}
                        className="space-y-3"
                    >
                        {faqItems.map((item, index) => (
                            <CustomAccordionItem
                                key={item.value}
                                value={item.value}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openItem === item.value}
                                index={index}
                            />
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}

interface CustomAccordionItemProps {
    value: string
    question: string
    answer: string
    isOpen?: boolean
    index: number
}

function CustomAccordionItem({ value, question, answer, isOpen, index }: CustomAccordionItemProps): JSX.Element {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: 0.1 * index,
                type: "spring",
                stiffness: 50
            }}
            viewport={{ once: true, margin: "-50px" }}
        >
            <AccordionItem
                value={value}
                className={`border rounded-xl overflow-hidden bg-white dark:bg-card/95 dark:backdrop-blur-sm border-border/40 shadow-sm transition-all duration-300 ${isOpen ? 'shadow-md' : ''}`}
            >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/50 dark:hover:bg-muted/20 transition-colors group">
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-3 text-left">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 flex items-center justify-center flex-shrink-0">
                                <HelpCircle size={16} className="text-primary" />
                            </div>
                            <span className="font-medium text-lg text-foreground">{question}</span>
                        </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-1 text-muted-foreground leading-relaxed">
                    <div className="border-l-2 border-primary/30 pl-4 mt-2">
                        {answer}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </motion.div>
    )
}