import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./contexts/LanguageContext";
import { TranslationProvider } from "./contexts/TranslationContext";
import { AnalyticsProvider } from "./contexts/AnalyticsContext";
import { PageViewTracker } from "./components/PageViewTracker";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer"; 
import Index from "./pages/Index";
import DetailPage from "./pages/DetailPage";
import BlogPage from "./pages/BlogPage";
import ArticlePage from "./pages/ArticlePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageProvider>
            <TranslationProvider>
              <AnalyticsProvider>
                <div className="min-h-screen flex flex-col">
                  <Navbar />
                  <PageViewTracker />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Navigate to="/en" replace />} />
                      <Route path="/:lang" element={<Index />} />
                      <Route path="/:lang/detail/:slug" element={<DetailPage />} />
                      <Route path="/:lang/blog" element={<BlogPage />} />
                      <Route path="/:lang/blog/:id" element={<ArticlePage />} />
                      <Route path="/:lang/about" element={<AboutPage />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </AnalyticsProvider>
            </TranslationProvider>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
