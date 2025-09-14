"use client";

import React from 'react';
import { MapPin, Mail, Calendar } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your Metallurgy consultation? Contact A.V.L. Narasimham today for expert guidance.
          </p>
        </div>

        {/* Consultation CTA */}
        {/* Consultation CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Ready for Metallurgy Consultation?</h2>
              <div className="text-yellow-200 text-2xl font-bold mb-4">
                **Consultation Fees – ₹999 Only**
              </div>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed max-w-3xl mx-auto">
                Perfect for quick problem solving and expert insights in the metallurgy and ferroalloy domain. This one-time consultation is ideal for addressing production bottlenecks, evaluating raw materials, or getting actionable advice without long-term commitments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Ideal For */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-white">Ideal for:</h3>
                <ul className="text-blue-100 space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-200 mr-2">•</span>
                    Manufacturing units facing technical challenges
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-200 mr-2">•</span>
                    Plant heads evaluating new technologies
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-200 mr-2">•</span>
                    Startups and SMEs needing expert guidance
                  </li>
                </ul>
              </div>

              {/* Includes */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-white">Includes:</h3>
                <ul className="text-blue-100 space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-200 mr-2">•</span>
                    10-minute one-on-one expert session
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-200 mr-2">•</span>
                    Plant/process diagnostic assessment
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-200 mr-2">•</span>
                    Customized advisory report
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-200 mr-2">•</span>
                    Raw material suggestions with sourcing insights
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-200 mr-2">•</span>
                    ₹500 credit toward next paid service
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-200 mr-2">•</span>
                    Online support via video or audio call (India and Global)
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => window.location.href = 'https://rzp.io/rzp/avlferroalloys'}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform mb-6"
              >
                Book Consultation - ₹999
              </button>
              
              <div className="bg-white/5 rounded-lg p-4 mb-4">
                <p className="text-blue-100 text-sm leading-relaxed">
                  <strong>Note:</strong> After successful payment, confirmation will be sent via email/WhatsApp. Slot details will be shared based on expert availability.
                </p>
              </div>
              
              <p className="text-blue-200 text-sm">
                <strong>Payments powered by Digital Videos – our official Digital partner.</strong>
              </p>
            </div>
          </div>
        </div>
<br></br>
        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Address Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 ml-5">Office Address</h3>
                <p className="text-gray-600 leading-relaxed ml-5">
                  #39-2-4/2, Muralinagar<br />
                  Visakhapatnam, Andhra Pradesh<br />
                  530007
                </p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 ml-5">Email Contact</h3>
                <div className="space-y-2">
                  <a 
                    href="mailto:avin1947@gmail.com" 
                    className="block text-blue-600 hover:text-blue-800 transition-colors font-medium ml-5"
                  >
                    avin1947@gmail.com
                  </a>
                  <a 
                    href="mailto:avinash1947@yahoo.com" 
                    className="block text-blue-600 hover:text-blue-800 transition-colors font- ml-5"
                  >
                    avinash1947@yahoo.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Office Hours</h3>
            <p className="text-gray-600">
              Monday - Saturday: 9:00 AM - 4:00 PM<br />
              Sunday: By Appointment Only
            </p>
            <p className="text-sm text-gray-500 mt-4">
              For urgent matters, please Whatsapp or Email directly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}