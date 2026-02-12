import { ClientsCarousel } from "@/components/clients-carousel";
import { DemoChat } from "@/components/demo-chat";
import { AdminFeature } from "@/components/admin-feature";
import { ExampleLinks } from "@/components/example-links";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { ProblemSolution } from "@/components/problem-solution";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <ClientsCarousel />
      <ProblemSolution />
      <ExampleLinks />
      <HowItWorks />

      <DemoChat />
      <AdminFeature />
      <Pricing />
      <Footer />
    </main>
  );
}
