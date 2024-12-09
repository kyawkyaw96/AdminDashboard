import React from "react";

const UserCard = () => {
  return (
    <div className="relative w-full h-[200px] max-w-44 space-y-2 rounded-lg bg-surface p-4 shadow-sm">
      <span className="inline-flex h-10 w-10 items-center justify-center gap-1 rounded-lg bg-accent p-0 text-sm text-muted-text hover:bg-accent hover:text-accent-text sm:h-12 sm:w-12">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-5 w-5 sm:h-6 sm:w-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5v14"></path>
        </svg>
      </span>
      <div className="absolute right-4 top-4 text-muted-text">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-5 w-5 sm:h-6 sm:w-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 7h10v10"></path>
          <path d="M7 17 17 7"></path>
        </svg>
      </div>
      <div className="space-y-1">
        <h3 className="font-semibold text-main-text">Users</h3>
        <p className="text-sm font-medium text-muted-text">
          Manage user accounts and permissions.
        </p>
      </div>
    </div>
  );
};

export default UserCard;
