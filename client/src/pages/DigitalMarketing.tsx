import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import CTA from "@/components/home/CTA";
import { LineChart, BarChart, TrendingUp, Search, Megaphone, Users } from "lucide-react";

const DigitalMarketing = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Services | Acodez</title>
        <meta name="description" content="Strategic digital marketing services to increase visibility, drive traffic, and generate qualified leads for your business." />
      </Helmet>
      
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full">
                <p className="text-secondary font-medium">Digital Marketing</p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Strategic Digital Marketing Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We help businesses grow their online presence and drive measurable results through strategic digital marketing campaigns tailored to their unique goals and target audience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md font-semibold transition-all">Get Started</Button>
                <Button variant="outline" className="border border-border hover:border-secondary text-muted-foreground hover:text-secondary px-6 py-3 rounded-md font-semibold transition-all">View Case Studies</Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-3xl blur-xl"></div>
                <div className="relative z-10 rounded-2xl w-full h-80 md:h-96 bg-muted overflow-hidden flex items-center justify-center">
                  <div className="flex flex-col items-center text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mb-2 text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
                    <span>Digital Marketing Team</span>
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
            <h2 className="section-title">Our Digital Marketing Services</h2>
            <p className="section-subtitle">
              Comprehensive digital marketing solutions to help businesses increase visibility and drive growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card">
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-5">
                <Search className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Search Engine Optimization</h3>
              <p className="text-muted-foreground mb-5">
                Improve your website's visibility in search engines with our data-driven SEO strategies focused on sustainable, long-term results.
              </p>
              <a href="#" className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-all">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>
            
            <div className="service-card">
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-5">
                <Megaphone className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Pay-Per-Click Advertising</h3>
              <p className="text-muted-foreground mb-5">
                Drive immediate targeted traffic to your website with cost-effective PPC campaigns across Google, Bing, and social media platforms.
              </p>
              <a href="#" className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-all">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>
            
            <div className="service-card">
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-5">
                <Users className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Social Media Marketing</h3>
              <p className="text-muted-foreground mb-5">
                Build your brand presence and engage with your audience through strategic social media marketing campaigns across all major platforms.
              </p>
              <a href="#" className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-all">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>
            
            <div className="service-card">
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email Marketing</h3>
              <p className="text-muted-foreground mb-5">
                Nurture leads and drive conversions with personalized email campaigns that deliver targeted messages to the right audience at the right time.
              </p>
              <a href="#" className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-all">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>
            
            <div className="service-card">
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Content Marketing</h3>
              <p className="text-muted-foreground mb-5">
                Create valuable, relevant content that attracts and engages your target audience, establishing your brand as an industry authority.
              </p>
              <a href="#" className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-all">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>
            
            <div className="service-card">
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-5">
                <TrendingUp className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Analytics & Reporting</h3>
              <p className="text-muted-foreground mb-5">
                Gain actionable insights from comprehensive analytics and regular reports that track campaign performance and ROI.
              </p>
              <a href="#" className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-all">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-3xl blur-xl"></div>
                <div className="relative z-10 rounded-2xl w-full h-80 md:h-96 bg-muted overflow-hidden flex items-center justify-center">
                  <div className="flex flex-col items-center text-muted-foreground">
                    <BarChart className="w-16 h-16 mb-2 text-secondary" />
                    <span>Digital Marketing Strategy</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Digital Marketing Approach</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We follow a data-driven, results-oriented approach to digital marketing that focuses on maximizing ROI and achieving your business objectives.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Discovery & Analysis</h3>
                    <p className="text-muted-foreground">
                      We start by understanding your business goals, target audience, and current digital presence through comprehensive research and analysis.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Strategy Development</h3>
                    <p className="text-muted-foreground">
                      Based on our findings, we create a customized digital marketing strategy that aligns with your objectives and targets the right channels.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Implementation & Optimization</h3>
                    <p className="text-muted-foreground">
                      We execute the strategy across selected channels and continuously optimize campaigns based on performance data.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold">04</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Monitoring & Reporting</h3>
                    <p className="text-muted-foreground">
                      We provide regular reports with actionable insights and recommendations to ensure your campaigns deliver optimal results.
                    </p>
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
            <h2 className="section-title">Why Choose Our Digital Marketing Services</h2>
            <p className="section-subtitle">
              Experience the difference with our data-driven, results-focused approach to digital marketing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border hover:border-secondary/50 transition-all">
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Strategy</h3>
              <p className="text-muted-foreground">
                Our digital marketing strategies are built on proven methodologies that have delivered results for businesses across various industries.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border hover:border-secondary/50 transition-all">
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Customized Approach</h3>
              <p className="text-muted-foreground">
                We tailor our digital marketing strategies to your specific business goals, target audience, and industry, ensuring maximum relevance and impact.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border hover:border-secondary/50 transition-all">
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-5">
                <LineChart className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Data-Driven Decisions</h3>
              <p className="text-muted-foreground">
                We make strategic decisions based on comprehensive data analysis, ensuring your marketing budget is invested in channels that deliver the best ROI.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border hover:border-secondary/50 transition-all">
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-muted-foreground">
                Our team of digital marketing specialists brings years of experience and expertise across all digital channels to deliver optimal results.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border hover:border-secondary/50 transition-all">
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Transparent Reporting</h3>
              <p className="text-muted-foreground">
                We provide clear, regular reports that demonstrate the impact of your digital marketing campaigns and the value of your investment.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border hover:border-secondary/50 transition-all">
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Continuous Optimization</h3>
              <p className="text-muted-foreground">
                We continuously monitor and optimize your campaigns to adapt to market changes and maximize performance throughout the campaign lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
    </>
  );
};

export default DigitalMarketing;
