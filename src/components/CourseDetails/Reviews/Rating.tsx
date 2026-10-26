"use client";

import React, { useState } from "react";

const Rating: React.FC = () => {
  const [rating, setRating] = useState<number>(0);

  const handleStarClick = (starIndex: number) => {
    // When a star is clicked, set the rating to the clicked star's index + 1
    setRating(starIndex + 1);
  };

  return (
    <>
      <div>
        <div className="grid items-center gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-[#E5FFEF] px-[20px] py-[40px] text-center">
            <h1 className="text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] leading-none">
              0.0
            </h1>

            <div className="text-[#E6B325] text-[30px] space-x-[5px] mb-[10px]">
              {[1, 2, 3, 4, 5].map((starIndex) => (
                <i
                  key={starIndex}
                  className={`ri-star-${starIndex <= rating ? "fill" : "line"}`}
                  onClick={() => handleStarClick(starIndex - 1)} // Subtract 1 to get the correct star index (0-based)
                ></i>
              ))}
            </div>

            <p>Total Reviews 00</p>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-[15px]">
              <div className="flex items-center space-x-[10px]">
                <div className="flex items-center">
                  <i className="ri-star-fill text-[#E6B325] text-[18px] mr-1"></i>{" "}
                  5{" "}
                </div>

                <div className="w-full bg-[#CBE2D0] h-[12px]">
                  <div
                    className="bg-[#717FF8] h-[12px]"
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <div>5</div>
              </div>

              <div className="flex items-center space-x-[10px]">
                <div className="flex items-center">
                  <i className="ri-star-fill text-[#E6B325] text-[18px] mr-1"></i>{" "}
                  4{" "}
                </div>

                <div className="w-full bg-[#CBE2D0] h-[12px]">
                  <div
                    className="bg-[#717FF8] h-[12px]"
                    style={{ width: "90%" }}
                  ></div>
                </div>

                <div>4</div>
              </div>

              <div className="flex items-center space-x-[10px]">
                <div className="flex items-center">
                  <i className="ri-star-fill text-[#E6B325] text-[18px] mr-1"></i>{" "}
                  3{" "}
                </div>

                <div className="w-full bg-[#CBE2D0] h-[12px]">
                  <div
                    className="bg-[#717FF8] h-[12px]"
                    style={{ width: "70%" }}
                  ></div>
                </div>

                <div>3</div>
              </div>

              <div className="flex items-center space-x-[10px]">
                <div className="flex items-center">
                  <i className="ri-star-fill text-[#E6B325] text-[18px] mr-1"></i>{" "}
                  2{" "}
                </div>

                <div className="w-full bg-[#CBE2D0] h-[12px]">
                  <div
                    className="bg-[#717FF8] h-[12px]"
                    style={{ width: "50%" }}
                  ></div>
                </div>

                <div>2</div>
              </div>

              <div className="flex items-center space-x-[10px]">
                <div className="flex items-center">
                  <i className="ri-star-fill text-[#E6B325] text-[18px] mr-1"></i>{" "}
                  1
                </div>

                <div className="w-full bg-[#CBE2D0] h-[12px]">
                  <div
                    className="bg-[#717FF8] h-[12px]"
                    style={{ width: "10%" }}
                  ></div>
                </div>

                <div>2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rating;
