import Image from "next/image"
import { Product } from "../lib/products"

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="cursor-pointer p-4 bg-white flex flex-col items-center rounded-xl border border-gray-200">
      <Image src={`${product.image}`} alt="product" width={140} height={140} />
      <p className="text-[#343538] font-semibold py-2">{product.name}</p>
    </div>
  )
}

export default ProductCard