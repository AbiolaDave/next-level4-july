"use client";
import { Users } from "@/util/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const router = useRouter()
    const [users, setusers] = useState<[Users]>();
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const resp = await fetch("https://dummyjson.com/users");
      const data = await resp.json();
      setusers(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = (param: number)=>{
     router.push(`/users/${param}`)
  }

  return (
    <div>
      <h1>All Users</h1>
      {users ? (
        users.map((user) => (
          <div key={user.id} onClick={()=>getUser(user.id)}>
            <h3>
              Name: {user.firstName} {user.lastName}
            </h3>
            <h3>Age: {user.age}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Username: {user.username}</h3>
            <Image
              src={user.image}
              alt={user.username}
              width={200}
              height={200}
            />
          </div>
        ))
      ) : (
        <div>
          <h1>No registered users</h1>
        </div>
      )}
    </div>
  );
};

export default page;
