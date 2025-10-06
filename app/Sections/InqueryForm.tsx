"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function InqueryForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    deliveryArea: '',
    message: ''
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for signing up for TasteVIP!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Form Section */}
          <div className="p-8 md:p-12 bg-yellow-300">
            <h1 className="text-4xl md:text-5xl font-black text-red-600 mb-4 leading-tight">
              Fresh Grocery
              <br />at your doorstep.
            </h1>

            <p className="text-gray-800 text-sm mb-6 font-medium">
              We are here to help.
              Have a question, need assistance, or want to request our mobile grocery service? Fill out the form below, and our team will get back to you soon. Your convenience is our priority,

            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs text-gray-700 mb-1 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-lg border-1 border-gray-700 focus:border-red-500 focus:outline-none text-gray-800"
                />
              </div>
              <div className='grid grid-cols-2 gap-4'>

                <div>
                  <label className="block text-xs text-gray-700 mb-1 font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="w-full px-4 py-3 rounded-lg border-1 border-gray-700 focus:border-red-500 focus:outline-none text-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-700 mb-1 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border-1 border-gray-700 focus:border-red-500 focus:outline-none text-gray-800"
                  />
                </div>
              </div>


              <div>
                <label className="block text-xs text-gray-700 mb-1 font-semibold">
                  Delivery Area
                </label>
                <input
                  type="text"
                  name="Delivery Area"
                  value={formData.deliveryArea}
                  onChange={handleChange}
                  placeholder="Delivery Area"
                  className="w-full px-4 py-3 rounded-lg border-1 border-gray-700 focus:border-red-500 focus:outline-none text-gray-800"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-700 mb-1 font-semibold">
                  Message
                </label>
                <textarea
                  name="Message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full px-4 py-3 rounded-lg border-1 border-gray-700 focus:border-red-500 focus:outline-none text-gray-800"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 shadow-lg"
              >
                SEND
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative hidden md:flex items-center justify-center p-8">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600 opacity-10 rounded-full blur-3xl"></div>
              <div className="relative z-10 text-center">
                <Image src={"/formImage.png"} alt='form-image' width={1200} height={1200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}