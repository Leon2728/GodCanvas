
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogPost1 from "./pages/BlogPost1";
import BlogSection from "./components/BlogSection";
import VideoBackground from "./components/VideoBackground";

const queryClient = new QueryClient();

const App = () => {
  // Force dark mode always
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="relative min-h-screen overflow-hidden dark">
            {/* Video Background */}
            <VideoBackground />
            
            <Routes>
              <Route path="/" element={
                <div>
                  <Index />
                  {/* Blog Section */}
                  <BlogSection isDark={true} />
                </div>
              } />
              
              {/* Single blog post route */}
              <Route path="/blog/despertar-conciencia-global" element={
                <BlogPost1 />
              } />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
