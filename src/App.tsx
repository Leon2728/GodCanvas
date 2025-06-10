
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogSection from "./components/BlogSection";
import VideoBackground from "./components/VideoBackground";

const queryClient = new QueryClient();

const App = () => {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme based on system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

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
            
            <Routes>
              <Route path="/" element={
                <div>
                  <Index isDark={isDark} onThemeToggle={toggleTheme} />
                  {/* Blog Section */}
                  <BlogSection isDark={isDark} />
                </div>
              } />
              
              {/* Blog post routes */}
              <Route path="/blog/despertar-conciencia-global" element={
                <BlogPost1 isDark={isDark} onThemeToggle={toggleTheme} />
              } />
              <Route path="/blog/ia-gran-diseno" element={
                <BlogPost2 isDark={isDark} onThemeToggle={toggleTheme} />
              } />
              <Route path="/blog/geopolitica-celestial" element={
                <BlogPost3 isDark={isDark} onThemeToggle={toggleTheme} />
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
