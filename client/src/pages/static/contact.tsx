import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Input type="email" placeholder="Your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <Textarea placeholder="How can we help?" rows={4} />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      support@fraudguard.ai<br />
                      info@fraudguard.ai
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      +1 (800) 123-4567<br />
                      Mon-Fri 9:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-sm text-muted-foreground">
                      123 Fraud Detection Street<br />
                      Tech Hub, Innovation City<br />
                      12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
