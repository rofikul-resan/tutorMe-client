"use client";
import ClassButton from "./[classId]/ClassButton";
import { ScrollShadow } from "@nextui-org/react";

const CourseLayout = ({ children }) => {
  return (
    <div className=" py-14 md:w-10/12 mx-auto px-6">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Python Learning
          </h1>
          <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          <div>
            <h3 className="text-xl">Instructor : Rofikul Resan</h3>
            <p>
              Duration : <span className="font-semibold">6</span> month
            </p>
          </div>
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably havent
          heard of them man bun deep jianbing selfies heirloom prism food truck
          ugh squid celiac humblebrag.
        </p>
      </div>
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
