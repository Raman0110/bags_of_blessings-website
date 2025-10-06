import Image from "next/image";

const Welcome = () => {
  return (
    <section className="py-10 section-padding overflow-hidden bg-white">
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
          {/* <div className="inline-block">
            <span className="bg-[#FCFADE] text-[#EC1A1C] px-4 py-2 rounded-full text-sm font-semibold">
              Welcome to
            </span>
          </div>

          <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold text-[#1D2030] leading-tight">
            Bags of Blessings Mobile Grocery
          </h1> */}

          <p className="text-base sm:text-md text-[#343538] leading-relaxed text-justify">
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
        </div>
      </div>
    </section>
  );
};

export default Welcome;