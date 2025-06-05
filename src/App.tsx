
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Index from "./pages/Index";
import SteepAnalysis from "./pages/SteepAnalysis";
import ConversationalSearch from "./pages/ConversationalSearch";
import PlatformFeatures from "./pages/PlatformFeatures";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <MainLayout>
                <Index />
              </MainLayout>
            } 
          />
          <Route 
            path="/steep" 
            element={
              <MainLayout>
                <SteepAnalysis />
              </MainLayout>
            } 
          />
          <Route 
            path="/search" 
            element={
              <MainLayout>
                <ConversationalSearch />
              </MainLayout>
            } 
          />
          <Route 
            path="/features" 
            element={
              <MainLayout>
                <PlatformFeatures />
              </MainLayout>
            } 
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
