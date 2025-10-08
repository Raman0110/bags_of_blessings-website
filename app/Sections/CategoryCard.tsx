import Image from "next/image"
import { Category } from "../lib/categories"

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <div className="h-80 py-2 sm:py-3 px-3 sm:px-4 rounded-xl gap-x-2 sm:gap-x-4 lg:gap-x-6 flex flex-col items-center justify-between bg-white border border-gray-300 hover:underline cursor-pointer min-h-60">
      <Image
        src={category.image}
        alt={category.categoryName}
        width={100}
        height={100}
        className="w-48 h-48"
      />
      <p className="py-8 ml-1 sm:ml-2 text-2xl text-center text-[#343538] font-bold">
        {category.categoryName}
      </p>
    </div>
  );
};

export default CategoryCard