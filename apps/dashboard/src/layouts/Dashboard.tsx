import DashNavbar from "../components/Dashboard/DashNav";
import MainFooter from "../../app/Footer";
import NavBar from "../../app/Navbar";
import SideBar from "../components/Dashboard/Sidebar";
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
        <div className="flex-grow p-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;