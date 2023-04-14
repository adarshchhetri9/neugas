import React from "react";
import { date } from "../constant";
import { aleft, aright } from "../assets";

const Calender = () => {
  return (
    <div className="p-5 ">
      <div className="flex justify-between mb-5">
        <img src={aleft} alt="arrow left " />
        <h1 className="text-[14px] font-semibold">July 2022</h1>
        <img src={aright} alt="arrow right" />
      </div>
      <div className="flex justify-center gap-5">
        {date.map((item, index) => (
          <div
            key={item.id}
            className={`${
              index === date.length - 3
                ? "bg-[#141522] p-[5.5px] text-white rounded-full  "
                : ""
            } flex flex-col justify-center items-center gap-4 `}
          >
            <h1 className="text-[12px] font-medium">{item.day}</h1>
            <div
              className={`${
                index === date.length - 3
                  ? "bg-[#546FFF] text-white rounded-full py-[8px] px-[10.5px] "
                  : "bg-[#F5F5F7] rounded-full w-[32] h-[32px] text-[12px] font-medium  px-[8.5px] flex justify-center items-center"
              } flex flex-col justify-center items-center `}
            >
              <p className="text-[12px] font-medium">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calender;
