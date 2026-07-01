const Navbar = () => {
  return (
    <>
      <div className="flex justify-around items-center p-3 text-yellow-500 border-b-2 border-b-yellow-500">
        <h3>MyLogo</h3>
        <div className="flex gap-5">
          <p className="hover:text-red-500">Home</p>
          <p className="hover:text-red-500">About</p>
          <p className="hover:text-red-500">Service</p>
          <p className="hover:text-red-500">Contact</p>
        </div>
        <div className="flex gap-5">
          <button className="border border-blue-700 rounded-lg text-blue-700 p-2 hover:bg-blue-700 hover:text-white">
            Sign Up
          </button>
          <button className="border border-green-700 rounded-lg  text-green-700 p-2 hover:bg-green-700 hover:text-white">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
