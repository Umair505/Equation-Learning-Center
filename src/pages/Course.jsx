import React from "react";
import o1 from "../assets/o1.jpeg";
import o2 from "../assets/o2.jpg";
import o3 from "../assets/o3.jpeg";

const Course = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen py-10 px-4 md:px-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-[#111f46] mb-12">
        আমাদের কোর্স সমূহ
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Course 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img src={o1} alt="HSC Physics Full Course" className="w-full h-48 object-cover" />
          <div className="p-5">
            <h2 className="text-xl font-semibold text-[#111f46] mb-2">HSC Physics Full Course</h2>
            <p className="text-sm text-gray-600 mb-3">Instructor: Rana Sir</p>
            <p className="text-lg font-bold text-indigo-600 mb-4">৳1,200</p>
            <button className="w-full py-2 px-4 bg-gradient-to-r from-[#111f46] to-[#1a2b6d] text-white rounded-xl hover:from-[#1a2b6d] hover:to-[#111f46] transition">
              বিস্তারিত দেখুন
            </button>
          </div>
        </div>

        {/* Course 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img src={o2} alt="SSC Math Crash Course" className="w-full h-48 object-cover" />
          <div className="p-5">
            <h2 className="text-xl font-semibold text-[#111f46] mb-2">SSC Math Crash Course</h2>
            <p className="text-sm text-gray-600 mb-3">Instructor: Rana Sir</p>
            <p className="text-lg font-bold text-indigo-600 mb-4">৳800</p>
            <button className="w-full py-2 px-4 bg-gradient-to-r from-[#111f46] to-[#1a2b6d] text-white rounded-xl hover:from-[#1a2b6d] hover:to-[#111f46] transition">
              বিস্তারিত দেখুন
            </button>
          </div>
        </div>

        {/* Course 3 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img src={o3} alt="HSC Chemistry Model Test" className="w-full h-48 object-cover" />
          <div className="p-5">
            <h2 className="text-xl font-semibold text-[#111f46] mb-2">HSC Chemistry Model Test</h2>
            <p className="text-sm text-gray-600 mb-3">Instructor: Rana Sir</p>
            <p className="text-lg font-bold text-indigo-600 mb-4">৳1,000</p>
            <button className="w-full py-2 px-4 bg-gradient-to-r from-[#111f46] to-[#1a2b6d] text-white rounded-xl hover:from-[#1a2b6d] hover:to-[#111f46] transition">
              বিস্তারিত দেখুন
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Course;
