
import AppDownloadSection from "@/components/app-download";
import ContactUsSection from "@/components/contact-us";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import GetStartedSection from "@/components/get-started";
import Header from "@/components/header";
import HomeHeroSection from "@/components/hero";
import ServicesComponent from "@/components/services";
import WhyLinkXBestSection from "@/components/why-linkx-best";

export default function LandingPage() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HomeHeroSection />
        <ServicesComponent />
        <GetStartedSection />
        <WhyLinkXBestSection />
        <FAQSection />
        <ContactUsSection />
        <AppDownloadSection />
      </main>
      <Footer />
    </div>
  )
}

