import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-primary hover:underline mb-6">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>

                <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-primary mb-2">Privacy Policy</h1>
                    </div>
                    <div className="md:ml-auto">
                        <Image
                            src="/placeholder.svg?height=150&width=150"
                            alt="Privacy Policy Illustration"
                            width={150}
                            height={150}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-semibold mb-4">OUR COMMITMENT TO PRIVACY</h2>
                    <p className="text-muted-foreground">
                        LinkX and its affiliates ("we", "our", "us", or "LinkX") are committed to protecting your privacy and
                        safeguarding your personal information. In creating LinkX, we've prioritized privacy. This Privacy Policy
                        document tells you how we use, store, and protect your information when you use our services, including
                        billing, payments, mobile services. To learn more, read everything on this page or contact us with any
                        questions.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">INFORMATION WE COLLECT</h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium mb-2">2.1 Information You Provide</h3>
                            <p className="text-muted-foreground mb-2">
                                When you create an account or sign up, we collect your name, email address, phone number.
                            </p>
                            <p className="text-muted-foreground mb-2">
                                <strong>Profile Information:</strong> This includes basic account information, such as your profile
                                picture, address, and contact details.
                            </p>
                            <p className="text-muted-foreground">
                                <strong>Payment Information:</strong> When you make a purchase or transaction, we collect payment card
                                information and billing address.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">2.2 Information We Collect Automatically</h3>
                            <p className="text-muted-foreground mb-2">
                                When you use our services, we automatically collect certain information about your device and how you
                                use our services.
                            </p>
                            <p className="text-muted-foreground mb-2">
                                <strong>Device Information:</strong> We collect technical data about the device you use to access our
                                app, including device type, operating system, and unique device identifiers.
                            </p>
                            <p className="text-muted-foreground">
                                <strong>Location Information:</strong> When you use certain features of our app, we may collect location
                                information from your device to provide location-based services.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">HOW WE USE YOUR INFORMATION</h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium mb-2">3.1 To Provide and Improve Our Services</h3>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>To process transactions and manage your account;</li>
                                <li>To provide customer service and respond to your inquiries;</li>
                                <li>To improve and personalize your experience with our services;</li>
                                <li>To develop new features and services for you.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">3.2 For Safety and Security</h3>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>To verify your identity and prevent fraud;</li>
                                <li>To ensure the safety and security of our users and services.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">3.3 For Communications</h3>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>To send administrative messages, updates, and promotional offers;</li>
                                <li>To facilitate communication between users when necessary;</li>
                                <li>
                                    Service updates: to let you know about changes to our policies, our services, and important system
                                    updates.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">SHARING YOUR INFORMATION</h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium mb-2">4.1 With Service Providers</h3>
                            <p className="text-muted-foreground">
                                We share your information with third-party service providers who perform services on our behalf, such as
                                payment processing, data analysis, and customer support.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">4.2 With Other Users</h3>
                            <p className="text-muted-foreground mb-2">
                                Certain information, such as your name, profile picture, and other public information, may be visible to
                                other users who use our platform.
                            </p>
                            <p className="text-muted-foreground">
                                If you're a driver or rider, we may share your information with the other party to facilitate your
                                journey.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">4.3 For Legal and Safety Reasons</h3>
                            <p className="text-muted-foreground mb-2">
                                We may disclose your information if we believe in good faith that such disclosure is necessary to:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-2">
                                <li>Comply with legal obligations;</li>
                                <li>Protect and defend the rights or property of others;</li>
                                <li>Protect the personal safety of users of the service or the public.</li>
                            </ul>
                            <p className="text-muted-foreground">
                                In the event of a merger, sale, or other asset transfer, we may transfer your information to the
                                acquiring entity. However, this Privacy Policy will still govern your information.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">YOUR CHOICES</h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium mb-2">5.1 Accessing Information</h3>
                            <p className="text-muted-foreground">
                                You can access your personal information through your profile settings. You may also delete your account
                                by contacting our customer support.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">5.2 Location Information</h3>
                            <p className="text-muted-foreground">
                                You can enable or disable location services through your device settings, but this may affect the
                                functionality of our services.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">5.3 Marketing Communications</h3>
                            <p className="text-muted-foreground">
                                You can opt out of marketing communications we send by following the unsubscribe instructions in the
                                emails. You may also adjust your notification preferences in your account settings.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">DATA SECURITY</h2>
                    <p className="text-muted-foreground">
                        We implement appropriate security measures to protect your information from unauthorized access, use, or
                        disclosure. However, no data transmission over the internet or mobile networks can be guaranteed to be 100%
                        secure.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">COOKIES</h2>
                    <p className="text-muted-foreground">
                        We use cookies and similar technologies to enhance your experience with our website, to identify your device
                        when you use our different pages, collect information about your use, and to improve our services. Cookies
                        allow us to remember your preferences and customize your experience. We may also use cookies to analyze the
                        traffic to our website for the purpose of our policy for the purpose of research. Our website uses only
                        essential cookies to function properly.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">CONTACT US</h2>
                    <p className="text-muted-foreground">
                        If you have any questions or concerns about our Privacy Policy or our data practices, please contact us at:
                    </p>
                    <div className="mt-2">
                        <p className="font-medium">
                            Email:{" "}
                            <a href="mailto:privacy@linkx.com" className="text-primary hover:underline">
                                privacy@linkx.com
                            </a>
                        </p>
                        <p className="font-medium">Phone: +234 800 LINKX (54659)</p>
                        <p className="font-medium">Address: 123 Tech Hub, Victoria Island, Lagos, Nigeria</p>
                    </div>
                </section>

                <div className="border-t pt-6">
                    <p className="text-sm text-muted-foreground">Last Updated: April 5, 2024</p>
                </div>
            </div>
        </div>
    )
}

