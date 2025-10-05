import Image from "next/image";
import { ShoppingCart, Truck, Heart } from "lucide-react";

const Welcome = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-14 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-block">
              <span className="bg-[#FCFADE] text-[#EC1A1C] px-4 py-2 rounded-full text-sm font-semibold">
                Welcome to
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D2030] leading-tight">
              Bags of Blessings Mobile Grocery
            </h1>

            <p className="text-base sm:text-lg text-[#343538] leading-relaxed text-justify">
              We make grocery shopping{" "}
              <span className="font-bold text-[#EC1A1C]">
                simple, stress-free, and convenient
              </span>
              . We bring a fully stocked store right to your curb. Our mobile
              truck delivers all your{" "}
              <span className="font-semibold">favorite brands</span>, plus fresh
              essentials like{" "}
              <span className="font-semibold">
                Meat, Poultry & Seafood, Frozen Food, Breakfast & Lunch items,
                Snacks, Cakes, Cookies, Candy, and Drinks
              </span>
              —all straight to your doorstep.
            </p>

            <p className="text-base sm:text-lg text-[#343538] leading-relaxed text-justify">
              We understand life is busy, which is why we offer an{" "}
              <span className="font-bold text-[#EC1A1C]">
                affordable and reliable
              </span>{" "}
              way to get your groceries without leaving the comfort of your home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-[#F6F7F8] rounded-xl">
                <div className="bg-[#EC1A1C] p-2 rounded-lg">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-[#343538]">
                  Fully Stocked
                </span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-[#F6F7F8] rounded-xl">
                <div className="bg-[#EC1A1C] p-2 rounded-lg">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-[#343538]">
                  Mobile Delivery
                </span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-[#F6F7F8] rounded-xl">
                <div className="bg-[#EC1A1C] p-2 rounded-lg">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-[#343538]">
                  Fresh & Quality
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-[#FCFADE] rounded-3xl -z-10 hidden sm:block"></div>

              {/* Main image container */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src="/banner.png"
                  alt="Blessings Mobile Grocery Truck delivering fresh groceries"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#EC1A1C] text-white px-6 py-4 rounded-2xl shadow-lg hidden sm:block">
                <p className="text-sm font-semibold">Delivering</p>
                <p className="text-2xl font-bold">Blessings 2 U</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;