"use client";
import React, { useState } from "react";

export default function Add({ productId, variantId, stockNumber }) {
  const [quantity, setQuantity] = useState(1);
  const handelQuantity = (quantityChange) => {
    if (
      quantity + quantityChange < 1 ||
      quantity + quantityChange > stockNumber
    ) {
      return;
    }
    setQuantity((prevQuantity) => prevQuantity + quantityChange);
  };
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-medium">Choose a Quantity</h3>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handelQuantity(-1)}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handelQuantity(1)}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">{stockNumber} items</span>{" "}
            left!
            <br /> {"Don't"} miss it
          </div>
        </div>

        <button className="w-36 text-sm rounded-3xl ring-1 ring-primary py-2 px-4 hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:text-white disabled:ring-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
