import React from 'react';
import { ArrowLeft, Shield, Mail, Phone, MapPin, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  const tableOfContents = [
    { id: 'information-collection', title: 'Information We Collect' },
    { id: 'information-use', title: 'How We Use Your Information' },
    { id: 'information-sharing', title: 'Information Sharing and Disclosure' },
    { id: 'user-rights', title: 'Your Rights and Choices' },
    { id: 'data-security', title: 'Data Security and Retention' },
    { id: 'cookies', title: 'Cookies and Tracking Technologies' },
    { id: 'children-privacy', title: 'Children\'s Privacy' },
    { id: 'international-transfers', title: 'International Data Transfers' },
    { id: 'policy-changes', title: 'Changes to This Privacy Policy' },
    { id: 'contact', title: 'Contact Us' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => window.history.back()}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-900 font-bold text-xl">GoSharpSharp</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="w-16 h-16 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: January 15, 2024
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-2">
            {tableOfContents.map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors text-emerald-600 hover:text-emerald-700"
              >
                <span className="text-sm font-medium">{index + 1}.</span>
                <span className="text-sm">{item.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
          {/* Section 1 */}
          <section id="information-collection">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
              <p>When you use GoSharpSharp, we may collect the following personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Delivery addresses and location data</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Profile photo and preferences</li>
                <li>Order history and delivery preferences</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device information (model, operating system, unique identifiers)</li>
                <li>Usage data (app interactions, features used, time spent)</li>
                <li>Location data (with your permission) for delivery services</li>
                <li>Log files and crash reports for app improvement</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section id="information-use">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your parcel delivery and food orders</li>
                <li>Provide real-time tracking and delivery updates</li>
                <li>Process payments and prevent fraud</li>
                <li>Send important notifications about your orders</li>
                <li>Improve our services and develop new features</li>
                <li>Provide customer support and resolve issues</li>
                <li>Send promotional offers (with your consent)</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="information-sharing">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
            <div className="space-y-4 text-gray-700">
              <p>We may share your information with:</p>
              
              <h3 className="text-lg font-semibold text-gray-800">Service Providers</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Delivery partners and drivers for order fulfillment</li>
                <li>Restaurant partners for food order processing</li>
                <li>Payment processors for secure transactions</li>
                <li>Cloud storage and hosting providers</li>
                <li>Analytics and marketing service providers</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Legal Requirements</h3>
              <p>We may disclose information when required by law, court order, or to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Protect our rights and property</li>
                <li>Ensure user safety and prevent fraud</li>
                <li>Comply with legal processes and government requests</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section id="user-rights">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Your Rights and Choices</h2>
            <div className="space-y-4 text-gray-700">
              <p>You have the following rights regarding your personal information:</p>
              
              <h3 className="text-lg font-semibold text-gray-800">GDPR Rights (EU Users)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete information</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Restriction:</strong> Limit how we process your information</li>
                <li><strong>Objection:</strong> Object to processing for marketing purposes</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">CCPA Rights (California Users)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Know what personal information we collect and how it's used</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of the sale of personal information (we don't sell data)</li>
                <li>Non-discrimination for exercising your privacy rights</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">How to Exercise Your Rights</h3>
              <p>To exercise any of these rights, contact us at <a href="mailto:privacy@gosharpsharp.com" className="text-orange-600 hover:underline">privacy@gosharpsharp.com</a> or through the app settings.</p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="data-security">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security and Retention</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800">Security Measures</h3>
              <p>We implement industry-standard security measures including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication systems</li>
                <li>Secure payment processing through PCI-compliant providers</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Data Retention</h3>
              <p>We retain your information for as long as necessary to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide our services and maintain your account</li>
                <li>Comply with legal obligations and resolve disputes</li>
                <li>Improve our services and prevent fraud</li>
              </ul>
              <p className="mt-4">Account data is typically deleted within 30 days of account closure, unless retention is required by law.</p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="cookies">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
            <div className="space-y-4 text-gray-700">
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze app usage and improve performance</li>
                <li>Provide personalized content and recommendations</li>
                <li>Measure the effectiveness of our marketing campaigns</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Types of Cookies</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential:</strong> Required for basic app functionality</li>
                <li><strong>Performance:</strong> Help us understand how you use the app</li>
                <li><strong>Functional:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing:</strong> Used to deliver relevant advertisements</li>
              </ul>

              <p className="mt-4">You can manage cookie preferences through your device settings or contact us for assistance.</p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="children-privacy">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
            <div className="space-y-4 text-gray-700">
              <p>GoSharpSharp is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.</p>
              <p>If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.</p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="international-transfers">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
            <div className="space-y-4 text-gray-700">
              <p>Your information may be transferred to and processed in countries other than your own. We ensure adequate protection through:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard contractual clauses approved by relevant authorities</li>
                <li>Adequacy decisions by the European Commission</li>
                <li>Other appropriate safeguards as required by applicable law</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section id="policy-changes">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>We may update this Privacy Policy from time to time. When we make changes, we will:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Update the "Last updated" date at the top of this policy</li>
                <li>Notify you through the app or by email for significant changes</li>
                <li>Provide a summary of key changes when applicable</li>
              </ul>
              <p>Your continued use of GoSharpSharp after changes become effective constitutes acceptance of the updated policy.</p>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <div className="space-y-4 text-gray-700">
              <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:privacy@gosharpsharp.com" className="text-emerald-600 hover:underline">
                        privacy@gosharpsharp.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p>+234 800 SHARP (74277)</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-600 mt-1" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p>GoSharpSharp Technologies Ltd.<br />
                    123 Innovation Drive<br />
                    Victoria Island, Lagos<br />
                    Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                <p className="text-sm text-emerald-800">
                  <strong>Data Protection Officer:</strong> For EU-related privacy matters, contact our DPO at 
                  <a href="mailto:dpo@gosharpsharp.com" className="text-emerald-600 hover:underline ml-1">
                    dpo@gosharpsharp.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;