import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "react-toastify/dist/ReactToastify.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Montserrat } from "next/font/google"
import ClientProviders from "@/components/client-providers"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "LinkX - All-in-One Payment & Ride Services",
  description: "Experience seamless bill payment and ride services with LinkX. Convenient control at your fingertips!",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="min-h-screen flex flex-col">
            <ClientProviders>
              {children}
            </ClientProviders>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

