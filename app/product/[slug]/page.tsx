import Feature from "@/app/Sections/Feature"
import Product from "@/app/Sections/Product"
import { Handbag, ShoppingBag, Truck } from "lucide-react"
import Image from "next/image"

const page = () => {
  return (
    <section>
      <Feature />
      <div className="py-20 section-padding flex items-start gap-12">
        <div className="flex-1">
          <Image src={"/banner.webp"} alt="product" width={500} height={500} />
        </div>
        <div className="flex-1">
          <h2 className="text-[#343538] font-bold text-2xl">Fresh Produce</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quia dolores pariatur quod, officiis natus libero quo, beatae doloremque commodi perspiciatis optio incidunt! Eveniet illum maxime amet beatae totam ducimus.</p>
          <div className="flex justify-between border border-gray-200 p-6 mt-6 rounded-2xl">
            <div className="text-center flex flex-col items-center">
              <ShoppingBag />
              <span className="font-semibold pt-2">Delivery</span>
              <span className="block text-green-600">by 8:35 am today</span>
              or schedule a time
            </div>
            <div className="text-center flex flex-col items-center">
              <Truck />
              <span className="font-semibold pt-2">Pickup</span>
              <span className="block text-green-600">Available</span>
              See times at checkout
            </div>
          </div>
        </div>
      </div>
      <Product />
    </section>
  )
}

export default page