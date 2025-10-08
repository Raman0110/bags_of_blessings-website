import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { categories } from '../lib/categories';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const products = [
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Sports & Outdoors',
    'Books & Media',
    'Toys & Games'
  ];

  // const categories = [
  //   'New Arrivals',
  //   'Best Sellers',
  //   'Sale Items',
  //   'Featured Products',
  //   'Gift Ideas',
  //   'Clearance'
  // ];

  const company = [
    'About Us',
    'Contact',
    'Privacy Policy',
    'Terms of Service'
  ];

  const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );

  return (
    <footer className="bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-20 mb-10">

          {/* Hours of Operation Section */}
          <div>
            <h3 className="text-[#EC1A1C] text-xl font-semibold mb-5">Hours of Operation</h3>
            <ul className="space-y-3">
              <li className="text-gray-700 text-md font-semibold">
                <span className="font-semibold">Mon-Fri</span>
                <br />
                8:00 am to 7:00 pm
              </li>
              <li className="text-gray-700 text-md font-semibold">
                <span className="font-semibold">Saturday & Sunday</span>
                <br />
                Closed
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-[#EC1A1C] text-xl font-semibold mb-5">Products</h3>
            <ul className="space-y-3">
              {categories.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/category/${item.slug}`}
                    className="text-gray-700 text-md font-semibold hover:text-[#EC1A1C] transition-colors duration-300"
                  >
                    {item.categoryName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#EC1A1C] text-xl font-semibold mb-5">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-700 text-md font-semibold hover:text-[#EC1A1C] transition-colors duration-300"
                >
                  PHONE NUMBER
                  <br />
                  (346) 255-9224
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 text-md font-semibold hover:text-[#EC1A1C] transition-colors duration-300"
                >
                  EMAIL
                  <br />
                  bagsofblessingsmobilegrocery <br />@yahoo.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 text-md font-semibold hover:text-[#EC1A1C] transition-colors duration-300"
                >
                  Address
                  <br />
                  2928 Greens Rd, Houston, TX 77032, United States
                </a>
              </li>
            </ul>
          </div>


          {/* Social Media Section */}
          <div>
            <h3 className="text-[#EC1A1C] text-xl font-semibold mb-5">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-[#EC1A1C] flex items-center justify-center text-[#EC1A1C] hover:bg-[#EC1A1C] hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-[#EC1A1C] flex items-center justify-center text-[#EC1A1C] hover:bg-[#EC1A1C] hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-[#EC1A1C] flex items-center justify-center text-[#EC1A1C] hover:bg-[#EC1A1C] hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-md font-semibold">
            © 2025 Bags of Blessings. All rights reserved.
          </p>

          {/* Logo Section */}
          <div className="flex gap-6">
            <Image src={"/footerimg2.png"} alt='lone star payment' width={150} height={100} />
            <Image src={"/footerimg1.png"} alt='ebt snap' width={150} height={100} />

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;