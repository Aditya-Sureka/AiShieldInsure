import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="text-muted-foreground">Last updated: February 07, 2025</p>
            
            <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Insurance claim details and related documentation</li>
              <li>Account credentials</li>
              <li>Communication records between you and our service</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
            <p>
              We use the collected information for:
            </p>
            <ul>
              <li>Providing and maintaining our fraud detection service</li>
              <li>Analyzing and preventing fraudulent claims</li>
              <li>Improving our AI and machine learning models</li>
              <li>Communicating with you about your account and claims</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">3. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Strict access controls and authentication</li>
              <li>Regular backup procedures</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">4. Information Sharing</h2>
            <p>
              We may share your information with:
            </p>
            <ul>
              <li>Insurance providers (with your consent)</li>
              <li>Law enforcement agencies (when required by law)</li>
              <li>Service providers who assist in our operations</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">5. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of certain data sharing</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              privacy@fraudguard.ai
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
