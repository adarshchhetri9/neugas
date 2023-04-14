import React from "react";
import { mentors } from "../constant";
import { mTask, star } from "../assets";

const MonthlyMentor = ({ pic, name, task, rating, Do, Follow }) => {
  return (
    <div className="w-[358px] h-[140px] bg-white flex flex-col p-5 gap-4 rounded-[10px]">
      <div className="flex gap-4 items-center justify-between">
        <div className="flex gap-3">
          <img src={pic} alt="profile" />
          <div>
            <h1 className="text-[16px] font-semibold">{name}</h1>
            <p className="text-[12px] font-medium">{Do}</p>
          </div>
        </div>
        <div className="text-[#546FFF] text-[14px] font-medium">{Follow}</div>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <img src={mTask} alt="mini task" className="h-[24px] w-[24px]" />
          <h1 className="text-[14px] font-medium ml-[8px]">{task}</h1>
        </div>
        <div className="flex">
          <img src={star} alt="star" className="h-[24px] w-[24px]" />
          <h1 className="text-[14px] font-medium ml-[8px]"> {rating}</h1>
        </div>
      </div>
    </div>
  );
};

export default MonthlyMentor;
