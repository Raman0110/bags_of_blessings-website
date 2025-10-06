"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {

  return (
    <main className=" min-h-[40vh] sm:min-h-[80vh] flex flex-col-reverse lg:flex-row items-center gap-8 justify-start section-padding overflow-hidden">

      <div className="w-full lg:w-[45%] z-20 text-left">
        <h1 className="font-montserrat font-black text-xl sm:text-3xl lg:text-5xl text-[#EC1A1C] leading-tight">
          Bags Of Blessings
          <br className="hidden lg:block" />
          {" "}Mobile Grocery
        </h1>
        <p className="sm:text-lg sm:font-semibold text-[#242529] my-4 sm:my-5">
          5-Star Rated on Google – See Why Our Clients Rage & Review Us After Trying Our Fresh Products!
        </p>
        <div className="bg-white flex items-center gap-x-4 p-4 rounded-md max-w-[14rem]">
          <Image
            src={"/google.webp"}
            alt="google logo"
            className="w-8 h-8 sm:w-10 sm:h-10"
            width={40}
            height={40}
          />
          <div>

            <div className="flex">
              <Star className="text-yellow-300" fill="#FFD230" size="20px" />
              <Star className="text-yellow-300" fill="#FFD230" size="20px" />
              <Star className="text-yellow-300" fill="#FFD230" size="20px" />
              <Star className="text-yellow-300" fill="#FFD230" size="20px" />
              <Star className="text-yellow-300" fill="#FFD230" size="20px" />
            </div>
            <Link href={"https://share.google/ojew8juKijCyoRhRY"} target="blank">
              <p className="text-sm text-[#7D7D7D] font-semibold hover:underline">See all our reviews</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[60%]">
        <Image
          src="/van.png"
          alt="Banner image showing groceries"
          className="object-contain w-4xl min-h-76 sm:min-h-96 opacity-80"
          priority
          width={700}
          height={700}
        />
      </div>


    </main>
  );
};

export default Banner;