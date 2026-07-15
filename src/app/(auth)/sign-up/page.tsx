const page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div>
      <h1 className="text-green-500 text-3xl text-center mt-12 text-bold">
        Sign-Up
      </h1>
    </div>
  );
};

export default page;

// Firstname, lastname, age, gender, email, password, confirm password, submit button, and a link to the login page.