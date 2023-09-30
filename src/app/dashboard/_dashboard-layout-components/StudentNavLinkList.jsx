import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const StudentNavLinkList = () => {
  const pathName = usePathname();

  return (
    <>
      <NavbarItem isActive={pathName === "/"}>
        <Link href="/">Home</Link>
      </NavbarItem>
      <NavbarItem isActive={pathName === "/all-class"}>
        <Link href="/all-class">All Class</Link>
      </NavbarItem>
      <NavbarItem isActive={pathName === "/dashboard/my-class"}>
        <Link href="/dashboard/my-class">My Class</Link>
      </NavbarItem>
    </>
  );
};

export default StudentNavLinkList;
