// import { useRouter } from "next/router";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  console.log("slug:", slug);

  return (
    <div>
      <h1 className="text-amber-600 text-6xl font-bold">My Slug: {slug}</h1>
    </div>
  );
};

export default page;
