import ProductCard from "./ProductCard"

const Product = () => {
  return (
    <section className="section-padding pb-6">
      <h1 className="max-md:px-8 text-3xl font-semibold mb-10 text-[#242529]">
        Featured Products
      </h1>
      <div className="grid gap-6 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 max-w-md md:max-w-none mx-auto">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  )
}

export default Product