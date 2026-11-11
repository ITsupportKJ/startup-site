import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";
import Sectors from "../components/Sectors";
import Approach from "../components/Approach";
import Contact from "../components/Contact";
import { usePageMeta } from "../usePageMeta";

export default function Home() {
  usePageMeta(
    "AERO | Web Design, IT Infrastructure, Cybersecurity & Data Analytics",
    "AERO designs websites, deploys servers and networks, secures your business and turns your data into clear reports. One team for web, IT and analytics.",
  );

  return (
    <>
      <Hero />
      <Services />
      <Work />
      <Sectors />
      <Approach />
      <Contact />
    </>
  );
}