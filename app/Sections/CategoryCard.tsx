import Image from "next/image"
import { Category } from "../lib/categories"

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <div className="py-1 px-4 rounded-xl gap-x-6 flex items-center justify-between min-w-[12rem] bg-[#F6F7F8] hover:underline cursor-pointer">
      <p className="ml-2 text-[#343538] font-semibold">{category.categoryName}</p>
      <Image src={category.image} alt="category" width={80} height={80} />
    </div>
  )
}

export default CategoryCard