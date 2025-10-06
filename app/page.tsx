

import Banner from "./Sections/Banner";
import Category from "./Sections/Category";
import CitiesWeServe from "./Sections/CityWeServe";
import Faq from "./Sections/Faq";
import InqueryForm from "./Sections/InqueryForm";
import Product from "./Sections/Product";
import Welcome from "./Sections/Welcome";

export default function Home() {
  return (
    <>
      <Banner />
      <Welcome />
      <Category />
      <Product />
      <Faq />
      <CitiesWeServe />
      <InqueryForm />
    </>
  );
}