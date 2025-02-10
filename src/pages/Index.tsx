import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ReviewForm } from "@/components/review/ReviewForm";

const Index = () => {
  return (
    <div className="bg-[rgba(242,244,248,1)] flex flex-col overflow-hidden items-stretch min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center">
        <ReviewForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
