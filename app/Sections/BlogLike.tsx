import Image from "next/image";

const BlogLike = () => {
  const features = [
    {
      image: "/grocery-1.jpg",
      title: "Wide Selection",
      subtitle: "Explore a wide range of fresh groceries, meats, snacks, and drinks.",
      description:
        "From fresh produce and quality meats to your favorite snacks and beverages, we stock everything you need for your household.",
    },
    {
      image: "/grocery-2.jpg",
      title: "Easy Browsing by Category",
      subtitle: "Simply browse by category and select exactly what you need.",
      description:
        "Our organized categories make shopping effortless. Quickly navigate through Meats & Poultry, Frozen Foods, Breakfast items, Snacks, Beverages, and more.",
    },
    {
      image: "/grocery-3.jpg",
      title: "Convenient Shopping Anywhere",
      subtitle: "Shopping made simple, right from your phone or doorstep.",
      description:
        "Shop online from the comfort of your home or flag down our mobile truck in your neighborhood.",
    },
  ];

  return (
    <section className="section-padding py-12 bg-white">
      <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#1D2030] mb-8 sm:mb-12 leading-normal">
        Grocery Delivery you can count on :
        Bags of Blessings Mobile Grocery
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-48 sm:h-56 lg:h-64 rounded-t-lg overflow-hidden bg-gray-100">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="bg-gray-100 p-4 h-60 sm:h-50 rounded-b-lg">
              <h3 className="text-md sm:text-lg font-bold text-[#343538]">
                {feature.title}
              </h3>
              <h4 className="text-sm font-semibold sm:text-md text-[#343538] my-2">
                {feature.subtitle}
              </h4>
              <p className="text-sm text-[#343538] text-justify">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogLike;