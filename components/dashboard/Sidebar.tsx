import Card from "@/components/shared/Card";
import Image from "next/image";

import SidebarLink from "./SidebarLink";

type Icon = "Grid" | "Calendar" | "User" | "Settings";
export interface ILink {
  label: string;
  icon: Icon;
  link: string;
}

const links: ILink[] = [
  { label: "Home", icon: "Grid", link: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      <div className="w-full flex justify-center items-center">
        <h1 className="font-semibold">Logo</h1>
      </div>
      {links.map((link) => (
        <SidebarLink link={link} />
      ))}
    </Card>
  );
};

export default Sidebar;
