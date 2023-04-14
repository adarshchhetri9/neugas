import React from "react";
import { students, time } from "../assets";

const Upcoming = ({ img, name, Do, percent, days, pImg }) => {
  return (
    <div className="w-328px">
      <img src={img} alt="" />
      <h1>{name}</h1>
      <p>{Do}</p>
      <div className="flex justify-between">
        <h2>Progess</h2>
        <p>{percent}</p>
      </div>
      <img src={pImg} alt="" />
      <div>
        <div className="flex gap-2">
          <img src={time} alt="" />
          <h3>{days}</h3>
        </div>
        <img src={students} alt="student" />
      </div>
    </div>
  );
};

export default Upcoming;
