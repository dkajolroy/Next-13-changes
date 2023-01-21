import Image from "next/image";
import React from "react";
import { ProductType } from "../page";
type ProductId = {
  params: {
    product: number;
  };
};

export default async function page({ params }: ProductId) {
  const res = await fetch(`https://dummyjson.com/products/${params.product}`);
  const product: ProductType = await res.json();

  return (
    <div>
      <Image
        width={400}
        height={300}
        alt={product.title}
        src={product.thumbnail}
      />
      <h2>{product.title}</h2>
    </div>
  );
}
