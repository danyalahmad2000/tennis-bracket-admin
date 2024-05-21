import React, { useState } from "react";
import Add_Tournament from "../components/Add_Tournament";
import Add_Players from "../components/Add_Players";
import Group_Players from "../components/Group_Players";

const navLinks = [
  {
    path: "/add-tournament",
    display: "Add Tournament",
    component: Add_Tournament,
  },
  {
    path: "/add-players",
    display: "Add Players",
    component: Add_Players,
  },
  {
    path: "/group-players",
    display: "Group Players",
    component: Group_Players,
  },
];

const Manage_Brackets = () => {
  const [activeNavLink, setActiveNavLink] = useState("");

  const handleNavLinkClick = (path) => {
    setActiveNavLink(path);
  };

  return (
    <>
      <div className="lg:w-[83%] bg-[#F9FAFB] flex flex-col mt-[120px] lg:mt-0">
        {/* header */}
        <div className="max-w-full h-[100px] my-[32px]">
          <div className="max-w-full mx-[32px] mb-[24px]">
            <h1 className="text-[30px] w-full h-full font-[500]">
              Manage Brackets
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row lg:w-[30%] mx-[32px]">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="max-w-full mb-[16px] lg:mb-0 lg:mr-[24px] relative cursor-pointer"
                onClick={() => handleNavLinkClick(link.path)}
              >
                <div
                  className={`${
                    activeNavLink === link.path
                      ? "text-blue-500"
                      : "text-[#667085]"
                  }`}
                >
                  {link.display}
                </div>
                {activeNavLink === link.path && (
                  <div className="absolute left-0 bottom-[-8px] lg:bottom-[-25px] h-0.5 w-full bg-blue-500"></div>
                )}
              </div>
            ))}
          </div>
          {/* horizontal line */}
          <div className="bg-gray-200 h-[1px] max-w-[96%] mx-auto my-6"></div>
          {/* horizontal line */}
        </div>
        {/* header */}

        {/* Render corresponding component based on activeNavLink */}
        {navLinks.map((link) =>
          activeNavLink === link.path ? <link.component key={link.path} /> : null
        )}
      </div>
    </>
  );
};

export default Manage_Brackets;
