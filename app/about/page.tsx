import AboutHeroSection from "@/components/about-hero";
import AboutUsSection from "@/components/about-us";
import AppDownloadSection from "@/components/app-download";
import Footer from "@/components/footer";
import Header from "@/components/header";
import WhyLinkXBestSection from "@/components/why-linkx-best";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <AboutHeroSection />
                <AboutUsSection />
                <WhyLinkXBestSection />
                <AppDownloadSection />
            </main>
            <Footer />
        </div>
    )
}

