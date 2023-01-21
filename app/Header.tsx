import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: "tomato",
        display: "flex",
      }}
    >
      <Link style={{ padding: "10px", color: "white" }} href="/">
        Home
      </Link>
      <Link style={{ padding: "10px", color: "white" }} href="/products">
        Products
      </Link>
    </div>
  );
}
