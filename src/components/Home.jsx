import React from "react";
import Dashboard from "./SideBarPages/Dashboard";
import Cards from "./Cards";

const Home = () => {
  return (
    <div className="  flex flex-col gap-5">
      <nav
        className="flex flex-col my-3 ms-1 items-start sm:items-center justify-start gap-1 text-muted-text sm:flex-row"
        aria-label="breadcrumb"
      >
        <div className="flex items-center gap-1">
          <span className="flex items-center text-sm">
            <a
              className="flex items-center text-muted-text hover:text-main-text hover:underline"
              href="/"
            >
              Home
            </a>
          </span>

          <span className="size-3.5">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-full w-full"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </div>

        <div className="flex items-center gap-1">
          <span className="flex items-center text-sm">
            <a
              className="flex items-center text-muted-text hover:text-main-text hover:underline"
              href="/"
            >
              Blocks
            </a>
          </span>

          <span className="size-3.5">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-full w-full"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </div>

        <div className="flex items-center gap-1">
          <span className="flex items-center text-sm">
            <a
              className="flex items-center text-muted-text hover:text-main-text hover:underline"
              href="/"
            >
              Cards
            </a>
          </span>

          <span className="size-3.5">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-full w-full"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </div>
      </nav>
      <Cards />
    </div>
  );
};

export default Home;
