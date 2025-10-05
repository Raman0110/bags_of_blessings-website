"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

import { categories } from "../lib/categories";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Category type definition
type Category = {
  slug: string;
  categoryName: string;
  image: string;
};

// CategoryCard Component
const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <div className="py-2 sm:py-3 px-3 sm:px-4 rounded-xl gap-x-2 sm:gap-x-4 lg:gap-x-6 flex items-center justify-between min-w-[10rem] sm:min-w-[12rem] bg-[#F6F7F8] hover:underline cursor-pointer transition-transform hover:scale-105">
      <p className="ml-1 sm:ml-2 text-sm sm:text-base text-[#343538] font-medium sm:font-semibold">
        {category.categoryName}
      </p>
      <Image
        src={category.image}
        alt={category.categoryName}
        width={40}
        height={40}
        className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"
      />
    </div>
  );
};

// Category Section Component
const Category = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true,
    })
  );

  return (
    <section className="section-padding py-6 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-14">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 md:mb-10 text-[#1D2030]">
        Shop what's popular near you
      </h1>

      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[autoplay.current]}
        onMouseLeave={autoplay.current.reset}
        className="w-full"
      >
        <CarouselContent className="-ml-2 sm:-ml-4">
          {categories.map((category) => (
            <CarouselItem
              key={category.slug}
              className="pl-2 sm:pl-4 basis-full xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Link href={`/category/${category.slug}`}>
                <CategoryCard category={category} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Hide carousel controls on very small screens, show from sm breakpoint */}
        <div className="hidden sm:block">
          <CarouselPrevious className="left-0 sm:-left-4 md:-left-6" />
          <CarouselNext className="right-0 sm:-right-4 md:-right-6" />
        </div>
      </Carousel>
    </section>
  );
};

export default Category;