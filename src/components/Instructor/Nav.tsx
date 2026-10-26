"use client";
  
import React from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Nav: React.FC = () => {
  const currentRoute = usePathname();

  return (
    <>
      <ul className="border-b border-[#D2EFDC] pb-[5px] mb-[30px] space-x-[30px] lg:space-x-[50px] rtl:space-x-reverse">
        <li className="inline-block">
          <Link 
            href="/instructor/" 
            className={`inline-block font-medium text-[18px] transition-all hover:text-[#717FF8] ${
              currentRoute === "/instructor/" ? "text-[#717FF8]" : "text-black"
            }`}
          >
            Profile
          </Link>
        </li>

        <li className="inline-block">
          <Link 
            href="/instructor/courses/" 
            className={`inline-block font-medium text-[18px] transition-all hover:text-[#717FF8] ${
              currentRoute === "/instructor/courses/" ? "text-[#717FF8]" : "text-black"
            }`}
          >
            Courses
          </Link>
        </li>

        <li className="inline-block">
          <Link 
            href="/instructor/create-course/" 
            className={`inline-block font-medium text-[18px] transition-all hover:text-[#717FF8] ${
              currentRoute === "/instructor/create-course/" ? "text-[#717FF8]" : "text-black"
            }`}
          >
            Create Course
          </Link>
        </li>

        <li className="inline-block">
          <Link 
            href="/instructor/settings/" 
            className={`inline-block font-medium text-[18px] transition-all hover:text-[#717FF8] ${
              currentRoute === "/instructor/settings/" ? "text-[#717FF8]" : "text-black"
            }`}
          >
            Settings
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;