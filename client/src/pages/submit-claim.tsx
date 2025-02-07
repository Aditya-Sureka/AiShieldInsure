import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";

const claimSchema = z.object({
  policyNumber: z.string().min(1, "Policy number is required"),
  claimAmount: z.string().min(1, "Claim amount is required"),
  incidentDate: z.string().min(1, "Incident date is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

type ClaimForm = z.infer<typeof claimSchema>;

// Mock claim statuses for demonstration
const mockClaimStatus = {
  currentStep: 2,
  steps: [
    { name: "Submitted", completed: true },
    { name: "Initial Review", completed: true },
    { name: "Risk Assessment", completed: false },
    { name: "Documentation Review", completed: false },
    { name: "Final Decision", completed: false },
  ],
  riskIndicators: [
    { name: "Policy Age", status: "low" },
    { name: "Claim Amount", status: "medium" },
    { name: "Documentation", status: "high" },
  ],
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "low":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case "medium":
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    case "high":
      return <Shield className="h-5 w-5 text-red-500" />;
    default:
      return null;
  }
};

export default function SubmitClaim() {
  const { toast } = useToast();

  const form = useForm<ClaimForm>({
    resolver: zodResolver(claimSchema),
    defaultValues: {
      policyNumber: "",
      claimAmount: "",
      incidentDate: "",
      description: "",
    },
  });

  function onSubmit(data: ClaimForm) {
    // Mock submission
    console.log(data);
    toast({
      title: "Claim Submitted",
      description: "Your claim has been submitted for review.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Claim Status Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Claim Processing Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <div className="relative">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
                  <Progress 
                    value={(mockClaimStatus.currentStep / (mockClaimStatus.steps.length - 1)) * 100} 
                    className="transition-all duration-500"
                  />
                </div>
                <div className="flex justify-between">
                  {mockClaimStatus.steps.map((step, index) => (
                    <div
                      key={index}
                      className={`text-center ${
                        index <= mockClaimStatus.currentStep
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      <div className="text-sm font-medium mb-1">{step.name}</div>
                      <div
                        className={`w-4 h-4 mx-auto rounded-full ${
                          index <= mockClaimStatus.currentStep
                            ? "bg-primary"
                            : "bg-gray-200"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Risk Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {mockClaimStatus.riskIndicators.map((indicator, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <span className="font-medium">{indicator.name}</span>
                  {getStatusIcon(indicator.status)}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Claim Submission Form */}
        <Card>
          <CardHeader>
            <CardTitle>Submit Insurance Claim</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="policyNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Policy Number</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="claimAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Claim Amount ($)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="incidentDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Incident Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description of Incident</FormLabel>
                      <FormControl>
                        <Textarea rows={4} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Submit Claim
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}