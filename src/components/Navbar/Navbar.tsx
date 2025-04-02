"use client";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";

export type TUser = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Navbar = () => {
 

  return (
    <div className="bg-gray-600 text-white py-2 shadow-md px-[5%] sticky top-0 z-10">
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 justify-between items-center">
        <div>
          <Link href="/" className="flex gap-2 items-center text-2xl font-bold">
            <Image src={logo} width={50} height={50} alt="logo" />
            <h1 className="uppercase font-bold text-2xl text-[#e67e22] tracking-widest">
              <span className="text-[#A4C138]">Moni</span>rul
            </h1>
          </Link>
        </div>

        
        <div>
          <ThemeToggle />
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
