import React from "react";

const Dashboard = () => {
  return (
    <>
      {/* <!-- /* ------------------------- Wrapper/Table Scroller -------------------------  --> */}
      <div className=" custom_scroll_bar relative h-96 w-full max-w-6xl overflow-auto rounded-2xl border border-main-border bg-accent sm:h-[475px]">
        <table className="relative text-sm">
          {/* <!-- /* ------------------------------ Table Header ------------------------------  --> */}
          <thead className="sticky left-0 top-0 z-10 h-11 border-b bg-accent">
            <tr className="border-b border-main-border text-left">
              {/* <!-- header checkbox --> */}
              <th className="px-4 py-3 font-semibold">
                <div className="inline-flex items-center gap-2">
                  <label for="check-all" className="relative flex items-center">
                    <input
                      id="check-all"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-main-text transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary [&+span>svg]:text-primary-text"
                      type="checkbox"
                    />
                    <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                  </label>
                </div>
              </th>

              <th className="min-w-44 cursor-pointer px-4 py-3 font-semibold">
                <div className="flex items-center gap-2">
                  <p>Customer</p>
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
                    <path d="m7 15 5 5 5-5"></path>
                    <path d="m7 9 5-5 5 5"></path>
                  </svg>
                </div>
              </th>

              <th className="min-w-32 px-4 py-3 font-semibold">Date/Time</th>

              <th className="hidden w-full min-w-44 px-4 py-3 font-semibold sm:table-cell">
                Location
              </th>

              <th className="min-w-24 px-4 py-3 font-semibold">Status</th>

              <th className="min-w-14 px-4 py-3 font-semibold"></th>
            </tr>
          </thead>

          {/* <!-- /* -------------------------------- TableBody ------------------------------- */}
          <tbody className="divide-border divide-y">
            {/* <!-- ------------ Customer 1 ------------ --> */}
            <tr className="border-b border-main-border bg-surface text-left">
              <td className="px-4 py-2 align-middle">
                <div className="inline-flex items-center gap-2">
                  <label
                    for="checkbox-1"
                    className="relative flex items-center"
                  >
                    <input
                      id="checkbox-1"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-main-text transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary [&+span>svg]:text-primary-text"
                      type="checkbox"
                    />
                    <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                  </label>
                </div>
              </td>
              <td className="min-w-40 px-4 py-2 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
                    <img
                      alt="Aaliyah"
                      src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p>Aaliyah Hanson</p>
                    <p className="w-40 truncate text-xs text-muted-text">
                      aaliyah.hanson@gamil.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="min-w-32 px-4 py-2 align-middle">
                <div className="text-sm">
                  <p>Feb 17, 2024</p>
                  <p className="text-xs text-muted-text">08:48 AM</p>
                </div>
              </td>
              <td className="hidden w-full min-w-44 px-4 py-2 align-middle sm:table-cell">
                <p className="w-40 truncate">790 Eighth Street Philadelphia</p>
              </td>
              <td className="min-w-24 px-4 py-2 align-middle">
                <div className="flex items-center gap-2 text-xs text-muted-text">
                  <span className="block h-2 w-2 rounded-full bg-green-500 ring-2 ring-green-200"></span>
                  <p>Paid</p>
                </div>
              </td>
              <td className="min-w-14 px-4 py-2 align-middle">
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
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </td>
            </tr>

            {/* <!-- ------------ Customer 2 ------------ --> */}
            <tr className="border-b border-main-border bg-surface text-left">
              <td className="px-4 py-2 align-middle">
                <div className="inline-flex items-center gap-2">
                  <label
                    for="checkbox-2"
                    className="relative flex items-center"
                  >
                    <input
                      id="checkbox-2"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-main-text transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary [&+span>svg]:text-primary-text"
                      type="checkbox"
                    />
                    <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                  </label>
                </div>
              </td>
              <td className="min-w-40 px-4 py-2 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
                    <img
                      alt="Aaliyah"
                      src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <p>Aaliyah Martinez</p>
                    <p className="w-40 truncate text-xs text-muted-text">
                      aaliyah.martinez@gamil.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="min-w-32 px-4 py-2 align-middle">
                <div className="text-sm">
                  <p>Feb 17, 2024</p>
                  <p className="text-xs text-muted-text">08:48 AM</p>
                </div>
              </td>
              <td className="hidden w-full min-w-44 px-4 py-2 align-middle sm:table-cell">
                <p className="w-40 truncate">935 Fifth Street New York</p>
              </td>
              <td className="min-w-24 px-4 py-2 align-middle">
                <div className="flex items-center gap-2 text-xs text-muted-text">
                  <span className="block h-2 w-2 rounded-full bg-red-500 ring-2 ring-red-200"></span>
                  <p>Returned</p>
                </div>
              </td>
              <td className="min-w-14 px-4 py-2 align-middle">
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
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </td>
            </tr>

            {/* <!-- ------------ Customer 3 ------------ --> */}
            <tr className="border-b border-main-border bg-surface text-left">
              <td className="px-4 py-2 align-middle">
                <div className="inline-flex items-center gap-2">
                  <label
                    for="checkbox-3"
                    className="relative flex items-center"
                  >
                    <input
                      id="checkbox-3"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-main-text transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary [&+span>svg]:text-primary-text"
                      type="checkbox"
                    />
                    <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                  </label>
                </div>
              </td>
              <td className="min-w-40 px-4 py-2 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
                    <img
                      alt="Aaron"
                      src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <p>Aaron Cook</p>
                    <p className="w-40 truncate text-xs text-muted-text">
                      aaron.cook@gamil.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="min-w-32 px-4 py-2 align-middle">
                <div className="text-sm">
                  <p>Feb 17, 2024</p>
                  <p className="text-xs text-muted-text">08:48 AM</p>
                </div>
              </td>
              <td className="hidden w-full min-w-44 px-4 py-2 align-middle sm:table-cell">
                <p className="w-40 truncate">169 First Street Phoenix</p>
              </td>
              <td className="min-w-24 px-4 py-2 align-middle">
                <div className="flex items-center gap-2 text-xs text-muted-text">
                  <span className="block h-2 w-2 rounded-full bg-green-500 ring-2 ring-green-200"></span>
                  <p>Paid</p>
                </div>
              </td>
              <td className="min-w-14 px-4 py-2 align-middle">
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
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </td>
            </tr>

            {/* <!-- ------------ Customer 4 ------------ --> */}
            <tr className="border-b border-main-border bg-surface text-left">
              <td className="px-4 py-2 align-middle">
                <div className="inline-flex items-center gap-2">
                  <label
                    for="checkbox-4"
                    className="relative flex items-center"
                  >
                    <input
                      id="checkbox-4"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-main-text transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary [&+span>svg]:text-primary-text"
                      type="checkbox"
                    />
                    <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                  </label>
                </div>
              </td>
              <td className="min-w-40 px-4 py-2 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
                    <img
                      alt="Abigail"
                      src="https://images.unsplash.com/photo-1623582854588-d60de57fa33f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <p>Abigail Rivera</p>
                    <p className="w-40 truncate text-xs text-muted-text">
                      abigail.rivera@gamil.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="min-w-32 px-4 py-2 align-middle">
                <div className="text-sm">
                  <p>Feb 17, 2024</p>
                  <p className="text-xs text-muted-text">08:48 AM</p>
                </div>
              </td>
              <td className="hidden w-full min-w-44 px-4 py-2 align-middle sm:table-cell">
                <p className="w-40 truncate">996 Oak Street Chicago</p>
              </td>
              <td className="min-w-24 px-4 py-2 align-middle">
                <div className="flex items-center gap-2 text-xs text-muted-text">
                  <span className="block h-2 w-2 rounded-full bg-green-500 ring-2 ring-green-200"></span>
                  <p>Paid</p>
                </div>
              </td>
              <td className="min-w-14 px-4 py-2 align-middle">
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
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </td>
            </tr>

            {/* <!-- ------------ Customer 5 ------------ --> */}
            <tr className="border-b border-main-border bg-surface text-left">
              <td className="px-4 py-2 align-middle">
                <div className="inline-flex items-center gap-2">
                  <label
                    for="checkbox-5"
                    className="relative flex items-center"
                  >
                    <input
                      id="checkbox-5"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-main-text transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary [&+span>svg]:text-primary-text"
                      type="checkbox"
                    />
                    <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                  </label>
                </div>
              </td>
              <td className="min-w-40 px-4 py-2 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
                    <img
                      alt="Addison"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <p>Addison Wright</p>
                    <p className="w-40 truncate text-xs text-muted-text">
                      addison.wright@gamil.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="min-w-32 px-4 py-2 align-middle">
                <div className="text-sm">
                  <p>Feb 17, 2024</p>
                  <p className="text-xs text-muted-text">08:48 AM</p>
                </div>
              </td>
              <td className="hidden w-full min-w-44 px-4 py-2 align-middle sm:table-cell">
                <p className="w-40 truncate">568 Tenth Street San Francisco</p>
              </td>
              <td className="min-w-24 px-4 py-2 align-middle">
                <div className="flex items-center gap-2 text-xs text-muted-text">
                  <span className="block h-2 w-2 rounded-full bg-green-500 ring-2 ring-green-200"></span>
                  <p>Paid</p>
                </div>
              </td>
              <td className="min-w-14 px-4 py-2 align-middle">
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
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </td>
            </tr>

            {/* <!-- ------------ Customer 6 ------------ --> */}
            <tr className="border-b border-main-border bg-surface text-left">
              <td className="px-4 py-2 align-middle">
                <div className="inline-flex items-center gap-2">
                  <label
                    for="checkbox-6"
                    className="relative flex items-center"
                  >
                    <input
                      id="checkbox-6"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-main-text transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary [&+span>svg]:text-primary-text"
                      type="checkbox"
                    />
                    <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                  </label>
                </div>
              </td>
              <td className="min-w-40 px-4 py-2 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
                    <img
                      alt="Addison"
                      src="https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <p>Addison Ward</p>
                    <p className="w-40 truncate text-xs text-muted-text">
                      addison.ward@gamil.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="min-w-32 px-4 py-2 align-middle">
                <div className="text-sm">
                  <p>Feb 17, 2024</p>
                  <p className="text-xs text-muted-text">08:48 AM</p>
                </div>
              </td>
              <td className="hidden w-full min-w-44 px-4 py-2 align-middle sm:table-cell">
                <p className="w-40 truncate">1320 Fifth Street San Francisco</p>
              </td>
              <td className="min-w-24 px-4 py-2 align-middle">
                <div className="flex items-center gap-2 text-xs text-muted-text">
                  <span className="block h-2 w-2 rounded-full bg-green-500 ring-2 ring-green-200"></span>
                  <p>Paid</p>
                </div>
              </td>
              <td className="min-w-14 px-4 py-2 align-middle">
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
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </td>
            </tr>

            {/* <!-- ------------ Customer 7 ------------ --> */}
            <tr className="border-b border-main-border bg-surface text-left">
              <td className="px-4 py-2 align-middle">
                <div className="inline-flex items-center gap-2">
                  <label
                    for="checkbox-7"
                    className="relative flex items-center"
                  >
                    <input
                      id="checkbox-7"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-main-text transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary [&+span>svg]:text-primary-text"
                      type="checkbox"
                    />
                    <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                  </label>
                </div>
              </td>
              <td className="min-w-40 px-4 py-2 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
                    <img
                      alt="Adrian"
                      src="https://plus.unsplash.com/premium_photo-1689629870780-5d0e655383e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <p>Adrian Flores</p>
                    <p className="w-40 truncate text-xs text-muted-text">
                      adrian.flores@gamil.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="min-w-32 px-4 py-2 align-middle">
                <div className="text-sm">
                  <p>Feb 17, 2024</p>
                  <p className="text-xs text-muted-text">08:48 AM</p>
                </div>
              </td>
              <td className="hidden w-full min-w-44 px-4 py-2 align-middle sm:table-cell">
                <p className="w-40 truncate">1395 Madison Street New York</p>
              </td>
              <td className="min-w-24 px-4 py-2 align-middle">
                <div className="flex items-center gap-2 text-xs text-muted-text">
                  <span className="block h-2 w-2 rounded-full bg-yellow-500 ring-2 ring-yellow-200"></span>
                  <p>Pending</p>
                </div>
              </td>
              <td className="min-w-14 px-4 py-2 align-middle">
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
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </td>
            </tr>

            {/* <!-- ------------ Customer 8 ------------ --> */}
            <tr className="border-b border-main-border bg-surface text-left">
              <td className="px-4 py-2 align-middle">
                <div className="inline-flex items-center gap-2">
                  <label
                    for="checkbox-8"
                    className="relative flex items-center"
                  >
                    <input
                      id="checkbox-8"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-main-text transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary [&+span>svg]:text-primary-text"
                      type="checkbox"
                    />
                    <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                  </label>
                </div>
              </td>
              <td className="min-w-40 px-4 py-2 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
                    <img
                      alt="Alexander"
                      src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <p>Alexander Jones</p>
                    <p className="w-40 truncate text-xs text-muted-text">
                      alexander.jones@gamil.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="min-w-32 px-4 py-2 align-middle">
                <div className="text-sm">
                  <p>Feb 17, 2024</p>
                  <p className="text-xs text-muted-text">08:48 AM</p>
                </div>
              </td>
              <td className="hidden w-full min-w-44 px-4 py-2 align-middle sm:table-cell">
                <p className="w-40 truncate">664 Maple Street Indianapolis</p>
              </td>
              <td className="min-w-24 px-4 py-2 align-middle">
                <div className="flex items-center gap-2 text-xs text-muted-text">
                  <span className="block h-2 w-2 rounded-full bg-red-500 ring-2 ring-red-200"></span>
                  <p>Returned</p>
                </div>
              </td>
              <td className="min-w-14 px-4 py-2 align-middle">
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
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </td>
            </tr>

            {/* <!-- ------------ Customer 9 ------------ --> */}
            <tr className="border-b border-main-border bg-surface text-left">
              <td className="px-4 py-2 align-middle">
                <div className="inline-flex items-center gap-2">
                  <label
                    for="checkbox-9"
                    className="relative flex items-center"
                  >
                    <input
                      id="checkbox-9"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-main-text transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary [&+span>svg]:text-primary-text"
                      type="checkbox"
                    />
                    <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                  </label>
                </div>
              </td>
              <td className="min-w-40 px-4 py-2 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
                    <img
                      alt="Alexander"
                      src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <p>Alexander Hernandez</p>
                    <p className="w-40 truncate text-xs text-muted-text">
                      alexander.hernandez@gamil.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="min-w-32 px-4 py-2 align-middle">
                <div className="text-sm">
                  <p>Feb 17, 2024</p>
                  <p className="text-xs text-muted-text">08:48 AM</p>
                </div>
              </td>
              <td className="hidden w-full min-w-44 px-4 py-2 align-middle sm:table-cell">
                <p className="w-40 truncate">329 Second Street Dallas</p>
              </td>
              <td className="min-w-24 px-4 py-2 align-middle">
                <div className="flex items-center gap-2 text-xs text-muted-text">
                  <span className="block h-2 w-2 rounded-full bg-green-500 ring-2 ring-green-200"></span>
                  <p>Paid</p>
                </div>
              </td>
              <td className="min-w-14 px-4 py-2 align-middle">
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
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
