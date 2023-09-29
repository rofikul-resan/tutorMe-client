"use client";
import { shortNameAvatar } from "@/utility/utils";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ClassCard = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <div>
      <Card isFooterBlurred className="w-full">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              color="primary"
              radius="full"
              size="md"
              name={shortNameAvatar("Rofikul Resan")}
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Zoey Lang
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                @zoeylang
              </h5>
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
            onClick={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </Button>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small mb-3">
          <h1 className="text-2xl font-semibold"> Learn Python</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            eos voluptates alias? Vero suscipit consectetur nostrum quisquam
            obcaecati minima impedit perferendis dolor{" "}
          </p>
          <div className="flex justify-between my-4">
            <p>
              <span className="font-semibold">Total Enroll :</span> 20
            </p>
            <p>
              <span className="font-semibold">Course Category :</span>{" "}
              Programming
            </p>
          </div>
          <div className="flex gap-3 text-xl">
            <Rating
              initialRating={4.5}
              emptySymbol={
                <AiOutlineStar className="text-orange-600 text-xl" />
              }
              fullSymbol={<AiFillStar className="text-orange-600 text-xl" />}
            />
            <span className="ml-3">4.5</span>
          </div>
        </CardBody>
        <Image
          alt="Woman listing to music"
          className="object-cover h-full w-full"
          height={300}
          src="/class1.jpg"
          width={300}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-1 py-4 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 bg-black/60">
          <p className="text-tiny text-white/80">Available Now.</p>
          <Button
            className="text-tiny text-white bg-violet-600"
            variant="flat"
            color="primary"
            radius="lg"
            size="sm"
          >
            Enroll Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ClassCard;
