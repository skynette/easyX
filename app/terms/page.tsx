import Footer from "@/components/footer";
import Header from "@/components/header";
import TermsConditions from "@/components/terms";

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <TermsConditions />
            </main>
            <Footer />
        </div>
    )
}
