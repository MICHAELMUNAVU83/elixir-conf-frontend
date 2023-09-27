import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-col w-[100%]">
      <div className="w-[90%] mx-auto h-[60px] flex justify-between items-center ">
        <img src="/elixirconflogo.svg" className="w-[160px] h-[29px] " alt="" />
        <div className="flex gap-4 items-center">
          <button className="text-white bg-[#AD3989] border-[1px] w-[130px] text-sm h-[34px] flex gap-2 items-center justify-center rounded-[4px]">
            <p>Become speaker</p>
          </button>
          <div className="flex gap-1 items-center">
            <p>Logout</p>
            <img
              src="/logout_icon.svg"
              className="w-[20px] object-contain h-[20px] "
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="w-[100%] -mb-16  flex justify-center items-center text-white text-6xl font-bold   h-[164px]"
        style={{
          backgroundImage: `url("/elixirconfbg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        ElixirConf Africa 2024
      </div>
      <div className="w-[144px] -mb-8 ml-12 h-[144px] rounded-full ">
        <img
          src="/Avatar.svg"
          className="w-[144px] h-[144px] rounded-full object-cover"
          alt=""
        />
      </div>
      <div className="w-[100%]  pb-12 flex flex-col  px-4  justify-end items-end ">
        <div className="flex flex-col items-end">
          <div className="flex gap-2 items-center">
            <p className="text-[#202020]">Backend Engineer</p>
            <p className="text-[#AD8AA2]">:Profession</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-[#202020]">Backend Engineer</p>
            <p className="text-[#AD8AA2]">:Profession</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="w-[117px] h-[28px] flex justify-center gap-2 items-center border-[1px] border-[#8FCCA0]  rounded-[50px]">
            <img src="/attending.svg" className="w-[12px] h-[12px] " alt="" />
            <p className="text-[#8FCCA0] font-semibold">Attending</p>
          </div>
          <div className="w-[230px] h-[26px] rounded-[50px] flex text-sm justify-center bg-[#9AD7D8] items-center">
            <img src="/calendar.svg" className="w-[12px] h-[12px] " alt="" />
            <p>June 19 2024 | June 23 2024</p>
          </div>
        </div>
      </div>
      <div className="w-[90%] font-semibold  flex gap-8 items-center mx-auto">
        <Link to="/">Details</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default NavBar;
