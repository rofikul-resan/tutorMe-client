import React from "react";

const SectionHeader = ({ title }) => {
  return (
    <div className=" text-center  my-8">
      <h1 className="text-5xl font-semibold mb-4">{title}</h1>
      <p> Show all Featured courses and News for your students Banner</p>
    </div>
  );
};

export default SectionHeader;
