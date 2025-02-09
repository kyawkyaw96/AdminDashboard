import React from "react";

const TabBar = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-accent p-1 sm:flex-row">
        <button className="inline-flex h-10 items-center justify-center gap-1 rounded-md bg-surface px-3 py-2 text-sm text-main-text drop-shadow-sm hover:bg-surface hover:text-main-text disabled:bg-muted/75 disabled:text-muted-text/75">
          Tab One
        </button>

        <button className="inline-flex h-10 items-center justify-center gap-1 rounded-md bg-transparent px-3 py-2 text-sm text-muted-text hover:bg-surface hover:text-main-text disabled:text-muted-text/75">
          Tab Two
        </button>

        <button className="inline-flex h-10 items-center justify-center gap-1 rounded-md bg-transparent px-3 py-2 text-sm text-muted-text hover:bg-surface hover:text-main-text disabled:text-muted-text/75">
          Tab Three
        </button>

        <button className="inline-flex h-10 items-center justify-center gap-1 rounded-md bg-transparent px-3 py-2 text-sm text-muted-text hover:bg-surface hover:text-main-text disabled:text-muted-text/75">
          Tab Four
        </button>

        <button className="inline-flex h-10 items-center justify-center gap-1 rounded-md bg-transparent px-3 py-2 text-sm text-muted-text hover:bg-surface hover:text-main-text disabled:text-muted-text/75">
          Tab Five
        </button>
      </div>
    </>
  );
};

export default TabBar;
