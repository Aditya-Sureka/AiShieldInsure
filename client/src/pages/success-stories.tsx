import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const successStories = [
  {
    title: "Major Ring Operation Uncovered",
    company: "Regional Insurance Co.",
    savings: "$2.5M",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    description:
      "Our AI system identified a sophisticated fraud ring operating across multiple states. The detection prevented over $2.5M in fraudulent claims.",
    tags: ["Network Analysis", "Pattern Detection"],
  },
  {
    title: "Automated Screening Success",
    company: "National Health Insurance",
    savings: "$800K",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    description:
      "Implementation of automated screening processes led to an 85% increase in fraud detection rate and prevented $800K in fraudulent claims.",
    tags: ["AI Screening", "Process Automation"],
  },
  {
    title: "Real-time Fraud Prevention",
    company: "Life Secure Insurance",
    savings: "$1.2M",
    image: "https://images.unsplash.com/photo-1535877341209-168e6484dc32",
    description:
      "Real-time monitoring system flagged suspicious claim patterns, leading to the prevention of $1.2M in fraudulent payouts.",
    tags: ["Real-time Analysis", "Early Detection"],
  },
  {
    title: "Data-Driven Investigation",
    company: "Metro Insurance Group",
    savings: "$3.1M",
    image: "https://images.unsplash.com/photo-1484981138541-3d074aa97716",
    description:
      "Advanced data analytics helped identify a complex fraud scheme, saving over $3.1M in potential losses.",
    tags: ["Data Analytics", "Investigation"],
  },
];

export default function SuccessStories() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
        <p className="text-lg text-muted-foreground">
          Discover how our AI-powered fraud detection system has helped insurance
          companies protect their business and customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {successStories.map((story, index) => (
          <Card key={index} className="overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${story.image})` }}
            />
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-xl">{story.title}</CardTitle>
                <Badge variant="secondary" className="text-primary">
                  Saved {story.savings}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{story.company}</p>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{story.description}</p>
              <div className="flex flex-wrap gap-2">
                {story.tags.map((tag, tagIndex) => (
                  <div
                    key={tagIndex}
                    className="flex items-center text-sm text-primary"
                  >
                    <Check className="h-4 w-4 mr-1" />
                    {tag}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
