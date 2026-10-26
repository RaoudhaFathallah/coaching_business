import React, { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { Menu, Transition } from '@headlessui/react'; 
import Image from "next/image";

import instructor from "/public/images/user1.png";
import student from "/public/images/user2.png";

const Profile: React.FC = () => {
  const currentRoute = usePathname();

  return (
    <>
      {/* Before Login
      <Link href="/register/" className="user text-[16px] xl:text-[22px] text-white">
        <i className="ri-user-line"></i> 
      </Link>
      */}

      {/* After login */}
      <Menu as="div" className="relative inline-block text-left rtl:text-right">
        <div>
          <Menu.Button className="user text-[16px] xl:text-[22px] text-white">
            <i className="ri-user-line"></i> 
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-[-48px] rtl:right-auto rtl:left-[-48px] sm:right-0 rtl:sm:right-auto rtl:sm:left-0 z-[999] mt-[12px] w-[250px] sm:w-[270px] origin-top-right rounded-sm bg-[#0F172A] p-[20px] sm:p-[30px] shadow-lg ring-1 space-y-[20px] ring-black ring-opacity-5 focus:outline-none">
            {/* Instructor Profile */}
            <div>
              <Menu.Item>
                <div className="flex items-center space-x-[10px] sm:space-x-[15px] rtl:space-x-reverse py-[5px] mb-[10px]">
                  <Image
                    className="h-[40px] w-[40px] rounded-full"
                    src={instructor}
                    alt="Profile"
                  />
                  <div>
                    <h3 className="font-medium text-[15px] sm:text-[17px] leading-none mb-[5px] text-white">
                      John Oliver
                    </h3>
                    <p className='text-[12px] text-[#CDCDCD] leading-none'>Instructor</p>
                  </div>
                </div>
              </Menu.Item>

              <Menu.Item>
                <Link
                  href="/instructor/"
                  className={` block py-[5px] text-[14px] hover:text-white ${
                    currentRoute === "/instructor/" ? "text-white" : "text-[#CDCDCD]"
                  }`}
                >
                  Profile
                </Link>
              </Menu.Item>

              <Menu.Item>
                <Link
                  href="/instructor/courses/"
                  className={` block py-[5px] text-[14px] hover:text-white ${
                    currentRoute === "/instructor/courses/" ? "text-white" : "text-[#CDCDCD]"
                  }`}
                >
                  Courses
                </Link>
              </Menu.Item>

              <Menu.Item>
                <Link
                  href="/instructor/create-course/"
                  className={` block py-[5px] text-[14px] hover:text-white ${
                    currentRoute === "/instructor/create-course/" ? "text-white" : "text-[#CDCDCD]"
                  }`}
                >
                  Create Course
                </Link>
              </Menu.Item>

              <Menu.Item>
                <Link
                  href="/instructor/settings/"
                  className={` block py-[5px] text-[14px] hover:text-white ${
                    currentRoute === "/instructor/settings/" ? "text-white" : "text-[#CDCDCD]"
                  }`}
                >
                  Settings
                </Link>
              </Menu.Item>
            </div>

            {/* Student Profile */}
            <div>
              <Menu.Item>
                <div className="flex items-center space-x-[10px] sm:space-x-[15px] rtl:space-x-reverse py-[5px] mb-[10px]">
                  <Image
                    className="h-[40px] w-[40px] rounded-full"
                    src={student}
                    alt="Profile"
                  />
                  <div>
                    <h3 className="font-medium text-[15px] sm:text-[17px] leading-none mb-[5px] text-white">
                      James Smith
                    </h3>
                    <p className='text-[12px] text-[#CDCDCD] leading-none'>Student</p>
                  </div>
                </div>
              </Menu.Item>

              <Menu.Item>
                <Link
                  href="/student/"
                  className={` block py-[5px] text-[14px] hover:text-white ${
                    currentRoute === "/student/" ? "text-white" : "text-[#CDCDCD]"
                  }`}
                >
                  Profile
                </Link>
              </Menu.Item>

              <Menu.Item>
                <Link
                  href="/student/my-courses/"
                  className={` block py-[5px] text-[14px] hover:text-white ${
                    currentRoute === "/student/my-courses/" ? "text-white" : "text-[#CDCDCD]"
                  }`}
                >
                  My Courses
                </Link>
              </Menu.Item>

              <Menu.Item>
                <Link
                  href="/student/settings/"
                  className={` block py-[5px] text-[14px] hover:text-white ${
                    currentRoute === "/student/settings/" ? "text-white" : "text-[#CDCDCD]"
                  }`}
                >
                  Settings
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default Profile;
