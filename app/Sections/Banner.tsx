"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Banner = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollPosition / (windowHeight * 0.2), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const vanTranslateX = scrollProgress * -100;
  const rightTextOpacity = scrollProgress;
  const leftTextOpacity = 1 - scrollProgress;

  return (
    <main className="min-h-[40vh] sm:min-h-[80vh] bg-white flex items-center justify-between px-4 sm:px-8 md:px-14 pb-10 relative overflow-hidden">
      {/* Left text - Hidden on mobile */}
      <div
        className="hidden md:flex flex-1 transition-opacity duration-300 pointer-events-none z-10"
        style={{ opacity: leftTextOpacity }}
      >
        <div>
          <h2 className="font-montserrat font-black text-3xl lg:text-6xl text-[#EC1A1C] leading-snug mt-2">
            Bags Of Blessings <br /> Mobile Grocery
          </h2>
          <p className="italic mt-6 text-2xl font-semibold text-[#242529]">
            Delivering Blessings 2 U
          </p>
        </div>
      </div>

      {/* Van - Full width on mobile, flex-1 on desktop */}
      <div
        className="w-full md:flex-1 -mt-12 transition-transform duration-300"
        style={{ transform: `translateX(${vanTranslateX}%)` }}
      >
        <Image
          src="/van.png"
          alt="Banner image showing groceries"
          className="object-contain w-full h-auto"
          priority
          width={900}
          height={900}
        />
      </div>

      {/* Right text - Fades in on scroll for both mobile and desktop */}
      <div
        className="absolute right-4 sm:right-8 md:right-14 text-right transition-opacity duration-300 pointer-events-none z-10"
        style={{ opacity: rightTextOpacity }}
      >
        <h2 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-6xl text-[#EC1A1C] leading-snug mt-2">
          Fresh Groceries <br className="hidden sm:block" /> At Your Doorstep
        </h2>
        <p className="italic mt-4 sm:mt-6 text-lg sm:text-2xl font-semibold text-[#242529] max-w-[200px] sm:max-w-md ml-auto">
          Quality products delivered fresh
        </p>
      </div>
    </main>
  );
};

export default Banner;