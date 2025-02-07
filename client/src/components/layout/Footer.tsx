import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t mt-auto bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-primary">FraudGuard AI</h3>
            <p className="text-sm text-muted-foreground">
              Protecting insurance integrity through advanced AI technology
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/resources">
                  <a className="text-sm hover:text-primary transition-colors">Resources</a>
                </Link>
              </li>
              <li>
                <Link href="/success-stories">
                  <a className="text-sm hover:text-primary transition-colors">Success Stories</a>
                </Link>
              </li>
              <li>
                <Link href="/risk-assessment">
                  <a className="text-sm hover:text-primary transition-colors">Risk Assessment</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/static/contact">
                  <a className="text-sm hover:text-primary transition-colors">Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/static/faq">
                  <a className="text-sm hover:text-primary transition-colors">FAQ</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/static/privacy-policy">
                  <a className="text-sm hover:text-primary transition-colors">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/static/terms-of-service">
                  <a className="text-sm hover:text-primary transition-colors">Terms of Service</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="mb-2">
            © {new Date().getFullYear()} FraudGuard AI. All rights reserved.
          </p>
          <p className="text-xs">
            Powered by advanced artificial intelligence and machine learning technology
          </p>
        </div>
      </div>
    </footer>
  );
}