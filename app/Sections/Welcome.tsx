import Image from "next/image";

const Welcome = () => {
  return (
    <section className="py-6 md:py-10 section-padding overflow-hidden bg-gradient-to-br from-[#FFF5EB] to-white">
      <h1 className="text-left sm:text-center py-6 md:py-12 px-4">
        <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#EC1A1C] leading-tight">
          Welcome to Bags Of Blessings Mobile Grocery
        </span>
        <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#1D2030] mt-3 md:mt-6">
          Delivering Blessings 2 U
        </span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

        <div className="w-full lg:w-1/2">
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-[#FCFADE] rounded-3xl -z-10 hidden sm:block"></div>

            {/* Main image container */}
            <Image
              src="/banner.png"
              alt="Blessings Mobile Grocery Truck delivering fresh groceries"
              width={400}
              height={400}
              className="w-full h-auto object-cover mx-auto rounded-2xl"
              priority
            />

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#EC1A1C] text-white px-6 py-4 rounded-2xl shadow-lg hidden sm:block">
              <p className="text-sm font-semibold">Delivering</p>
              <p className="text-2xl font-bold">Blessings 2 U</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6">
          <p className="text-base sm:text-lg text-[#343538] leading-relaxed text-justify">
            We make grocery shopping{" "}
            simple, stress-free, and convenient
            . We bring a fully stocked store right to your curb. Our mobile
            truck delivers all your{" "}
            essentials like{" "}
            Meat, Poultry & Seafood, Frozen Food, Breakfast & Lunch items,
            Snacks, Cakes, Cookies, Candy, and Drinks
            —all straight to your doorstep.
          </p>

          <p className="text-base sm:text-lg text-[#343538] leading-relaxed text-justify">
            We are proud to serve the Houston community and surrounding neighborhoods. We believe everyone deserves easy access to quality food, which is why we happily accept SNAP benefits online via EBT cards and Lonestar benefits. choose Bags Of Blessings Mobile Grocery for quality products, great savings, and service you can trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;