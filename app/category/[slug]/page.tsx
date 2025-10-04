import { categories, getCategoryNameBySlug, ProductCategory } from "@/app/lib/categories"
import { getProductsByCategory } from "@/app/lib/products"
import Feature from "@/app/Sections/Feature"
import ProductCard from "@/app/Sections/ProductCard"
import Link from "next/link"

type CategorySlugParams = {
  params: {
    slug: string
  }
}

const page = ({ params }: CategorySlugParams) => {
  const products = getProductsByCategory(params.slug as ProductCategory);
  const categoryName = getCategoryNameBySlug(params.slug as ProductCategory);

  return (
    <section className="section-padding">
      {/* Container to center content and provide max width */}
      <div className="max-w-7xl mx-auto">
        {/* On small screens stack vertically; on md+ show sidebar + main */}
        <div className="flex flex-col md:flex-row md:items-start gap-y-6 md:gap-x-10">
          {/* Sidebar */}
          <aside className="w-full md:w-56">
            <nav aria-label="Product categories" className="bg-transparent">
              <div className="flex md:flex-col gap-x-4 md:gap-x-0 md:gap-y-2 overflow-x-auto md:overflow-visible pb-1">
                {categories?.map((category) => (
                  <Link
                    href={`/category/${category.slug}`}
                    key={category.slug}
                    aria-label={`View ${category.categoryName} category`}
                    className="shrink-0 md:shrink-auto"
                  >
                    <p
                      className="text-[#242529] py-2 px-2 md:px-0 cursor-pointer hover:text-[#EC1A1C] font-semibold whitespace-nowrap md:whitespace-normal"
                    >
                      {category.categoryName}
                    </p>
                  </Link>
                ))}
              </div>
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            <Feature categoryName={categoryName as string} />
            <div className="mt-6">
              <div
                className={`grid gap-6 mx-auto 
        ${products.length === 1
                    ? "grid-cols-1 place-items-center"
                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}`}
              >
                {products.map((product) => (
                  <Link
                    href={`/product/${product.slug}`}
                    key={product.slug}
                    aria-label={`View ${product.name}`}
                    className="group"
                  >
                    <ProductCard product={product} />
                  </Link>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}

export default page
