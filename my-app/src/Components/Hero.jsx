import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CiDesktopMouse2 } from "react-icons/ci";
import personn from "../Assets/personn.png";
import vector from "../Assets/vector.png";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="w-full  bg-white relative ">
        <div className="bg-[#1355FF] w-[64px] h-[64px] relative sm:left-[100px]"></div>
        <div className="bg-[#061237] sm:h-[532px] ">
          <div className="w-[32px] h-[32px] bg-[#1355FF] relative left-[64px] sm:left-[164px] "></div>
          <div className="grid sm:grid-cols-2">
            <div className="text-white flex flex-col text-center px-6 md:px-16 pt-10 gap-6">
              <div className="sm:px-8 lg:px-20 sm:text-left">
                <div className="flex items-center justify-center">
                  <h1 className=" text-5xl sm:text-xl md:text-3xl lg:text-5xl lg:pb-9 pb-6">
                    Built for interprise businesses.{" "}
                  </h1>
                  <img
                    src={vector}
                    alt=""
                    className=" hidden sm:flex w-12 h-12"
                  />
                </div>
                <p className="text-2xl sm:text-md md:text-xl lg:3text-xl ">
                  Opus includes everything you need to build a beautiful website
                  for your business. Built to perform and look good doing so.
                </p>
                <div className="flex flex-col sm:flex-row  items-center ">
                  <div className="flex justify-center items-center pt-5 my-3">
                    <button className="flex justify-center py-3 px-5 gap-6 bg-[#1355FF] items-center ">
                      <span className="sm:hidden">Contact Us</span>
                      <span className="hidden sm:flex">Learn More</span>{" "}
                      <AiOutlineArrowRight size={20} />
                    </button>
                  </div>
                  <p className="pl-4 pt-4">Explore Pages</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="sm:flex justify-center items-center relative sm:static">
                <div className="lg:w-[35vw] lg:h-[39vw] bg-[#1355FF] absolute sm:top-[0px] sm:right-0 md:h-[400px] w-[410px] ">
                  <div className="hidden sm:flex bg-white md:w-[35vw] md:h-[10vw] sm:w-[10vw] sm:h-[5vw] absolute bottom-[-3.6vw]"></div>
                </div>
                <div className="w-[24px] h-[24px] bg-[#1345FF] absolute right-[0px] md:right-[9.3vw] md:top-[9.5vw] z-20 "></div>
                <div className="relative">
                  <img
                    src={personn}
                    alt=""
                    className="z-10 w-full p-6 sm:w-[470px] sm:h-[532px] sm:relative top-[50px]"
                  />
                  {/* <div className="bg-[#1355FF] ">

            </div> */}
                  <div className=" hidden sm:flex w-[250px] h-[238px] bg-white absolute bottom-[-26px] right-[-20px]  z-30">
                    <div className="flex flex-col p-8">
                      <p className=" text-gray-600">
                        I felt like I couldn’t grow until I moved to Opus. Now I
                        am encouraged to sell more with them.
                      </p>
                      <h2 className="font-bold py-3">Frank Dublin</h2>
                      <p>
                        CEO <span className="text-[#1355FF]">@STAMPS</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div >
            <div className=" grid grid-cols-7 h-[120px] relative top-[-32px] z-0 invisible sm:visible">
              <div className="col-span-3 grid grid-cols-3">
                <div className="cols-span-1"></div>
                <div className="cols-span-2 flex justify-center items-center md:pl-16 font-medium hidden sm:flex">
                  <CiDesktopMouse2 size={25} className="text-gray-500" />
                  <p className="text-gray-500 pl-2 ">Scroll For More</p>
                </div>
              </div>
              <div className="col-span-3 bg-[#1355FF]"></div>
              <div className="col-span-1 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
