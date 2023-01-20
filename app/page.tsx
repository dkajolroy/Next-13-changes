import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  const res = await fetch("https://dummyjson.com/products/1");
  const data = await res.json();
  return (
    <main className={styles.main}>
      {data.title}
      <h2>Hey lets good</h2>
    </main>
  );
}
