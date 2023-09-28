import React from "react";

const Details = () => {
  return (
    <div className=" bg-[#F2F2F2]/50 py-12 pt-5">
      <div className="w-[90%]  flex mx-auto">
        <div className="w-[100%]  flex md:flex-row gap-8 flex-col justify-between items-start">
          <div className="md:w-[30%] h-[377px] w-[100%] bg-white rounded-[8px] flex flex-col gap-4 p-4 border-[1px] border-[#E6E6E6] ">
            <p className="text-[20px]  poppins-bold leading-[36px]">
              Event Information
            </p>
            <div className="grid poppins-light grid-cols-2 gap-4 w-[100%]">
              <div className="flex flex-col gap-1">
                <p>Start Date</p>
                <p className="poppins-regular ">19th June 2024</p>
              </div>
              <div className="flex flex-col gap-1">
                <p>End Date</p>
                <p className="poppins-regular ">24th June 2024</p>
              </div>
              <div className="flex flex-col gap-1">
                <p>Event Type</p>
                <p className="poppins-regular ">In Person event</p>
              </div>
              <div className="flex flex-col gap-1">
                <p>Available Tickets</p>
                <p className="poppins-regular ">150</p>
              </div>
            </div>
            <div className="flex poppins-light flex-col gap-1">
              <p>Location</p>
              <p className="poppins-regular">Jua Kali, Nairobi</p>
            </div>
            <div className="flex flex-col gap-1">
              <p>Hosted by</p>
              <p className="poppins-regular ">Elixir Conf Africa</p>
            </div>
          </div>
          <div className="md:w-[65%]  w-[100%] md:h-[505px] bg-white rounded-[8px] border-[1px] border-[#E6E6E6]  flex flex-col gap-4 p-4 ">
            <p className="poppins-bold text-xl">Available Tickets</p>
            <div className="grid md:grid-cols-2 gap-8 w-[100%]">
              <div className="w-[100%] border-[#E6E6E6] border-[1px] rounded-[8px]  h-[170px] flex flex-col justify-between p-3">
                <div className="flex  poppins-regular justify-between w-[100%]">
                  <p className="text-[#AD3989]">Early Bird Ticket</p>
                  <p className="text-[#4D4D4D]">200 Tickets</p>
                </div>
                <p className="poppins-light text-sm text-[#4D4D4D]">
                  This ticket gives you access to the 3-day in-person event at
                  the Jua Kali Avenue, Nairobi
                </p>
                <div className="flex items-center justify-between w-[100%]">
                  <p className="poppins-bold text-xl">KSH 5000 </p>
                  <div className="flex gap-3 poppins-regular items-center">
                    <button className="p-4 border-[1px] w-[73px] text-sm h-[34px] border-[#AD3989] text-[#AD3989]  flex gap-2 items-center justify-center rounded-[4px]">
                      <p>+</p>
                      <p>Cart</p>
                    </button>
                    <button className="p-4 border-[1px] w-[87px] text-xs h-[34px] bg-[#AD3989] text-white gap-2   flex items-center justify-center rounded-[4px]">
                      Get <p>Ticket</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[100%] border-[#E6E6E6] border-[1px] rounded-[8px]  h-[170px] flex flex-col justify-between p-3">
                <div className="flex  poppins-regular justify-between w-[100%]">
                  <p className="text-[#AD3989]">Early Bird Ticket</p>
                  <p className="text-[#4D4D4D]">200 Tickets</p>
                </div>
                <p className="poppins-light text-sm text-[#4D4D4D]">
                  This ticket gives you access to the 3-day in-person event at
                  the Jua Kali Avenue, Nairobi
                </p>
                <div className="flex items-center justify-between w-[100%]">
                  <p className="poppins-bold text-xl">KSH 5000 </p>
                  <div className="flex gap-3 poppins-regular items-center">
                    <button className="p-4 border-[1px] w-[73px] text-sm h-[34px] border-[#AD3989] text-[#AD3989]  flex gap-2 items-center justify-center rounded-[4px]">
                      <p>+</p>
                      <p>Cart</p>
                    </button>
                    <button className="p-4 border-[1px] w-[87px] text-xs h-[34px] bg-[#AD3989] text-white gap-2   flex items-center justify-center rounded-[4px]">
                      Get <p>Ticket</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[100%] border-[#E6E6E6] border-[1px] rounded-[8px]  h-[170px] flex flex-col justify-between p-3">
                <div className="flex  poppins-regular justify-between w-[100%]">
                  <p className="text-[#AD3989]">Early Bird Ticket</p>
                  <p className="text-[#4D4D4D]">200 Tickets</p>
                </div>
                <p className="poppins-light text-sm text-[#4D4D4D]">
                  This ticket gives you access to the 3-day in-person event at
                  the Jua Kali Avenue, Nairobi
                </p>
                <div className="flex items-center justify-between w-[100%]">
                  <p className="poppins-bold text-xl">KSH 5000 </p>
                  <div className="flex gap-3 poppins-regular items-center">
                    <button className="p-4 border-[1px] w-[73px] text-sm h-[34px] border-[#AD3989] text-[#AD3989]  flex gap-2 items-center justify-center rounded-[4px]">
                      <p>+</p>
                      <p>Cart</p>
                    </button>
                    <button className="p-4 border-[1px] w-[87px] text-xs h-[34px] bg-[#AD3989] text-white gap-2   flex items-center justify-center rounded-[4px]">
                      Get <p>Ticket</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[100%] border-[#E6E6E6] border-[1px] rounded-[8px]  h-[170px] flex flex-col justify-between p-3">
                <div className="flex  poppins-regular justify-between w-[100%]">
                  <p className="text-[#AD3989]">Early Bird Ticket</p>
                  <p className="text-[#4D4D4D]">200 Tickets</p>
                </div>
                <p className="poppins-light text-sm text-[#4D4D4D]">
                  This ticket gives you access to the 3-day in-person event at
                  the Jua Kali Avenue, Nairobi
                </p>
                <div className="flex items-center justify-between w-[100%]">
                  <p className="poppins-bold text-xl">KSH 5000 </p>
                  <div className="flex gap-3 poppins-regular items-center">
                    <button className="p-4 border-[1px] w-[73px] text-sm h-[34px] border-[#AD3989] text-[#AD3989]  flex gap-2 items-center justify-center rounded-[4px]">
                      <p>+</p>
                      <p>Cart</p>
                    </button>
                    <button className="p-4 border-[1px] w-[87px] text-xs h-[34px] bg-[#AD3989] text-white gap-2   flex items-center justify-center rounded-[4px]">
                      Get <p>Ticket</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
