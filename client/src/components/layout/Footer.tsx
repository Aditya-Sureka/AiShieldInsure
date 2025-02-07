import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">FraudGuard AI</h3>
            <p className="text-sm text-muted-foreground">
              Protecting insurance integrity through advanced AI technology
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/resources">
                  <a className="text-sm hover:text-primary">Resources</a>
                </Link>
              </li>
              <li>
                <Link href="/success-stories">
                  <a className="text-sm hover:text-primary">Success Stories</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-primary">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} FraudGuard AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
