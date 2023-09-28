import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className=" bg-[#F2F2F2]/50 min-h-[80vh] py-12 pt-5">
      <div className="w-[90%]  flex mx-auto">
        <div className="w-[100%] flex md:flex-row flex-col  justify-between items-start">
          <div className="md:w-[40%]  w-[100%pb-6  bg-white rounded-[8px] flex flex-col gap-6 p-4 border-[1px] border-[#E6E6E6] ">
            <p className="text-[20px] leading-[36px] poppins-bold">
              Ticket Cart
            </p>

            <div className="py-6 w-[100%] border-b-[1px] border-[#E6E6E6] flex gap-3 flex-col">
              <p className=" poppins-regular text-xl text-[#AD3989]">
                Early Bird Ticket
              </p>
              <div className="flex md:flex-row flex-col justify-between w-[100%]">
                <div className="md:w-[70%]">
                  <p className="poppins-light text-[#4D4D4D]">
                    This ticket gives you access to the 3-day in-person event at
                    the Jua Kali Avenue, Nairobi
                  </p>
                  <p className="my-2 hidden poppins-bold text-xl">Ksh 5,000</p>
                </div>
                <div className="md:w-[20%] w-[100%] poppins-light flex md:flex-col justify-between flex-row-reverse gap-1 md:items-end items-center">
                  <div className="md:w-[100%] w-[40%] p-2 text-[#808080] poppins-light border-[#CCCCCC]  border-[1px] rounded-[2px] h-[40px] flex justify-between items-center">
                    <p>-</p>
                    <p>01</p>
                    <p>+</p>
                  </div>
                  <p className="md:text-base poppins-regular md:poppins-light text-xl">
                    Ksh 5,000
                  </p>
                </div>
              </div>
              <p className="text-[#545F71] poppins-light">
                Who is this ticket for ?
              </p>
              <input
                className="w-[60%] border-[1px] focus:border-gray-300 poppins-light focus:ring-gray-300  p-2 rounded-[6px] h-[48px] border-[#545F71]"
                placeholder="James Macharia"
              />
            </div>
            <div className="py-6 w-[100%] border-b-[1px] border-[#E6E6E6] flex gap-3 flex-col">
              <p className=" poppins-regular text-xl text-[#AD3989]">
                Early Bird Ticket
              </p>
              <div className="flex md:flex-row flex-col justify-between w-[100%]">
                <div className="md:w-[70%]">
                  <p className="poppins-light text-[#4D4D4D]">
                    This ticket gives you access to the 3-day in-person event at
                    the Jua Kali Avenue, Nairobi
                  </p>
                  <p className="my-2 hidden poppins-bold text-xl">Ksh 5,000</p>
                </div>
                <div className="md:w-[20%] w-[100%] poppins-light flex md:flex-col justify-between flex-row-reverse gap-1 md:items-end items-center">
                  <div className="md:w-[100%] w-[40%] p-2 text-[#808080] poppins-light border-[#CCCCCC]  border-[1px] rounded-[2px] h-[40px] flex justify-between items-center">
                    <p>-</p>
                    <p>01</p>
                    <p>+</p>
                  </div>
                  <p className="md:text-base poppins-regular md:poppins-light text-xl">
                    Ksh 5,000
                  </p>
                </div>
              </div>
              <p className="text-[#545F71] poppins-light">
                Who is this ticket for ?
              </p>
              <input
                className="w-[60%] border-[1px] focus:border-gray-300 poppins-light focus:ring-gray-300  p-2 rounded-[6px] h-[48px] border-[#545F71]"
                placeholder="James Macharia"
              />
            </div>

            <div className="py-6 w-[100%] border-b-[1px] border-[#E6E6E6] flex gap-3 flex-col">
              <p className=" poppins-regular text-xl text-[#AD3989]">
                Early Bird Ticket
              </p>
              <div className="flex md:flex-row flex-col justify-between w-[100%]">
                <div className="md:w-[70%]">
                  <p className="poppins-light text-[#4D4D4D]">
                    This ticket gives you access to the 3-day in-person event at
                    the Jua Kali Avenue, Nairobi
                  </p>
                  <p className="my-2 hidden poppins-bold text-xl">Ksh 5,000</p>
                </div>
                <div className="md:w-[20%] w-[100%] poppins-light flex md:flex-col justify-between flex-row-reverse gap-1 md:items-end items-center">
                  <div className="md:w-[100%] w-[40%] p-2 text-[#808080] poppins-light border-[#CCCCCC]  border-[1px] rounded-[2px] h-[40px] flex justify-between items-center">
                    <p>-</p>
                    <p>01</p>
                    <p>+</p>
                  </div>
                  <p className="md:text-base poppins-regular md:poppins-light text-xl">
                    Ksh 5,000
                  </p>
                </div>
              </div>
              <p className="text-[#545F71] poppins-light">
                Who is this ticket for ?
              </p>
              <input
                className="w-[60%] border-[1px] focus:border-gray-300 poppins-light focus:ring-gray-300  p-2 rounded-[6px] h-[48px] border-[#545F71]"
                placeholder="James Macharia"
              />
            </div>

            <div className="flex text-[#333333] poppins-regular justify-between  w-[100%]">
              <p>Total Amount</p>
              <p>Ksh 19,000</p>
            </div>
            <div className="w-[100%] poppins-regular mt-4 ">
              <Link
                to="/payment"
                className="bg-[#AD3989] p-2 flex justify-center items-center w-[100%] rounded-[6px] text-white text-lg"
              >
                Checkout
              </Link>
            </div>
          </div>
          <div className="md:w-[56%] w-[100%] pb-12  bg-white rounded-[8px] flex flex-col gap-6 p-4 border-[1px] border-[#E6E6E6] ">
            <p className="text-[20px] leading-[36px] poppins-bold">
              Ticket Overview
            </p>

            <p className="poppins-light text-[#202020]">Early Bird Ticket</p>

            <div className="w-[100%] md:h-[250px] bg-[#202020] relative rounded-[12px]">
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
                <img
                  src="/backlogo.svg"
                  className="w-[128px] object-cover h-[128px]"
                  alt=""
                />
              </p>
              <div className="w-[100%] h-[100%] flex md:flex-row flex-col  justify-between ">
                <div className=" md:w-[20%] w-[100%] flex md:justify-center justify-between items-center p-2 md:p-4">
                  <img
                    src="/earlybird.svg"
                    className="w-[136px] h-[90px] object-cover"
                  />
                  <p className="text-white md:text-3xl text-2xl  md:hidden  poppins-bold">
                    Elixir Safari
                  </p>
                </div>
                <div className="md:w-[50%] h-[100%] flex flex-col justify-between p-4">
                  <p className="text-white text-3xl  hidden md:block poppins-bold">
                    Elixir Safari
                  </p>
                  <div className="flex text-white  gap-5 flex-col w-[100%">
                    <div className="flex text-white justify-between w-[100%]">
                      <div className="flex gap-1">
                        <p className="uppercase poppins-regular">Name:</p>
                        <p className="uppercase  poppins-light"> Otieno</p>
                      </div>
                      <div className="flex gap-1">
                        <p className="uppercase poppins-regular">Country:</p>
                        <p className="uppercase  poppins-light">kenya</p>
                      </div>
                    </div>
                    <div className="w-[100%] flex poppins-light justify-between uppercase items-center">
                      <p>20th June 2024</p>
                      <p className="bg-white h-[1px] w-[10px] " />
                      <p>20th June 2024</p>
                    </div>
                  </div>
                  <div className="w-[100%] poppins-regular flex justify-between">
                    <p className="uppercase text-sm bg-white p-2 font-semibold  ">
                      Ticket Value
                    </p>
                    <p className="uppercase text-sm  p-2 bg-[#9AD7D8] font-semibold  ">
                      Early Bird Ticket
                    </p>
                  </div>
                </div>
                <div className=" md:w-[20%] w-[100%] md:border-l-[1px] border-t-[1px] border-white border-dashed flex justify-center items-center p-4">
                  <img
                    src="/qr.svg"
                    className="w-[80px] h-[80px] hidden md:block"
                    alt=""
                  />
                  <img
                    src="/barcode.svg"
                    className="w-[100%]  object-cover h-[80px] md:hidden "
                    alt=""
                  />
                </div>
              </div>
            </div>

            <p className="poppins-light text-[#202020">Regular Tickets</p>

            <div className="w-[100%] md:h-[250px] bg-[#202020] relative rounded-[12px]">
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
                <img
                  src="/backlogo.svg"
                  className="w-[128px] object-cover h-[128px]"
                  alt=""
                />
              </p>
              <div className="w-[100%] h-[100%] flex  md:flex-row flex-col  justify-between ">
                <div className=" md:w-[20%] w-[100%] flex md:justify-center justify-between items-center p-2 md:p-4">
                  <img
                    src="/regularticket.svg"
                    className="w-[136px] h-[90px] object-cover"
                  />
                  <p className="text-[#AD3989] md:hidden   md:text-3x text-xl poppins-bold">
                    Elixir Safari
                  </p>
                </div>
                <div className="md:w-[50%] w-[100%] h-[100%] flex flex-col justify-between p-4">
                  <p className="text-[#AD3989] hidden md:block   text-3xl poppins-bold">
                    Elixir Safari
                  </p>
                  <div className="flex text-white gap-5 flex-col w-[100%">
                    <div className="flex text-white justify-between w-[100%]">
                      <div className="flex gap-1">
                        <p className="uppercase poppins-regular">Name:</p>
                        <p className="uppercase  poppins-light"> Otieno</p>
                      </div>
                      <div className="flex gap-1">
                        <p className="uppercase poppins-regular">Country:</p>
                        <p className="uppercase  poppins-light">kenya</p>
                      </div>
                    </div>
                    <div className="w-[100%]  poppins-light  flex justify-between uppercase items-center">
                      <p>20th June 2024</p>
                      <p className="bg-white h-[1px] w-[10px] " />
                      <p>20th June 2024</p>
                    </div>
                  </div>
                  <div className="w-[100%] poppins-regular flex justify-between">
                    <p className="uppercase text-sm bg-white p-2 font-semibold  ">
                      Ticket Value
                    </p>
                    <p className="uppercase text-sm  p-2 bg-[#AD3989] text-white font-semibold  ">
                      Regular Ticket
                    </p>
                  </div>
                </div>

                <div className=" md:w-[20%] w-[100%] md:border-l-[1px] border-t-[1px] border-[#AD3989] border-dashed flex justify-center items-center p-4">
                  <img
                    src="/qr.svg"
                    className="w-[80px] h-[80px] hidden md:block"
                    alt=""
                  />
                  <img
                    src="/barcode.svg"
                    className="w-[100%]  object-cover h-[80px] md:hidden "
                    alt=""
                  />
                </div>
              </div>
            </div>

            <p className="poppins-light text-[#202020]">VIP Tickets</p>

            <div className="w-[100%] md:h-[250px] bg-[#202020] relative rounded-[12px]">
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
                <img
                  src="/backlogo.svg"
                  className="w-[128px] object-cover h-[128px]"
                  alt=""
                />
              </p>
              <div className="w-[100%] h-[100%] flex  md:flex-row flex-col justify-between ">
                <div className="md:w-[20%] w-[100%] flex md:justify-center justify-between items-center p-2 md:p-4">
                  <img
                    src="/regularticket.svg"
                    className="w-[136px] h-[90px] object-cover"
                  />
                  <p className="text-[#C89301] md:hidden md:text-3xl text-2xl poppins-bold ">
                    Elixir Safari
                  </p>
                </div>
                <div className="md:w-[50%] h-[100%] flex flex-col justify-between p-4">
                  <p className="text-[#C89301] text-3xl poppins-bold ">
                    Elixir Safari
                  </p>
                  <div className="flex text-white gap-5 flex-col w-[100%">
                    <div className="flex text-white justify-between w-[100%]">
                      <div className="flex gap-1">
                        <p className="uppercase poppins-regular">Name:</p>
                        <p className="uppercase  poppins-light"> Otieno</p>
                      </div>
                      <div className="flex gap-1">
                        <p className="uppercase poppins-regular">Country:</p>
                        <p className="uppercase  poppins-light">kenya</p>
                      </div>
                    </div>
                    <div className="w-[100%] poppins-light flex justify-between uppercase items-center">
                      <p>20th June 2024</p>
                      <p className="bg-white h-[1px] w-[10px] " />
                      <p>20th June 2024</p>
                    </div>
                  </div>
                  <div className="w-[100%] poppins-regular flex justify-between">
                    <p className="uppercase text-sm bg-white p-2 font-semibold  ">
                      Ticket Value
                    </p>
                    <p className="uppercase text-xs flex justify-center items-center  p-2 bg-[#C89301] text-white font-semibold  ">
                      Vip/All Access Ticket
                    </p>
                  </div>
                </div>
                <div className=" md:w-[20%] border-l-[1px] border-[#C89301] border-dashed flex justify-center items-center p-4">
                  <img
                    src="/qr.svg"
                    className="w-[80px] h-[80px] hidden md:block"
                    alt=""
                  />
                  <img
                    src="/barcode.svg"
                    className="w-[100%]  object-cover h-[80px] md:hidden "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
