import { NextPage } from "next";
import path from "node:path";
import { ReactNode } from "react";
import fs, { read, readdirSync } from "fs";



export default async function Home({ params }) {
  const filelist = path.join(process.cwd(), "app/dashboard/(Guild)");
  const componentFiles = fs.readdirSync(filelist).filter((file) => file.endsWith(".tsx"));
  const components = []

  for (const file of componentFiles) {
    const component = path.join(filelist, file);
    components.push(component.toString());
  }
  console.log(components)

  const { guildid } = params;

  return <div className="text-white">Guild Id: {guildid}{filelist}</div>;
}
