"use client";
import { Product } from "@/util/types";
import { useEffect, useState } from "react";

// type Props = {
//     slug: string;
// }

const ProductPage = (param: { abiola: string }) => {
  console.log(param);
  const slug = param?.abiola;
  const [product, setProduct] = useState<Product>();
  console.log("My Slug:", slug);
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const resp = await fetch(`https://dummyjson.com/products/${slug}`);
      const data = await resp.json();
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {product ? (
        <>
          <h1 className="text-amber-600 text-6xl font-bold">
            Title: {product?.title}
          </h1>
          <h1 className="text-amber-600 text-6xl font-bold">
            Title: {product?.description}
          </h1>
          <h1>Category: {product?.category}</h1>
          {/* <Image
            src={product?.images[0]}
            alt={product?.title}
            width={100}
            height={100}
          /> */}
        </>
      ) : (
        <h1 className="text-center text-4xl text-red-600">
          Failed to fetch product
        </h1>
      )}
    </div>
  );
};

export default ProductPage;
