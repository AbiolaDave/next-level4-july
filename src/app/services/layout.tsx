import type { Metadata } from "next";
import Navbar from "../components/navbar";

export const metadata: Metadata = {
  title: "My-app Service Page",
  description: "About what I do",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      {children}
    </div>
  );
}
