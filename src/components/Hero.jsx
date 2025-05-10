import React from "react";
import goal from "../assets/goal.jpg";
import card2 from "../assets/study.png";
import creative from "../assets/creative.png";
import card4 from "../assets/card2.png";

const Hero = () => {
  return (
    <div className="pt-5 flex flex-col items-center bg-[#101118] min-h-screen text-white pb-5">
      <h1 className="text-2xl md:text-5xl my-8 text-center bg-gradient-to-r from-[#ff7f50] to-[#ff1493] bg-clip-text text-transparent">
  তোমার গল্প শুরু হোক এখান থেকেই
</h1>


      {/* Main Banner Card */}
     <div className="bg-gradient-to-br from-[#111f46] to-[#1a2b6d] banner-card md:rounded-3xl  lg:rounded-3xl p-10 w-[100%] md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto shadow-lg transition-all duration-500 min-h-[450px]">

        {/* Top Tab Header */}
        <div className="flex justify-center mb-4">
          <div className="bg-[#1f2e68] text-blue-400 px-6 py-1 rounded-full text-sm font-medium">
            অনলাইন কোর্স
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-xl text-center font-semibold mb-8">
          অনলাইন ব্যাচ ২০২৫ এর সকল কোর্সে ভর্তি চলছে!
        </h1>

        {/* HSC Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {/* Card 1 - Crash Course */}
         <div className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-700
 rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col items-center text-white transform hover:scale-105 transition-transform duration-300">
            <img
              src={goal}
              alt="Crash Course Icon"
              className="rounded-full w-18 h-18 object-cover mb-3"
            />
            <h2 className="text-lg font-medium">ক্র্যাশ কোর্স</h2>
            <h3 className="text-sm mt-1">১৫ দিনে প্রস্তুতি</h3>
          </div>

          {/* Card 2 - Model Test */}
          <div className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-rose-500 hover:to-pink-700
 rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col items-center text-white transform hover:scale-105 transition-transform duration-300">
            <img
              src={card2}
              alt="Model Test Icon"
              className="rounded-full w-18 h-18 object-cover mb-3"
            />
            <h2 className="text-lg font-medium">মডেল টেস্ট</h2>
            <h3 className="text-sm mt-1">২০টি সেট</h3>
          </div>

          {/* Card 3 - Creative Questions */}
          <div className="w-full bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-600
 rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col items-center text-white transform hover:scale-105 transition-transform duration-300">
            <img
              src={creative}
              alt="Creative Questions Icon"
              className="rounded-full w-18 h-18 object-cover mb-3"
            />
            <h2 className="text-lg font-medium">সৃজনশীল প্রশ্ন</h2>
            <h3 className="text-sm mt-1">অধ্যায়ভিত্তিক</h3>
          </div>

          {/* Card 4 - HSC Batch */}
          <div className="w-full bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-emerald-500 hover:to-teal-600
 rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col items-center text-white transform hover:scale-105 transition-transform duration-300">
            <img
              src={card4}
              alt="HSC Batch Icon"
              className="rounded-full w-18 h-18 object-cover mb-3"
            />
            <h2 className="text-lg text-center font-medium">HSC ২০২৫ Batch</h2>
            <h3 className="text-sm mt-1">সিলেবাস ভিত্তিক ক্লাস</h3>
          </div>
        </div>
      </div>

      {/* Free Class Section */}
      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold mb-4">ফ্রি ক্লাস করতে ক্লিক করুন</h2>
        <a
          href="https://youtu.be/86-jWe81LsE?si=ES2W3dY9tNiKwpEY"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
        >
          ফ্রি ক্লাস দেখুন
        </a>
      </div>
    </div>
  );
};

export default Hero;
