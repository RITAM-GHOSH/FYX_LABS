import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const blogPosts = [
  {
    id: 1,
    category: "Web Development",
    categoryBg: "bg-primary/10",
    categoryColor: "text-primary",
    date: "Jan 15, 2023",
    title: "Top Web Development Trends to Watch in 2023",
    description: "Discover the emerging technologies and methodologies that are shaping the future of web development.",
    link: "/blog/web-development-trends-2023",
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
    link: "/blog/ai-digital-marketing",
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
    link: "/blog/business-mobile-app-features",
    image: "mobile-dev",
    color: "accent",
  }
];

const Blog = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Latest From Our Blog</h2>
          <p className="section-subtitle">
            Insights, tips, and industry updates from our expert team to help you stay ahead in the digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-1">
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
                <Link 
                  href={post.link} 
                  className={`inline-flex items-center text-${post.color} hover:text-${post.color}/80 font-medium transition-all`}
                >
                  Read More 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="btn-outline">View All Articles</Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
