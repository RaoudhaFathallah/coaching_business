"use client";
  
import React from "react";
import SearchForm from "./SearchForm";
import PopularCourses from "./PopularCourses";
import ContactUs from "./ContactUs";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="bg-[#E5FFEF] py-[30px] md:py-[45px] lg:py-[30px] xl:py-[45px] px-[20px] md:px-[35px] lg:px-[20px] xl:px-[35px] space-y-[30px] md:space-y-[45px]">

        {/* SearchForm */}
        <SearchForm />

        {/* PopularCourses */}
        <PopularCourses />

        {/* ContactUs */}
        <ContactUs />

      </div>
    </>
  );
};

export default Sidebar;