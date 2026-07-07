"use client";
import { allProducts } from "@/util/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import myImg from "../../../assets/img-1.jpg";

const page = () => {
  const router = useRouter();
  const getItem = (e: number) => {
    router.push(`/products/${e}`);
  };

  return (
    <div>
      <Image src={"https://images.pexels.com/photos/12036954/pexels-photo-12036954.jpeg?_gl=1*1pmx47g*_ga*MTA2ODQ2NzMwNC4xNzMxNDI3MzE5*_ga_8JE65Q40S6*czE3ODM0MzU0NTMkbzEzJGcxJHQxNzgzNDM1NjEwJGo0MyRsMCRoMA.."} alt="jfhfjf" width={100} height={100} />
      {/* <img src="/assets/img-1.jpg" alt="dddd" /> */}
      <div>
        {allProducts.map((item, i) => (
          <div
            onClick={() => getItem(i)}
            key={i}
            className="border text-center p-8 rounded-2xl w-100 h-100 ml-52 mt-16 mb-10 text-green-400 bg-white "
          >
            <h3 className="text-2xl font-bold">Title: {item.title}</h3>
            <h3 className="text-2xl font-bold">
              Description: {item.description}
            </h3>
            <h3 className="text-2xl font-bold">Price: {item.price}</h3>
            <h3 className="text-2xl font-bold">Quantity: {item.quantity}</h3>
            <Image src={item.img} alt="jfhfjf" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
