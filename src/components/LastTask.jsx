import React from "react";
import { lastpic, progress, students, time } from "../assets";
import { detailTask } from "../constant";
import DetailTask from "./DetailTask";

const LastTask = () => {
  return (
    <>
      <div>
        <img src={lastpic} alt="" className="w-96 " />
        <h1 className="text-[16px] font-semibold mt-5">
          Creating Awesome Mobile Apps
        </h1>
        <p className="text-[12px] font-medium text-[#54577A]">Ui/UX Designer</p>
        <div className="flex justify-between my-3 ">
          <h2 className="text-[16px] font-medium">Progess</h2>
          <p className="text-[#546FFF] text-[16px] font-medium ">90%</p>
        </div>
        <img src={progress} alt="" className="w-80" />
        <div className="flex justify-between py-2.5">
          <div className="flex gap-2">
            <img src={time} alt="" />
            <h3 className="text-[16px] font-medium">1 Hours</h3>
          </div>
          <img src={students} alt="student" />
        </div>
      </div>
      <div>
        <div className=" h-[2px] bg-[#FAFAFA] my-5 " />
        <div className="flex justify-between">
          <h1 className="text-[16px] font-semibold">Detail Task</h1>
          <p className="text-[12px] font-medium text-[#54577A]">
            UI/UX Designer
          </p>
        </div>
        <div className="my-7">
          {detailTask.map((item, index) => (
            <DetailTask {...item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="w-full m-[3px] text-center bg-[#546FFF] mt-12 rounded-lg">
        <p className="py-[12px] px-[120px] text-white text-[14px] font-semibold">
          Go to Details
        </p>
      </div>
    </>
  );
};

export default LastTask;
