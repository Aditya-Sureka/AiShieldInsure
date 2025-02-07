import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="text-muted-foreground">Last updated: February 07, 2025</p>

            <h2 className="text-xl font-semibold mt-6">1. Acceptance of Terms</h2>
            <p>
              By accessing and using FraudGuard AI's services, you agree to be bound by these 
              Terms of Service and all applicable laws and regulations.
            </p>

            <h2 className="text-xl font-semibold mt-6">2. Description of Service</h2>
            <p>
              FraudGuard AI provides an AI-powered insurance fraud detection platform that helps
              identify and prevent fraudulent insurance claims. Our service includes:
            </p>
            <ul>
              <li>Real-time fraud detection analysis</li>
              <li>Risk assessment scoring</li>
              <li>Claim verification tools</li>
              <li>Reporting and analytics dashboard</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">3. User Responsibilities</h2>
            <p>
              Users of our service agree to:
            </p>
            <ul>
              <li>Provide accurate and truthful information</li>
              <li>Maintain the security of their account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Report any suspected fraudulent activity</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">4. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our service are owned by
              FraudGuard AI and are protected by international copyright, trademark,
              and other intellectual property laws.
            </p>

            <h2 className="text-xl font-semibold mt-6">5. Limitation of Liability</h2>
            <p>
              FraudGuard AI shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use or inability
              to use the service.
            </p>

            <h2 className="text-xl font-semibold mt-6">6. Modifications to Service</h2>
            <p>
              We reserve the right to modify or discontinue our service at any time
              without notice. We shall not be liable to you or any third party for
              any modification, suspension, or discontinuance of the service.
            </p>

            <h2 className="text-xl font-semibold mt-6">7. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the
              laws of the jurisdiction in which FraudGuard AI operates, without
              regard to its conflict of law provisions.
            </p>

            <h2 className="text-xl font-semibold mt-6">8. Contact Information</h2>
            <p>
              For any questions regarding these Terms of Service, please contact us at:
              legal@fraudguard.ai
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
