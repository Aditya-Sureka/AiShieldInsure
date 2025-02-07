import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, LineChart, Award, BookOpen } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${
              'https://images.unsplash.com/photo-1545854027-ba3d36e136c8'
            })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Protecting Insurance Integrity with AI
            </h1>
            <p className="text-xl mb-8">
              FraudGuard AI combines cutting-edge artificial intelligence with industry expertise to detect and prevent insurance fraud.
            </p>
            <Link href="/auth">
              <Button size="lg" className="mr-4">Get Started</Button>
            </Link>
            <Link href="/resources">
              <Button variant="outline" size="lg">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose FraudGuard AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Advanced Protection</h3>
                <p className="text-muted-foreground">
                  State-of-the-art AI algorithms to detect fraudulent patterns
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <LineChart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real-time Analysis</h3>
                <p className="text-muted-foreground">
                  Instant fraud risk assessment and monitoring
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Industry Leading</h3>
                <p className="text-muted-foreground">
                  Trusted by major insurance providers worldwide
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
                <p className="text-muted-foreground">
                  Comprehensive guides on fraud prevention
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Enhance Your Fraud Detection?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of insurance providers who trust FraudGuard AI to protect their business
          </p>
          <Link href="/auth">
            <Button size="lg">Get Started Today</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
