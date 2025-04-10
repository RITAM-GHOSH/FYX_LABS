import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import WebDevelopment from "@/pages/WebDevelopment";
import DigitalMarketing from "@/pages/DigitalMarketing";
import AboutUs from "@/pages/AboutUs";
import Portfolio from "@/pages/Portfolio";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import UiUxDesign from "@/pages/UiUxDesign";
import MobileApps from "@/pages/MobileApps";

function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services/web-development" component={WebDevelopment} />
        <Route path="/services/digital-marketing" component={DigitalMarketing} />
        <Route path="/services/ui-ux" component={UiUxDesign} />
        <Route path="/services/mobile-apps" component={MobileApps} />
        <Route path="/about" component={AboutUs} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
