"use client";
import UserInfo from "@/components/UserInfo";
import {
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import StudentNavLinkList from "./StudentNavLinkList";
import logo from "/src/app/logo.png";

const DashboardNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <StudentNavLinkList />
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
      <NavbarMenu>
        <StudentNavLinkList />
      </NavbarMenu>
    </Navbar>
  );
};

export default DashboardNav;
