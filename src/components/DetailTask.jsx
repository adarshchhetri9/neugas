import React from "react";

const DetailTask = ({ no, text }) => {
  return (
    <div className="flex gap-3 items-center   ">
      <h1 className="w-[36px] h-[36px] flex justify-center items-center bg-[#F5F5F7] m-2 text-[14px] font-semibold rounded-lg">
        {no}
      </h1>
      <h1 className="text-[14px] font-medium">{text}</h1>
    </div>
  );
};

export default DetailTask;
