import React from 'react';
import a1 from "../assets/a1.jpeg"
import a2 from "../assets/a2.jpeg"
import a3 from "../assets/a3.jpeg"
const About = () => {
    return (
       <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-4xl mx-auto mb-12 px-4 sm:px-6 lg:px-8 text-center">
  {/* Badge */}
  <div className="inline-flex items-center justify-center mb-6">
    <span
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
        >
      আমাদের সম্পর্কে
        </span>
  </div>

  {/* Title */}
  <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
    <span className="relative inline-block">
      <span className="relative bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Equation Learning Center
      </span>
    </span>
    <br className="sm:hidden" />
    <span className="block mt-3 text-2xl sm:text-3xl text-gray-700 font-medium">
      একটি নতুন ধারার শিক্ষা প্ল্যাটফর্ম
    </span>
  </h2>

  {/* Description */}
  <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700">
    <p className="leading-relaxed">
      Equation Learning Center তোমার স্বপ্নপূরণের যাত্রা শুরু করার জায়গা।
    </p>
    <p className="leading-relaxed">
      আমরা দিচ্ছি অনলাইন ব্যাচ, ক্র্যাশ কোর্স, মডেল টেস্টসহ আরও অনেক কিছু।
    </p>
  </div>
</div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          {[
            {
              title: "আমাদের লক্ষ্য",
              text: "শিক্ষার্থীদের জন্য সেরা অনলাইন শিক্ষা পরিবেশ তৈরি করা।"
            },
            {
              title: "আমাদের টিম",
              text: "দক্ষ এবং অভিজ্ঞ শিক্ষক দল যারা প্রতিনিয়ত কাজ করছে তোমার উন্নয়নে।"
            },
            {
              title: "আমাদের প্ল্যাটফর্ম",
              text: "নির্ভরযোগ্য এবং ব্যবহার-বান্ধব, যেখান থেকে যেকোনো সময় শেখা সম্ভব।"
            }
          ].map((item, idx) => (
            <div className="flex" key={idx}>
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                  <svg
                    className="w-6 h-6 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold leading-5">{item.title}</h6>
                <p className="text-sm text-gray-900">{item.text}</p>
                {idx !== 2 && <hr className="w-full my-6 border-gray-300" />}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src={a1}
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src={a2}
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src={a3}
            alt=""
          />
        </div>
      </div>
    </div>
    );
};

export default About;