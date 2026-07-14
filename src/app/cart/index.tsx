"use client";
import { Cart, Product } from "@/util/types";
import { useEffect, useState } from "react";

const Carts = () => {
  const [products, setProducts] = useState<Product[]>();
  const [cart, setCart] = useState<Cart[]>();

  useEffect(() => {
    fetchCarts();
  }, []);

  const fetchCarts = async () => {
    try {
      let productResp = await fetch("https://fakestoreapi.com/products");
      let productData = await productResp.json();
      setProducts(productData);
      let cartResp = await fetch("https://fakestoreapi.com/carts");
      let cartData = await cartResp.json();
      setCart(cartData);
      console.log({ cartData, productData });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-8 shadow-[0_28px_100px_-40px_rgba(15,23,42,0.95)] backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/90">
            Shopping Cart
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-white/95 sm:text-5xl">
            Your modern cart overview
          </h1>
          <p className="mt-4 max-w-2xl text-slate-400">
            Browse orders in a clean responsive layout. Each cart entry shows
            user details, quantities, and totals in a polished card style.
          </p>
        </header>

        {cart && products ? (
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {cart.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-[2rem] border border-slate-700/70 bg-slate-900/85 p-6 shadow-2xl shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
                      Order #{item.id}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white/95">
                      User {item.userId}
                    </h2>
                  </div>
                  <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm font-medium text-cyan-200 ring-1 ring-cyan-500/20">
                    Active
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {item.products.map((p) => {
                    const product = products[p.productId];
                    return (
                      <div
                        key={p.productId}
                        className="rounded-[1.5rem] border border-slate-700/60 bg-slate-950/80 p-4 transition duration-300 hover:border-cyan-400/40 hover:bg-slate-900/95"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-base font-semibold text-slate-100">
                              {product?.title ?? "Unknown product"}
                            </p>
                            <p className="mt-1 text-sm text-slate-400">
                              Qty:{" "}
                              <span className="font-medium text-slate-100">
                                {p.quantity}
                              </span>
                            </p>
                          </div>
                          <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
                            ${product ? product.price.toFixed(2) : "0.00"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 rounded-[1.5rem] bg-slate-950/90 p-5 text-right ring-1 ring-slate-700/50">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                    Estimated total
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">
                    $
                    {item.products
                      .reduce((acc, p) => {
                        const product = products[p.productId];
                        if (product) {
                          return acc + product.price * p.quantity;
                        }
                        return acc;
                      }, 0)
                      .toFixed(2)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[40vh] items-center justify-center rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-12 text-center shadow-[0_28px_100px_-40px_rgba(15,23,42,0.95)]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
                Cart empty
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-white/95">
                No Item In Cart
              </h2>
              <p className="mt-3 max-w-xl text-slate-400">
                Refresh or add products to see them appear in this modern cart
                view.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carts;
