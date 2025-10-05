"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { products } from "../lib/products";
import ProductCard from "./ProductCard";

type ProductType = typeof products[number];

const Product = () => {
  const [featured, setFeatured] = useState<ProductType[]>([]);

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

  return (
    <section className="section-padding py-6">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 md:mb-10 text-[#1D2030]">
        Featured Products
      </h1>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-md md:max-w-none mx-auto">
        {featured.map((product, index) => (
          <Link href={`/product/${product.slug}`} key={index}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Product;
