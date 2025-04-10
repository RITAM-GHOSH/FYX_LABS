import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import CTA from "@/components/home/CTA";

const WebDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Services | FYX LABS</title>
        <meta name="description" content="Professional web development services for businesses of all sizes. Build scalable, responsive websites with FYX LABS." />
      </Helmet>
      
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <p className="text-primary font-medium">Web Development</p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Expert Web Development Services
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We create high-performance, responsive websites tailored to your specific business needs, helping you establish a strong online presence and achieve your business goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="btn-primary">Get Started</Button>
                <Button variant="outline" className="btn-outline">View Portfolio</Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-xl"></div>
                <div className="relative z-10 rounded-2xl w-full h-80 md:h-96 bg-muted overflow-hidden flex items-center justify-center">
                  <div className="flex flex-col items-center text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mb-2 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                    <span>Web Development Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Web Development Services</h2>
            <p className="section-subtitle">
              Comprehensive web development solutions to help businesses establish a strong online presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service cards */}
            <div className="service-card">
              <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Custom Website Development</h3>
              <p className="text-muted-foreground mb-5">
                Tailor-made websites built from scratch that perfectly align with your brand identity and business requirements.
              </p>
            </div>
            
            <div className="service-card">
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">E-Commerce Development</h3>
              <p className="text-muted-foreground mb-5">
                Robust online stores with secure payment gateways, inventory management, and optimized checkout processes.
              </p>
            </div>
            
            <div className="service-card">
              <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Responsive Web Design</h3>
              <p className="text-muted-foreground mb-5">
                Mobile-friendly websites that provide optimal viewing experience across all devices and screen sizes.
              </p>
            </div>
            
            <div className="service-card">
              <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Web Application Development</h3>
              <p className="text-muted-foreground mb-5">
                Complex web applications with advanced functionality to streamline business operations and enhance user experience.
              </p>
            </div>
            
            <div className="service-card">
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">CMS Development</h3>
              <p className="text-muted-foreground mb-5">
                User-friendly content management systems that enable easy updates and content management without technical knowledge.
              </p>
            </div>
            
            <div className="service-card">
              <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Performance Optimization</h3>
              <p className="text-muted-foreground mb-5">
                Speed optimization services to ensure fast loading times, improving user experience and search engine rankings.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-subtitle">
              A systematic approach to deliver high-quality web solutions on time and within budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary text-white text-2xl font-bold rounded-full flex items-center justify-center z-10">
                1
              </div>
              <div className="service-card h-full text-center pt-16">
                <h3 className="text-xl font-bold text-white mb-4">Requirements Analysis</h3>
                <p className="text-muted-foreground">
                  We thoroughly analyze your business needs, target audience, and project goals to create a detailed project roadmap.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-secondary text-white text-2xl font-bold rounded-full flex items-center justify-center z-10">
                2
              </div>
              <div className="service-card h-full text-center pt-16">
                <h3 className="text-xl font-bold text-white mb-4">Design & Prototyping</h3>
                <p className="text-muted-foreground">
                  Our designers create wireframes and interactive prototypes to visualize the website structure and user flow.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-accent text-white text-2xl font-bold rounded-full flex items-center justify-center z-10">
                3
              </div>
              <div className="service-card h-full text-center pt-16">
                <h3 className="text-xl font-bold text-white mb-4">Development & Testing</h3>
                <p className="text-muted-foreground">
                  Our developers bring the design to life using the latest technologies, followed by thorough quality assurance.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary text-white text-2xl font-bold rounded-full flex items-center justify-center z-10">
                4
              </div>
              <div className="service-card h-full text-center pt-16">
                <h3 className="text-xl font-bold text-white mb-4">Deployment & Support</h3>
                <p className="text-muted-foreground">
                  We handle the deployment process and provide ongoing maintenance and support to ensure optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="section-title">Technologies We Use</h2>
              <p className="text-muted-foreground mb-8">
                We leverage the latest technologies and frameworks to build robust, scalable, and high-performance websites.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Frontend</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">React.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Angular</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Vue.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">HTML5/CSS3</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">JavaScript/TypeScript</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Backend</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-muted-foreground">Node.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-muted-foreground">Python/Django</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-muted-foreground">PHP/Laravel</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-muted-foreground">Ruby on Rails</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-muted-foreground">Java/Spring</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">CMS</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">WordPress</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Drupal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Joomla</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Shopify</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Magento</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Databases</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">MySQL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">PostgreSQL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">MongoDB</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Firebase</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Redis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="bg-card p-8 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-white mb-6">Why Choose Us for Web Development?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium">Experienced Team</h4>
                      <p className="text-muted-foreground text-sm">
                        Our team of experienced developers has successfully delivered over 500+ web projects across various industries.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium">Custom Solutions</h4>
                      <p className="text-muted-foreground text-sm">
                        We create tailor-made solutions that align with your specific business requirements and objectives.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium">Latest Technologies</h4>
                      <p className="text-muted-foreground text-sm">
                        We stay up-to-date with the latest web technologies to ensure your website is modern, secure, and future-proof.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium">Responsive Support</h4>
                      <p className="text-muted-foreground text-sm">
                        We provide ongoing support and maintenance to ensure your website performs optimally at all times.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium">Timely Delivery</h4>
                      <p className="text-muted-foreground text-sm">
                        We are committed to delivering projects on time and within budget without compromising on quality.
                      </p>
                    </div>
                  </div>
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

export default WebDevelopment;
