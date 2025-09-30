import { getCategoryNameBySlug, ProductCategory } from "@/app/lib/categories"
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
      <Feature categoryName={categoryName as string} />
      <div className="grid gap-6 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 max-w-md md:max-w-none mx-auto mt-6">
        {products.map((product, index) => (
          <Link href={`/product/${product.slug}`} key={index}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default page