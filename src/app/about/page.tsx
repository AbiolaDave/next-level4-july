// type Props = [
//   {
//     title: string;
//     desc: string;
//     value: string;
//     available: boolean;
//   },
// ];



const page = () => {
  type MyData = {
    name: string;
    age: number;
    address?: string;
    gender: string;
  }

// interface MyData {
//     name: string;
//     age: number;
//     address?: string;
//     gender: string;   
// }

type StudentData = MyData &{
      studentId: string;
      department: string;
}

  const userData: MyData = {
    name: "John Doe",
    age: 30,
    // address: "123 Main St, Anytown, USA",
    gender: "Male"
  }

  const student1: StudentData = {
    name: "Jane Smith",
    age: 22,
    address: "456 Elm St, Othertown, USA",  
    gender: "Female",
    studentId: "S001",
    department: "Computer Science"  
  }

  return (
    <div>
      <h1 className="text-purple-400 text-4xl text-center">Welcome to my about page</h1>
      <p className="text-[#14a0e0] text-[30px] ">Name: {userData.name}</p>
      <p className="text-[#14a0e0] text-[30px] ">Age: {userData.age}</p>
      <p className="text-[#14a0e0] text-[30px] ">Address: {userData.address}</p>
      <p className="text-[#14a0e0] text-[30px] ">Gender: {userData.gender}</p>
    </div>
  );
};

export default page;
