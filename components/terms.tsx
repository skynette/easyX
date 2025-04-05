import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function TermsConditions() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-primary hover:underline mb-6">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>

                <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-primary mb-2">Terms & Conditions</h1>
                        <p className="text-muted-foreground">OUR TERMS</p>
                    </div>
                    <div className="md:ml-auto">
                        <Image
                            src="/placeholder.svg?height=150&width=150"
                            alt="Terms and Conditions Illustration"
                            width={150}
                            height={150}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground mb-4">
                        Welcome to Linkx ("we," "our," or "us"). By accessing or using our services, including the Linkx mobile application, website, and related services (collectively, the "Services"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please do not use our Services.
                    </p>
                    <p className="text-muted-foreground">
                        By creating an account, accessing, or using any part of the Services, you agree to these Terms and Conditions, including any updates or changes that may be made from time to time. It is your responsibility to review these Terms regularly.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">2. Eligibility</h2>
                    <p className="text-muted-foreground">
                        To use the Services, you must be at least 18 years old and capable of forming a legally binding contract under applicable law. By using the Services, you represent and warrant that you meet these eligibility requirements.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">3. Account Registration</h2>
                    <p className="text-muted-foreground mb-4">
                        To access certain features of the Services, you must register for an account. When registering, you agree to:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
                        <li>Provide accurate, current, and complete information.</li>
                        <li>Maintain and promptly update your information to keep it accurate and complete.</li>
                        <li>Keep your account credentials secure and confidential.</li>
                        <li>Notify us immediately of any unauthorized use of your account.</li>
                    </ul>
                    <p className="text-muted-foreground">
                        You are responsible for all activities that occur under your account. We reserve the right to suspend or terminate your account if we suspect any unauthorized or fraudulent activity.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">4. Use of Services</h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium mb-2">4.1 With Service Providers</h3>
                            <p className="text-muted-foreground mb-4">
                                You may use the Services for personal, non-commercial purposes, in accordance with these Terms. You agree not to:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Use the Services for any unlawful or fraudulent purpose.</li>
                                <li>Access or use the Services in any way that could damage, disable, or impair the Services.</li>
                                <li>Interfere with the security or proper functioning of the Services.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">4.2 Prohibited Activities</h3>
                            <p className="text-muted-foreground mb-4">
                                You agree not to engage in any of the following activities:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Impersonating any person or entity, or falsely stating or otherwise misrepresenting your affiliation with a person or entity.</li>
                                <li>Uploading, posting, or transmitting any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.</li>
                                <li>Using automated systems or software to access the Services without our written consent.</li>
                                <li>Engaging in any activity that could interfere with, disrupt, or impose an unreasonable burden on the Services or the networks connected to the Services.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">5. Services Provided</h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium mb-2">5.1 Utility Payments</h3>
                            <p className="text-muted-foreground">
                                Linkx allows you to pay utility bills (e.g., electricity, water) through the app. You are responsible for providing accurate billing information and ensuring sufficient funds for the transaction.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">5.2 Mobile Recharges and TV Subscriptions</h3>
                            <p className="text-muted-foreground">
                                You can purchase mobile airtime, data bundles, and TV subscriptions electricity using the Services. These transactions are subject to the terms and conditions of the respective service providers.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">5.3 Ride-Hailing Services</h3>
                            <p className="text-muted-foreground mb-4">
                                Linkx connects riders with drivers for transportation services. By booking a ride, you agree to:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Provide accurate pickup and drop-off locations.</li>
                                <li>Pay the fare as calculated by the app at the end of the ride.</li>
                                <li>Behave respectfully towards the driver and other passengers.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">5.4 Delivery Services</h3>
                            <p className="text-muted-foreground mb-4">
                                Linkx provides delivery services for items. By requesting a delivery, you agree to:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Provide accurate delivery details.</li>
                                <li>Ensure that the items for delivery do not violate any laws or regulations.</li>
                                <li>Pay the delivery fee as determined by the app.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">6. Data Security</h2>
                    <p className="text-muted-foreground">
                        We implement appropriate security measures to protect your information from unauthorized access, use, or disclosure. However, no data transmission over the internet or storage system can be guaranteed to be 100% secure.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">7. Driver and User Responsibilities</h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium mb-2">7.1 Driver Responsibilities</h3>
                            <p className="text-muted-foreground mb-4">
                                Drivers using the Linkx platform agree to:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Maintain a valid driver's license, vehicle registration, and insurance.</li>
                                <li>Provide safe and reliable transportation or delivery services.</li>
                                <li>Comply with all applicable laws and regulations.</li>
                                <li>Treat passengers and customers with respect and professionalism.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">8.2 User Responsibilities</h3>
                            <p className="text-muted-foreground mb-4">
                                Users agree to:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Provide accurate information when booking services.</li>
                                <li>Be punctual and respectful when interacting with drivers and delivery personnel.</li>
                                <li>Pay for all services and fees as required.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-muted-foreground">
                        If you have any questions or concerns about these Terms & Conditions, please contact us at:
                    </p>
                    <div className="mt-2">
                        <p className="font-medium">Email: <a href="mailto:linkus@gmail.com" className="text-primary hover:underline">linkus@gmail.com</a></p>
                        <p className="font-medium">Phone: +234 900 555 123</p>
                        <p className="font-medium">Address: 123 Tech Hub, Victoria Island, Lagos, Nigeria</p>
                    </div>
                </section>

                <div className="border-t pt-6">
                    <p className="text-sm text-muted-foreground">
                        Last Updated: April 5, 2024
                    </p>
                </div>
            </div>
        </div>
    )
}
