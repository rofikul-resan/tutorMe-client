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
  Tooltip,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import StudentNavLinkList from "./StudentNavLinkList";
import logo from "/src/app/logo.png";
import { AiOutlineMessage } from "react-icons/ai";

const DashboardNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-1 py-4 w-fit bg-gray-200  h-full">
      <Tooltip title="chat" hidden>
        <Button
          color="primary"
          variant="ghost"
          className="border-0 px-1 min-w-fit"
        >
          <AiOutlineMessage className="text-xl" />
        </Button>
      </Tooltip>
    </div>
  );
};

export default DashboardNav;
