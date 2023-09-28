import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-col w-[100%]">
      <div className="w-[90%] mx-auto h-[60px] flex justify-between items-center ">
        <img
          src="/elixirconflogo.svg"
          className="md:w-[160px] w-[127px] h-[23px] object-cover  md:h-[29px] "
          alt=""
        />
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
        className="w-[100%] md:-mb-16  -mb-12 flex justify-center items-center text-white md:text-6xl text-2xl font-bold   h-[164px]"
        style={{
          backgroundImage: `url("/elixirconfbg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        ElixirConf Africa 2024
      </div>
      <div className="md:w-[144px] w-[91px] h-[91px] -md:mb-8  md:ml-12 ml-6 md:h-[144px] rounded-full ">
        <img
          src="/Avatar.svg"
          className="md:w-[144px] md:h-[144px] h-[91px] w-[91px] rounded-full object-cover"
          alt=""
        />
      </div>
      <div className="w-[100%]  pb-12 flex flex-col  px-4  justify-end items-end ">
        <div className="md:flex hidden  flex-col items-end">
          <div className="flex gap-2 items-center">
            <p className="text-[#202020] poppins-regular">Backend Engineer</p>
            <p className="text-[#AD8AA2] poppins-light">:Profession</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-[#202020] poppins-regular">Backend Engineer</p>
            <p className="text-[#AD8AA2] poppins-light">:Profession</p>
          </div>
        </div>
        <div className="flex w-[100%] md:hidden  justify-start my-4 gap-2">
          Backend Engineer at Wezacare Solutions
        </div>

        <div className="flex gap-4  items-center">
          <div className="w-[117px] h-[28px] flex justify-center gap-2 items-center border-[1px] border-[#8FCCA0]  rounded-[50px]">
            <img src="/attending.svg" className="w-[12px] h-[12px] " alt="" />
            <p className="text-[#8FCCA0] poppins-regular">Attending</p>
          </div>
          <div className="w-[230px] h-[26px] poppins-light rounded-[50px] flex text-sm justify-center bg-[#9AD7D8] items-center">
            <img src="/calendar.svg" className="w-[12px] h-[12px] " alt="" />
            <p>June 19 2024 | June 23 2024</p>
          </div>
        </div>
      </div>
      <div className="w-[90%] poppins-regular  flex md:gap-8 gap-4 items-center mx-auto">
        <NavLink activeClassName="active" to="/">
          Details
        </NavLink>
        <NavLink activeClassName="active" to="/cart">
          Cart
        </NavLink>
        <NavLink activeClassName="active" to="/payment">
          Payment{" "}
        </NavLink>
        <NavLink activeClassName="active" to="/payment-details">
          Payment Details
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
