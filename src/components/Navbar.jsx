import React from "react";
import { NavLink, useParams } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-center border-b bg-surface">
        <nav className="flex w-full items-center justify-between px-3 py-2">
          <div className="flex items-center gap-4">
            <button className="inline-flex h-8 w-8 items-center justify-center gap-1 rounded-md border text-sm hover:bg-accent hover:text-accent-text sm:h-10 sm:w-10">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                <path d="M9 3v18"></path>
                <path d="m14 9 3 3-3 3"></path>
              </svg>
            </button>
            <h3 className="text-sm font-semibold text-main-text sm:text-base">
              MijnUI
            </h3>
          </div>
          {/* Start TabBar section  */}
          <div className="flex flex-col items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-accent p-1 sm:flex-row">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "bg-surface" : "")}
            >
              <button
                className={`inline-flex h-10 items-center justify-center active:bg-surface bg-transparent gap-1 rounded-md  px-3 py-2 text-sm text-main-text drop-shadow-sm hover:bg-surface hover:text-main-text  `}
              >
                Home
              </button>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "bg-surface" : "")}
            >
              <button
                className={`inline-flex h-10 items-center justify-center active:bg-surface bg-transparent gap-1 rounded-md  px-3 py-2 text-sm text-main-text drop-shadow-sm hover:bg-surface hover:text-main-text  `}
              >
                About
              </button>
            </NavLink>
            <NavLink
              to="/admin"
              className={({ isActive }) => (isActive ? "bg-surface" : "")}
            >
              <button
                className={`inline-flex h-10 items-center justify-center active:bg-surface bg-transparent gap-1 rounded-md  px-3 py-2 text-sm text-main-text drop-shadow-sm hover:bg-surface hover:text-main-text  `}
              >
                Admin
              </button>
            </NavLink>
          </div>
          {/* End TabBar section */}
          <div className="flex items-center gap-2">
            <div className="relative hidden w-80 xl:block">
              <div className="absolute left-2 top-1/2 -translate-y-1/2 transform">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-muted-text"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
              <input
                className="focus-visible:border-input f peer flex h-9 w-full rounded-md border bg-transparent px-3 py-2 pl-8 pr-8 text-sm outline-none placeholder:text-muted-text autofill:shadow-[inset_0_0_0px_1000px_hsl(var(--surface))] autofill:[-webkit-text-fill-color:hsl(hsl(--text))_!important] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                id="nav-input"
                placeholder="Username..."
              />
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 transform">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-muted-text"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center">
              <button className="inline-flex h-10 w-10 items-center justify-center gap-1 rounded-full text-sm transition-colors duration-150 hover:bg-accent hover:text-accent-text active:brightness-95">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.97 8.265a1.45 1.45 0 0 0-.487.57.75.75 0 0 1-1.341-.67c.2-.402.513-.826.997-1.148C10.627 6.69 11.244 6.5 12 6.5c.658 0 1.369.195 1.934.619a2.45 2.45 0 0 1 1.004 2.006c0 1.033-.513 1.72-1.027 2.215-.19.183-.399.358-.579.508l-.147.123a4.329 4.329 0 0 0-.435.409v1.37a.75.75 0 1 1-1.5 0v-1.473c0-.237.067-.504.247-.736.22-.28.486-.517.718-.714l.183-.153.001-.001c.172-.143.324-.27.47-.412.368-.355.569-.676.569-1.136a.953.953 0 0 0-.404-.806C12.766 8.118 12.384 8 12 8c-.494 0-.814.121-1.03.265ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                  <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"></path>
                </svg>
              </button>
              <button className="inline-flex h-10 w-10 items-center justify-center gap-1 rounded-full text-sm transition-colors duration-150 hover:bg-accent hover:text-accent-text active:brightness-95">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 0 1-128 0v-16"
                  ></path>
                </svg>
              </button>
              {/* <button className="inline-flex h-10 w-10 items-center justify-center rounded-full text-xs transition-colors duration-150 hover:bg-accent hover:text-accent-text active:brightness-95">
                <p>EN</p>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="14"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button> */}
            </div>

            <button
              id="dropdownUserAvatarButton"
              data-dropdown-toggle="dropdownAvatar"
              class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              type="button"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
              />
            </button>

            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdownAvatar"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>Bonnie Green</div>
                <div class="font-medium truncate">name@flowbite.com</div>
              </div>
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownUserAvatarButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
              </ul>
              <div class="py-2">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
