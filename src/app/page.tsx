import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Notice from '@/components/common/Notice';
import FormInput from "@/components/FormInput";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header/>
      <main className="flex-grow container mx-auto py-2">
        <Notice/>
        <FormInput/>
      </main>
      <Footer/>
    </div>
  );
}
