import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service - Strauss Web Solutions",
  description: "Terms of Service for Strauss Web Solutions. Read the terms and conditions for using our website design and hosting services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        
        <div className="prose prose-neutral max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the services provided by Strauss Web Solutions (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Strauss Web Solutions provides website design, development, and hosting services. Our services include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Custom website design and development</li>
              <li>Website hosting and maintenance</li>
              <li>Domain registration assistance</li>
              <li>Ongoing support and updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Pricing and Payment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All prices are quoted in South African Rand (ZAR) unless otherwise specified. Payment terms are as follows:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>A deposit of 50% is required before work commences</li>
              <li>The remaining balance is due upon completion and before website launch</li>
              <li>Monthly hosting fees are billed in advance</li>
              <li>Failure to pay may result in suspension of services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Client Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide accurate and complete information for your website</li>
              <li>Provide timely feedback during the design and development process</li>
              <li>Ensure all content you provide does not infringe on third-party rights</li>
              <li>Pay all fees according to the agreed payment schedule</li>
              <li>Keep your account credentials secure</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Upon full payment, you will own the rights to your website design and content. However:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>We retain the right to display your website in our portfolio</li>
              <li>Third-party components (fonts, icons, images) remain subject to their original licenses</li>
              <li>We retain ownership of any proprietary code, frameworks, or tools used in development</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Hosting Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our hosting services include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Secure hosting on reliable servers</li>
              <li>Regular backups of your website</li>
              <li>SSL certificate for secure browsing</li>
              <li>Technical support during business hours</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We strive for 99.9% uptime but do not guarantee uninterrupted service. We are not liable for any downtime due to circumstances beyond our control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Revisions and Changes</h2>
            <p className="text-muted-foreground leading-relaxed">
              Each package includes a specified number of revision rounds. Additional revisions or changes after project completion may incur additional charges at our standard hourly rate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, Strauss Web Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for the services in question.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Termination</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Either party may terminate the service agreement with 30 days written notice. Upon termination:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>All outstanding fees become immediately due</li>
              <li>Hosting services will be discontinued at the end of the paid period</li>
              <li>We will provide you with a copy of your website files upon request</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree not to use our services to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Host illegal or harmful content</li>
              <li>Infringe on intellectual property rights</li>
              <li>Distribute malware or engage in hacking activities</li>
              <li>Send spam or unsolicited communications</li>
              <li>Engage in any activity that violates South African law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the South African courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. We will notify clients of any material changes. Your continued use of our services after such modifications constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-foreground font-medium">Strauss Web Solutions</p>
              <p className="text-muted-foreground">Email: info@strausswebsolutions.co.za</p>
              <p className="text-muted-foreground">South Africa</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
