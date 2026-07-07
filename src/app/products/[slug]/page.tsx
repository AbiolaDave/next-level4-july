import { allProducts } from "@/util/types";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  console.log("slug:", slug);

  const product = allProducts[parseInt(slug)];

  return (
    <div>
      <h1 className="text-amber-600 text-6xl font-bold">
        Title: {product.title}
      </h1>
      <h1 className="text-amber-600 text-6xl font-bold">
        Title: {product.description}
      </h1>
      <h1 className="text-amber-600 text-6xl font-bold">
        Title: {product.price}
      </h1>

      <h1 className="text-amber-600 text-6xl font-bold">
        Title: {product.quantity}
      </h1>
    </div>
  );
};

export default page;
