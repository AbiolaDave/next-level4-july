const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  console.log(slug);
  console.log(slug[0]);

  return (
    <div>
      <h1 className="text-center text-4xl text-purple-700">
        My Wild Card Route
      </h1>
      <h2 className="text-center mt-5 text-orange-600 text-2xl">{slug[0]}</h2>
      <h2 className="text-center mt-5 text-orange-600 text-2xl">{slug[1]}</h2>
    </div>
  );
};

export default page;
