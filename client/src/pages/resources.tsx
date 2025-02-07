import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, BookOpen, FileText, Shield, Brain, LineChart, Users, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "Understanding Insurance Fraud",
    icon: AlertTriangle,
    content: "Learn about different types of insurance fraud and their impact on the industry. Our comprehensive guide covers common fraud schemes and their indicators.",
    image: "https://images.unsplash.com/photo-1576765608622-067973a79f53",
    topics: ["Identity Theft", "Claim Inflation", "Policy Stacking"]
  },
  {
    title: "AI Detection Methods",
    icon: Brain,
    content: "Explore how artificial intelligence and machine learning are revolutionizing fraud detection in the insurance industry.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    topics: ["Pattern Recognition", "Anomaly Detection", "Predictive Analytics"]
  },
  {
    title: "Prevention Guidelines",
    icon: Shield,
    content: "Best practices and guidelines for preventing insurance fraud in your organization. Implement these strategies to protect your business.",
    image: "https://images.unsplash.com/photo-1581578731565-fcdb660a4639",
    topics: ["Risk Assessment", "Document Verification", "Staff Training"]
  },
  {
    title: "Data Analytics",
    icon: LineChart,
    content: "Understanding the role of data analytics in identifying fraudulent patterns and preventing insurance fraud.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    topics: ["Statistical Analysis", "Trend Monitoring", "Risk Scoring"]
  },
  {
    title: "Industry Collaboration",
    icon: Users,
    content: "Learn about collaborative efforts in the insurance industry to combat fraud through shared databases and best practices.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca",
    topics: ["Information Sharing", "Joint Investigations", "Industry Standards"]
  },
  {
    title: "Compliance & Security",
    icon: Lock,
    content: "Stay updated on regulatory requirements and security measures for fraud prevention in the insurance sector.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    topics: ["Regulatory Updates", "Data Protection", "Compliance Checklist"]
  }
];

export default function Resources() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Educational Resources</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive guides and tools to understand and prevent insurance fraud
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
            <div
              className="h-48 bg-cover bg-center group-hover:opacity-90 transition-opacity duration-300"
              style={{ backgroundImage: `url(${resource.image})` }}
            />
            <CardHeader>
              <div className="flex items-center gap-2">
                <resource.icon className="h-5 w-5 text-primary" />
                <CardTitle>{resource.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{resource.content}</p>
              <div className="space-y-2">
                {resource.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {topic}
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}