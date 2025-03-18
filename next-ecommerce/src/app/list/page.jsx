import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import { wixClientServer } from "../lib/wixClientServer";
import { Suspense } from "react";
import Loading from "@/components/Loading";

async function page({ searchParams }) {
  const { cat } = searchParams;
  const wixClient = await wixClientServer();
  console.log(cat);
  const res = await wixClient.collections.getCollectionBySlug(
    cat || "all-products"
  );
  console.log(res);
  const categorys = await wixClient.collections.queryCollections().find();
  console.log("object");
  console.log(categorys._items);
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="rounded-3xl bg-primary text-white w-max py-3 px-4 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src="/woman.png"
            alt="avatar image"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <Filter categorys={categorys._items} />
      <h1 className="mt-12 text-xl font-semibold">choose For You</h1>
      <Suspense fallback={<Loading />}>
        <ProductList
          catgoryId={res.collection._id}
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
}

export default page;
