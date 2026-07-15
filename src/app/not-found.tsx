"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NotFoundPage = () => {
  const [curTime, setCurTime] = useState<number>()

   const router = useRouter()
 useEffect(() => {
    redirectUser()
 }, [])
 

    const redirectUser = () =>{
    let time = 15
    let timeInterval = setInterval(() => {
            time--
             setCurTime(time)
             if(time === 0){
                clearInterval(timeInterval)
                router.push('/')
             }
        }, 1000);
    }
  return (


    <>
      <div>
        <h1 className="text-red-500 text-center text-6xl font-bold mt-12">
          OOPS!! Seems Like You Are Lost
        </h1>
        <h3 className="text-orange-600 text-center text-2xl font-medium mt-8">
          The page you're requesting for does not exist or is temporarily
          unavailable
        </h3>
        <h3 className="text-blue-500 text-center text-xl font-normal mt-4">
          You will be redirected to the home page in <span className="font-bold">{curTime}</span> seconds.
        </h3>
      </div>
    </>
  );
};

export default NotFoundPage;
