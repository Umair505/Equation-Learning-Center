import React from "react";
import { motion } from "framer-motion";
import goal from "../assets/reading.gif";
import creative from "../assets/idea.gif";
import card2 from "../assets/studying.gif";
import card4 from "../assets/grades.gif";
import { FaYoutube, FaFacebook, FaUsers, FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router";

const Hero = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className="pt-5 flex flex-col items-center bg-[#101118] min-h-screen text-white pb-5">
      {/* Main Title with Animation */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-5xl my-8 text-center bg-gradient-to-r from-[#ff7f50] to-[#ff1493] bg-clip-text text-transparent"
      >
        তোমার গল্প শুরু হোক এখান থেকেই
      </motion.h1>

      {/* Main Banner Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-[#111f46] to-[#1a2b6d] banner-card md:rounded-3xl lg:rounded-3xl p-10 w-[100%] md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto shadow-lg transition-all duration-500 min-h-[450px]"
      >
        {/* Top Tab Header */}
        <div className="flex justify-center mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#1f2e68] text-blue-400 px-6 py-1 rounded-full text-sm font-medium"
          >
            অনলাইন কোর্স
          </motion.div>
        </div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white text-xl text-center font-semibold mb-8"
        >
          অনলাইন ব্যাচ ২০২৫ এর সকল কোর্সে ভর্তি চলছে!
        </motion.h1>

        {/* HSC Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {/* Card 1 - Crash Course */}
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col items-center text-white transform hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <img
              src={goal}
              alt="Crash Course Icon"
              className="rounded-full w-18 h-18 object-cover mb-3"
            />
            <h2 className="text-lg font-medium">ক্র্যাশ কোর্স</h2>
            <h3 className="text-sm mt-1">১৫ দিনে প্রস্তুতি</h3>
          </motion.div>

          {/* Card 2 - Model Test */}
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-rose-500 hover:to-pink-700 rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col items-center text-white transform hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <img
              src={card2}
              alt="Model Test Icon"
              className="rounded-full w-18 h-18 object-cover mb-3"
            />
            <h2 className="text-lg font-medium">মডেল টেস্ট</h2>
            <h3 className="text-sm mt-1">২০টি সেট</h3>
          </motion.div>

          {/* Card 3 - Creative Questions */}
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="w-full bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-600 rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col items-center text-white transform hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <img
              src={creative}
              alt="Creative Questions Icon"
              className="rounded-full w-18 h-18 object-cover mb-3"
            />
            <h2 className="text-lg font-medium">সৃজনশীল প্রশ্ন</h2>
            <h3 className="text-sm mt-1">অধ্যায়ভিত্তিক</h3>
          </motion.div>

          {/* Card 4 - HSC Batch */}
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.3 }}
            className="w-full bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-emerald-500 hover:to-teal-600 rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col items-center text-white transform hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <img
              src={card4}
              alt="HSC Batch Icon"
              className="rounded-full w-18 h-18 object-cover mb-3"
            />
            <h2 className="text-lg text-center font-medium">HSC ২০২৫ Batch</h2>
            <h3 className="text-sm mt-1">সিলেবাস ভিত্তিক ক্লাস</h3>
          </motion.div>
        </div>
      </motion.div>

      {/* Free Resources Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 w-full md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto"
      >
        <h2 className="text-2xl pt-5 md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          বিনামূল্যে শেখার সুযোগ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Class */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-[#1a1b2e] to-[#232741] rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-red-500 rounded-full mr-4">
                <FaYoutube className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold">ফ্রি ক্লাস</h3>
            </div>
            <p className="text-gray-300 mb-4">
              আমাদের ইউটিউব চ্যানেল থেকে বিনামূল্যে ক্লাস দেখে নিন এবং কোর্সের মান যাচাই করুন।
            </p>
            <div className="space-y-3">
              <a
                href="https://youtu.be/-SnCrgu-8Bc?si=QxYCEQxqXmbBNlWi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#2d2f4a] hover:bg-[#3a3c5a] rounded-lg p-3 transition-colors"
              >
                <span>এইচএসসি আইসিটি বেসিক কনসেপ্ট</span>
                <FaYoutube className="text-red-500" />
              </a>
              <a
                href="https://youtu.be/nAZUKsBm4yU?si=u5Hl115wfTz4xrsu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#2d2f4a] hover:bg-[#3a3c5a] rounded-lg p-3 transition-colors"
              >
                <span>প্রোগ্রামিং ফান্ডামেন্টালস</span>
                <FaYoutube className="text-red-500" />
              </a>
            </div>
          </motion.div>

          {/* Facebook Community */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-[#1a1b2e] to-[#232741] rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-600 rounded-full mr-4">
                <FaFacebook className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold">ফেসবুক কমিউনিটি</h3>
            </div>
            <p className="text-gray-300 mb-4">
              আমাদের ফেসবুক গ্রুপ ও পেজে যুক্ত হয়ে প্রশ্ন করুন এবং আপডেট পান।
            </p>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/groups/1278989675944722/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#2d2f4a] hover:bg-[#3a3c5a] rounded-lg p-3 transition-colors"
              >
                <span>Equation Learning Center গ্রুপ</span>
                <FaUsers className="text-blue-400" />
              </a>
              <a
                href="https://www.facebook.com/EquationLearningCenter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#2d2f4a] hover:bg-[#3a3c5a] rounded-lg p-3 transition-colors"
              >
                <span>আমাদের অফিসিয়াল পেজ</span>
                <FaChalkboardTeacher className="text-blue-400" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* YouTube Video Display Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 w-full md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          আমাদের কোর্সের একটি নমুনা ক্লাস
        </h2>
        <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl">
          <iframe
            className="w-full h-[250px] md:h-[400px] lg:h-[450px]"
            src="https://www.youtube.com/embed/nAZUKsBm4yU?autoplay=0&showinfo=0&controls=1"
            title="Equation Learning Center Sample Class"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-center text-gray-300 mt-4">
          ভিডিওটি দেখে আমাদের কোর্সের মান ও শিক্ষণ পদ্ধতি সম্পর্কে ধারণা নিন
        </p>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          এখনই শুরু করুন আপনার সাফল্যের যাত্রা
        </h2>
        <Link to="/course-enroll">
          <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg"
        >
          কোর্সে এনরোল করুন
        </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;