import DashNavbar from "../components/DashNav";
import MainFooter from "../components/Footer";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-zinc-800">
      <DashNavbar />
      <div className="flex">
        <SideBar />
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;