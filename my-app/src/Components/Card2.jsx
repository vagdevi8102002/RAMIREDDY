import React from "react";
import vcc1 from "../Assets/vcc1.svg";
import vcc2 from "../Assets/vcc2.svg";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import next from "../Assets/next.jpg";
import previous from "../Assets/previous.jpg";
import { AiOutlineCheck } from "react-icons/ai";

export default function Card2() {
  return (
    <div className="w-full py-16 lg:px-32 text-[#061237]">
      <div className="px-10 grid sm:grid-cols-2 sm:gap-10">
        <div className="sm:order-2 pl-10">
          <h1 className="text-5xl font-bold">
            Create pages using beautiful Components
          </h1>
          <p className="pl-10 p-10 text-[#37456C]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi animi,
            quisquam dolorem magnam quam Lorem ipsum dolor sit amet
            consectetur.corrupti asperiores eius libero minus facere?
          </p>
          <button className="ml-20 bg-[#F7F9FC] py-2 px-6">Learn More</button>
        </div>
        <div className="py-6 sm:order-1">
          <div className="flex">
            <div className="w-[100px] h-[100px]">
              <div className="w-[66px] m-4 h-[66px] bg-[#1355FF] flex justify-center items-center">
                <img src={vcc1} alt="" className="" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold py-4">Choose you sections</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                corporis quaerat et distinctio delectus aspernatur!
              </p>
            </div>
          </div>
          <div className="flex py-16">
            <div className="w-[100px] h-[100px]">
              <div className="w-[66px] m-4 h-[66px] bg-[#1355FF] flex justify-center items-center ">
                <img src={vcc2} alt="" className="" />
              </div>
            </div>
            <div className="pt-3">
              <h1 className="font-bold text-3xl">
                Add the images and textyou need
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                alias dignissimos sed numquam. Beatae minima eveniet a quis et
                maiores.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:order-3 ">
          <p className="font-bold text-[#67718E] py-6 pl-6">FEATURES</p>
          <h1 className="text-5xl font-bold pt-2 pb-8">You’re not just doing business. You’re doing life</h1>
          <div className="text-[#1355FF]">
          <div className="flex items-center py-4 gap-4">
            <AiOutlineCheck />
            <p className="font-medium text-[#061237]">Responsive Components</p>
          </div>
          <div className="flex items-center gap-4">
            <AiOutlineCheck />
            <p className="font-medium text-[#061237]">Over 50 Sections</p>
          </div>
          <div className="flex items-center py-4 gap-4">
            <AiOutlineCheck />
            <p className="font-medium text-[#061237]">Handcrafted Pages</p>
          </div>
          </div>
        </div>
          <div className="sm:order-4 pb-32 flex justify-center items-center">
            <img src={img1} alt="" className="h-[600px] w-[500px]" />
          </div>
          
          <div className="sm:order-6">
          <p className="font-bold text-[#67718E] py-6 pl-6">OUR KNOWLEDGE</p>
          <h1 className="text-[3.5vw] font-bold pt-2 pb-4">A UI Kit that's Modern & Elegant</h1>
          <p className="text-[#37456C] py-6 pb-12">Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet.adipisicing elit. Rem adipisci atque officiis nostrum et debitis.</p>

          </div>
          <div className="order-5">
                <img src={img2} alt="" />
          </div>
          <div className="order-7 flex flex-col justify-center items-center py-32">
          <p className="text-xl pb-10 font-medium">stamps</p>
          <h1 className="text-xl pb-10 font-medium">The Opus UI Kit lets you showcase your work in style. It's helped take our business online</h1>
          <span className="font-medium text-lg">Alexa F.</span>
          <p className="text-gray-500 py-2">DESIGNER <span className="text-[#1355FF]">@STAMPS</span></p>

          <div className="flex pt-16 justify-center gap-8">

          <img src={previous} alt="" className="z-20" />
          <img src={next} alt="" className="z-10" />
          </div>
          </div>

          <div className="order-8 relative bottom-[150px] flex justify-center md:pt-32 items-center">
          <img src={img3} alt="" />

          </div>
      </div>
    </div>
  );
}
