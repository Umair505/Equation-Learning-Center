import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheckCircle, FiPhone, FiDollarSign } from 'react-icons/fi';

const CourseEnroll = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    transactionId: '',
    phoneNumber: '',
    amount: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'পুরো নাম দিন';
    if (!formData.email.trim()) newErrors.email = 'ইমেইল দিন';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'সঠিক ইমেইল দিন';
    if (!formData.transactionId.trim()) newErrors.transactionId = 'ট্রাঞ্জেকশন আইডি দিন';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'ফোন নাম্বার দিন';
    if (!formData.amount.trim()) newErrors.amount = 'টাকার পরিমাণ দিন';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission to email
    try {
      // In a real app, you would use an email service or API here
      console.log('Form data to be sent to moinuli359@gmail.com:', formData);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        transactionId: '',
        phoneNumber: '',
        amount: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#f0f4ff] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="pt-5 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              এইচএসসি আইসিটি কোর্সে এনরোল করুন
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Equation Learning Center এর সাথে আপনার প্রস্তুতি শুরু করুন
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Instructions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-indigo-100 text-indigo-600 mr-4">
                <FiDollarSign className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">পেমেন্ট করার নিয়ম</h2>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-800 mb-2">বিকাশে পেমেন্ট করুন</h3>
                <p className="text-gray-700">
                  <span className="font-medium">সেন্ড মানি</span> অপশন থেকে এই নাম্বারে টাকা পাঠান:
                </p>
                <p className="text-xl font-bold text-indigo-600 mt-2">০১৮১৮৫৬৭১৪৫</p>
              </div>

              <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                <h3 className="font-semibold text-indigo-800 mb-2">পেমেন্টের পর যা করতে হবে</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>পেমেন্ট সফল হলে নিচের ফর্মটি পূরণ করুন</li>
                  <li>সঠিক ট্রাঞ্জেকশন আইডি দিন</li>
                  <li>আপনার যোগাযোগের তথ্য দিন</li>
                  <li>সাবমিট বাটনে ক্লিক করুন</li>
                </ol>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-start">
                  <FiPhone className="w-5 h-5 text-green-600 mt-1 mr-2" />
                  <div>
                    <h3 className="font-semibold text-green-800">কোনো সমস্যা হলে কল করুন</h3>
                    <p className="text-gray-700 mt-1">এই নাম্বারে: <span className="font-medium">০১৮১৮৫৬৭১৪৫</span></p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                <h3 className="font-semibold text-yellow-800 mb-2">মনে রাখবেন</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>পেমেন্টের পর ফর্ম অবশ্যই সাবমিট করুন</li>
                  <li>সঠিক ট্রাঞ্জেকশন আইডি দিন</li>
                  <li>কোর্স এক্সেস পেতে ২৪ ঘন্টা সময় লাগতে পারে</li>
                  <li>কোনো সমস্যা হলে আমাদের কল করুন</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Enrollment Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <FiCheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">ধন্যবাদ!</h2>
                <p className="text-gray-600 mb-6">আপনার এনরোলমেন্ট রিকোয়েস্ট সফলভাবে জমা হয়েছে।</p>
                <p className="text-gray-700">
                  ২৪ ঘন্টার মধ্যে আপনার ইমেইলে কোর্স এক্সেসের তথ্য পাঠানো হবে।
                </p>
              </motion.div>
            ) : (
              <>
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-indigo-100 text-indigo-600 mr-4">
                    <FiSend className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">এনরোলমেন্ট ফর্ম</h2>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        পুরো নাম <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} focus:outline-none focus:ring-2`}
                        placeholder="আপনার পুরো নাম লিখুন"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        ইমেইল <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} focus:outline-none focus:ring-2`}
                        placeholder="আপনার ইমেইল ঠিকানা"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    {/* Transaction ID */}
                    <div>
                      <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700 mb-1">
                        বিকাশ ট্রাঞ্জেকশন আইডি <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="transactionId"
                        name="transactionId"
                        value={formData.transactionId}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.transactionId ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} focus:outline-none focus:ring-2`}
                        placeholder="বিকাশ ট্রাঞ্জেকশন আইডি"
                      />
                      {errors.transactionId && (
                        <p className="mt-1 text-sm text-red-600">{errors.transactionId}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        যে নাম্বার থেকে টাকা পাঠিয়েছেন <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.phoneNumber ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} focus:outline-none focus:ring-2`}
                        placeholder="আপনার মোবাইল নাম্বার"
                      />
                      {errors.phoneNumber && (
                        <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
                      )}
                    </div>

                    {/* Amount */}
                    <div>
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                        কত টাকা পাঠিয়েছেন <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.amount ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} focus:outline-none focus:ring-2`}
                        placeholder="টাকার পরিমাণ"
                      />
                      {errors.amount && (
                        <p className="mt-1 text-sm text-red-600">{errors.amount}</p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'সাবমিট করা হচ্ছে...' : 'সাবমিট করুন'}
                    </motion.button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseEnroll;