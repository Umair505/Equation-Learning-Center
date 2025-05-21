import React from "react";
import { motion } from "framer-motion";
import a1 from "../assets/a1.png";
import sir from "../assets/sir1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#f8fafc] to-[#f0f4ff] w-full">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-6 lg:px-8 lg:py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <span className="inline-block bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              আমাদের সম্পর্কে
            </span>
          </motion.div>

          <h2 className="mb-6 text-3xl sm:text-4xl font-bold text-gray-900">
            <span className="relative inline-block">
              <span className="relative bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Equation Learning Center
              </span>
            </span>
            <br className="sm:hidden" />
            <span className="block mt-3 text-xl sm:text-2xl text-gray-700 font-medium">
              ব্যক্তিগতভাবে গড়ে তোলা একটি অনন্য শিক্ষা প্ল্যাটফর্ম
            </span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 text-base sm:text-lg text-gray-700">
            <p className="leading-relaxed">
              Equation Learning Center হল বাংলাদেশের একটি বিশেষায়িত অনলাইন
              শিক্ষা প্ল্যাটফর্ম যেখানে রানা স্যার এককভাবে শিক্ষার্থীদের জন্য
              সম্পূর্ণ কোর্স পরিচালনা করেন।
            </p>
            <p className="leading-relaxed">
              প্রতিটি ক্লাস, প্রতিটি লেকচার এবং প্রতিটি মূল্যায়ন রানা স্যার
              নিজেই পরিচালনা করেন, যা শিক্ষার্থীদেরকে একই শিক্ষকের কাছ থেকে
              ধারাবাহিক ও সামঞ্জস্যপূর্ণ শিক্ষা নিশ্চিত করে।
            </p>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid max-w-screen-lg gap-12 lg:grid-cols-2 sm:mx-auto mb-20 px-4"
        >
          <div className="flex flex-col justify-center">
            {[
              {
                title: "আমাদের দর্শন",
                text: "একজন শিক্ষার্থীর সফলতার জন্য একজন নিবেদিতপ্রাণ শিক্ষকের একক তত্ত্বাবধানই সবচেয়ে কার্যকরী পদ্ধতি।",
              },
              {
                title: "আমাদের পদ্ধতি",
                text: "একই শিক্ষকের ধারাবাহিক পাঠদান, ব্যক্তিগত ফিডব্যাক এবং নিয়মিত মূল্যায়নের মাধ্যমে আমরা নিশ্চিত করি প্রতিটি শিক্ষার্থী তাদের সর্বোচ্চ সম্ভাবনা বিকাশ করতে পারে।",
              },
              {
                title: "আমাদের প্রতিশ্রুতি",
                text: "প্রতিটি শিক্ষার্থীকে তাদের লক্ষ্যে পৌঁছানোর জন্য প্রয়োজনীয় সমস্ত সহায়তা প্রদান করা।",
              },
            ].map((item, idx) => (
              <motion.div whileHover={{ x: 5 }} className="flex mb-8" key={idx}>
                <div className="mr-4">
                  <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-gradient-to-r from-indigo-100 to-blue-100 shadow-md">
                    <svg
                      className="w-6 h-6 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 text-lg sm:text-xl font-semibold leading-5 text-gray-800">
                    {item.title}
                  </h6>
                  <p className="text-gray-700 text-sm sm:text-base">{item.text}</p>
                  {idx !== 2 && <hr className="w-full my-6 border-gray-200" />}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.img
              whileHover={{ scale: 1.02 }}
              className="object-cover w-full h-56 col-span-1 sm:col-span-2 rounded-xl shadow-xl"
              src={a1}
              alt="Equation Learning Center Classroom"
            />
            <motion.img
              whileHover={{ scale: 1.02 }}
              className="object-cover w-full h-48 rounded-xl shadow-lg"
              src={a2}
              alt="Students learning"
            />
            <motion.img
              whileHover={{ scale: 1.02 }}
              className="object-cover w-full h-48 rounded-xl shadow-lg"
              src={a3}
              alt="Online class session"
            />
          </div>
        </motion.div>

        {/* Teacher Section - Full Width */}
        <div className="w-full py-16 bg-gradient-to-r from-indigo-50 to-blue-50 px-4">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Teacher Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:w-2/5 relative w-full"
              >
                <motion.div
                  animate={{
                    x: [0, 10, 0],
                    y: [0, -5, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-blue-500 opacity-10 rounded-3xl blur-md"
                />

                <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white transition-all duration-300 hover:shadow-xl">
                  <motion.img
                    src={sir}
                    alt="রানা স্যার"
                    className="w-full h-64 sm:h-80 md:h-[500px] object-cover filter brightness-110"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                    <motion.div
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">
                        রানা স্যার
                      </h3>
                      <p className="text-blue-200 text-base sm:text-lg">
                        আইসিটি বিশেষজ্ঞ
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Teacher Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-3/5 w-full p-4 sm:p-6 md:p-8"
              >
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8"
                >
                  রানা স্যারের{" "}
                  <span className="text-indigo-600">সরাসরি নির্দেশনায়</span>
                </motion.h2>

                <div className="space-y-5 text-gray-700 text-base sm:text-lg">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    রানা স্যার বাংলাদেশের অন্যতম সেরা আইসিটি শিক্ষক। 
                    আইসিটি শিক্ষায় নিবেদিতপ্রাণ রানা স্যার তাঁর অভিজ্ঞতা, দক্ষতা ও 
                    আন্তরিকতায় শিক্ষার্থীদের কাছে একজন অনুপ্রেরণার নাম।
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    প্রতিটি ক্লাস, লেকচার ও মূল্যায়ন তিনি নিজেই পরিচালনা করেন।
                    তাঁর সহজ উপস্থাপনা শিক্ষার্থীদের কাছে বিষয়বস্তু সহজ করে
                    তোলে।
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    শিক্ষকের ভূমিকার বাইরে, তিনি একজন সহানুভূতিশীল মেন্টর ও পরামর্শদাতা, যিনি শিক্ষার্থীদের প্রতিটি ধাপে সহযোগিতা করেন। তাঁর "কনসেপ্ট ক্লিয়ার" কৌশল শিক্ষার্থীদের শেখার আগ্রহ ও আত্মবিশ্বাস উভয়ই বাড়িয়ে তোলে।
                  </motion.p>
                </div>

                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { value: "১০+", label: "বছরের অভিজ্ঞতা" },
                    { value: "১০০%", label: "সম্পূর্ণ সিলেবাস কভার" },
                    { value: "৯৮%", label: "সন্তুষ্ট শিক্ষার্থী" },
                  ].map((stat, index) => (
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      key={index}
                      className="bg-white p-4 sm:p-5 rounded-xl text-center shadow-md border border-indigo-100"
                    >
                      <p className="text-2xl sm:text-3xl font-extrabold text-indigo-700">
                        {stat.value}
                      </p>
                      <p className="text-sm sm:text-base text-black mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
