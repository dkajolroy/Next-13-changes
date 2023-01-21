import Image from "next/image";
import Link from "next/link";
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
type DataTypes = {
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
    </main>
  );
}
