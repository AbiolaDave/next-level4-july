"use client";
import { Product } from "@/util/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();

  const [products, setProducts] = useState<[Product]>();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let resp = await fetch("https://dummyjson.com/products");
      let data = await resp.json();
      setProducts(data.products);
      console.log(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = (param: number) => {
    router.push(`/products/${param}`);
  };

  return (
    <div>
      <div>
        {products?.map((item, i) => (
          <div
            onClick={() => getItem(item.id)}
            key={i}
            className="border text-center p-8 rounded-2xl w-100 h-100 ml-52 mt-16 mb-10 text-green-400 bg-white "
          >
            <p>ID: {item.id}</p>
            <h3 className="text-2xl font-bold">Title: {item.title}</h3>
            <h3 className="text-2xl font-bold">
              Description: {item.description}
            </h3>

            <Image
              src={item.images[0]}
              alt={item.title}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
