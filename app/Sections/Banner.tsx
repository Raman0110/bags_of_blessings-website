import Image from "next/image"


const Banner = () => {
  return (
    <main className="min-h-[85vh] section-padding bg-[#FAF1E5] flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-12 py-8 lg:py-0">

      <div className="flex-1 max-w-lg text-center lg:text-left">
        <h2 className="heading font-bold text-[#242529] leading-tight">
          Grocery delivery
        </h2>
        <h2 className="heading font-bold text-[#242529] leading-tight">
          near me
        </h2>
        <p className="pt-4 sm:pt-6 text-base sm:text-lg text-[#666] max-w-md mx-auto lg:mx-0">
          Ready in as little as 1 hour
        </p>
      </div>
      <div className="flex-1">
        <Image
          src="/banner.webp"
          alt="banner-image"
          className="object-contain"
          priority
          width={600}
          height={600}
        />
      </div>
    </main>
  )
}

export default Banner