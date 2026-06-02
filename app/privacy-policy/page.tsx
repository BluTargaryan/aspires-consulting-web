import type { Metadata } from 'next'
import ScrollToTop from '@/app/components/atoms/ScrollToTop'

export const metadata: Metadata = {
  title: 'Privacy Policy | Aspires Training and Consulting',
}

export default function PrivacyPolicy() {
  return (
    <main className="flex-1 px-4 py-20 max-w-2xl mx-auto flex flex-col gap-8">
      <ScrollToTop />
      <h1>Privacy Policy</h1>
      <p className="text-sm text-text/60">Last updated: June 2026</p>

      <section className="flex flex-col gap-3">
        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as your name, email address, and any other details you submit when contacting a professional or using our platform.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to facilitate connections between clients and professionals, process bookings, send service-related communications, and improve the Aspires platform.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>3. Sharing of Information</h2>
        <p>We do not sell your personal information. We may share your details with the professional you have chosen to engage, solely for the purpose of completing your consultation.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>4. Data Retention</h2>
        <p>We retain your information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time by contacting us.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>5. Cookies</h2>
        <p>Our platform may use cookies to improve your browsing experience. You can disable cookies in your browser settings, though some features may not function as intended.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>6. Your Rights</h2>
        <p>You have the right to access, correct, or delete the personal information we hold about you. To exercise these rights, please contact us at email@email.com.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>7. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Continued use of the platform constitutes acceptance of the revised policy.</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2>8. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:email@email.com" className="text-primary hover:text-hover transition-colors">email@email.com</a>.</p>
      </section>
    </main>
  )
}
