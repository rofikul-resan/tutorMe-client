"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowCircle, BiSearchAlt2 } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="relative">
      <div>
        <Image
          src={"/home-language-academic-hero-bg.jpg"}
          height={400}
          width={1200}
          priority
          alt="banner"
          className="w-full h-[600px]"
        />
      </div>
      <div className="absolute inset-0 z-10 flex justify-center items-center text-white flex-col">
        <div className="text-center space-y-3">
          <h1 className="font-black text-6xl">Innovative</h1>
          <h2 className="text-6xl font-semibold">Leaning Academic</h2>
          <p className="text-xl ">
            Learning New Languages, Connect To The World
          </p>
        </div>
        <div className="mt-10">
          <Button
            color="primary"
            variant="shadow"
            size="lg"
            className="px-10 text-xl mr-6 py-7"
            endContent={<BiRightArrowCircle />}
          >
            <Link href={"/auth/sing-up"}>Sing Up Now</Link>
          </Button>
          <Button
            color="success"
            variant="shadow"
            size="lg"
            className="px-10 text-xl py-7"
            endContent={<BiSearchAlt2 />}
          >
            Find Course
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
