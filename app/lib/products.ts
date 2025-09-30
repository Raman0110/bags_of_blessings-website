import { ProductCategory } from "./categories"

export type Product = {
  name: string,
  category: string,
  description: string,
  image: string,
  slug: string
}

export const rawProducts = [
  // _breakfast-lunch_
  { name: "Bacon", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/Bacon.png" },
  { name: "Bread-2", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/Bread-2.png" },
  { name: "Breakfast-Croissant", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/Breakfast-Croissant.png" },
  { name: "Cinnamon Toast Crunch", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/Cinnamon Toast Crunch.png" },
  { name: "Eggs-36ct", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/Eggs-36ct.png" },
  { name: "French-Toast-Sticks", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/French-Toast-Sticks.png" },
  { name: "Hot-Dog-Buns", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/Hot-Dog-Buns.png" },
  { name: "image-12", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/image-12.png" },
  { name: "image-35", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/image-35.png" },
  { name: "KelloggΓÇÖs Eggo Frozen Waffles", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/KelloggΓÇÖs Eggo Frozen Waffles.png" },
  { name: "Kolache-Sausage-Cheese", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/Kolache-Sausage-Cheese.png" },
  { name: "Members-Mark-Chicken-Sandwich", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/Members-Mark-Chicken-Sandwich.png" },
  { name: "Old-Folks-Sausage-Links", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/Old-Folks-Sausage-Links.png" },
  { name: "Old-Folks-Sausage-Patties", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/Old-Folks-Sausage-Patties.png" },
  { name: "Pancake-Stick", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/Pancake-Stick.png" },
  { name: "Ritz-Cheese-Bits", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/Ritz-Cheese-Bits.png" },
  { name: "Ritz-Cheese-Cracker-Sandwiches", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/Ritz-Cheese-Cracker-Sandwiches.png" },
  { name: "Variety-Cereal", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/Variety-Cereal.png" },
  { name: "Variety-Oatmeal", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/Variety-Oatmeal.png" },
  { name: "Wheat-Bread-2", category: "_breakfast-lunch_", description: "", image: "/productImages/_breakfast-lunch_/Wheat-Bread-2.png" },

  // _drinks_
  { name: "Big-Red-36ct", category: "_drinks_", description: "", image: "/productImages/_drinks_/Big-Red-36ct.png" },
  { name: "Coca-Cola-35ct", category: "_drinks_", description: "", image: "/productImages/_drinks_/Coca-Cola-35ct.png" },
  { name: "Dr-Pepper-35ct", category: "_drinks_", description: "", image: "/productImages/_drinks_/Dr-Pepper-35ct.png" },
  { name: "Gatorade-Thirst-Quencher-1", category: "_drinks_", description: "", image: "/productImages/_drinks_/Gatorade-Thirst-Quencher-1.png" },
  { name: "Icee-Freeze-Squeeze-Up-Variety", category: "_drinks_", description: "", image: "/productImages/_drinks_/Icee-Freeze-Squeeze-Up-Variety.png" },
  { name: "Kool-Aid-drink-mix", category: "_drinks_", description: "", image: "/productImages/_drinks_/Kool-Aid-drink-mix.png" },
  { name: "Kool-Aid-Jammers-drink", category: "_drinks_", description: "", image: "/productImages/_drinks_/Kool-Aid-Jammers-drink.png" },
  { name: "Lemonade-Tea", category: "_drinks_", description: "", image: "/productImages/_drinks_/Lemonade-Tea.png" },
  { name: "Members-Mark-Water", category: "_drinks_", description: "", image: "/productImages/_drinks_/Members-Mark-Water.png" },
  { name: "Motts-Apple-Juice", category: "_drinks_", description: "", image: "/productImages/_drinks_/Motts-Apple-Juice.png" },
  { name: "Mountain-Dew-24ct", category: "_drinks_", description: "", image: "/productImages/_drinks_/Mountain-Dew-24ct.png" },
  { name: "Orange-Juice", category: "_drinks_", description: "", image: "/productImages/_drinks_/Orange-Juice.png" },
  { name: "Pepsi-36ct", category: "_drinks_", description: "", image: "/productImages/_drinks_/Pepsi-36ct.png" },
  { name: "Shasta-Soda", category: "_drinks_", description: "", image: "/productImages/_drinks_/Shasta-Soda.png" },
  { name: "Sprite-35ct", category: "_drinks_", description: "", image: "/productImages/_drinks_/Sprite-35ct.png" },
  { name: "Variety-Arizona-Juice-24pk-1", category: "_drinks_", description: "", image: "/productImages/_drinks_/Variety-Arizona-Juice-24pk-1.png" },
  { name: "Whole-Milk", category: "_drinks_", description: "", image: "/productImages/_drinks_/Whole-Milk.png" },

  // _frozen-food_
  { name: "Angus-Beef-Patties", category: "_frozen-food_", description: "", image: "/productImages/_frozen-food_/Angus-Beef-Patties.png" },
  { name: "Angus-Cheeseburgers", category: "_frozen-food_", description: "", image: "/productImages/_frozen-food_/Angus-Cheeseburgers.png" },
  { name: "Broccoli-Normandy", category: "_frozen-food_", description: "", image: "/productImages/_frozen-food_/Broccoli-Normandy.png" },
  { name: "Chicken-Fried-Rice", category: "_frozen-food_", description: "", image: "/productImages/_frozen-food_/Chicken-Fried-Rice.png" },
  { name: "chicken-patties", category: "_frozen-food_", description: "", image: "/productImages/_frozen-food_/chicken-patties.png" },
  { name: "DJs-Boudain", category: "_frozen-food_", description: "", image: "/productImages/_frozen-food_/DJs-Boudain.png" },
  { name: "Gortons-Fish-Sticks", category: "_frozen-food_", description: "", image: "/productImages/_frozen-food_/Gortons-Fish-Sticks.png" },
  { name: "image-28-400x400", category: "_frozen-food_", description: "", image: "/productImages/_frozen-food_/image-28-400x400.png" },
  { name: "image-40", category: "_frozen-food_", description: "", image: "/productImages/_frozen-food_/image-40.png" },
  { name: "Pepperjack-Cheese", category: "_frozen-food_", description: "", image: "/productImages/_frozen-food_/Pepperjack-Cheese.png" },
  { name: "Pork-Egg-Rolls", category: "_frozen-food_", description: "", image: "/productImages/_frozen-food_/Pork-Egg-Rolls.png" },
  { name: "Red-Barron-Pizza", category: "_frozen-food_", description: "", image: "/productImages/_frozen-food_/Red-Barron-Pizza.png" },
  { name: "School-Burritos-Beef-Cheese", category: "_frozen-food_", description: "", image: "/productImages/_frozen-food_/School-Burritos-Beef-Cheese.png" },
  { name: "Steak-Fingers", category: "_frozen-food_", description: "", image: "/productImages/_frozen-food_/Steak-Fingers.png" },
  { name: "Totinos-Pizza-Rolls", category: "_frozen-food_", description: "", image: "/productImages/_frozen-food_/Totinos-Pizza-Rolls.png" },
  { name: "tyson-white-meat-frozen-chicken-nugget", category: "_frozen-food_", description: "", image: "/productImages/_frozen-food_/tyson-white-meat-frozen-chicken-nugget.png" },
  { name: "Zummo-Sausage", category: "_frozen-food_", description: "", image: "/productImages/_frozen-food_/Zummo-Sausage.png" },

  // _snackbar_
  { name: "Classic-Mix-Variety-Pack", category: "_snackbar_", description: "", image: "/productImages/_snackbar_/Classic-Mix-Variety-Pack.png" },
  { name: "Doritos-and-Cheetos-Mix-Variety-Pack", category: "_snackbar_", description: "", image: "/productImages/_snackbar_/Doritos-and-Cheetos-Mix-Variety-Pack.png" },
  { name: "Fito-Lay Chips", category: "_snackbar_", description: "", image: "/productImages/_snackbar_/Fito-Lay Chips.png" },
  { name: "Ham & Cheddar Cheese & Turkey & American Cheese Cracker", category: "_snackbar_", description: "", image: "/productImages/_snackbar_/Ham & Cheddar Cheese & Turkey & American Cheese Cracker.png" },
  { name: "Kelloggs-Game-Time-Snacks", category: "_snackbar_", description: "", image: "/productImages/_snackbar_/Kelloggs-Game-Time-Snacks.png" },
  { name: "Nissin Cup Noodles, Chicken Flavor", category: "_snackbar_", description: "", image: "/productImages/_snackbar_/Nissin Cup Noodles, Chicken Flavor.png" },
  { name: "Premiere-Mix-Variety-Pack-Chips", category: "_snackbar_", description: "", image: "/productImages/_snackbar_/Premiere-Mix-Variety-Pack-Chips.png" },

  // cakes-cookies
  { name: "CHIPS AHOY -Chocolate Chip Cookies", category: "cakes-cookies", description: "", image: "/productImages/cakes-cookies_/CHIPS AHOY -Chocolate Chip Cookies.png" },
  { name: "Ding-Dongs", category: "cakes-cookies", description: "", image: "/productImages/cakes-cookies_/Ding-Dongs.png" },
  { name: "Drumstick-variety-pack", category: "cakes-cookies", description: "", image: "/productImages/cakes-cookies_/Drumstick-variety-pack.png" },
  { name: "Hostess-donettes", category: "cakes-cookies", description: "", image: "/productImages/cakes-cookies_/Hostess-donettes.png" },
  { name: "Iced-Honey-Buns", category: "cakes-cookies", description: "", image: "/productImages/cakes-cookies_/Iced-Honey-Buns.png" },
  { name: "Little-Bites-Party-Cake-Muffins", category: "cakes-cookies", description: "", image: "/productImages/cakes-cookies_/Little-Bites-Party-Cake-Muffins.png" },
  { name: "Little-Debbie-Oatmeal-Creme-Pies", category: "cakes-cookies", description: "", image: "/productImages/cakes-cookies_/Little-Debbie-Oatmeal-Creme-Pies.png" },
  { name: "Nabisco-Cookie-Variety-Pack-40-pk", category: "cakes-cookies", description: "", image: "/productImages/cakes-cookies_/Nabisco-Cookie-Variety-Pack-40-pk.png" },
  { name: "Oreo-Cookies", category: "cakes-cookies", description: "", image: "/productImages/cakes-cookies_/Oreo-Cookies.png" },
  { name: "Regular-Honey-Buns", category: "cakes-cookies", description: "", image: "/productImages/cakes-cookies_/Regular-Honey-Buns.png" },
  { name: "Rice-krispies-treats", category: "cakes-cookies", description: "", image: "/productImages/cakes-cookies_/Rice-krispies-treats.png" },

  // candy-bar
  { name: "AirHeads-Bites", category: "candy-bar", description: "", image: "/productImages/candy-bar_/AirHeads-Bites.png" },
  { name: "image-25", category: "candy-bar", description: "", image: "/productImages/candy-bar_/image-25.png" },
  { name: "image-26", category: "candy-bar", description: "", image: "/productImages/candy-bar_/image-26.png" },
  { name: "image-34", category: "candy-bar", description: "", image: "/productImages/candy-bar_/image-34.png" },
  { name: "image-39", category: "candy-bar", description: "", image: "/productImages/candy-bar_/image-39.png" },
  { name: "Mars-Candy-Bar-Mix", category: "candy-bar", description: "", image: "/productImages/candy-bar_/Mars-Candy-Bar-Mix.png" },
  { name: "Skittle-Starburst-Mix", category: "candy-bar", description: "", image: "/productImages/candy-bar_/Skittle-Starburst-Mix.png" },

  // meat-poultry-sea-food
  { name: "7-Streaks", category: "meat-poultry-sea-food", description: "", image: "/productImages/meat-poultry-sea-food_/7-Streaks.png" },
  { name: "Chicken-Breast-1", category: "meat-poultry-sea-food", description: "", image: "/productImages/meat-poultry-sea-food_/Chicken-Breast-1.png" },
  { name: "Chicken-Patties", category: "meat-poultry-sea-food", description: "", image: "/productImages/meat-poultry-sea-food_/Chicken-Patties.png" },
  { name: "chicken-wings-600x600", category: "meat-poultry-sea-food", description: "", image: "/productImages/meat-poultry-sea-food_/chicken-wings-600x600.webp" },
  { name: "ground-beef-1", category: "meat-poultry-sea-food", description: "", image: "/productImages/meat-poultry-sea-food_/ground-beef-1.png" },
  { name: "Oxtails", category: "meat-poultry-sea-food", description: "", image: "/productImages/meat-poultry-sea-food_/Oxtails.png" },
  { name: "Pork-Chops", category: "meat-poultry-sea-food", description: "", image: "/productImages/meat-poultry-sea-food_/Pork-Chops.png" },
  { name: "shrimp-1", category: "meat-poultry-sea-food", description: "", image: "/productImages/meat-poultry-sea-food_/shrimp-1.png" },
  { name: "Tilapia", category: "meat-poultry-sea-food", description: "", image: "/productImages/meat-poultry-sea-food_/Tilapia.png" },
  { name: "Tysons-Buffalo-Wings", category: "meat-poultry-sea-food", description: "", image: "/productImages/meat-poultry-sea-food_/Tysons-Buffalo-Wings.png" },
]

function createSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
}

export const products: Product[] = rawProducts.map((p) => ({
  ...p,
  slug: createSlug(p.name)
}));

export const getProductsByCategory = (categorySlug: ProductCategory) => {
  const decodedCategory = decodeURIComponent(categorySlug);
  const selectedProducts = products.filter((p) => p.category === decodedCategory);
  return selectedProducts;
}

export const getProductBySlug = (slug: string) => {
  const decodedSlug = decodeURIComponent(slug);
  const selectedProduct = products.find((p) => p.slug === decodedSlug);
  if (!selectedProduct) console.log("Sorry no product found");
  return selectedProduct;
};