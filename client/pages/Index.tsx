import { Hero } from "@/components/Hero";
import { Vision } from "@/components/Vision";
import { Governance } from "@/components/Governance";
import { Divisions } from "@/components/Divisions";
import { Objectives } from "@/components/Objectives";
import { Services } from "@/components/Services";
import { Differentiators } from "@/components/Differentiators";
import { Contact } from "@/components/Contact";

export default function Index() {
  return (
    <main className="w-full">
      <Hero />
      <Vision />
      <Governance />
      <Divisions />
      <Objectives />
      <Services />
      <Differentiators />
      <Contact />
    </main>
  );
}
