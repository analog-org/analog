import MainFooter from "./Footer";
import NavBar from "../../Navbar";
import SideBar from "./Sidebar";
import { ReactNode } from "react";
import DashNavbar from "./DashNav";
import path from "node:path";
import { authOptions } from "../../../src/pages/api/auth/[...nextauth]";
import { useSession, signIn, signOut } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import fs, { read, readdirSync } from "fs";
import perms from "../../../src/utils/bitfield";

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

  const session = await getServerSession(authOptions);

  const guildFetch = await fetch(
    `https://discord.com/api/v10/users/@me/guilds`,
    {
      headers: {
        // @ts-ignore
        Authorization: `Bearer ${session?.accessToken}`,
      },
    }
  );
  const guilds = await guildFetch.json();
  
  const botGuildsFetch = await fetch(
    `https://discord.com/api/v10/users/@me/guilds`,
    {
      headers: {
        // @ts-ignore
        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
      },
    }
  );
  const botGuilds = await botGuildsFetch.json();

  guilds.map((gld: guild) => {
    const serverPerms = perms(gld.permissions);
    if (serverPerms.includes("MANAGE_GUILD")) {

    }
  });

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
