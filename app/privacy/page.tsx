import Footer from "@/components/footer";
import Header from "@/components/header";
import PrivacyPolicy from "@/components/privacy-policy";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <PrivacyPolicy />
            </main>
            <Footer />
        </div>
    )
}

