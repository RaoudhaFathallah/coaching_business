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
            href="/student/" 
            className={`inline-block font-medium text-[18px] transition-all hover:text-[#717FF8] ${
              currentRoute === "/student/" ? "text-[#717FF8]" : "text-black"
            }`}
          >
            Profile
          </Link>
        </li>

        <li className="inline-block">
          <Link 
            href="/student/my-courses/" 
            className={`inline-block font-medium text-[18px] transition-all hover:text-[#717FF8] ${
              currentRoute === "/student/my-courses/" ? "text-[#717FF8]" : "text-black"
            }`}
          >
            My Courses
          </Link>
        </li>

        <li className="inline-block">
          <Link 
            href="/student/settings/" 
            className={`inline-block font-medium text-[18px] transition-all hover:text-[#717FF8] ${
              currentRoute === "/student/settings/" ? "text-[#717FF8]" : "text-black"
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