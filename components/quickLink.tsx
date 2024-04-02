import React from "react";
import RippleBtn from "./rippleBtn";
("/../noorulhuda/assets/roll.jpg");

const QuickLink = () => {
  return (
    <div
      className={`h-[480px] mt-4 w-full m-auto p-4 relative group bg-gray-800`}
      // style={{ backgroundImage: 'url("/../noorulhuda/assets/roll.jpg")' }}
    >
      <h1 className="flex justify-center items-center p-4 text-3xl	font-medium text-white	">
        Quick Links
      </h1>
      <div
        className=" flex justify-center items-center gap-20 p-24
      "
      >
        <RippleBtn></RippleBtn>
      </div>
    </div>
  );
};

export default QuickLink;
