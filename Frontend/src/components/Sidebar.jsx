import React, { useState } from "react";
import logo from "../assets/logo.png";
import avatarIcon from "../assets/avatar-img.png";
import { CiSearch } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { RiDeleteBin3Line } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import Manage_Brackets from "../pages/Manage_Brackets";
import Delete_Tournaments from "../pages/Delete_Tournaments";

const Sidebar = () => {
  const [manageBracketsClicked, setManageBracketsClicked] = useState(false);
  const [deleteTournamentsClicked, setDeleteTournamentsClicked] = useState(
    false
  );

  const handleManageBracketsClick = () => {
    setManageBracketsClicked(true);
    setDeleteTournamentsClicked(false); // Reset the state of the other section
  };

  const handleDeleteTournamentsClick = () => {
    setDeleteTournamentsClicked(true);
    setManageBracketsClicked(false); // Reset the state of the other section
  };

  return (
    <>
      <div className="lg:w-[17%] lg:relative">
        <div className="w-full h-screen flex flex-col justify-between">
          <div className="w-full h-[239px]">
            {/* logo */}
            <div className="max-w-full my-[24px] px-[24px]">
              <div className="w-[74px] h-[31px] bg-blue-500">
                <img
                  className="object-cover w-full h-full"
                  src={logo}
                  alt=""
                />
              </div>
            </div>
            {/* logo */}

            {/* search input */}
            <div className="max-w-full my-[24px] px-[24px] relative">
              {/* Input field with search icon */}
              <input
                type="text"
                placeholder="Search"
                className="bg-white rounded-md py-1 pl-9 focus:outline-none w-full border-[1px] border-gray-300"
              />
              {/* Search icon */}
              <div className="size-[20px] absolute inset-y-0 left-9 flex justify-center items-center my-auto">
                <CiSearch className="text-gray-800 w-full h-full" />
              </div>
            </div>
            {/* search input */}

            {/* manage brackets */}
            <div
              className={`max-w-full my-[5px] px-[24px] relative ${
                manageBracketsClicked
                  ? "bg-[#EAF1FF] text-blue-700"
                  : "text-black"
              }`}
              onClick={handleManageBracketsClick}
              style={{ cursor: "pointer" }}
            >
              <div className="rounded-md py-1 pl-9 focus:outline-none w-full text-[16px]">
                Manage Brackets
              </div>

              {/* settings icon */}
              <div className="size-[24px] absolute inset-y-0 flex justify-center items-center my-auto">
                <IoSettingsOutline
                  className={`${
                    manageBracketsClicked ? "text-blue-700" : "text-black"
                  } w-full h-full`}
                />
              </div>
            </div>
            {/* manage brackets */}

            {/* delete tournaments */}
            <div
              className={`max-w-full my-[5px] px-[24px] relative ${
                deleteTournamentsClicked
                  ? "bg-[#EAF1FF] text-blue-700"
                  : "text-black"
              }`}
              onClick={handleDeleteTournamentsClick}
              style={{ cursor: "pointer" }}
            >
              <div className="rounded-md py-1 pl-9 focus:outline-none w-full text-[16px]">
                Delete Tournaments
              </div>

              {/* delete icon */}
              <div className="size-[24px] absolute inset-y-0 flex justify-center items-center my-auto">
                <RiDeleteBin3Line
                  className={`${
                    deleteTournamentsClicked ? "text-blue-700" : "text-black"
                  } w-full h-full bg-transparent`}
                />
              </div>
            </div>
            {/* delete tournaments */}
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center w-full h-[97px] lg:absolute bottom-0 lg:fixed">
            <div className="w-full h-[40px] flex flex-col text-center lg:text-left lg:flex-row justify-between items-center mx-auto px-5">
              <div className="size-[40px] mb-2 lg:mb-0 mr-2 lg:mr-0">
                <img
                  className="w-full h-full rounded-full mb-2"
                  src={avatarIcon}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-[14px] mb-2 mt-2">Bracket Admin</h1>
                <p className="text-[14px] text-gray-700 mb-2">
                  admin@tennis-bracket.com
                </p>
              </div>
              <div className="size-[20px] mb-5">
                <MdLogout className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Conditionally render Manage Brackets or Delete Tournaments component */}
      {manageBracketsClicked && <Manage_Brackets />}
      {deleteTournamentsClicked && <Delete_Tournaments />}
    </>
  );
};

export default Sidebar;
