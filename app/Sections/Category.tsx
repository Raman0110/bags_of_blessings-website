"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

import { categories } from "../lib/categories";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CategoryCard from "./CategoryCard";

// Category type definition
type Category = {
  slug: string;
  categoryName: string;
  image: string;
};

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
      <h1 className="text-2xl sm:text-4xl font-semibold mb-6 sm:mb-8 md:mb-10 text-[#1D2030]">
        Browse Our Hottest Categories
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