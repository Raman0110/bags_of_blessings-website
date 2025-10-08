"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { products } from "../lib/products";
import ProductCard from "./ProductCard";

type ProductType = typeof products[number];

const Product = () => {
  const [featured, setFeatured] = useState<ProductType[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("featuredProducts");
    if (stored) {
      setFeatured(JSON.parse(stored));
    } else {
      const randomProducts = [...products]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
      localStorage.setItem("featuredProducts", JSON.stringify(randomProducts));
      setFeatured(randomProducts);
    }
  }, []);

  if (featured.length === 0) return null; // loading state

  const hasMore = featured.length > 6;

  return (
    <section className="section-padding py-6">
      <h1 className="text-2xl sm:text-4fxl font-semibold mb-6 sm:mb-8 md:mb-10 text-[#1D2030]">
        Featured Products
      </h1>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-md md:max-w-none mx-auto">
        {featured.map((product, index) => (
          <Link
            href={`/product/${product.slug}`}
            key={index}
            className={`${index >= 6 && !showAll ? 'hidden md:block' : ''}`}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>

      {/* Show More button - only visible on small screens when there are more products */}
      {hasMore && (
        <div className="flex justify-center mt-8 md:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-[#EC1A1C] text-white font-semibold rounded-lg hover:bg-[#d41719] transition-colors duration-200 shadow-md"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Product;