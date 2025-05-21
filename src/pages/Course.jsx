import React from "react";
import instructorImg from "../assets/p1.png";
import b3 from "../assets/b3.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Course = () => {
  return (
    <div className="bg-gradient-to-b from-[#f0f4ff] to-[#f8fafc] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#111f46] mb-12 md:mb-16"
      >
        আমাদের কোর্স সমূহ
      </motion.h1>

      <div className="max-w-6xl mx-auto">
        {/* Course Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.01 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Responsive Image Container */}
            <div className="relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 overflow-hidden">
              <img
                src={b3}
                alt="HSC ICT Course"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between lg:w-1/2">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                  <div>
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full mb-2">
                      সর্বাধিক পছন্দের কোর্স
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      এইচএসসি আইসিটি কমপ্লিট কোর্স
                    </h3>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm text-gray-500 line-through">৳১,৫০০</p>
                    <p className="text-xl sm:text-2xl font-bold text-indigo-600">৳৯৯৯</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                  এইচএসসি আইসিটি প্রস্তুতির নির্ভরযোগ্য ঠিকানা। বোর্ড পরীক্ষার
                  জন্য সাজানো অধ্যয়ন পদ্ধতি, অভিজ্ঞ শিক্ষক, নিয়মিত ক্লাস টেস্ট
                  এবং অধ্যয়ন সহায়ক নোটের মাধ্যমে আমরা শিক্ষার্থীদের প্রস্তুত করি
                  আত্মবিশ্বাসের সাথে ভালো ফলাফলের জন্য।
                </p>

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mb-6">
                  <div className="flex items-center">
                    <svg
                      className="w-4 sm:w-5 h-4 sm:h-5 text-indigo-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-xs sm:text-sm text-gray-600">
                      ১০০+ ভিডিও লেকচার
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 sm:w-5 h-4 sm:h-5 text-indigo-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-xs sm:text-sm text-gray-600">
                      প্র্যাকটিস শীট
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 sm:w-5 h-4 sm:h-5 text-indigo-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-xs sm:text-sm text-gray-600">লাইভ ক্লাস</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 sm:w-5 h-4 sm:h-5 text-indigo-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-xs sm:text-sm text-gray-600">
                      সম্পূর্ণ সিলেবাস কভার
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-3 sm:space-y-4">
                <Link to="/course-enroll">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                  >
                    কোর্সে এনরোল করুন
                  </motion.button>
                </Link>
                <Link to="/course-details">
                  <button className="w-full py-2 sm:py-3 px-4 sm:px-6 border border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors duration-300 text-sm sm:text-base">
                    বিস্তারিত দেখুন
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 p-6 sm:p-8 bg-gray-50">
            <div className="flex flex-col xs:flex-row items-center gap-4">
              <motion.div whileHover={{ rotate: 5 }}>
                <img
                  src={instructorImg}
                  alt="Instructor"
                  className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full object-cover border-4 border-white shadow-md"
                  loading="lazy"
                />
              </motion.div>
              <div className="text-center xs:text-left">
                <p className="text-base sm:text-lg font-bold text-[#111f46]">রানা স্যার</p>
                <p className="text-xs sm:text-sm text-gray-500">আইসিটি বিশেষজ্ঞ</p>
                <div className="flex justify-center xs:justify-start mt-1 sm:mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">
                    (৫০০+ শিক্ষার্থী)
                  </span>
                </div>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-gray-600 max-w-md text-center md:text-left mt-4 md:mt-0">
              <p className="italic">
                "অভিজ্ঞতার আলোকে সাজানো এই কোর্সটি তোমাকে নিয়ে যাবে একধাপ এগিয়ে।
                চল আমাদের সাথে, প্রস্তুতি হোক শক্তিশালী ও আত্মবিশ্বাসে ভরপুর!"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Course;