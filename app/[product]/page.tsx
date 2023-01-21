import Image from "next/image";
import React, { Suspense } from "react";
import { notFound } from "next/navigation";
type ProductId = {
  params: {
    product: number;
  };
};

export default async function page({ params }: ProductId) {
  const res = await fetch(`https://dummyjson.com/products/${params.product}`);
  const product = await res.json();

  if (product?.message) {
    notFound();
  }

  return (
    <div>
      {product ? (
        <>
          <Suspense fallback={<div>Product View</div>}>
            <Image
              width={400}
              height={300}
              alt={product.title}
              src={product.thumbnail}
            />
          </Suspense>
          <h2>{product.title}</h2>
        </>
      ) : null}
    </div>
  );
}
