import React from "react";

const SaleCard = () => {
  return (
    <div className="w-full h-[200px] max-w-44 space-y-3 rounded-xl bg-surface p-5 shadow-sm sm:space-y-4 sm:p-6">
      <span className="disabled:text-muted/75-text inline-flex h-10 w-10 items-center justify-center gap-1 rounded-full bg-accent p-0 text-sm hover:bg-muted hover:text-accent-text disabled:bg-muted/75 sm:h-12 sm:w-12">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          className="h-4 w-4 sm:h-5 sm:w-5"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"
          ></path>
        </svg>
      </span>
      <div className="space-y-0.5 sm:space-y-1">
        <p className="text-sm font-medium text-muted-text">Total Sales</p>
        <h3 className="text-xl font-medium sm:text-2xl">$75,890.75</h3>
        <p className="text-xs font-normal text-muted-text">
          <span className="text-success">+128%</span>
          from June
        </p>
      </div>
    </div>
  );
};

export default SaleCard;
