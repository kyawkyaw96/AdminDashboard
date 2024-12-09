import React from "react";
import SaleCard from "./SingleCard/SaleCard";
import VideoCard from "./SingleCard/VideoCard";
import CalenderCard from "./SingleCard/CalenderCard";
import UserCard from "./SingleCard/UserCard";

const Cards = () => {
  return (
    <>
      <div className=" flex flex-wrap gap-4">
        <UserCard />
        <SaleCard />
        <VideoCard />
        <SaleCard />
        <CalenderCard />
      </div>
      <div className="  w-1/2  rounded-lg p-3 bg-white/50">
        <h1 className="  text-xl my-2 font-sans font-bold">Status reports</h1>
        <div className="flex w-full h-[210px] gap-4 justify-evenly items-center flex-wrap ">
          <div className=" w-full h-24 max-w-64 flex items-center justify-center flex-col bg-green-200 rounded-md">
            <h1 className="text-4xl font-semibold text-green-500">Sales</h1>
            <p className=" text-sm text-green-500">$75,890.75</p>
          </div>
          <div className=" w-full h-24 max-w-64 flex items-center justify-center flex-col bg-cyan-200 rounded-md">
            <h1 className="text-4xl font-semibold text-cyan-500">Sales</h1>
            <p className=" text-sm text-cyan-500">$75,890.75</p>
          </div>
          <div className=" w-full h-24 max-w-64 flex items-center justify-center flex-col bg-orange-200 rounded-md">
            <h1 className="text-4xl font-semibold text-orange-500">Sales</h1>
            <p className=" text-sm text-orange-500">$75,890.75</p>
          </div>
          <div className=" w-full h-24 max-w-64 flex items-center justify-center flex-col bg-violet-200 rounded-md">
            <h1 className="text-4xl font-semibold text-violet-500">Sales</h1>
            <p className=" text-sm text-violet-500">$75,890.75</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
