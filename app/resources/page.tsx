'use client';

import { useState } from 'react';

export default function Resources() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Resources & FAQs</h1>
          <p className="text-xl text-blue-100">
            Find answers to common questions and access helpful resources
          </p>
        </div>
      </section>

      {/* Quick Resources */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="#"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Forms & Applications</h3>
              <p className="text-sm text-gray-600">Downloadable forms and applications</p>
            </a>

            <a
              href="#"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Important Dates</h3>
              <p className="text-sm text-gray-600">Deadlines and county calendar</p>
            </a>

            <a
              href="#"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Guides & Tutorials</h3>
              <p className="text-sm text-gray-600">Step-by-step instructions</p>
            </a>

            <a
              href="#"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Code & Ordinances</h3>
              <p className="text-sm text-gray-600">County codes and regulations</p>
            </a>
          </div>
        </div>
      </section>

      {/* Downloadable Forms */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Forms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Property Tax Forms
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center justify-between py-2 border-b">
                    <span>Property Tax Payment Form</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Download →
                    </button>
                  </li>
                  <li className="flex items-center justify-between py-2 border-b">
                    <span>Senior Exemption Application</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Download →
                    </button>
                  </li>
                  <li className="flex items-center justify-between py-2 border-b">
                    <span>Assessment Appeal Form</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Download →
                    </button>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span>Property Transfer Form</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Download →
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-green-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Building & Permits
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center justify-between py-2 border-b">
                    <span>Building Permit Application</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Download →
                    </button>
                  </li>
                  <li className="flex items-center justify-between py-2 border-b">
                    <span>Electrical Permit Form</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Download →
                    </button>
                  </li>
                  <li className="flex items-center justify-between py-2 border-b">
                    <span>Plumbing Permit Form</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Download →
                    </button>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span>Fence Permit Application</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Download →
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-purple-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Business Services
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center justify-between py-2 border-b">
                    <span>Business License Application</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Download →
                    </button>
                  </li>
                  <li className="flex items-center justify-between py-2 border-b">
                    <span>Home Occupation Permit</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Download →
                    </button>
                  </li>
                  <li className="flex items-center justify-between py-2 border-b">
                    <span>Special Event Application</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Download →
                    </button>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span>Sign Permit Application</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Download →
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-orange-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Vital Records
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center justify-between py-2 border-b">
                    <span>Birth Certificate Request</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Download →
                    </button>
                  </li>
                  <li className="flex items-center justify-between py-2 border-b">
                    <span>Death Certificate Request</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Download →
                    </button>
                  </li>
                  <li className="flex items-center justify-between py-2 border-b">
                    <span>Marriage License Application</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Download →
                    </button>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span>Marriage Certificate Request</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Download →
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Important Dates & Deadlines</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Event/Deadline
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Department
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      May 1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Assessment Notices Mailed
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Assessor
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      May 31
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      First Half Property Tax Due
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Treasurer
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      June 30
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Assessment Appeal Deadline
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Assessor
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      November 30
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Second Half Property Tax Due
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Treasurer
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      December 31
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Business License Renewal Deadline
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Clerk
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {/* General Questions */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-900">
                  What are the county office hours?
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openFaq === 0 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFaq === 0 && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-600">
                    Most county offices are open Monday through Friday, 8:00 AM to 5:00 PM. Some departments may have different hours. Please check the specific department page or call ahead to confirm hours.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-900">
                  How do I pay my property taxes online?
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openFaq === 1 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFaq === 1 && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-600">
                    You can pay property taxes online through our Property & Assessments page. Search for your property using your address or parcel number, then select the payment option. We accept credit cards and e-checks. A convenience fee may apply for credit card transactions.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-900">
                  How do I obtain a copy of my birth certificate?
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openFaq === 2 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFaq === 2 && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-600">
                    Birth certificates can be requested through the Clerk & Recorder&apos;s office. You&apos;ll need to complete a request form and provide valid identification. The fee is $20 for a certified copy. Requests can be made in person, by mail, or online.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-900">
                  Do I need a permit to build a fence?
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openFaq === 3 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFaq === 3 && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-600">
                    Yes, most fences require a permit. Height restrictions and setback requirements vary by zone. Contact the Planning & Zoning department at (555) 123-4503 to determine specific requirements for your property.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-900">
                  How do I register to vote?
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openFaq === 4 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFaq === 4 && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-600">
                    You can register to vote online, by mail, or in person at the Clerk & Recorder&apos;s office. You must be a U.S. citizen, at least 18 years old on or before election day, and a resident of Demo County for at least 30 days prior to the election.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFaq(5)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-900">
                  Where can I find county job openings?
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openFaq === 5 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFaq === 5 && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-600">
                    Current job openings are posted on our website under the Human Resources section. You can also visit the county administration office to view posted positions. Applications must be submitted online through our job portal.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-blue-100 mb-6">
              Our staff is here to help you find the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="tel:555-123-4567"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors border-2 border-white"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

