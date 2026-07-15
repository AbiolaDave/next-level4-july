import type { Metadata } from "next";
// import Navbar from "../components/navbar";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "My-app Service Page",
  description: "About what I do",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full flex flex-col">
      {/* <Navbar /> */}
      <Suspense
        fallback={<div className="text-red-700 text-6xl">Loading...</div>}
      >
    
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eos
          pariatur inventore, praesentium mollitia excepturi quia necessitatibus
          nam blanditiis ad harum laboriosam veniam culpa non ipsam consequuntur
          eum dolores? Rem laudantium, ab hic incidunt maxime, voluptate nemo
          necessitatibus odit laborum earum minus vitae ad quisquam animi velit
          et beatae magni consectetur. Blanditiis quia nesciunt vero, asperiores
          minima voluptatem eligendi accusamus magnam consequatur ratione cum
          adipisci culpa ea magni ad quaerat inventore molestiae in ipsam maxime
          incidunt impedit reprehenderit corrupti! Voluptatem et a, molestiae
          laboriosam deleniti nemo nesciunt atque necessitatibus voluptate enim.
          Earum repellat molestias eius tempore magni inventore hic minus?
        </p>
      </Suspense>
      {children}
    </div>
  );
}
