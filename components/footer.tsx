import type React from "react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground">
            <div className="container mx-auto max-w-7xl px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <Link href="/" className="flex items-center mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-2">
                                <span className="text-primary-foreground font-bold text-xl">LX</span>
                            </div>
                        </Link>
                        <p className="text-muted-foreground mb-6">
                            Discover the ultimate solution that seamlessly integrates bill payment and ride services, putting control
                            and efficiency right at your fingertips. Say goodbye to hassle and hello to convenience!
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Services</h3>
                        <ul className="space-y-3">
                            <FooterLink>Data Bundle purchase</FooterLink>
                            <FooterLink>Mobile Airtime top-up</FooterLink>
                            <FooterLink>Order Rides & Deliveries</FooterLink>
                            <FooterLink>Cable Tv Subscriptions</FooterLink>
                            <FooterLink>Fund Betting</FooterLink>
                            <FooterLink>Utility Payment</FooterLink>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Company</h3>
                        <ul className="space-y-3">
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/privacy">Privacy Policy</FooterLink>
                            <FooterLink href="/terms">Terms & Conditions</FooterLink>
                            <FooterLink href="/#contact">Contact Us</FooterLink>
                            <FooterLink>Delete Account</FooterLink>
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Info</h3>
                        <ul className="space-y-3 mb-8">
                            <li className="text-muted-foreground">Support@LinkX.com</li>
                            <li className="text-muted-foreground">+234 900 555 123</li>
                        </ul>

                        <h3 className="text-xl font-bold mb-4">Follow us</h3>
                        <div className="flex flex-wrap gap-3">
                            <SocialIcon platform="twitter" />
                            <SocialIcon platform="instagram" />
                            <SocialIcon platform="facebook" />
                            <SocialIcon platform="tiktok" />
                            <SocialIcon platform="linkedin" />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-muted mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Privacy policy
                        </Link>
                        <Link href="terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Terms of use
                        </Link>
                    </div>
                    <div className="text-sm text-muted-foreground">© 2024 LinkX All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}

function FooterLink({ children, href = "#" }: { children: React.ReactNode, href?: string }) {
    return (
        <li>
            <Link href={href} className="text-muted-foreground hover:text-foreground transition-colors">
                {children}
            </Link>
        </li>
    )
}

interface SocialIconProps {
    platform: "twitter" | "instagram" | "facebook" | "tiktok" | "linkedin"
}

function SocialIcon({ platform }: SocialIconProps) {
    const getIcon = () => {
        switch (platform) {
            case "twitter":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                )
            case "instagram":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                )
            case "facebook":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                )
            case "tiktok":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                        <path d="M16 8v8"></path>
                        <path d="M12 16v-8"></path>
                        <path d="M20 12V8a4 4 0 0 0-4-4h-4"></path>
                    </svg>
                )
            case "linkedin":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                )
        }
    }

    return (
        <a
            href="#"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
            aria-label={`Follow us on ${platform}`}
        >
            {getIcon()}
        </a>
    )
}

