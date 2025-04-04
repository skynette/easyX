import BecomeAgentRequirements from "@/components/agent-requirements";
import AppDownloadSection from "@/components/app-download";
import BecomeAgentBenefits from "@/components/become-agent-benefits";
import BecomeAgentHero from "@/components/become-agent-hero";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function BecomeAgentPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <BecomeAgentHero />
                <BecomeAgentBenefits />
                <BecomeAgentRequirements />
                <AppDownloadSection />
            </main>
            <Footer />
        </div>
    )
}

