import React from "react";

import { Link } from "react-router-dom";
const Payment = () => {
  return (
    <div className=" bg-[#F2F2F2]/50 py-12 pt-5">
      <div className="flex md:text-base text-sm w-[90%] mx-auto md:my-0 my-4  gap-2 items-center">
        <Link to="/cart" className="text-[#4D4D4D] poppins-light">
          Ticket Cart
        </Link>{" "}
        <img
          src="arrow-left.svg"
          className="w-[14px] object-contain h-[14px] "
        />
        <p className="text-[#202020] poppins-regular">Payment</p>{" "}
        <img
          src="arrow-left.svg"
          className="w-[14px] object-contain h-[14px] "
        />
        <Link className="text-[#202020] poppins-regular" to="/payment-details">
          Payment Details
        </Link>
      </div>

      <div className="w-[90%]   flex justify-center items-center mx-auto">
        <div className="w-[500px] poppins-light bg-white rounded-[8px] border-[1px] border-[#E6E6E6] justify-center items-center px-6 py-8 flex flex-col gap-2">
          <div className="w-[100%] flex justify-start">
            <p className="text-xl poppins-bold">Payment</p>
          </div>

          <div className="w-[100%] flex justify-between  items-center">
            <div className="w-[48%] h-[61px] bg-[#F2F2F2]  border-[1px] border-[#CCCCCC] rounded-[7px] flex justify-center items-center">
              <img
                src="/visa.svg"
                className="w-[103px] h-[30px] object-cover"
                alt=""
              />
            </div>
            <div className="w-[48%] h-[61px]   border-[1px] border-[#E6E6E6] rounded-[7px] flex justify-center items-center">
              <img
                src="/mpesa.svg"
                className="w-[103px] h-[30px] object-cover "
                alt=""
              />
            </div>
          </div>
          <div className="flex w-[100%] flex-col gap-2">
            <p className="text-[#999999]">Debit Card Number</p>

            <div className="relative w-[100%] ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img
                  src="/debitcard.svg"
                  className="w-[20px] h-[20px] "
                  alt=""
                />
              </div>
              <input
                type="text"
                className="block w-full p-4 pl-10 text-sm border border-[#CFCFCF]  rounded-[8px] text-black  h-[48px]  "
              />
            </div>
          </div>
          <div className="w-[100%] flex md:flex-row flex-col justify-between items-start">
            <div className="flex md:w-[48%] w-[100%] flex-col gap-2">
              <div className="flex justify-between  text-[#999999] items-center">
                <p>Expiry Date</p>
                <p className="text-[#CCCCCC]">MM/YY</p>
              </div>

              <input
                type="text"
                className=" w-full p-4  text-sm border border-[#CFCFCF]  rounded-[8px] text-black  h-[48px]  "
                placeholder="1/23"
              />
            </div>

            <div className="flex md:w-[48%] w-[100%]  flex-col gap-2">
              <div className="flex justify-between  text-[#999999] items-center">
                <p>Security Code</p>
                <p className="text-[#CCCCCC]">CCV</p>
              </div>

              <input
                type="password"
                className=" w-full p-4  text-sm border border-[#CFCFCF]  rounded-[8px] text-black  h-[48px]  "
                placeholder="***"
              />
            </div>
          </div>
          <div className="flex w-[100%] flex-col gap-2">
            <p className="text-[#999999]">Promo Code (optional)</p>

            <div className="relative w-[100%] ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img
                  src="/promocode.svg"
                  className="w-[20px] h-[20px] "
                  alt=""
                />
              </div>
              <input
                type="text"
                className="block w-full p-4 pl-10 text-sm border border-[#CFCFCF]  rounded-[8px] text-black  h-[48px]  "
              />
            </div>
          </div>

          <button className="w-[100%] bg-[#AD3989] poppins-regular p-4 flex justify-center items-center rounded-[8px] text-white text-sm">
            Pay Ksh 1000
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
