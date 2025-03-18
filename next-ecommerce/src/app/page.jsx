import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import CategorieList from "../components/CategorieList";
import { Suspense } from "react";
import Loading from "../components/Loading";
const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={<Loading />}>
          <ProductList catgoryId={process.env.FEATURE_CATEGORY_ID} limit={4} />
        </Suspense>
      </div>
      <div className="">
        <h1 className="text-2xl mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <Suspense fallback={<Loading />}>
          <CategorieList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Arrival</h1>
        <ProductList
          catgoryId={"68df9206-3cd2-3836-b787-4dbe1c435289"}
        ></ProductList>
      </div>
    </div>
  );
};

export default HomePage;
