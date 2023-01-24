import Head from "next/head";
import Image from "next/image";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import { useSession, signIn, signOut } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import perms from "../utils/bitfield";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import GuildContainer from "../components/Guild/GuildContainer";
import GuildCard from "../components/Guild/GuildCard";
import NavBar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const index: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <header className="">
        <NavBar />
      </header>
      <div
        className="flex flex-row overflow-hidden relative"
        style={{
          background:
            "radial-gradient(32.01% 69.93% at 76.04% 84.59%, #EBA7DA 0%, #5966F3 100%)",
        }}
      >
        <h1>fortite</h1>
        <div className="xl:transform -translate-x-[-113%] ">
          <Image
            src={
              "https://media.discordapp.net/attachments/1057358030603300916/1066035663297859585/image.png?width=1275&height=850"
            }
            layout="intrinsic"
            height={"787px"}
            width={"1181px"}
            className=""
            alt="Background robot image"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
