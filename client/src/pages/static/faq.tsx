import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
  {
    question: "What is FraudGuard AI?",
    answer: "FraudGuard AI is an advanced insurance fraud detection platform that uses artificial intelligence to identify and prevent fraudulent insurance claims. Our system analyzes patterns, behaviors, and data points to protect insurance companies and honest policyholders.",
  },
  {
    question: "How does the fraud detection system work?",
    answer: "Our system uses machine learning algorithms to analyze multiple data points in real-time. It looks for patterns and anomalies in claim submissions, compares them against known fraud indicators, and provides a risk assessment score to help identify potentially fraudulent claims.",
  },
  {
    question: "What types of fraud can the system detect?",
    answer: "The system can detect various types of insurance fraud, including: false claims, inflated claims, identity theft, policy stacking, staged accidents, and organized fraud rings. Our AI continuously learns and adapts to new fraud patterns.",
  },
  {
    question: "How accurate is the fraud detection?",
    answer: "Our system maintains a high accuracy rate through continuous learning and refinement. However, all potential fraud flags are reviewed by human experts before any action is taken to ensure fairness and accuracy.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security very seriously. All data is encrypted both in transit and at rest, and we comply with industry-standard security protocols and regulations including GDPR and HIPAA where applicable.",
  },
  {
    question: "What should I do if my claim is flagged?",
    answer: "If your claim is flagged, don't worry - it doesn't automatically mean fraud is suspected. Our team will contact you to verify information and may request additional documentation to support your claim.",
  },
  {
    question: "How can I report suspected fraud?",
    answer: "You can report suspected fraud through our secure online portal or by contacting our fraud hotline. All reports are kept confidential and thoroughly investigated by our team.",
  },
];

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
