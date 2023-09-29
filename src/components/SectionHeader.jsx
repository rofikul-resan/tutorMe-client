import React from "react";

const SectionHeader = ({ title }) => {
  return (
    <div className=" text-center  mb-8 mt-20">
      <h1 className="text-4xl font-semibold mb-2">{title}</h1>
      <p> Show all Featured courses and News for your students Banner</p>
    </div>
  );
};

export default SectionHeader;
