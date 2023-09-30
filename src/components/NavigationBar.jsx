"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  Input,
  NavbarMenu,
} from "@nextui-org/react";
import logo from "/src/app/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSearchAlt2 } from "react-icons/bi";
import UserInfo from "./UserInfo";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const navMenuList = (
    <>
      <NavbarItem isActive={pathName === "/"}>
        <Link href="/">Home</Link>
      </NavbarItem>
      <NavbarItem isActive={pathName === "/all-class"}>
        <Link href="/all-class">All Course</Link>
      </NavbarItem>
      <NavbarItem isActive={pathName === "/dashboard/my-class"}>
        <Link href="/dashboard/my-class">My Class</Link>
      </NavbarItem>
    </>
  );
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="flex items-center"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarBrand className="flex items-center">
        <Image
          src={logo}
          alt="Logo"
          height={50}
          width={100}
          priority
          className="w-auto h-auto mb-3"
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 ">
        {navMenuList}
      </NavbarContent>
      <NavbarContent justify="end" className=" items-center">
        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            className="w-60 "
            placeholder="By Name , categories, instructors"
            size="sm"
            startContent={<BiSearchAlt2 />}
            type="search"
          />
        </NavbarContent>
        <UserInfo />
        <NavbarItem className="hidden">
          <Button color="success">
            <Link href="/auth/login">Login</Link>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>{navMenuList}</NavbarMenu>
    </Navbar>
  );
};

export default NavigationBar;
