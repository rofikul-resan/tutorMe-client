"use client";
import { Button } from "@nextui-org/react";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";

const ClassPlayer = ({ params }) => {
  const classData = params.classId;
  return (
    <div>
      <div className="rounded-md overflow-hidden">
        <iframe
          className=" w-full h-96 rounded-md "
          src="https://www.youtube.com/embed/VclaxHIXrKw?si=cqRoTgOoS4lL364Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="mt-4 mb-2">
        <h1 className="text-3xl font-semibold capitalize">REST api Learning</h1>
        <p className="text-sm font-semibold">by: Rofikul Resan</p>
      </div>
      <div className="flex gap-6">
        <Button
          color="primary"
          variant="solid"
          radius="sm"
          className="w-36 py-4"
          startContent={<BiSkipPrevious className="text-xl" />}
        >
          Previous
        </Button>
        <Button
          color="primary"
          variant="solid"
          radius="sm"
          className="w-36 py-4"
          endContent={<BiSkipNext className="text-xl" />}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ClassPlayer;
