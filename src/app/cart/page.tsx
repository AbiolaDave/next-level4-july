import Carts from ".";

const page = async ({
  searchParams,
}: {
  searchParams?: { fail?: string | string[] };
}) => {
  // if (searchParams?.fail === "1") {
  //   throw new Error("Intentional cart error for testing");
  // }

  return (
    <>
      <Carts />
    </>
  );
};

export default page;
