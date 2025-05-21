import React, { useState } from 'react';
import { motion } from 'framer-motion';
import instructorImg from '../assets/p2.png';

const CourseDetails = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "এই কোর্সটি কাদের জন্য উপযোগী?",
      answer: "এই কোর্সটি মূলত এইচএসসি পর্যায়ের শিক্ষার্থীদের জন্য তৈরি করা হয়েছে। যারা আইসিটি বিষয়ে ভালোভাবে প্রস্তুতি নিতে চান এবং বোর্ড পরীক্ষায় ভালো ফলাফল করতে চান, তাদের জন্য এই কোর্সটি আদর্শ।"
    },
    {
      question: "কোর্সের মেয়াদ কতদিন?",
      answer: "এই কোর্সটির সম্পূর্ণ মেয়াদ ৬ মাস। তবে কোর্স শেষ হওয়ার পরেও আপনি ৩ মাস অতিরিক্ত সময় সকল ম্যাটেরিয়াল এক্সেস করতে পারবেন।"
    },
    {
      question: "ক্লাস মিস করলে কি করব?",
      answer: "প্রতিটি লাইভ ক্লাসের রেকর্ডেড ভিডিও আপনাকে প্রদান করা হবে। তাই আপনি যেকোনো সময় মিস করা ক্লাস দেখে নিতে পারবেন।"
    },
    {
      question: "পরীক্ষার ব্যবস্থা আছে কি?",
      answer: "হ্যাঁ, প্রতি সপ্তাহে কুইজ এবং প্রতি মাসে মডেল টেস্ট নেওয়া হবে। এছাড়াও ফাইনাল প্রিপারেশন টেস্টের ব্যবস্থা রয়েছে।"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#f8fafc] to-[#f0f4ff] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Course Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text pt-5 text-transparent">
              এইচএসসি আইসিটি কমপ্লিট কোর্স
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            বোর্ড পরীক্ষার জন্য সম্পূর্ণ প্রস্তুতি
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Description */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">কোর্স বিবরণ</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  এইচএসসি আইসিটি প্রস্তুতির নির্ভরযোগ্য ঠিকানা Equation Learning Center। আমাদের এই বিশেষায়িত কোর্সটি তৈরি করা হয়েছে এইচএসসি পরীক্ষার সম্পূর্ণ সিলেবাস কভার করার জন্য। বোর্ড পরীক্ষার জন্য বিশেষভাবে সাজানো অধ্যয়ন পদ্ধতি, অভিজ্ঞ শিক্ষক, নিয়মিত ক্লাস টেস্ট এবং অধ্যয়ন সহায়ক নোটের মাধ্যমে আমরা শিক্ষার্থীদের প্রস্তুত করি আত্মবিশ্বাসের সাথে ভালো ফলাফলের জন্য।
                </p>
                <p>
                  কোর্সটিতে আপনি পাবেন ১০০+ ভিডিও লেকচার, ৫০+ প্র্যাকটিস শীট, ২০+ মডেল টেস্ট এবং সম্পূর্ণ সিলেবাস কভার করার গ্যারান্টি। আমাদের বিশেষ "কনসেপ্ট ক্লিয়ার" পদ্ধতিতে প্রতিটি টপিক এমনভাবে শেখানো হয় যাতে আপনি শুধু মুখস্থ না করে গভীরভাবে বুঝতে পারেন।
                </p>
                <p>
                  প্রতি সপ্তাহে ২টি লাইভ ক্লাসের পাশাপাশি আপনি পাবেন ২৪/৭ সাপোর্ট এবং ডাউট ক্লিয়ার করার সুযোগ। আমাদের বিশেষায়িত নোট এবং শর্ট টেকনিক আপনাকে পরীক্ষায় কম সময়ে বেশি নম্বর পেতে সাহায্য করবে।
                </p>
              </div>
            </motion.div>

            {/* What You'll Learn */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">কি কি শিখবেন এই কোর্সে?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "সম্পূর্ণ এইচএসসি আইসিটি সিলেবাস কভার",
                  "বোর্ড প্রশ্ন প্যাটার্ন অনুযায়ী প্রস্তুতি",
                  "প্রোগ্রামিং কনসেপ্ট সহজভাবে বুঝানো",
                  "নেটওয়ার্কিং ও ডেটাবেস ম্যানেজমেন্ট",
                  "ডিজিটাল ডিভাইস ও সিকিউরিটি",
                  "প্র্যাকটিক্যাল নলেজ অ্যাপ্লিকেশন",
                  "পরীক্ষার জন্য শর্ট টেকনিক",
                  "মডেল টেস্ট ও সলিউশন"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FAQ Accordion */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">সচরাচর জিজ্ঞাসা</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="font-medium text-gray-800">{faq.question}</span>
                      <svg
                        className={`w-5 h-5 text-indigo-500 transform transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`px-4 pb-4 pt-2 bg-white ${activeAccordion === index ? 'block' : 'hidden'}`}
                    >
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Instructor Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">কোর্স ইন্সট্রাক্টর</h2>
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={instructorImg}
                    alt="রানা স্যার"
                    className="w-20 h-20 rounded-full object-cover border-4 border-indigo-100"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">রানা স্যার</h3>
                    <p className="text-indigo-600">আইসিটি বিশেষজ্ঞ</p>
                  </div>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p>• ১০+ বছর শিক্ষকতার অভিজ্ঞতা</p>
                  <p>• ৫০০+ শিক্ষার্থীকে প্রশিক্ষণ প্রদান</p>
                  <p>• বিশেষজ্ঞ বোর্ড পরীক্ষা প্রস্তুতি</p>
                </div>
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">ক্লাস করার জন্য প্রয়োজন হবে</h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>স্মার্টফোন অথবা পিসি</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>নোট নেওয়ার জন্য নোটবুক</span>
                </div>
              </div>
            </motion.div>

            {/* Pricing & Enroll */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl shadow-xl p-6 text-white"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">এইচএসসি আইসিটি কমপ্লিট কোর্স</h3>
                <p className="text-indigo-100">৬ মাসের সম্পূর্ণ প্রোগ্রাম</p>
              </div>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold">৳৯৯৯</span>
                <span className="ml-2 text-indigo-200 line-through">৳১৫০০</span>
                <span className="ml-auto bg-white text-indigo-600 px-3 py-1 rounded-full text-sm font-bold">৩৩% ছাড়</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                কোর্স কিনুন
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;