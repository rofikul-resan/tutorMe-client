"use client";
import { Button, Card, CardBody, Progress, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const EnrollCrouseCard = () => {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => {
          console.log("click");
          router.push("/dashboard/course/class");
        }}
      >
        <Card
          isBlurred
          className="border-none bg-black text-white dark:bg-default-100/50 max-w-[610px] hover:cursor-pointer hover:scale-105 active:scale-90 transition-transform ease-in-out duration-200"
          shadow="md"
        >
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-6 md:col-span-4">
                <Image
                  alt="Album cover"
                  className="object-cover rounded-md"
                  height={300}
                  src="/class1.jpg"
                  width={300}
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h3 className="font-semibold text-2xl capitalize ">
                      python Learning
                    </h3>
                    <p className="text-small "> Category : Programming</p>
                    <p className="text-small "> Total : 12 Student</p>
                  </div>
                  <div>
                    <Tooltip
                      content="More info"
                      placement="bottom-end"
                      size="sm"
                    >
                      <Button isIconOnly variant="light">
                        <BsThreeDotsVertical color="#fff" />
                      </Button>
                    </Tooltip>
                  </div>
                </div>

                <div className="flex flex-col mt-3 gap-1 ">
                  <Progress
                    aria-label=" class Loading..."
                    classNames={{
                      indicator: "bg-violet-700 dark:bg-white",
                      track: "bg-orange-500 h-6",
                      showValueLabel: " font-semibold ml-3",
                    }}
                    showValueLabel
                    color="default"
                    size="sm"
                    value={33}
                  />
                  <div className="flex justify-between ">
                    <p className="text-small"> Class: 6 Complete</p>
                    <p className="text-small ">Total : 18 Class</p>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default EnrollCrouseCard;
