"use client";
  
import React from "react"; 
import Rating from "./Rating";
import ReviewsList from "./ReviewsList";
import CommentForm from "./CommentForm";

const Reviews: React.FC = () => {
  return (
    <>
      <div className="space-y-[30px] md:space-y-[50px]">
        {/* Rating */}
        <Rating />

        {/* ReviewsList */}
        <ReviewsList />

        {/* CommentForm */}
        <CommentForm />
      </div>
    </>
  );
};

export default Reviews;