import Image from "next/image";
import Link from "next/link";
import { wixClientServer } from "../app/lib/wixClientServer";

async function CategorieList() {
  const wixClient = await wixClientServer();

  const cat = await wixClient.collections.queryCollections().find();
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {cat.items.map((item) => {
          return (
            <Link
              href={`/list?cat=${item.slug}`}
              className="flex-shrink-0 w-full sm:w-1/2 lg-w-1/4 xl:w-1/6"
              key={item._id}
            >
              <div className="relative bg-slate-100 w-full h-96">
                <Image
                  src={item.media.mainMedia.image.url}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="mt-8 font-light text-xl tracking-wide">
                {item.name}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CategorieList;
