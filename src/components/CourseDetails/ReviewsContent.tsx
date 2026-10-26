"use client";
  
import React from 'react';
import Link from 'next/link';
import Rating from './Reviews/Rating';
import ReviewsList from './Reviews/ReviewsList';
import CommentForm from './Reviews/CommentForm';

const ReviewsContent: React.FC = () => {

  return (
    <>
      <div className="pt-[30px] space-y-[30px]">
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

export default ReviewsContent;