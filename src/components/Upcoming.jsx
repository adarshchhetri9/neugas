import React from "react";
import { students, time } from "../assets";

const Upcoming = ({ img, name, Do, percent, days, pImg }) => {
  return (
    <div className="w-[358px] bg-white p-3.5 rounded-lg">
      <img src={img} alt="" className="w-96" />
      <h1 className="text-[16px] font-semibold mt-5">{name}</h1>
      <p className="text-[12px] font-medium text-[#54577A]">{Do}</p>
      <div className="flex justify-between my-3 ">
        <h2 className="text-[16px] font-medium">Progess</h2>
        <p className="text-[#546FFF] text-[16px] font-medium ">{percent}</p>
      </div>
      <img src={pImg} alt="" className="w-80" />
      <div className="flex justify-between py-2.5">
        <div className="flex gap-2">
          <img src={time} alt="" />
          <h3 className="text-[16px] font-medium">{days}</h3>
        </div>
        <img src={students} alt="student" />
      </div>
    </div>
  );
};

export default Upcoming;
