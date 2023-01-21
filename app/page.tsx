import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import GetProducts from "./GetProducts";
import styles from "./page.module.css";

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
export type DataTypes = {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
};

export default async function Home() {
  const res = await fetch("https://dummyjson.com/products");
  const data: DataTypes | undefined = await res.json();
  return (
    <main className={styles.main}>
      <div>
        <Suspense fallback={<div>All Product Loading...</div>}>
          <GetProducts data={data} />
        </Suspense>
      </div>
    </main>
  );
}
