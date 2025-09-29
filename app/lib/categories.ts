// lib/categories.ts

export type Category = {
  categoryName: string;
  image: string;
  slug: string;
};

export const categories: Category[] = [
  {
    categoryName: "Drinks",
    image: "/categoryImages/DrinksImage.png",
    slug: "drinks",
  },
  {
    categoryName: "Frozen Food",
    image: "/categoryImages/FrozenFoodImage.png",
    slug: "frozen-food",
  },
  {
    categoryName: "Snack Bar",
    image: "/categoryImages/SnackBarImage.png",
    slug: "snackbar",
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
    slug: "breakfast-lunch",
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);
