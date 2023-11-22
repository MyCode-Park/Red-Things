"use cleint";
import { UserButton } from "@clerk/nextjs";
import React from "react";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-200 h-screen lg:px-20 px-5">
      <div className="bg-white flex justify-between items-center shadow p-3">
        <h1 className="text-gray-600 font-semibold text-2xl">Red Things</h1>

        <div className="flex gap-5">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <div className="px-3">{children}</div>
    </div>
  );
}

export default LayoutProvider;
