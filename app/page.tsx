import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { ScrollRevealProvider } from "@/app/components/uis/ScrollRevealProvider";
import { BackToTop } from "@/app/components/uis/BackToTop";

import { Hero } from "@/app/components/sections/Hero";
import { TrustBar } from "@/app/components/sections/TrustBar";
import { About } from "@/app/components/sections/About";
import { WhyChooseUs } from "@/app/components/sections/WhyChooseUs";
import { Programs } from "@/app/components/sections/Programs";
import { Facilities } from "@/app/components/sections/Facitlities";
import { SchoolLife } from "@/app/components/sections/SchoolLife";
import { Admissions } from "@/app/components/sections/Admissions";
import { Testimonials } from "@/app/components/sections/Testimonials";
import { Stats } from "@/app/components/sections/Stats";
import { News } from "@/app/components/sections/News";
import { Gallery } from "@/app/components/sections/Gallery";
import { FAQ } from "@/app/components/sections/FAQ";
import { BigCTA } from "@/app/components/sections/BigCTA";
import { Contact } from "@/app/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      {/* Global scroll reveal observer (client, zero DOM output) */}
      <ScrollRevealProvider />

      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <About />
        <WhyChooseUs />
        <Programs />
        <Facilities />
        <SchoolLife />
        <Admissions />
        <Testimonials />
        <Stats />
        <News />
        <Gallery />
        <FAQ />
        <BigCTA />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}