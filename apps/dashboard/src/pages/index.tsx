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

const index: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <NavBar />
        <header>
          <h1>fortnite</h1>
        </header>
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
};

export default index;
