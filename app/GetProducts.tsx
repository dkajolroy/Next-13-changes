import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DataTypes, ProductType } from "./page";

export default function GetProducts({ data }: { data: DataTypes | undefined }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {data?.products?.map((item: ProductType, index) => (
        <div
          key={index}
          style={{
            width: "20%",
          }}
        >
          <div
            style={{
              margin: "5px",
              height: "200px",
              backgroundColor: "lightgray",
            }}
          >
            <Link href={`/${item.id}`}>
              <Image
                loading="lazy"
                width={200}
                height={150}
                src={item.thumbnail}
                alt={item.title}
              />
              <h4>{item.title}</h4>
              <h4>{item.price}</h4>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
