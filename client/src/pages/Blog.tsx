import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import CTA from "@/components/home/CTA";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    category: "Web Development",
    categoryBg: "bg-primary/10",
    categoryColor: "text-primary",
    date: "Jan 15, 2023",
    title: "Top Web Development Trends to Watch in 2023",
    description: "Discover the emerging technologies and methodologies that are shaping the future of web development.",
    image: "web-dev",
    color: "primary",
  },
  {
    id: 2,
    category: "Digital Marketing",
    categoryBg: "bg-secondary/10",
    categoryColor: "text-secondary",
    date: "Feb 2, 2023",
    title: "How AI is Transforming Digital Marketing Strategies",
    description: "Explore how artificial intelligence is revolutionizing digital marketing and how businesses can leverage it.",
    image: "digital-marketing",
    color: "secondary",
  },
  {
    id: 3,
    category: "Mobile Development",
    categoryBg: "bg-accent/10",
    categoryColor: "text-accent",
    date: "Mar 10, 2023",
    title: "Essential Features Every Business Mobile App Needs",
    description: "Learn about the must-have features that can make your business mobile app stand out in the competitive market.",
    image: "mobile-dev",
    color: "accent",
  },
  {
    id: 4,
    category: "UI/UX Design",
    categoryBg: "bg-primary/10",
    categoryColor: "text-primary",
    date: "Apr 5, 2023",
    title: "Principles of Effective UI/UX Design for Better Conversion",
    description: "Understand the key design principles that can significantly improve user experience and conversion rates.",
    image: "ui-ux",
    color: "primary",
  },
  {
    id: 5,
    category: "E-Commerce",
    categoryBg: "bg-secondary/10",
    categoryColor: "text-secondary",
    date: "May 12, 2023",
    title: "Optimizing Your E-Commerce Store for Higher Sales",
    description: "Practical strategies to enhance your online store's performance and increase sales conversions.",
    image: "e-commerce",
    color: "secondary",
  },
  {
    id: 6,
    category: "Technology",
    categoryBg: "bg-accent/10",
    categoryColor: "text-accent",
    date: "Jun 20, 2023",
    title: "The Future of Blockchain in Business Applications",
    description: "Explore how blockchain technology is evolving and its potential applications in various business sectors.",
    image: "technology",
    color: "accent",
  },
];

const categories = [
  { name: "Web Development", count: 15 },
  { name: "Digital Marketing", count: 12 },
  { name: "UI/UX Design", count: 8 },
  { name: "Mobile Development", count: 10 },
  { name: "E-Commerce", count: 7 },
  { name: "Technology", count: 9 },
];

const popularTags = [
  "Web Design", "SEO", "Mobile Apps", "UI/UX", "React", "JavaScript", 
  "Digital Marketing", "E-Commerce", "WordPress", "Node.js"
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | FYX LABS</title>
        <meta name="description" content="Insights, tips, and industry updates from our expert team to help you stay ahead in the digital world." />
      </Helmet>

      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-primary font-medium">Our Blog</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Insights & Resources
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Stay updated with the latest trends, tips, and insights from our industry experts to help your business thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-1">
                    <div className="h-56 w-full bg-muted flex items-center justify-center">
                      <div className="flex flex-col items-center text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        <span>{post.image}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <span className={`${post.categoryBg} ${post.categoryColor} text-xs font-medium px-3 py-1 rounded-full`}>
                          {post.category}
                        </span>
                        <span className="text-muted-foreground text-sm ml-3">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {post.description}
                      </p>
                      <a 
                        href={`/blog/${post.id}`} 
                        className={`inline-flex items-center text-${post.color} hover:text-${post.color}/80 font-medium transition-all`}
                      >
                        Read More 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" className="w-10 h-10 rounded-md bg-card border-border">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </Button>
                  <Button variant="outline" className="w-10 h-10 rounded-md bg-primary text-white hover:bg-primary/90 border-primary">1</Button>
                  <Button variant="outline" className="w-10 h-10 rounded-md bg-card border-border">2</Button>
                  <Button variant="outline" className="w-10 h-10 rounded-md bg-card border-border">3</Button>
                  <Button variant="outline" size="icon" className="w-10 h-10 rounded-md bg-card border-border">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-card rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Search</h3>
                <div className="relative">
                  <Input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="bg-muted border-border pl-10" 
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-all">
                        {category.name}
                      </a>
                      <span className="text-muted-foreground text-sm bg-muted px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <a 
                      key={index} 
                      href="#"
                      className="bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
                <p className="text-muted-foreground mb-4">
                  Subscribe to our newsletter to receive the latest updates and insights.
                </p>
                <div className="space-y-4">
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-muted border-border" 
                  />
                  <Button className="w-full btn-primary">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default Blog;
