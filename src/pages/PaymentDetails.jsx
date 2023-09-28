import React from "react";

import { Link } from "react-router-dom";
const PaymentDetails = () => {
  return (
    <div className=" bg-[#F2F2F2]/50 py-12 pt-5">
      <div className="flex w-[90%] mx-auto  gap-2 items-center">
        <Link to="/cart" className="text-[#4D4D4D] poppins-light">
          Ticket Cart
        </Link>{" "}
        <img src="arrow-left.svg" className="w-[14px] h-[14px] " />
        <Link className="text-[#202020] poppins-regular" to="/payment">
          Payment
        </Link>
      </div>

      <div className="w-[90%]  mt-4 flex justify-center items-center mx-auto">
        <div className="w-[100%] flex md:flex-row flex-col  justify-between ">
          <div className="md:w-[40%] flex flex-col gap-4">
            <div className="  bg-white  px-4 py-8 flex flex-col gap-4 rounded-[8px] border-[1px] border-[#E6E6E6] ">
              <p className="text-[#2F974C] text-2xl font-bold">
                Payment Details
              </p>
              <div className="w-[100%] poppins-light flex justify-between items-center">
                <p>VIP/ All Access Ticket</p>
                <p className="poppins-regular">Ksh 10000</p>
              </div>
              <div className="w-[100%] flex justify-between items-center">
                <p>Ticket Quantity</p>
                <p className="poppins-regular">1</p>
              </div>
              <div className="w-[100%] flex justify-between items-center">
                <p>Total Amount</p>
                <p className="poppins-regular">Ksh 10000</p>
              </div>
              <div className="w-[100%] flex justify-between items-center">
                <p>Date Paid</p>
                <p className="poppins-regular">January 12 , 2024</p>
              </div>
            </div>

            <div className="  bg-white  px-4 py-8 flex flex-col gap-2 rounded-[8px] border-[1px] border-[#E6E6E6] ">
              <p className="text-[#2F974C]">
                Your ticket has been delivered to your account. Go to{" "}
                <span className="text-[#AD5792] px-1 poppins-regular">
                  My Tickets
                </span>
                and download it.
              </p>
            </div>
          </div>
          <div className="md:w-[30%] flex flex-col justify-center items-center gap-2 py-8">
            <img
              src="/sucessticket.svg"
              className="w-[373px] h-[243px] object-cover"
              alt=""
            />
            <p className="text-xl poppins-regular">See you there !!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
