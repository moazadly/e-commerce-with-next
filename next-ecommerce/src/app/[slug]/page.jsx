import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";

import ProductImages from "../../components/ProductImages";
import { wixClientServer } from "../lib/wixClientServer";
import { notFound } from "next/navigation";

import DOMPurify from "isomorphic-dompurify";

async function page({ params }) {
  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();
  console.log(products);
  if (products.items.length === 0) {
    return notFound();
  }
  const product = products.items[0];
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 mt-24">
      <div className="w-full lg:w-1/2 lg:sticky top-0 h-max">
        <ProductImages items={product.media.items} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p
          className="text-gray-500"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(product.description || ""),
          }}
        ></p>
        <div className="h-[2px] bg-gray-100" />
        {product.price.price === product.price.discountedPrice ? (
          <h2 className="text-2xl font-semibold">
            ${product.price.discountedPrice}
          </h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.price.price}
            </h3>
            <h2 className="text-2xl font-semibold">
              ${product.price.discountedPrice}
            </h2>
          </div>
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.variants && product.productOptions ? (
          <CustomizeProducts
            productId={product._id}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        ) : (
          <Add
            productId={product._id}
            variantId="00000000-0000-0000-0000-000000000000"
            stockNumber={product.stock?.quantity || 0}
          />
        )}

        <div className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections?.map((section) => {
          return (
            <div className="text-sm">
              <h4 className="font-medium mb-4">{section.title}</h4>
              <p>{section.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
