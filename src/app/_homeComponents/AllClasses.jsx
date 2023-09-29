import ClassCard from "@/components/ClassCard";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

const AllClasses = () => {
  return (
    <div>
      <SectionHeader title={"Our All Learning Courses"} />
      <div className="max-w-[1200px] grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
      </div>
    </div>
  );
};

export default AllClasses;
