import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/img-3.jpg";

export const allProducts = [
  {
    title: "Nike Shoe",
    description: "White classic nike shoe",
    price: "#40,000",
    quantity: 6,
    img: img1,
  },
  {
    title: "Hp Laptop",
    description: "iCore 8, 450gb hard disk drive",
    price: "#800,000",
    quantity: 4,
    img: img2,
  },
  {
    title: "Diamond Ring",
    description: "Beatiful diamond ring",
    price: "#5,000,000",
    quantity: 2,
    img: img3,
  },
];

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  images: string;
  price: number;
};

export type Users = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  username: string;
  image: string;
};

export type Cart = {
  id: number;
  userId: number;
  date: string;
  products: {
    productId: number;
    quantity: number;
  }[];
}
