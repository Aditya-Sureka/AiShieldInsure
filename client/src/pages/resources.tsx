import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, BookOpen, FileText, Shield } from "lucide-react";

const resources = [
  {
    title: "Understanding Insurance Fraud",
    icon: AlertTriangle,
    content: "Learn about different types of insurance fraud and their impact on the industry.",
    image: "https://images.unsplash.com/photo-1576765608622-067973a79f53"
  },
  {
    title: "Prevention Guidelines",
    icon: Shield,
    content: "Best practices and guidelines for preventing insurance fraud in your organization.",
    image: "https://images.unsplash.com/photo-1581578731565-fcdb660a4639"
  },
  {
    title: "Documentation Guide",
    icon: FileText,
    content: "Proper documentation practices to help prevent and detect fraudulent claims.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952"
  },
  {
    title: "Educational Materials",
    icon: BookOpen,
    content: "Access our comprehensive library of educational resources on fraud detection.",
    image: "https://images.unsplash.com/photo-1576765608866-5b51046452be"
  }
];

export default function Resources() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Educational Resources</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map((resource, index) => (
          <Card key={index} className="overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${resource.image})` }}
            />
            <CardHeader>
              <div className="flex items-center gap-2">
                <resource.icon className="h-5 w-5 text-primary" />
                <CardTitle>{resource.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{resource.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
