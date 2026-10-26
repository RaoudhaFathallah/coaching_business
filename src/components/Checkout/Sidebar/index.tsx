"use client";
  
import React from "react";
import OrderList from "./OrderList";
import PaymentSystem from "./PaymentSystem";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="space-y-[30px] lg:space-y-[50px]">
        <OrderList />

        <PaymentSystem />
      </div>
    </>
  );
};

export default Sidebar;