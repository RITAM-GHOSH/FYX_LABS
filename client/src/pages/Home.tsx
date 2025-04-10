import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import Process from "@/components/home/Process";
import Blog from "@/components/home/Blog";
import CTA from "@/components/home/CTA";
import Contact from "@/components/home/Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Process />
      <Blog />
      <CTA />
      <Contact />
    </main>
  );
};

export default Home;
