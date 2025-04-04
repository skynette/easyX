"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
    const [openItem, setOpenItem] = useState<string | undefined>("item-1")

    return (
        <div className="bg-secondary py-16 px-4" id="faq">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Frequently asked questions</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                        Have a question about our services? Our section has got you covered with helpful information on all our
                        offerings.
                    </p>
                </div>

                <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="space-y-4">
                    <CustomAccordionItem
                        value="item-1"
                        question="Why should I use Linkx"
                        answer="Linkx stands as the pinnacle for safe and hassle-free utility payments in Nigeria. Offering unmatched speed compared to other payment platforms, Linkx ensures swift transactions. Our commitment lies in providing you with access to consistently affordable services, including rides, while maintaining the utmost security for your data through our state-of-the-art military-grade safety measures."
                        isOpen={openItem === "item-1"}
                    />

                    <CustomAccordionItem
                        value="item-2"
                        question="Why did my transaction fail?"
                        answer="Transactions may fail due to several reasons including network connectivity issues, insufficient funds, bank server downtime, or incorrect payment details. We recommend checking your internet connection, ensuring you have sufficient funds, verifying your payment details, and trying again. If the issue persists, please contact our customer support team for assistance."
                        isOpen={openItem === "item-2"}
                    />

                    <CustomAccordionItem
                        value="item-3"
                        question="Can I load the token I purchased on another prepaid meter?"
                        answer="No, tokens are meter-specific and can only be used on the meter for which they were generated. Each prepaid meter has a unique identifier that is encoded into the token during generation. If you need to purchase a token for a different meter, you'll need to initiate a new transaction with the correct meter number."
                        isOpen={openItem === "item-3"}
                    />

                    <CustomAccordionItem
                        value="item-4"
                        question="What do I do if my token is not generated after payment?"
                        answer="If your token isn't generated after payment, please wait for a few minutes as there might be a slight delay in processing. If after 15 minutes you still haven't received your token, check the transaction history in your Linkx app to confirm the payment status. If the payment was successful but no token was generated, please contact our customer support with your transaction reference number for immediate assistance."
                        isOpen={openItem === "item-4"}
                    />

                    <CustomAccordionItem
                        value="item-5"
                        question="How long will it take for my driver to arrive after booking?"
                        answer="Driver arrival time varies based on your location, traffic conditions, and driver availability. Typically, drivers arrive within 5-15 minutes in urban areas. You can track your driver's location in real-time through the Linkx app once your booking is confirmed. The app provides an estimated time of arrival that updates as your driver approaches."
                        isOpen={openItem === "item-5"}
                    />

                    <CustomAccordionItem
                        value="item-6"
                        question="Can I get a refund if my transaction fails?"
                        answer="Yes, if your transaction fails and your account has been debited, you're eligible for a refund. Failed transactions are typically automatically reversed within 24 hours. If you don't see the reversal after 24 hours, please contact our customer support with your transaction details. We'll investigate and process your refund promptly."
                        isOpen={openItem === "item-6"}
                    />
                </Accordion>
            </div>
        </div>
    )
}

interface CustomAccordionItemProps {
    value: string
    question: string
    answer: string
    isOpen?: boolean
}

function CustomAccordionItem({ value, question, answer, isOpen }: CustomAccordionItemProps) {
    return (
        <AccordionItem value={value} className="border rounded-lg overflow-hidden bg-card border-border">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted transition-colors">
                <div className="flex justify-between items-center w-full">
                    <span className="text-left font-medium text-lg">{question}</span>
                </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pt-2 text-muted-foreground">{answer}</AccordionContent>
        </AccordionItem>
    )
}