"use client";
import Link from "next/link";
import React from "react";

const ClassButton = ({ active }) => {
  return (
    <div
      className={`px-2 py-1 border-b rounded-md mb-3 w-full  ${
        active && "bg-[#01548c] text-white"
      } shadow-sm hover:scale-[1.0] active:scale-[0.97] `}
    >
      <Link href={"#"}>
        <h2 className="capitalize text-xl font-semibold">learn codding</h2>
        <p className="text-sm">lesson NO : 1</p>
      </Link>
    </div>
  );
};

export default ClassButton;
