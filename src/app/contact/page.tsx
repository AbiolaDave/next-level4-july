import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        totam quidem illo, rem corporis aspernatur cumque mollitia repellendus
        in sequi doloremque ad, natus soluta. Corporis maxime voluptas
        veritatis, voluptates tempore harum placeat fuga quibusdam a omnis rem
        totam eius accusantium iusto hic laborum aperiam? Itaque illum debitis,
        temporibus repellat mollitia perspiciatis nulla culpa maiores quasi.
        Sapiente sint praesentium nobis amet error quisquam expedita cupiditate
        velit aliquid, suscipit vitae possimus accusamus quo iste commodi quae
        unde maiores assumenda sequi sit? Quis provident architecto perspiciatis
        quas. Facere accusantium nobis, sit illo debitis eos. Aut numquam
        incidunt officia quae dolor corporis magnam quis!
      </p>

      <h3>
        {/* <a href=""></a> */}
        <Link href={"/about"}>Go to About</Link>
      </h3>
    </div>
  );
};

export default page;
