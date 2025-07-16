import React from 'react';
import { ArrowLeft, FileText, Mail, Phone, MapPin, Scale, List } from 'lucide-react';

const TermsAndConditions = () => {
  const tableOfContents = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'services', title: 'Description of Services' },
    { id: 'accounts', title: 'User Accounts and Registration' },
    { id: 'acceptable-use', title: 'Acceptable Use Policy' },
    { id: 'orders-payments', title: 'Orders and Payments' },
    { id: 'intellectual-property', title: 'Intellectual Property Rights' },
    { id: 'disclaimers', title: 'Disclaimers and Warranties' },
    { id: 'liability', title: 'Limitation of Liability' },
    { id: 'termination', title: 'Account Termination' },
    { id: 'disputes', title: 'Dispute Resolution' },
    { id: 'governing-law', title: 'Governing Law and Jurisdiction' },
    { id: 'changes', title: 'Changes to Terms' },
    { id: 'general', title: 'General Provisions' },
    { id: 'contact', title: 'Contact Information' }
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
                <List className="w-4 h-4 text-white" />
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
            <FileText className="w-16 h-16 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-600">
            Please read these terms carefully before using GoSharpSharp services.
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
          <section id="acceptance">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>By accessing or using the GoSharpSharp mobile application and services, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our services.</p>
              <p>These Terms constitute a legally binding agreement between you and GoSharpSharp Technologies Ltd. ("Company," "we," "us," or "our").</p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="services">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
            <div className="space-y-4 text-gray-700">
              <p>GoSharpSharp provides a mobile platform that offers:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Parcel Delivery Services:</strong> On-demand pickup and delivery of packages and documents</li>
                <li><strong>Food Ordering Services:</strong> Online ordering and delivery from partner restaurants</li>
                <li><strong>Real-time Tracking:</strong> Live updates on order status and delivery progress</li>
                <li><strong>Payment Processing:</strong> Secure payment options for all transactions</li>
              </ul>
              <p>We act as an intermediary platform connecting users with delivery partners and restaurant vendors.</p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="accounts">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts and Registration</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800">Account Requirements</h3>
              <p>To use our services, you must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be at least 18 years old or have parental consent</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly update any changes to your information</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Account Responsibilities</h3>
              <p>You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All activities that occur under your account</li>
                <li>Maintaining the confidentiality of your login credentials</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring your contact information is current and accurate</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section id="acceptable-use">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800">Permitted Uses</h3>
              <p>You may use GoSharpSharp services for lawful purposes only, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sending legal documents, packages, and personal items</li>
                <li>Ordering food from partner restaurants</li>
                <li>Tracking your orders and deliveries</li>
                <li>Communicating with delivery partners as necessary</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Prohibited Uses</h3>
              <p>You may NOT use our services to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Send illegal, dangerous, or prohibited items (drugs, weapons, hazardous materials)</li>
                <li>Engage in fraudulent or deceptive activities</li>
                <li>Harass, abuse, or threaten delivery partners or other users</li>
                <li>Violate any local, national, or international laws</li>
                <li>Interfere with or disrupt our services or servers</li>
                <li>Use automated systems to access our platform without permission</li>
                <li>Attempt to gain unauthorized access to other user accounts</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section id="orders-payments">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Orders and Payments</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800">Order Placement</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All orders are subject to acceptance by delivery partners and restaurants</li>
                <li>Prices are displayed in local currency and include applicable taxes</li>
                <li>Delivery fees and service charges are clearly shown before payment</li>
                <li>Orders cannot be modified once confirmed and payment is processed</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Payment Terms</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment is due at the time of order placement</li>
                <li>We accept major credit cards, debit cards, and mobile payments</li>
                <li>All payments are processed securely through third-party providers</li>
                <li>Refunds are processed according to our refund policy</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Cancellations and Refunds</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellations may be possible before order preparation begins</li>
                <li>Refunds are issued for cancelled orders within 5-7 business days</li>
                <li>No refunds for completed deliveries unless items are damaged or incorrect</li>
                <li>Dispute resolution is handled through our customer support team</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section id="intellectual-property">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800">Our Intellectual Property</h3>
              <p>GoSharpSharp and all related content, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Software, applications, and technology</li>
                <li>Trademarks, logos, and brand names</li>
                <li>Text, graphics, images, and design elements</li>
                <li>User interface and user experience designs</li>
              </ul>
              <p>Are owned by or licensed to GoSharpSharp Technologies Ltd. and are protected by intellectual property laws.</p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">User Content</h3>
              <p>By using our services, you grant us a non-exclusive, royalty-free license to use any content you provide (reviews, photos, feedback) for service improvement and marketing purposes.</p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Restrictions</h3>
              <p>You may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Copy, modify, or distribute our software or content</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Use our trademarks or branding without permission</li>
                <li>Create derivative works based on our platform</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section id="disclaimers">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimers and Warranties</h2>
            <div className="space-y-4 text-gray-700">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-yellow-800 font-semibold">IMPORTANT DISCLAIMER</p>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800">Service Availability</h3>
              <p>GoSharpSharp services are provided "as is" and "as available." We do not guarantee:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Uninterrupted or error-free service operation</li>
                <li>Specific delivery times or availability of delivery partners</li>
                <li>Quality, safety, or legality of items ordered through restaurants</li>
                <li>Accuracy of restaurant menus, prices, or availability</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Third-Party Services</h3>
              <p>We are not responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Actions or omissions of delivery partners or restaurant vendors</li>
                <li>Quality, condition, or safety of delivered items</li>
                <li>Delays caused by traffic, weather, or other external factors</li>
                <li>Loss or damage to items during delivery (subject to our insurance policy)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Warranty Disclaimer</h3>
              <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="liability">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700">
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                <p className="text-red-800 font-semibold">LIABILITY LIMITATIONS</p>
              </div>

              <h3 className="text-lg font-semibold text-gray-800">General Limitations</h3>
              <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, GOSHARPSHARP SHALL NOT BE LIABLE FOR:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                <li>LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES</li>
                <li>DAMAGES RESULTING FROM THIRD-PARTY ACTIONS OR OMISSIONS</li>
                <li>UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR DATA</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Maximum Liability</h3>
              <p>Our total liability for any claim shall not exceed the greater of:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The amount you paid for the specific service giving rise to the claim</li>
                <li>₦10,000 (Ten Thousand Naira) or equivalent in your local currency</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Exceptions</h3>
              <p>These limitations do not apply to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Death or personal injury caused by our negligence</li>
                <li>Fraud or fraudulent misrepresentation</li>
                <li>Violations of applicable consumer protection laws</li>
                <li>Other liabilities that cannot be excluded by law</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section id="termination">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Account Termination</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800">Termination by You</h3>
              <p>You may terminate your account at any time by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contacting our customer support team</li>
                <li>Using the account deletion feature in the app</li>
                <li>Sending a written request to our support email</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Termination by Us</h3>
              <p>We may suspend or terminate your account if you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate these Terms and Conditions</li>
                <li>Engage in fraudulent or illegal activities</li>
                <li>Abuse our services or delivery partners</li>
                <li>Fail to pay outstanding fees or charges</li>
                <li>Provide false or misleading information</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Effects of Termination</h3>
              <p>Upon termination:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your access to services will be immediately suspended</li>
                <li>Outstanding orders will be completed or cancelled</li>
                <li>Your personal data will be handled according to our Privacy Policy</li>
                <li>You remain liable for any outstanding fees or charges</li>
              </ul>
            </div>
          </section>

          {/* Section 10 */}
          <section id="disputes">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800">Initial Resolution</h3>
              <p>Before pursuing formal legal action, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact our customer support team to resolve the issue</li>
                <li>Provide detailed information about your complaint</li>
                <li>Allow us 30 days to investigate and respond</li>
                <li>Participate in good faith negotiations</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Mediation</h3>
              <p>If initial resolution fails, disputes may be resolved through:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Binding mediation through a mutually agreed mediator</li>
                <li>Alternative dispute resolution services</li>
                <li>Industry-specific arbitration panels</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Legal Action</h3>
              <p>Any legal proceedings must be filed within one (1) year of the dispute arising and shall be subject to the governing law specified below.</p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="governing-law">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law and Jurisdiction</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg">
                <Scale className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">Legal Framework</h3>
                  <p className="text-blue-800">These Terms are governed by the laws of the Federal Republic of Nigeria.</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800">Jurisdiction</h3>
              <p>Any legal disputes shall be resolved in the courts of Lagos State, Nigeria, and you consent to the personal jurisdiction of such courts.</p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">International Users</h3>
              <p>If you access our services from outside Nigeria:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are responsible for compliance with local laws</li>
                <li>Nigerian law still governs these Terms</li>
                <li>Currency conversions are handled at current exchange rates</li>
                <li>Additional terms may apply based on your location</li>
              </ul>
            </div>
          </section>

          {/* Section 12 */}
          <section id="changes">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800">Modification Rights</h3>
              <p>We reserve the right to modify these Terms at any time. When we make changes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We will update the "Last updated" date</li>
                <li>Significant changes will be communicated via app notification or email</li>
                <li>You will have 30 days to review changes before they take effect</li>
                <li>Continued use of services constitutes acceptance of new terms</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Notification Methods</h3>
              <p>We will notify you of changes through:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>In-app notifications and announcements</li>
                <li>Email to your registered address</li>
                <li>Prominent notices on our website</li>
                <li>Push notifications for significant changes</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Your Options</h3>
              <p>If you disagree with changes, you may:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Discontinue use of our services</li>
                <li>Close your account before changes take effect</li>
                <li>Contact us to discuss specific concerns</li>
              </ul>
            </div>
          </section>

          {/* Section 13 */}
          <section id="general">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. General Provisions</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800">Severability</h3>
              <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Entire Agreement</h3>
              <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and GoSharpSharp regarding our services.</p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Assignment</h3>
              <p>You may not assign or transfer your rights under these Terms without our written consent. We may assign our rights and obligations without restriction.</p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Waiver</h3>
              <p>Our failure to enforce any provision of these Terms does not constitute a waiver of that provision or any other provision.</p>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>For questions about these Terms and Conditions, please contact us:</p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:legal@gosharpsharp.com" className="text-emerald-600 hover:underline">
                        legal@gosharpsharp.com
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
                    Legal Department<br />
                    123 Innovation Drive<br />
                    Victoria Island, Lagos<br />
                    Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                <p className="text-sm text-emerald-800">
                  <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (WAT)<br />
                  <strong>Emergency Support:</strong> Available 24/7 through the app
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;