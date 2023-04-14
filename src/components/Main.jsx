import React from "react";
import { notify, activity, runper, np } from "../assets";
import MonthlyMentor from "./MonthlyMentor";
import { mentors, upcoming } from "../constant";
import Upcoming from "./Upcoming";

const Main = () => {
  return (
    <div className="w-[800px] py-[18px] px-[25px]">
      <div className="flex justify-between mb-[40px]  ">
        <div className="mt-2">
          <h1 className="text-[24px] font-semibold">Hi, Skylar Dias</h1>
          <p className="text-[16px] font-medium text-[#54577A]">
            Let's finish your task today!
          </p>
        </div>
        <div className="flex gap-3 mt-2 ">
          <img src={notify} alt="notify" />
          <img src="" className="w-[52px] h-[52px]" alt="girl" />
        </div>
      </div>
      <div className="flex ">
        <div className="bg-[#141922] w-[234px] h-[214px] text-white p-5 flex justify-between flex-col rounded-[10px]">
          <p className="text-[16px] font-semibold">Running task</p>
          <h1 className="text-[32px] font-semibold">65</h1>
          <div className="flex items-center">
            <img src={runper} alt="45" />
            <div className="ml-[20px]">
              <h1 className="text-[20px] font-semibold">100</h1>
              <p className="text-[14px] font-medium text-[#8E92BC]">Task</p>
            </div>
          </div>
        </div>
        <img src={activity} alt="" className="h-[214px] w-[462px] ml-7" />
      </div>
      <div className="flex justify-between my-8">
        <h1 className="text-[24px] font-semibold">Monthly Mentors</h1>
        <img src={np} alt="next-prev" className="w-[58px] h-[24px]" />
      </div>
      <div>
        <div className="flex gap-4 mt-3">
          {mentors.map((item, index) => (
            <MonthlyMentor {...item} />
          ))}
        </div>
      </div>
      <div className="flex justify-between my-8">
        <h1 className="text-[24px] font-semibold">Upcoming Task</h1>
        <img src={np} alt="next-prev" className="w-[58px] h-[24px]" />
      </div>
      <div className="flex  gap-4">
        {upcoming.map((item, index) => (
          <Upcoming {...item} />
        ))}
      </div>
    </div>
  );
};

export default Main;
