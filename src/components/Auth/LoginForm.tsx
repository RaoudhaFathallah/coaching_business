"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "/public/images/logo-1.png";

const LoginForm: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[140px]">
        <div className="container mx-auto max-w-[650px]">
          <div className="bg-[#E5FFEF] p-[30px] sm:p-[55px]">
            <div className="space-y-[20px] mb-[15px]">
              <Image src={logo} alt="logo" />
              
              <h2 className="font-bold text-[25px] md:text-[35px] lg:text-[40px] xl:text-[48px] leading-[1.1]">
                Login now
              </h2>
            </div>

            <form className="space-y-[25px]">
              <div>
                <label
                  htmlFor="email"
                  className="font-bold text-black text-[14px] md:text-[16px] block mb-[10px]"
                >
                  Your Email*
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="font-bold text-black text-[14px] md:text-[16px] block mb-[10px]"
                >
                  Password*
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 rtl:ml-0 rtl:mr-2 text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-[#717FF8] text-[#fff] text-[15px] sm:text-[16px] font-semibold block w-full py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#717FF8] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
                >
                  Login Now <i className="ri-arrow-right-up-line"></i>
                </button>
              </div>

              <p>
                Didn’t create an account? {" "}
                <Link
                  href="/register"
                  className="font-medium hover:text-[#717FF8]"
                >
                  Register Now
                </Link>
              </p>
            </form>

            <div className="mt-[20px] sm:flex items-center space-y-[10px] sm:space-y-[0] sm:space-x-[20px] rtl:space-x-reverse">
              <h3 className="text-black font-bold text-[18px]">
                Or Register with
              </h3>

              <Link
                href="#"
                target="_black"
                className="inline-block border border-[#051F0D] px-[30px] py-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <g clipPath="url(#clip0_48_8874)">
                    <path
                      d="M24.0555 10.3267L13.8583 10.3262C13.408 10.3262 13.043 10.6911 13.043 11.1414V14.399C13.043 14.8492 13.408 15.2142 13.8582 15.2142H19.6007C18.9719 16.8461 17.7982 18.2127 16.3009 19.0811L18.7495 23.3198C22.6773 21.0482 24.9995 17.0624 24.9995 12.6006C24.9995 11.9653 24.9526 11.5111 24.859 10.9998C24.7878 10.6112 24.4505 10.3267 24.0555 10.3267Z"
                      fill="#167EE6"
                    />
                    <path
                      d="M12.4995 20.1084C9.68921 20.1084 7.23589 18.5729 5.91826 16.3008L1.67969 18.7438C3.83667 22.4822 7.87739 24.9997 12.4995 24.9997C14.7669 24.9997 16.9064 24.3892 18.7495 23.3252V23.3194L16.3009 19.0807C15.1809 19.7303 13.8848 20.1084 12.4995 20.1084Z"
                      fill="#12B347"
                    />
                    <path
                      d="M18.75 23.3256V23.3198L16.3014 19.0811C15.1814 19.7306 13.8854 20.1087 12.5 20.1087V25C14.7674 25 16.907 24.3896 18.75 23.3256Z"
                      fill="#0F993E"
                    />
                    <path
                      d="M4.89131 12.5C4.89131 11.1148 5.26934 9.8189 5.9188 8.69893L1.68022 6.25586C0.610449 8.09312 0 10.2268 0 12.5C0 14.7733 0.610449 16.907 1.68022 18.7442L5.9188 16.3012C5.26934 15.1812 4.89131 13.8853 4.89131 12.5Z"
                      fill="#FFD500"
                    />
                    <path
                      d="M12.4995 4.89131C14.332 4.89131 16.0153 5.54248 17.3301 6.62564C17.6545 6.89282 18.1259 6.87354 18.423 6.57642L20.7311 4.26831C21.0683 3.9312 21.0442 3.3794 20.6841 3.06699C18.4812 1.15591 15.615 0 12.4995 0C7.87739 0 3.83667 2.51743 1.67969 6.25581L5.91826 8.69888C7.23589 6.42676 9.68921 4.89131 12.4995 4.89131Z"
                      fill="#FF4B26"
                    />
                    <path
                      d="M17.3307 6.62564C17.655 6.89282 18.1265 6.87354 18.4236 6.57642L20.7317 4.26831C21.0687 3.9312 21.0447 3.37939 20.6847 3.06699C18.4818 1.15586 15.6156 0 12.5 0V4.89131C14.3325 4.89131 16.0159 5.54248 17.3307 6.62564Z"
                      fill="#D93F21"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_48_8874">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <Link
                href="#"
                target="_black"
                className="inline-block border border-[#051F0D] px-[30px] py-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <g clipPath="url(#clip0_48_8883)">
                    <path
                      d="M25 12.5C25 18.7393 20.4287 23.9106 14.4531 24.8481V16.1133H17.3657L17.9199 12.5H14.4531V10.1553C14.4531 9.1665 14.9375 8.20312 16.4902 8.20312H18.0664V5.12695C18.0664 5.12695 16.6357 4.88281 15.2681 4.88281C12.4131 4.88281 10.5469 6.61328 10.5469 9.74609V12.5H7.37305V16.1133H10.5469V24.8481C4.57129 23.9106 0 18.7393 0 12.5C0 5.59668 5.59668 0 12.5 0C19.4033 0 25 5.59668 25 12.5Z"
                      fill="#1877F2"
                    />
                    <path
                      d="M17.3657 16.1133L17.9199 12.5H14.4531V10.1552C14.4531 9.1667 14.9374 8.20312 16.4902 8.20312H18.0664V5.12695C18.0664 5.12695 16.6359 4.88281 15.2683 4.88281C12.413 4.88281 10.5469 6.61328 10.5469 9.74609V12.5H7.37305V16.1133H10.5469V24.8481C11.1833 24.948 11.8355 25 12.5 25C13.1645 25 13.8167 24.948 14.4531 24.8481V16.1133H17.3657Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_48_8883">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <Link
                href="#"
                target="_black"
                className="inline-block border border-[#051F0D] px-[30px] py-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <g clipPath="url(#clip0_48_8889)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.4303 7.16075C14.9718 7.16075 14.4307 7.26768 13.8071 7.48152C13.1835 7.69548 12.7342 7.80251 12.459 7.80262C12.245 7.80262 11.8125 7.70783 11.1614 7.51824C10.5103 7.32865 9.95548 7.23385 9.49693 7.23385C8.42093 7.23385 7.52986 7.68636 6.82372 8.59136C6.1176 9.49593 5.76453 10.6666 5.76453 12.1035C5.7673 12.8988 5.88467 13.6895 6.113 14.4513C6.36429 15.2838 6.71208 16.0839 7.14929 16.8356C7.61392 17.6487 8.08162 18.2585 8.5524 18.665C9.02312 19.0716 9.49693 19.2749 9.97382 19.2749C10.2917 19.2749 10.7059 19.1694 11.2164 18.9584C11.7269 18.7475 12.1748 18.642 12.5599 18.642C12.9451 18.642 13.4173 18.7429 13.9768 18.9448C14.5361 19.1467 14.9748 19.2476 15.2927 19.2475C15.6963 19.2475 16.0997 19.0946 16.5032 18.7889C16.9067 18.4831 17.3102 18.0215 17.7137 17.404C17.9691 17.0183 18.2004 16.6171 18.4061 16.2027C18.5911 15.8305 18.746 15.4441 18.8692 15.0471C18.3129 14.8822 17.8177 14.4879 17.3836 13.8642C16.9523 13.2496 16.7245 12.5152 16.7325 11.7644C16.7343 11.255 16.8486 10.7524 17.0672 10.2924C17.2904 9.81237 17.7412 9.2851 18.4198 8.71054C17.9858 8.17248 17.5273 7.77962 17.0443 7.53194C16.544 7.28032 15.9903 7.15298 15.4303 7.16075ZM15.2744 3.62095C14.1801 3.87129 13.396 4.33592 12.9221 5.01484C12.4483 5.69343 12.2053 6.4973 12.1931 7.42646C12.67 7.4021 13.0521 7.32566 13.3395 7.19715C13.6553 7.04867 13.9412 6.84357 14.1831 6.592C14.5597 6.22576 14.8564 5.78548 15.0543 5.29892C15.2378 4.83428 15.3295 4.40637 15.3295 4.01518C15.3295 3.95409 15.3264 3.89301 15.3203 3.83158C15.3119 3.76004 15.2966 3.68949 15.2744 3.62095ZM12.5 0.418945C19.1824 0.418945 24.5996 5.83594 24.5996 12.5187C24.5996 19.2011 19.1824 24.6181 12.5 24.6181C5.81757 24.6181 0.400391 19.2011 0.400391 12.5187C0.400391 5.83596 5.81756 0.418945 12.5 0.418945Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_48_8889">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
