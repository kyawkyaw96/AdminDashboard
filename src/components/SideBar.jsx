import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <aside className="fixed h-screen left-0 z-40 w-52 space-y-2 overflow-y-auto border-r border-main-border bg-surface px-3 pb-4 pt-2 shadow-sm ease-out">
        {/* <!-- /* --------------------------------- Header --------------------------------- */}

        {/* <!-- /* --------------------------------- Content -------------------------------- */}
        <ul className="w-full list-none space-y-1 p-1">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm ${
                isActive ? "bg-primary text-primary-text" : "bg-transparent "
              } hover:bg-primary hover:text-primary-text`
            }
          >
            <span className="flex size-5 flex-shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </span>
            <div className="flex-1 text-left">
              {" "}
              <p className="flex-1 text-sm font-medium">Dashboard</p>
            </div>
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm ${
                isActive ? "bg-primary text-primary-text" : "bg-transparent "
              } hover:bg-primary hover:text-primary-text`
            }
          >
            <span className="flex size-5 flex-shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Search</p>
            </div>
          </NavLink>
          <NavLink
            to="/insights"
            className={({ isActive }) =>
              `inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm ${
                isActive ? "bg-primary text-primary-text" : "bg-transparent "
              } hover:bg-primary hover:text-primary-text`
            }
          >
            <span className="flex size-5 flex-shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="12" x2="12" y1="20" y2="10"></line>
                <line x1="18" x2="18" y1="20" y2="4"></line>
                <line x1="6" x2="6" y1="20" y2="16"></line>
              </svg>
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Insights</p>
            </div>
          </NavLink>
          <NavLink
            to="/documents"
            className={({ isActive }) =>
              `inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm ${
                isActive ? "bg-primary text-primary-text" : "bg-transparent "
              } hover:bg-primary hover:text-primary-text`
            }
          >
            <span className="flex size-5 flex-shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M8 13h2"></path>
                <path d="M8 17h2"></path>
                <path d="M14 13h2"></path>
                <path d="M14 17h2"></path>
              </svg>
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Documents</p>
            </div>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm ${
                isActive ? "bg-primary text-primary-text" : "bg-transparent "
              } hover:bg-primary hover:text-primary-text`
            }
          >
            <span className="flex size-5 flex-shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Settings</p>
            </div>
          </NavLink>
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              `inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm ${
                isActive ? "bg-primary text-primary-text" : "bg-transparent "
              } hover:bg-primary hover:text-primary-text`
            }
          >
            <span className="flex size-5 flex-shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Messages</p>
            </div>
          </NavLink>
          <div>
            <button className="group inline-flex h-10 w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-text">
              <span className="flex size-5 flex-shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
              </span>
              <div className="flex-1 text-left font-medium">Ecommerce</div>
              <span>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-4 w-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </span>
            </button>
          </div>
          <a
            href="#"
            className="inline-flex h-10 w-full cursor-default items-center justify-center gap-2 rounded-md px-3 py-2 text-sm text-muted-text/75"
          >
            <span className="flex size-5 flex-shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path>
                <circle cx="12" cy="9" r="2.5"></circle>
              </svg>
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Location</p>
            </div>
          </a>
        </ul>
      </aside>
    </div>
  );
};

export default SideBar;
