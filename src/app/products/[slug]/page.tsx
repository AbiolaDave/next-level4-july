"use client";
import { Product } from "@/util/types";
import { use, useState } from "react";
import ProductPage from ".";

const page = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);
  console.log("slug:", slug);

  const [product, setProduct] = useState<Product>();

  // const product = allProducts[parseInt(slug)];

  return (
    <>
      <ProductPage abiola={slug} />
    </>
  );
};

export default page;
