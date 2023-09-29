import InstructorCard from "@/components/InstructorCard";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

const InstructorSection = () => {
  return (
    <div>
      <SectionHeader title={"Our Word Famous Instructor"} />
      <div className="max-w-[1200px] grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
      </div>
    </div>
  );
};

export default InstructorSection;
