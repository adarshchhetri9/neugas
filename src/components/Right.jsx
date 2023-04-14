import Calender from "./Calender";
import LastTask from "./LastTask";
import { options } from "../assets";

const Right = () => {
  return (
    <div className="w-[436px] bg-[#F5F5F7]">
      <div className="w-[372px] h-[170px] bg-white m-8 rounded-lg ">
        <Calender />
      </div>
      <div className="m-8 w-[370px] bg-white p-3.5 rounded-lg">
        <div className="flex justify-between mt-2 mb-5">
          <h1 className="text-[14px] font-semibold">Task Today</h1>
          <img src={options} alt="" />
        </div>
        <LastTask />
      </div>
    </div>
  );
};

export default Right;
