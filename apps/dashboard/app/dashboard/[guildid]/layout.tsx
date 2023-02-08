import MainFooter from "./Footer";
import NavBar from "../../Navbar";
import SideBar from "./Sidebar";
import { ReactNode } from "react";
import DashNavbar from "./DashNav";

type LayoutProps = {
  children: React.ReactNode;
}

export default function DashboardLayout ({ children }: LayoutProps){
  return (
    <div className="bg-zinc-800">
      <DashNavbar />
      <div className="flex">
        <SideBar />
        <div className="flex-grow p-6">{children}</div>
      </div>
    </div>
  );
};
