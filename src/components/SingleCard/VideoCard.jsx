import React from 'react'
import { FaVideo } from "react-icons/fa";


const VideoCard = () => {
  return (
    <div className="w-full h-[200px] max-w-44 space-y-3 rounded-xl bg-surface p-5 shadow-sm sm:space-y-4 sm:p-6">
      <span className="disabled:text-muted/75-text inline-flex h-10 w-10 items-center justify-center gap-1 rounded-full bg-accent p-0 text-sm hover:bg-muted hover:text-accent-text disabled:bg-muted/75 sm:h-12 sm:w-12">
        <FaVideo className=" text-2xl text-blue-500" />
      </span>
      <div className="space-y-0.5 sm:space-y-1">
        <p className="text-sm font-medium text-muted-text">
          Total videos - 300
        </p>
        <h3 className="text-xl font-medium sm:text-xl">Watch hr - 1200 min</h3>
        <p className="text-xs font-normal text-muted-text">
          <span className="text-success">+128%</span>
          from June
        </p>
      </div>
    </div>
  );
}

export default VideoCard