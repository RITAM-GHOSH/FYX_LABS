import { Helmet } from "react-helmet";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | FYX LABS</title>
        <meta name="description" content="Get in touch with our team to discuss your project requirements. We're here to help bring your digital vision to life." />
      </Helmet>

      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-primary font-medium">Contact Us</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind? Reach out to us to discuss how we can help bring your vision to life. Our team is ready to answer your questions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" id="contact-form">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions or need assistance? Feel free to reach out to us using any of the contact methods below.
                </p>
                
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Our Location</p>
                    <p className="text-muted-foreground">123 Business Avenue, Tech Park, San Francisco, CA 94107</p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Email Us</p>
                    <p className="text-muted-foreground">info@acodez.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Call Us</p>
                    <p className="text-muted-foreground">+1 (234) 567-8901</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-muted hover:bg-primary rounded-full flex items-center justify-center text-muted-foreground hover:text-white transition-all">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-muted hover:bg-primary rounded-full flex items-center justify-center text-muted-foreground hover:text-white transition-all">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-muted hover:bg-primary rounded-full flex items-center justify-center text-muted-foreground hover:text-white transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-muted hover:bg-primary rounded-full flex items-center justify-center text-muted-foreground hover:text-white transition-all">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="bg-card p-8 rounded-xl">
                  <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              className="bg-muted border-border" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="john@example.com" 
                              className="bg-muted border-border" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Project Inquiry" 
                            className="bg-muted border-border" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project..." 
                            className="bg-muted border-border" 
                            rows={5}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our services and processes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-6 rounded-xl border border-border hover:border-primary/30 transition-all">
              <h3 className="text-lg font-bold text-white mb-2">What services do you offer?</h3>
              <p className="text-muted-foreground">
                We offer a comprehensive range of digital services including web development, mobile app development, digital marketing, UI/UX design, e-commerce solutions, and IT consulting.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-xl border border-border hover:border-primary/30 transition-all">
              <h3 className="text-lg font-bold text-white mb-2">How long does a typical project take?</h3>
              <p className="text-muted-foreground">
                Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during project scoping.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-xl border border-border hover:border-primary/30 transition-all">
              <h3 className="text-lg font-bold text-white mb-2">What is your pricing structure?</h3>
              <p className="text-muted-foreground">
                We offer customized pricing based on project requirements. We can work with fixed-price quotes for well-defined projects or time-and-materials billing for more flexible engagements.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-xl border border-border hover:border-primary/30 transition-all">
              <h3 className="text-lg font-bold text-white mb-2">Do you provide ongoing support?</h3>
              <p className="text-muted-foreground">
                Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally after launch. Our support includes updates, security monitoring, and performance optimization.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-xl border border-border hover:border-primary/30 transition-all">
              <h3 className="text-lg font-bold text-white mb-2">How do you handle project communication?</h3>
              <p className="text-muted-foreground">
                We maintain transparent communication through regular meetings, progress reports, and dedicated project management tools. Each client is assigned a project manager as their main point of contact.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-xl border border-border hover:border-primary/30 transition-all">
              <h3 className="text-lg font-bold text-white mb-2">Can you work with clients internationally?</h3>
              <p className="text-muted-foreground">
                Absolutely! We have experience working with clients globally and have established processes to accommodate different time zones and communication preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
