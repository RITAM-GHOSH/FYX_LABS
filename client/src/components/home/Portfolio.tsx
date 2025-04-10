import { useState } from "react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: 1,
    image: "e-commerce",
    title: "E-commerce Website",
    categories: ["Web Development", "E-Commerce"],
  },
  {
    id: 2,
    image: "mobile-app",
    title: "Fitness Mobile App",
    categories: ["Mobile App Development", "UI/UX"],
  },
  {
    id: 3,
    image: "dashboard",
    title: "Marketing Dashboard",
    categories: ["Web Development", "Data Visualization"],
  },
  {
    id: 4,
    image: "travel",
    title: "Travel Booking Platform",
    categories: ["Web Development", "UI/UX"],
  },
  {
    id: 5,
    image: "healthcare",
    title: "Healthcare Application",
    categories: ["Mobile App Development", "Web Development"],
  },
  {
    id: 6,
    image: "education",
    title: "Educational Platform",
    categories: ["Web Development", "E-Learning"],
  },
];

const categories = [
  "All Projects",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "E-Commerce",
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Latest Work</h2>
          <p className="section-subtitle">
            Explore our portfolio of successful projects that showcase our expertise and commitment to excellence.
          </p>
        </div>
        
        <div className="flex flex-wrap mb-10 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 mr-2 mb-2 rounded-full transition-all ${
                activeFilter === category
                  ? "bg-primary text-white"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item rounded-xl overflow-hidden">
              <div className="w-full h-64 bg-muted flex items-center justify-center">
                <div className="flex flex-col items-center text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <span>{item.image}</span>
                </div>
              </div>
              <div className="portfolio-overlay">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.categories.join(", ")}</p>
                <Button className="px-5 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="btn-outline">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
