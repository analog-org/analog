import { NextPage } from "next";
import path from "node:path";
import { ReactNode } from "react";
import fs, { read, readdirSync } from "fs";



export default async function Home({ params }) {
  

  const { guildid } = params;

  return <div className="text-white">Hello</div>;
}
