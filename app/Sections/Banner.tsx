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
    <main className="min-h-[80vh] bg-[#EC1A1C] flex items-center justify-between px-14 pb-10 relative overflow-hidden">
      {/* Left text */}
      <div
        className="flex-1 transition-opacity duration-300 pointer-events-none z-10"
        style={{ opacity: leftTextOpacity }}
      >
        <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-6xl text-white leading-snug mt-2">
          Bags Of Blessings <br className="hidden sm:block" /> Mobile Grocery
        </h2>
        <p className="italic mt-6 text-2xl font-semibold text-[#242529]">
          " Delivering Blessings 2 U "
        </p>
      </div>

      {/* Van */}
      <div
        className="flex-1 -mt-12 transition-transform duration-300"
        style={{ transform: `translateX(${vanTranslateX}%)` }}
      >
        <Image
          src="/banner.png"
          alt="Banner image showing groceries"
          className="object-contain w-full h-auto"
          priority
          width={900}
          height={900}
        />
      </div>

      {/* Right text */}
      <div
        className="absolute right-14 text-right transition-opacity duration-300 pointer-events-none z-10"
        style={{ opacity: rightTextOpacity }}
      >
        <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-6xl text-white leading-snug mt-2">
          Fresh Groceries <br className="hidden sm:block" /> At Your Doorstep
        </h2>
        <p className="italic mt-6 text-2xl font-semibold text-[#242529] max-w-md ml-auto">
          " Quality products delivered fresh "
        </p>
      </div>
    </main>
  );
};

export default Banner;
