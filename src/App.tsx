
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import CrimeMap from "./pages/CrimeMap";
import ReportCrime from "./pages/ReportCrime";
import SafetyAlerts from "./pages/SafetyAlerts";
import ResourceDeployments from "./pages/ResourceDeployments";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="map" element={<CrimeMap />} />
              <Route path="report" element={<ReportCrime />} />
              <Route path="alerts" element={<SafetyAlerts />} />
              <Route path="deployments" element={<ResourceDeployments />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
