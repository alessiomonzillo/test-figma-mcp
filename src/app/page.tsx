import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Features from "@/components/Features";
import Unlock from "@/components/Unlock";
import Stats from "@/components/Stats";
import Calendar from "@/components/Calendar";
import Newsletter from "@/components/Newsletter";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <Clients />
      <Features />
      <Unlock />
      <Stats />
      <Calendar />
      <Newsletter />
      <Articles />
      <Footer />
    </main>
  );
}
