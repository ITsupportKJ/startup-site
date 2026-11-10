import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Infrastructure from "./components/Infrastructure";
import Security from "./components/Security";
import Work from "./components/Work";
import Sectors from "./components/Sectors";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Charts are the heaviest part of the page, so load them separately.
const DemoDashboard = lazy(() => import("./components/DemoDashboard"));

export default function App() {
  return (
    <>
      <a className="skip-link" href="#services">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Infrastructure />
        <Security />
        <Suspense
          fallback={<section id="demo" className="section section-dark demo-fallback" />}
        >
          <DemoDashboard />
        </Suspense>
        <Work />
        <Sectors />
        <Approach />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}