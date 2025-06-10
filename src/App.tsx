
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import BlogSection from "./components/BlogSection";
import VideoBackground from "./components/VideoBackground";

const queryClient = new QueryClient();

const App = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className={`relative min-h-screen overflow-hidden ${isDark ? 'dark' : ''}`}>
            {/* Video Background */}
            <VideoBackground />
            
            {/* Header */}
            <Header isDark={isDark} onThemeToggle={toggleTheme} />
            
            <Routes>
              <Route path="/" element={
                <div>
                  <Index />
                  {/* Blog Section */}
                  <BlogSection isDark={isDark} />
                </div>
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
