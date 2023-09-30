import ClassCard from "@/components/ClassCard";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

const AllClass = () => {
  return (
    <section className="px-10 my-14 ">
      <SectionHeader title={"ALL Course in Our platform"} />
      <div className="max-w-[1200px] grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
      </div>
    </section>
  );
};

export default AllClass;
