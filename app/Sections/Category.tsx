"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { categories } from "../lib/categories";
import CategoryCard from "./CategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

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
    <section className="section-padding py-16">
      <h1 className="max-md:px-8 text-3xl font-semibold mb-10 text-[#EC1A1C]">
        Shop what’s popular near you
      </h1>

      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[autoplay.current]}
        onMouseLeave={autoplay.current.reset}
      >
        <CarouselContent>
          {categories.map((category) => (
            <CarouselItem
              key={category.slug}
              className="md:basis-1/2 lg:basis-1/4"
            >
              <Link href={`/category/${category.slug}`}>
                <CategoryCard category={category} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Category;