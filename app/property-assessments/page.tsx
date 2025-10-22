'use client';

import { useState } from 'react';

export default function PropertyAssessments() {
  const [searchType, setSearchType] = useState('address');

  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Property & Assessments</h1>
          <p className="text-xl text-blue-100">
            Search property records, view assessments, and pay taxes online
          </p>
        </div>
      </section>

      {/* Property Search */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Search Property Records
            </h2>

            {/* Search Type Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              <button
                onClick={() => setSearchType('address')}
                className={`px-6 py-3 font-medium ${
                  searchType === 'address'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                By Address
              </button>
              <button
                onClick={() => setSearchType('parcel')}
                className={`px-6 py-3 font-medium ${
                  searchType === 'parcel'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                By Parcel Number
              </button>
              <button
                onClick={() => setSearchType('owner')}
                className={`px-6 py-3 font-medium ${
                  searchType === 'owner'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                By Owner Name
              </button>
            </div>

            {/* Search Form */}
            <div className="space-y-4">
              {searchType === 'address' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address
                    </label>
                    <input
                      type="text"
                      placeholder="123 Main Street"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="Demo City"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        placeholder="12345"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </>
              )}

              {searchType === 'parcel' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parcel Number
                  </label>
                  <input
                    type="text"
                    placeholder="123-456-789-000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              )}

              {searchType === 'owner' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Owner Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name, First Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              )}

              <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                Search Property
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pay Taxes Online</h3>
              <p className="text-gray-600 text-sm mb-4">
                Pay your property taxes securely online with credit card or e-check
              </p>
              <button className="text-green-600 font-medium hover:text-green-700">
                Pay Now →
              </button>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
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
              <h3 className="text-lg font-semibold mb-2">Tax Bill Information</h3>
              <p className="text-gray-600 text-sm mb-4">
                View or download current and past tax bills and payment history
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-700">
                View Bills →
              </button>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Assessment Appeals</h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn about the appeals process and submit an assessment appeal
              </p>
              <button className="text-purple-600 font-medium hover:text-purple-700">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Information Sections */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Understanding Assessments */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Understanding Property Assessments
              </h2>
              <p className="text-gray-600 mb-4">
                Property assessments determine the market value of your property for tax purposes. The assessment is based on:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Property location and size</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Building characteristics and condition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Recent sales of comparable properties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Market trends in your area</span>
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                Assessments are conducted annually and notices are mailed in May.
              </p>
            </div>

            {/* Tax Payment Information */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Property Tax Information
              </h2>
              <p className="text-gray-600 mb-4">
                Important dates and information about property taxes:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Payment Schedule</h3>
                  <p className="text-sm text-gray-600">
                    First installment due: May 31st
                    <br />
                    Second installment due: November 30th
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Payment Methods</h3>
                  <p className="text-sm text-gray-600">
                    • Online payment (credit card, e-check)
                    <br />
                    • Mail-in payment
                    <br />
                    • In-person at county office
                    <br />• Drop box available 24/7
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Late Payments</h3>
                  <p className="text-sm text-gray-600">
                    A 1.5% penalty is added to payments received after the due date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                How is my property value determined?
              </h3>
              <p className="text-gray-600 text-sm">
                Property values are determined through mass appraisal techniques that consider recent sales, property characteristics, location, and market conditions. Our assessors use professional standards to ensure fair and equitable assessments.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I appeal my property assessment?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes, property owners have the right to appeal their assessment. Appeals must be filed within 30 days of receiving your assessment notice. Contact our office for appeal forms and procedures.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                What if I can&apos;t pay my property taxes on time?
              </h3>
              <p className="text-gray-600 text-sm">
                If you&apos;re unable to pay your property taxes by the due date, contact our office immediately. We may be able to arrange a payment plan or discuss other options available to you.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Do you offer senior or veteran exemptions?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes, Demo County offers property tax exemptions for qualifying seniors, veterans, and disabled persons. Visit our office or check our resources page for eligibility requirements and application forms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

