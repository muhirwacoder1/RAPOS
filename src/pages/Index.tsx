import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import About from "@/components/About";
import WhoWeAre from "@/components/WhoWeAre";
import FAQs from "@/components/FAQs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Events />
      <About />
      <WhoWeAre />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;