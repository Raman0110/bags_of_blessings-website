// lib/categories.ts

export type Category = {
  categoryName: string;
  image: string;
  slug: string;
};

export type ProductCategory = "_drinks_" | "_frozen-food_" | "_snackbar_" | "cakes-cookies" | "candy-bar" | "meat-poultry-sea-food" | "_breakfast-lunch_"

export const categories: Category[] = [
  {
    categoryName: "Drinks",
    image: "/categoryImages/DrinksImage.png",
    slug: "_drinks_",
  },
  {
    categoryName: "Frozen Food",
    image: "/categoryImages/FrozenFoodImage.png",
    slug: "_frozen-food_",
  },
  {
    categoryName: "Snack Bar",
    image: "/categoryImages/SnackBarImage.png",
    slug: "_snackbar_",
  },
  {
    categoryName: "Cakes & Cookies",
    image: "/categoryImages/CakeCookieImage.png",
    slug: "cakes-cookies",
  },
  {
    categoryName: "Candy Bar",
    image: "/categoryImages/CandyBarImage.png",
    slug: "candy-bar",
  },
  {
    categoryName: "Meat, Poultry & Seafood",
    image: "/categoryImages/MeatImage.png",
    slug: "meat-poultry-sea-food",
  },
  {
    categoryName: "Breakfast & Lunch",
    image: "/categoryImages/BreakfastLunchImage.png",
    slug: "_breakfast-lunch_",
  },
];

export const getCategoryBySlug = (slug: ProductCategory) =>
  categories.find((c) => c.slug === slug);

export const getCategoryNameBySlug = (slug: ProductCategory) => {
  const category = categories.find((c) => c.slug === slug)
  if (!category) {
    return console.log("No category found");
  }
  return category.categoryName;
}