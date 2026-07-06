const allProducts = [
  {
    title: "Nike Shoe",
    description: "White classic nike shoe",
    price: "#40,000",
    quantity: 6,
  },
  {
    title: "Hp Laptop",
    description: "iCore 8, 450gb hard disk drive",
    price: "#800,000",
    quantity: 4,
  },
  {
    title: "Diamond Ring",
    description: "Beatiful diamond ring",
    price: "#5,000,000",
    quantity: 2,
  },
];

const page = () => {
  return (
    <div>
      <div>
        {allProducts.map((item, i) => (
          <div
            key={i}
            className="border text-center p-8 rounded-2xl w-100 h-100 ml-52 mt-16 mb-10 text-green-400 bg-white "
          >
            <h3 className="text-2xl font-bold">Title: {item.title}</h3>
            <h3 className="text-2xl font-bold">Description: {item.description}</h3>
            <h3 className="text-2xl font-bold">Price: {item.price}</h3>
            <h3 className="text-2xl font-bold">Quantity: {item.quantity}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
