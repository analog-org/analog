import MainFooter from "./Footer";
import NavBar from "../../Navbar";
import SideBar from "./Sidebar";
import { ReactNode } from "react";
import DashNavbar from "./DashNav";
import path from "node:path";
import fs, { read, readdirSync } from "fs";

const filelist = path.join(process.cwd(), "app/dashboard/[guildid]");
const componentFiles = fs
  .readdirSync(filelist)
  .filter((file) => !file.endsWith(".tsx"));
const components = [];
for (const file of componentFiles) {
  components.push(file);
}

export default async function DashboardLayout({ children, params }) {
  const { guildid } = params;

  return (
    <div className="bg-zinc-800">
      <DashNavbar />
      <div className="flex">
        <SideBar pages={components} id={guildid} />
        <div className="flex-grow p-6">{children}</div>
      </div>
    </div>
  );
}
