import Image from 'next/image';
import React from 'react';

const Feature = ({ categoryName = undefined }: { categoryName?: string }) => {
  if (categoryName) {
    return (
      <div className="w-full text-left bg-[#FCFADE] h-[6rem] sm:h-[8rem] flex items-center px-4 sm:px-6 md:px-8 lg:px-14 rounded-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#242529] font-bold">
          {categoryName}
        </h1>
      </div>
    );
  } else {
    return (
      <div className="w-full bg-[#FFF5EB] py-4 sm:py-6 px-4 sm:px-6 md:px-8 lg:px-14">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-16">
          {/* Feature 1 */}
          <div className="flex items-center gap-x-2 sm:gap-x-3 w-full sm:w-auto justify-center sm:justify-start">
            <Image
              src="/feature1.webp"
              alt="Fast Delivery"
              width={70}
              height={70}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px] flex-shrink-0"
            />
            <div className="text-left">
              <h2 className="text-[#343538] font-semibold text-sm sm:text-base">
                Fast Delivery
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Get in as fast as 1 hour
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-x-2 sm:gap-x-3 w-full sm:w-auto justify-center sm:justify-start">
            <Image
              src="/feature2.webp"
              alt="Fresh Products"
              width={70}
              height={70}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px] flex-shrink-0"
            />
            <div className="text-left">
              <h2 className="text-[#343538] font-semibold text-sm sm:text-base">
                Fresh Products
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Quality guaranteed
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-x-2 sm:gap-x-3 w-full sm:w-auto justify-center sm:justify-start">
            <Image
              src="/feature3.webp"
              alt="Best Prices"
              width={70}
              height={70}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px] flex-shrink-0"
            />
            <div className="text-left">
              <h2 className="text-[#343538] font-semibold text-sm sm:text-base">
                Best Prices
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Save on every order
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Feature;