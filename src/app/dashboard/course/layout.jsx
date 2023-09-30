"use client";
import ClassButton from "./[classId]/ClassButton";
import { ScrollShadow } from "@nextui-org/react";

const CourseLayout = ({ children }) => {
  return (
    <div className=" py-14 md:w-10/12 mx-auto px-6">
      <div className="grid class-player-layout gap-10 ">
        <div>{children}</div>
        <div>
          <div className="border border-black/70 rounded-md shadow-sm shadow-black/60 overflow-hidden h-[500px]">
            <div className="class-list-bg shadow-md shadow-black/60 px-6 py-2">
              <h2 className="text-2xl font-semibold">Python Learning</h2>
              <p className="text-sm font-semibold">Total Class : 10</p>
            </div>
            <ScrollShadow
              hideScrollBar
              className="px-3 py-3 overflow-scroll h-full "
            >
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
              <ClassButton />
            </ScrollShadow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLayout;
