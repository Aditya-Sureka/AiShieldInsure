import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home-page";
import AuthPage from "@/pages/auth-page";
import Dashboard from "@/pages/dashboard";
import SubmitClaim from "@/pages/submit-claim";
import Resources from "@/pages/resources";
import SuccessStories from "@/pages/success-stories";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "./lib/protected-route";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Contact from "@/pages/static/contact";
import FAQ from "@/pages/static/faq";
import PrivacyPolicy from "@/pages/static/privacy-policy";
import TermsOfService from "@/pages/static/terms-of-service";
import RiskAssessment from "@/pages/risk-assessment";
import FraudSimulator from "@/pages/fraud-simulator";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/auth" component={AuthPage} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute path="/submit-claim" component={SubmitClaim} />
          <Route path="/resources" component={Resources} />
          <Route path="/success-stories" component={SuccessStories} />
          <Route path="/static/contact" component={Contact} />
          <Route path="/static/faq" component={FAQ} />
          <Route path="/static/privacy-policy" component={PrivacyPolicy} />
          <Route path="/static/terms-of-service" component={TermsOfService} />
          <Route path="/risk-assessment" component={RiskAssessment} />
          <Route path="/fraud-simulator" component={FraudSimulator} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;