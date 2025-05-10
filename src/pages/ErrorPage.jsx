import React from "react";
import { Link } from "react-router"; // use react-router-dom
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
        <h1 className="text-6xl font-bold text-[#111f46] mb-4">৪০৪</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">পৃষ্ঠা খুঁজে পাওয়া যায়নি</h2>
        <p className="text-gray-600 mb-6">
          আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি হয় মুছে ফেলা হয়েছে অথবা ঠিকানা ভুল হয়েছে।
        </p>
        <Link to="/">
          <button className="px-6 py-3 bg-gradient-to-r from-[#111f46] to-[#1a2b6d] text-white text-lg rounded-xl hover:from-[#1a2b6d] hover:to-[#111f46] transition">
            হোমপেজে ফিরে যান
          </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
