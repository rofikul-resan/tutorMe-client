"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineWechat } from "react-icons/ai";

const InstructorCard = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <div>
      <Card isFooterBlurred radius="lg" className="border-none">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="font-semibold leading-none text-default-600">
                Zoey Lang
              </h4>
              <h5 className="text-small tracking-tight ">@zoeylang</h5>
              <div className=" flex text-black/70">
                <div className="flex gap-1 mr-14">
                  <p className="font-semibold  text-small">4</p>
                  <p className="  text-small">Course</p>
                </div>
                <div className="flex gap-1 ">
                  <p className="font-semibold  text-small">97</p>
                  <p className=" text-small">Followers</p>
                </div>
              </div>
            </div>
          </div>
          <Button
            className={
              isFollowed
                ? "bg-transparent text-foreground border-default-200"
                : ""
            }
            color="primary"
            radius="full"
            size="sm"
            variant={isFollowed ? "bordered" : "solid"}
            onPress={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </Button>
        </CardHeader>

        <Image
          alt="Woman listing to music"
          className="object-cover w-full h-full"
          height={400}
          src="/blog-12.jpg"
          width={400}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-4 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className=" text-black/80">Available soon.</p>
          <Button
            color="primary"
            variant="shadow"
            size="sm"
            endContent={<AiOutlineWechat />}
          >
            Live Chat
          </Button>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="shadow"
            color="default"
            size="sm"
          >
            More Class
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default InstructorCard;
