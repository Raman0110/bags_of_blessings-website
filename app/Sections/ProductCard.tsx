import Image from "next/image"
import { Product } from "../lib/products"

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="cursor-pointer h-48 sm:w-52 sm:h-64 p-4 bg-white flex flex-col items-center justify-between rounded-xl border border-gray-200">
      <Image
        src={product.image}
        alt={product.name}
        width={140}
        height={140}
        className="object-contain"
      />
      <p className="text-[#343538] text-center line-clamp-2">
        {product.name}
      </p>
    </div>
  )
}

export default ProductCard
