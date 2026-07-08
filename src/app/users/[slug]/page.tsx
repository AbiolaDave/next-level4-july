"use client";
import { Users } from "@/util/types";
import { use, useEffect, useState } from "react";

const page =  ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);
  const [user, setuser] = useState<Users>();
//   const [products, setProducts] = useState<Users>();
//   const [cart, setCart] = useState<Users>();
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const resp = await fetch(`https://dummyjson.com/users/${slug}`);
    //   const resp = await fetch(`https://dummyjson.com/products`);
    //   const resp = await fetch(`https://dummyjson.com/carts`);
      const data = await resp.json();
      setuser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>
        Name: {user?.firstName} {user?.lastName}
      </h1>
      <h1>Age: {user?.age}</h1>
      <h1>Email: {user?.email}</h1>
      <h1>Username: {user?.username}</h1>
      {/* <h1>Products: {products[cart.products.productid - 1].title} </h1> */}
    </div>
  );
};

export default page;
