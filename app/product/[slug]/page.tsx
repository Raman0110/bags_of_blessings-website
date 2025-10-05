import { getProductBySlug } from "@/app/lib/products";
import Feature from "@/app/Sections/Feature";
import Product from "@/app/Sections/Product";
import { ShoppingBag, Truck } from "lucide-react";
import Image from "next/image";

type ProductSlugParams = {
  params: {
    slug: string;
  };
};

const page = ({ params }: ProductSlugParams) => {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#343538]">
          No product found
        </h1>
      </div>
    );
  }

  return (
    <section>
      <Feature />

      {/* Product Detail Section */}
      <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-14 flex flex-col lg:flex-row items-start gap-6 sm:gap-8 md:gap-12">
        {/* Product Image */}
        <div className="w-full lg:flex-1">
          <div className="relative w-full max-w-md mx-auto lg:max-w-none">
            <Image
              src={`${product.image}`}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:flex-1">
          <h2 className="text-[#343538] font-bold text-xl sm:text-2xl md:text-3xl mb-4">
            {product.name}
          </h2>
          <p className="text-sm sm:text-base text-[#343538] leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            quia dolores pariatur quod, officiis natus libero quo, beatae
            doloremque commodi perspiciatis optio incidunt! Eveniet illum maxime
            amet beatae totam ducimus.
          </p>

          {/* Delivery Options */}
          <div className="flex flex-col sm:flex-row justify-between border border-gray-200 p-4 sm:p-6 mt-6 rounded-xl sm:rounded-2xl gap-6 sm:gap-4">
            {/* Delivery */}
            <div className="text-center flex flex-col items-center flex-1">
              <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-[#343538]" />
              <span className="font-semibold pt-2 text-sm sm:text-base">
                Delivery
              </span>
              <span className="block text-green-600 text-sm sm:text-base">
                by 8:35 am today
              </span>
              <span className="text-xs sm:text-sm text-gray-600 mt-1">
                or schedule a time
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px bg-gray-200"></div>

            {/* Pickup */}
            <div className="text-center flex flex-col items-center flex-1">
              <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-[#343538]" />
              <span className="font-semibold pt-2 text-sm sm:text-base">
                Pickup
              </span>
              <span className="block text-green-600 text-sm sm:text-base">
                Available
              </span>
              <span className="text-xs sm:text-sm text-gray-600 mt-1">
                See times at checkout
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <Product />
    </section>
  );
};

export default page;