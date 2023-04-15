import { menuItem } from "../constant";
import { logo, question } from "../assets";

const Nav = ({ icon, name }) => {
  return (
    <>
      <div className="pr-6 my-2  ">
        <div className="flex hover:bg-[#F5F5F7] text-[#8E92BC] hover:text-black  gap-3 rounded-md  px-[20px] py-[10px] mb-[24px]  ">
          <img src={icon} alt="" className="w-[24px] h-[24px]" />
          <h1 className="text-[14px] font-semibold ">{name}</h1>
        </div>
      </div>
    </>
  );
};

const Sidebar = () => {
  return (
    <>
      <div className="h-[1024px] flex w-[20vw] flex-col justify-between py-5 px-5 bg-white ">
        <div className="container flex flex-col  h-[50vh] ">
          <div className="top_section flex items-center gap-[9px] pl-[4px] mb-[30px]">
            <img src={logo} alt="" className="h-[40px] w-[40px] " />
            <h1 className="logo  text-[32px] font-semibold  ">Nuegas</h1>
          </div>
          <div>
            {menuItem.map((item, index) => (
              <Nav {...item} key={item.id} />
            ))}
          </div>
          <div></div>
        </div>
        <div>
          <img src={question} alt="" className="relative left-14 top-12 " />
          <div className="bg-[#141522] w-[188px] h-[248px] ml-[12px] mb-[12px] text-white rounded-md flex flex-col items-center text-center justify-evenly ">
            <p className="text-[16px] relative top-4">Hello center</p>
            <p className="text-[12px] font-medium">
              Having Trouble in Learning <br /> please contact us for more{" "}
              <br />
              questions
            </p>
            <p className="bg-white flex justify-center items-center cursor-pointer text-[#141522] text-[12px] font-semibold px-3 py-2 relative top-5 rounded-lg w-[156px] h-[40px]">
              Go to help Center
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
